<template>
  <div class="container">
    <h1>About</h1>

    <ol>
      <li>
        <font-awesome-icon :icon="['fas', 'bell']" />
        Check beers you want to try out.
      </li>
      <li>
        <font-awesome-icon :icon="['fas', 'square-check']" />
        Check when you tried a beer.
      </li>
      <li>
        <font-awesome-icon :icon="['fas', 'thumbs-up']" />
        Check if you like the beer, also others you might like.
      </li>
    </ol>
    <p>That`s it, also enjoy!</p>

    <p>
      This checklist is made with <a href="https://getbootstrap.com/">bootstrap</a> Using
      <a href="https://vuejs.org/">vue</a>. Icons are from
      <a href="https://fontawesome.com/">font awesome</a>.
    </p>

    <p>
      Beer list is fetched from
      <a href="https://untappd.com/v/borefts-bier-festival-2025/13603188">untappd</a>.
    </p>

    <p>
      The list if for the festival
      <a href="https://brouwerijdemolen.nl/borefts-bierfestival-2025">Borefts bierfestival 2025 </a
      >. One more time!
    </p>
  </div>
</template>
<script setup lang="ts">
import { useHead } from '@unhead/vue'

useHead({
  title: 'About',
})
</script>
