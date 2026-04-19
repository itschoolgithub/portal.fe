<template>
  <nav class="navbar bg-body-tertiary">
    <div class="container-fluid">
      <router-link
        :to="{name: 'main'}"
        class="navbar-brand">
        Portal
      </router-link>
    </div>
  </nav>

  <div class="container">
    <router-view />
  </div>
</template>

<script>
export default {

}
</script>

<style scoped></style>
