<template>
  <div>
    <Head>
      <Title>Nuxt Dojo | {{ product.name }} </Title>
      <Meta name="description" :content="product.description"></Meta>
    </Head>

    <ProductDetails :product="product" />
  </div>
</template>

<script setup>
const { id } = useRoute().params;

const { data: product } = await useFetch(
  `https://dummyapi.online/api/products/${id}`,
  {
    key: id,
  }
);

if (!product.value) {
  throw createError({
    statusCode: 404,
    statusMessage: "Item not found",
    fatal: true,
  });
}

definePageMeta({
  layout: "products",
});
</script>

<style scoped></style>