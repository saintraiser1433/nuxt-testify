<template>
  <div>
    <h2>About</h2>
    <p>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque esse
      saepe sequi alias omnis doloremque quam error nobis cum dolor!
    </p>
    <p>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque esse
      saepe sequi alias omnis doloremque quam error nobis cum dolor!
    </p>
    <div>{{ data }}</div>
    <div>{{ stephen }}</div>
  </div>
</template>

<script setup>
const { data } = await useFetch("/api/ninja?name=Mario", {
  method: "POST",
  body: {
    age: 14,
  },
});
const { data: stephen } = await useFetch("/api/stephen");
</script>

<style scoped>
h2 {
  margin-bottom: 20px;
  font-size: 36px;
}

p {
  margin: 20px 0;
}
</style>