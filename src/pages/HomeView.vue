<script setup>
import { ref, computed, onMounted } from 'vue'
import { useBeerStore } from '@/stores/beer'
import BeerList from '@/components/BeerList.vue'

const beerStore = useBeerStore()
const searchQuery = ref('')
const sort = ref('')
const brewery = ref('')

const filteredBeers = computed(() => {
  const query = searchQuery.value.toLowerCase()

  return beerStore.beers
    .filter((beer) => {
      if (brewery.value && brewery.value !== beer.brewery_slug) {
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
    .sort((a, b) => {
      if (sort.value === 'a-z') {
        return a.name.localeCompare(b.name)
      }
      if (sort.value === 'z-a') {
        return b.name.localeCompare(a.name)
      }
      if (sort.value === 'rating') {
        return b.rating - a.rating
      }
      if (sort.value === 'abv-down') {
        return b.abv - a.abv
      }
      if (sort.value === 'abv-up') {
        return a.abv - b.abv
      }
      return
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
            <span class="input-group-text">
              <font-awesome-icon :icon="['fas', 'search']" />
            </span>
            <input
              type="text"
              class="form-control"
              v-model="searchQuery"
              placeholder="Search beers by name, brewery or type..."
              style="flex-grow: 5"
            />
            <select v-model="brewery" class="form-select">
              <option selected value="">- brewery -</option>
              <option
                v-for="brewery in beerStore.breweries()"
                :key="brewery.slug"
                :value="brewery.slug"
              >
                {{ brewery.name }}
              </option>
            </select>
            <select v-model="sort" class="form-select">
              <option selected value="">- filter -</option>
              <option value="a-z">a-z</option>
              <option value="z-a">z-a</option>
              <option value="rating">rating</option>
              <option value="abv-down">%</option>
              <option value="abv-up">0%</option>
            </select>
          </div>
        </div>
      </div>
    </div>

    <div class="container d-flex gap-2 pt-3">
      <span class="badge rounded-pill border">
        {{ filteredBeers.length }}
        beers
      </span>
      <a href="#" @click="searchQuery = ''" class="badge rounded-pill text-bg-light">
        {{ searchQuery }}
      </a>
      <a href="#" @click="brewery = ''" class="badge rounded-pill text-bg-light">
        {{ brewery }}
      </a>
      <a href="#" @click="sort = ''" class="badge rounded-pill text-bg-light">
        {{ sort }}
      </a>
    </div>

    <BeerList :filtered-beers="filteredBeers" />
  </div>
</template>
<script setup lang="ts"></script>
