<template>
  <div class="card text-center">
    <img :src="product.featuredImage" alt="product thumb" class="thumb" />
    <p class="font-bold text-gray-500 m-4 truncate">{{ product.name }}</p>
    <NuxtLink :to="`/products/${product.id}`">
      <p class="btn my-4">View Details</p>
    </NuxtLink>
  </div>
</template>

<script setup>
const { product } = defineProps(["product"]);
</script>

<style scoped>
.thumb {
  max-width: 200px;
  height: 200px;
  object-fit: cover;
  margin: 0 auto;
}
</style>