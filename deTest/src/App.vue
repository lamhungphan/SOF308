<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div>
    <nav class="navbar navbar-expand-md navbar-light bg-light">
      <div class="containter-fluid">
        <ul class="navbar-nav">
          <li class="nav-item">
            <RouterLink class="nav-link" to="/">Home</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" to="/detail">Detail</RouterLink>
          </li>
        </ul>
      </div>
    </nav>
    <RouterView></RouterView>
  </div>
</template>

<style scoped></style>
