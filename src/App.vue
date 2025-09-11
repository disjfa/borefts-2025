<script setup></script>
<template>
  <div class="min-vh-100 d-flex flex-column">
    <div class="container">
      <h1 class="h4 py-2 m-0">Borefts 2025</h1>
    </div>
    <main class="flex-grow-1">
      <RouterView />
    </main>
    <nav class="sticky-bottom bg-body-tertiary bottom-0 shadow">
      <div class="container">
        <ul class="nav nav-fill nav-underline">
          <li class="nav-item">
            <RouterLink
              :to="{ name: 'home' }"
              class="nav-link flex-grow-1 d-flex flex-column align-items-center"
              activeClass="active"
            >
              <font-awesome-icon :icon="['fas', 'beer-mug-empty']" />
              <div class="small">Home</div>
            </RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink
              :to="{ name: 'todos' }"
              class="nav-link flex-grow-1 d-flex flex-column align-items-center"
              activeClass="active"
            >
              <font-awesome-icon :icon="['fas', 'bell']" />
              <div class="small">Todo</div>
            </RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink
              :to="{ name: 'drank' }"
              class="nav-link flex-grow-1 d-flex flex-column align-items-center"
              activeClass="active"
            >
              <font-awesome-icon :icon="['fas', 'square-check']" />
              <div class="small">Drank</div>
            </RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink
              :to="{ name: 'favorites' }"
              class="nav-link flex-grow-1 d-flex flex-column align-items-center"
              activeClass="active"
            >
              <font-awesome-icon :icon="['fas', 'thumbs-up']" />
              <div class="small">Favorites</div>
            </RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink
              :to="{ name: 'about' }"
              class="nav-link flex-grow-1 d-flex flex-column align-items-center"
              activeClass="active"
            >
              <font-awesome-icon :icon="['far', 'circle-question']" />
              <div class="small">About</div>
            </RouterLink>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>
<style></style>
