<script setup>
import { ref } from "vue";

// ref é uma função que cria uma variavel reativa
const nome = ref("Adryanne");
const dataNascimento = ref(1999);
const idade = ref(22);

// para acessar o valor de uma variavel reativa, é necessário usar o .value
// console.log(idade.value);

// para alterar o valor de uma variavel reativa, é necessário usar o .value
// idade.value = 23;
// console.log(idade.value);

// import { reactive } from "vue";

// reactive é uma função que cria um objeto reativo
// const pessoa = reactive({
//   nome: "Adryanne",
//   dataNascimento: 1999,
//   idade: 22,
// });

// para acessar o valor de uma propriedade de um objeto reativo, não é necessário usar o .value
// console.log(pessoa.idade);
</script>

<template>
  <div>
    <form action="" class="formulario">
      <!-- a v-model se refere a variavel presente dentro da tag script -->
      <label for="nome">Nome:</label>
      <input type="text" id="nome" name="nome" v-model="nome" placeholder="Digite seu nome" />
      <label for="dataNascimento">Data de Nascimento:</label>
      <input type="number" id="dataNascimento" name="dataNascimento" v-model="dataNascimento" />
    </form>
  </div>
  <!-- para objetos utilizaria pessoa.nome -->
  <p style="text-align: center">{{ nome }} nasceu em {{ dataNascimento }}</p>
</template>

<style scoped>
.formulario {
  margin: 0 auto;
  padding: 5px;
  width: 200px;
  background-color: darkcyan;
}
</style>
