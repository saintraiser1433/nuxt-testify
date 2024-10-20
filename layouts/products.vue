<template>
  <div>
    <header class="shadow-sm bg-white py-5">
      <nav class="container mx-auto">
        <NuxtLink to="/products" class="font-bold">Nuxt Dojo Merch</NuxtLink>

      </nav>
    </header>

    <div class="container mx-auto shadow-sm bg-white p-4 my-4">
      <slot />
    </div>
    <footer class="container mx-auto bg-white shadow-sm p-4 ">
      <ul class="flex items-center gap-2">
        <li>
          <NuxtLink to="/">Home</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/about">About</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/products">Products</NuxtLink>
        </li>
      </ul>
    </footer>
  </div>
</template>

<script setup>

</script>

<style scoped>
.router-link-exact-active {
  color: #12b488;
}
</style>