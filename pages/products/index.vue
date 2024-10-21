<template>
  <div>
    <div class="grid grid-cols-4 gap-5">
      <div v-for="product in products" :key="product.id">
        <!-- <NuxtLink :to="`/products/${product.id}`">{{ product.title }}</NuxtLink> -->
        <ProductCard :product="product" />
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "products",
});
const { data: products } = await useFetch(
  "https://dummyapi.online/api/products"
);

useHead({
  title: "Nuxt Dojo | Merch",
  meta: [
    {
      name: "description",
      content: "Nuxt 3 Merch",
    },
  ],
});
</script>

<style scoped>
</style>