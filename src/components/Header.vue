<script setup>

</script>

<template>
  <header class="bg-white rounded-t-xl container border-b-2">
    <div class="flex justify-between py-6">

      <div class="flex gap-4">
        <img class="size-16" src="/logo.png" alt="logo">
        <div class="flex flex-col justify-center">
          <h2 class="text-3xl font-semibold">Sneakers-Vue</h2>
          <p>Магазин кроссовок</p>
        </div>
      </div>

      <div class="flex items-center font-semibold">
        <nav>
          <ul class="flex gap-4">
            <li class="flex gap-2 cursor-pointer hover:text-emerald-700">
              <img src="/cart.svg" alt="Корзина">
              <p>12300р</p>
            </li>
            <li class="flex gap-2 cursor-pointer hover:text-emerald-700">
              <img src="/heart.svg" alt="Избранное">
              <p>Избранное</p>
            </li>
            <li class="flex gap-2 cursor-pointer hover:text-emerald-700 ">
              <img src="/profile.svg" alt="Профиль">
              <p>Профиль</p>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
</template>

