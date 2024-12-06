<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div>
    <nav class="navbar navbar-expand-md navbar-light bg-light">
      <div class="container-fluid">
        <ul class="navbar-nav">
          <li class="nav-item">
            <RouterLink class="nav-link" active-class="active" to="Entry">Danh sách</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" active-class="active" to="Notification">Thông báo</RouterLink>
          </li>
        </ul>
      </div>
    </nav>
    <RouterView/>
  </div>
</template>

<style scoped>

</style>
