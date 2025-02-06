<script setup>
//Прокидываем ref для динамического отображения изменения состояния
import {ref} from "vue";
const count = ref(0);
// counter
function counter() {
  count.value++
}
//input number. eventListener
// function numberInput(event) {
//   count.value = Number(event.target.value);
// }
</script>

<template>
  <h1>{{ count }}</h1>
<!--Запускаем функцию по клику-->
  <button @click="counter">+</button>

<!--Альтернативная реализация v-on для отображения контента-->
<!--  <input @input="numberInput">-->
<!--  v-model устанавливает связь между count и input. Можем не писать функцию добавления цифр через input-->
<!--  input @keyup.enter="increment" - задаем действие при нажатии клавиши-->

<!--  <input v-model="count">-->
  <input @keyup="counter">
</template>

<style scoped>
h1 {
  color: aqua;
}
</style>
