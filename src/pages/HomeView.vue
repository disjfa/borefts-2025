<script setup>
import { ref, computed, onMounted } from 'vue'
import { useBeerStore } from '@/stores/beer'
import BeerList from '@/components/BeerList.vue'

const beerStore = useBeerStore()
const searchQuery = ref('')
const showLikedOnly = ref(false)

const filteredBeers = computed(() => {
  const query = searchQuery.value.toLowerCase()

  return beerStore.beers.filter((beer) => {
    // First apply liked filter if enabled
    if (showLikedOnly.value && !beerStore.isLiked(beer.slug)) {
      return false
    }

    // Then apply search query if present
    if (!query) return true

    return (
      beer.name.toLowerCase().includes(query) ||
      beer.brewery.toLowerCase().includes(query) ||
      beer.type.toLowerCase().includes(query)
    )
  })
})

onMounted(async () => {
  await beerStore.fetchBeers()
})
</script>
<template>
  <div class="beers">
    <div class="sticky-top bg-body-tertiary shadow">
      <div class="container">
        <div class="py-2">
          <div class="input-group">
            <input
              type="text"
              class="form-control"
              v-model="searchQuery"
              placeholder="Search beers by name, brewery or type..."
            />
            <span class="input-group-text">
              <font-awesome-icon :icon="['fas', 'search']" />
            </span>
          </div>
        </div>
      </div>
    </div>

    <BeerList :filtered-beers="filteredBeers" />
  </div>
</template>
<script setup lang="ts"></script>
