<script setup>
defineProps({
  title: String,
  description: String,
  sena:Number,
}
)
</script>npm install -D tailwindcss@3 postcss autoprefixer

<template>
  <div class="bg-amber-200 product">
    <h2>Товар: {{ title }}</h2>
    <h3>Описание: {{ description }}</h3>
    <h3>Сена: {{ sena }}</h3>
  </div>
</template>

