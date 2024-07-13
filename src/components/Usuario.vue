<script setup>
import { onMounted, ref } from "vue";

const pessoa = ref({});

// onMounted é chamado depois do componente ser montado
onMounted(async () => {
  pessoa.value = await buscaInformacoes();
});

// Função que busca informações de uma api
const buscaInformacoes = async () => {
  const req = await fetch("https://reqres.in/api/users/5");
  const json = await req.json();
  return json.data;
};

</script>

<template>
  <div class="perfil">
    <img v-bind:src="pessoa.avatar" alt="Perfil" />
    <strong>{{ pessoa.first_name + pessoa.last_name }}</strong>
    <span>{{ pessoa.email }}</span>
  </div>
</template>

<style scoped>
.formulario {
  margin: 0 auto;
  padding: 5px;
  width: 200px;
  background-color: darkcyan;
}

.botao {
  margin: 5px auto;
  padding: 5px;
  display: block;
  background-color: darkcyan;
  border-radius: 5px;
  border-style: none;
  cursor: pointer;
}

.botao:hover {
  background-color: rgb(102, 147, 147);
}

.perfil {
  width: 150px;
  text-align: center;
}

.perfil img {
  margin: 0 auto;
  width: 80px;
  display: block;
  padding: 5px;
  border-radius: 10px;
}

.perfil span {
  display: block;
  font-size: 0.8em;
}
</style>
