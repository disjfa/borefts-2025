import { ref } from 'vue'
import { defineStore } from 'pinia'
import { usePostHog } from '@/composables/usePostHog'

const { posthog } = usePostHog()

export const useBeerStore = defineStore('beer', () => {
  const beers = ref([])
  const isLoading = ref(false)
  const error = ref(null)
  const likes = ref(JSON.parse(localStorage.getItem('beerLikes') || '[]'))
  const todos = ref(JSON.parse(localStorage.getItem('beerTodos') || '[]'))
  const drank = ref(JSON.parse(localStorage.getItem('beerDrank') || '[]'))

  function toggleLike(beerSlug) {
    const index = likes.value.indexOf(beerSlug)
    if (index === -1) {
      posthog.capture('beer-like', { beer: beerSlug })
      likes.value.push(beerSlug)
    } else {
      posthog.capture('beer-un-like', { beer: beerSlug })
      likes.value.splice(index, 1)
    }
    localStorage.setItem('beerLikes', JSON.stringify(likes.value))
  }

  function toggleTodo(beerSlug) {
    const index = todos.value.indexOf(beerSlug)
    if (index === -1) {
      posthog.capture('beer-todo', { beer: beerSlug })
      todos.value.push(beerSlug)
    } else {
      posthog.capture('beer-un-todo', { beer: beerSlug })
      todos.value.splice(index, 1)
    }
    localStorage.setItem('beerTodos', JSON.stringify(todos.value))
  }

  function toggleDrank(beerSlug) {
    const index = drank.value.indexOf(beerSlug)
    if (index === -1) {
      posthog.capture('beer-drank', { beer: beerSlug })
      drank.value.push(beerSlug)
    } else {
      posthog.capture('beer-un-drank', { beer: beerSlug })
      drank.value.splice(index, 1)
    }
    localStorage.setItem('beerDrank', JSON.stringify(todos.value))
  }

  function isLiked(beerSlug) {
    return likes.value.includes(beerSlug)
  }

  function isTodo(beerSlug) {
    return todos.value.includes(beerSlug)
  }

  function isDrank(beerSlug) {
    return drank.value.includes(beerSlug)
  }

  function breweries() {
    return [
      ...new Set(
        beers.value
          .map((beer) => ({
            name: beer.brewery,
            slug: beer.brewery_slug,
          }))
          .sort((a, b) => a.name.localeCompare(b.name))
          .map(JSON.stringify),
      ),
    ].map(JSON.parse)
  }

  async function fetchBeers() {
    isLoading.value = true
    error.value = null

    try {
      const response = await fetch(import.meta.env.BASE_URL + '/beer.json')
      if (!response.ok) {
        throw new Error('Failed to fetch beers')
      }
      beers.value = await response.json()
    } catch (e) {
      error.value = e.message
      console.error('Error loading beers:', e)
    } finally {
      isLoading.value = false
    }
  }

  return {
    beers,
    isLoading,
    error,
    likes,
    todos,
    drank,
    fetchBeers,
    toggleLike,
    toggleTodo,
    toggleDrank,
    isLiked,
    isTodo,
    isDrank,
    breweries,
  }
})
