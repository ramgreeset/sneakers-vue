<script setup>
//Прокидываем ref для динамического отображения изменения состояния
import {ref} from "vue";
let count = ref(0);
function counter() {
  count.value++
}
</script>

<template>
  <h1>{{ count }}</h1>
<!--Запускаем функцию по клику-->
  <button @click="counter">+</button>
</template>

<style scoped>
h1 {
  color: aqua;
}
</style>
