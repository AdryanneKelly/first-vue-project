<script setup>
import Cabecalho from "./components/Cabecalho.vue";
import Usuario from "./components/Usuario.vue";
</script>

<template>
  <NavBar />
  <!-- Outra forma de declarar o componente -->
  <!-- <component is="NavBar" /> -->
  <header>
    <Cabecalho />
  </header>

  <main>
    <Usuario />
  </main>
</template>

<style>
header {
  line-height: 1.5;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
}
</style>
