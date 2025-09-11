<template>
  <div class="container">
    <div v-if="beerStore.isLoading">Loading beers...</div>
    <div v-else-if="beerStore.error">Error: {{ beerStore.error }}</div>
    <div v-else>
      <div class="py-2">
        <div v-if="filteredBeers.length === 0" class="alert alert-info">
          No beers found matching your search.
        </div>
        <div v-else class="row">
          <template v-for="beer in filteredBeers" :key="beer.slug">
            <div class="my-1 col-12 col-md-6 col-lg-4">
              <div
                class="shadow p-2 bg-body-tertiary rounded h-100 d-flex flex-column justify-content-between"
              >
                <h4 class="flex-grow-1">{{ beer.name }}</h4>
                <div>{{ beer.brewery }}</div>
                <div>{{ beer.type }}</div>
                <div>
                  <small>{{ beer.abv }}% / {{ beer.rating.toFixed(2) }}</small>
                </div>
                <div class="pt-3 d-flex gap-2">
                  <button
                    class="btn btn-sm"
                    :class="beerStore.isTodo(beer.slug) ? 'btn-success' : 'btn-outline-success'"
                    @click="beerStore.toggleTodo(beer.slug)"
                    title="Todo"
                  >
                    <font-awesome-icon
                      :icon="['far', 'bell']"
                      v-if="!beerStore.isTodo(beer.slug)"
                    />
                    <font-awesome-icon :icon="['fas', 'bell']" v-else />
                  </button>

                  <button
                    class="btn btn-sm"
                    :class="beerStore.isDrank(beer.slug) ? 'btn-info' : 'btn-outline-info'"
                    @click="beerStore.toggleDrank(beer.slug)"
                    title="Drank"
                  >
                    <font-awesome-icon
                      :icon="['far', 'square']"
                      v-if="!beerStore.isDrank(beer.slug)"
                    />
                    <font-awesome-icon :icon="['fas', 'square-check']" v-else />
                  </button>

                  <button
                    class="btn btn-sm"
                    :class="
                      beerStore.isLiked(beer.slug) ? 'btn-secondary' : 'btn-outline-secondary'
                    "
                    @click="beerStore.toggleLike(beer.slug)"
                    title="Liked!"
                  >
                    <font-awesome-icon
                      :icon="['far', 'thumbs-up']"
                      v-if="!beerStore.isLiked(beer.slug)"
                    />
                    <font-awesome-icon :icon="['fas', 'thumbs-up']" v-else />
                  </button>

                  <a
                    :href="beer.uri"
                    class="btn btn-sm btn-outline-secondary ms-auto"
                    target="_blank"
                  >
                    <font-awesome-icon :icon="['fab', 'untappd']" />
                  </a>
                </div>
              </div>
            </div>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useBeerStore } from '@/stores/beer'
const beerStore = useBeerStore()

defineProps({
  filteredBeers: {
    type: Object,
    required: true,
  },
})
</script>
