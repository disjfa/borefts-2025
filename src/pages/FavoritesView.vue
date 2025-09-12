<script setup>
import { computed, onMounted } from 'vue'
import { useBeerStore } from '@/stores/beer'
import BeerList from '@/components/BeerList.vue'
import { useHead } from '@unhead/vue'

useHead({
  title: 'Favorites',
})

const beerStore = useBeerStore()

const filteredBeers = computed(() => {
  return beerStore.beers.filter((beer) => {
    // First apply liked filter if enabled
    if (!beerStore.isLiked(beer.slug)) {
      return false
    }

    return true
  })
})

onMounted(async () => {
  await beerStore.fetchBeers()
})
</script>
<template>
  <BeerList :filtered-beers="filteredBeers" />
</template>
