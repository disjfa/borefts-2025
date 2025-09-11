<script setup></script>
<template>
  <div class="min-vh-100 d-flex flex-column">
    <div class="container">
      <h1 class="h4 py-2 m-0">Borefts 2025</h1>
    </div>
    <main class="flex-grow-1">
      <RouterView />
    </main>
    <nav class="sticky-bottom bg-body-tertiary bottom-0">
      <div class="container">
        <ul class="nav nav-fill nav-underline">
          <li class="nav-item">
            <RouterLink :to="{name: 'home'}" class="nav-link flex-grow-1"> Home </RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink :to="{name: 'favorites'}" class="nav-link flex-grow-1"> Favorites </RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink :to="{name: 'home'}" class="nav-link flex-grow-1"> Home </RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink :to="{name: 'home'}" class="nav-link flex-grow-1"> Home </RouterLink>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>
<style></style>
