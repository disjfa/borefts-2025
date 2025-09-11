<script setup>
import { computed, onMounted } from 'vue'
import { useBeerStore } from '@/stores/beer'
import BeerList from '@/components/BeerList.vue'

const beerStore = useBeerStore()

const filteredBeers = computed(() => {
  return beerStore.beers.filter((beer) => {
    // First apply liked filter if enabled
    if (beerStore.isDrank(beer.slug)) {
      return false
    }
    if (beerStore.isTodo(beer.slug)) {
      return true
    }

    return false
  })
})

onMounted(async () => {
  await beerStore.fetchBeers()
})
</script>
<template>
  <BeerList :filtered-beers="filteredBeers" />
</template>
