<!--
SFC - single file component
Логика и стили для компонента содержится в самом файле компонента
-->
<!--
setup - указывает что мы работаем с Composition API
-->


<script setup>
import FirstComponent from "@/components/TestComponents/Counter.vue";
import Products from "@/components/TestComponents/Products.vue";


</script>


<!--В template размещается верстка компонента, вся верстка вне template не отображается-->
<template>

  <!--Двоеточие у имени пропса указывает что он должен быть приведен к соответствующему типу внутри компонента-->
  <Products title="Кроссовки Nuke AirBuks" description="Лучшие тяги жи есть" :sena="1900"/>
  <Products/>
  <Products/>
  <Products/>
  <!--  <FirstComponent/>-->
</template>

<!--
scoped - указывает что стили применяются локально к текущему файлу
-->
<style scoped>
</style>
