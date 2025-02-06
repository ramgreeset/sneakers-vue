<!--
SFC - single file component
Логика и стили для компонента содержится в самом файле компонента
-->
<!--
setup - указывает что мы работаем с Composition API
-->
<script setup>
import FirstComponent from "@/components/Counter.vue";
</script>
<!--В template размещается верстка компонента, вся верстка вне template не отображается-->
<template>
  <h1>Привет</h1>

  <FirstComponent/>
</template>

<!--
scoped - указывает что стили применяются локально к текущему файлу
-->
<style scoped>
</style>
