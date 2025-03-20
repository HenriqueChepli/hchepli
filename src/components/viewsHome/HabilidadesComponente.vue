<script setup>
import { ref } from 'vue';
import { usePerfilStore } from '@/stores/perfil';

const perfilStore = usePerfilStore();
const perfil = perfilStore.perfil[0];
</script>
<template>
    <section class="mainHabilidades">
    <h1>Habilidades</h1>
    <div class="conteudo">
      <div class="imgLinguagens">
        <img v-for="linguagem in perfil.linguagens" :key="linguagem" :src="linguagem" alt="Linguagens de Programação" />
      </div>
      <div class="descricaoHabilidades">
        <p>{{ perfil.descricaoHabilidades }}</p>
      </div>
    </div>
  </section>
</template>
<style scoped>
.mainHabilidades {
  display: flex;
  justify-content: start;
  align-items: center;
  flex-direction: column;
  gap: 50px;
  padding: 50px 0;
  min-height: 70dvh;
}

.mainHabilidades h1 {
  font-size: 50px;
  font-weight: 900;
  letter-spacing: 1.5px;
}

.mainHabilidades .conteudo {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 50px;
  width: 100%;
}

.mainHabilidades .conteudo .imgLinguagens {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    max-width: 25dvw;
    gap: 55px;
}

.mainHabilidades .conteudo .imgLinguagens img {
  width: 100px;
}

.mainHabilidades .conteudo .descricaoHabilidades {
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 40vw;
}

.mainHabilidades .conteudo .descricaoHabilidades p {
  font-size: 20px;
  text-align: justify;
  letter-spacing: 2.5px;
}

@media( max-width: 1570px){
  .mainHabilidades .conteudo .imgLinguagens img {
  width: 5vw;
}
}

@media( max-width: 1000px){
  .mainHabilidades .conteudo {
    flex-direction: column;
}

.mainHabilidades .conteudo .imgLinguagens {
    max-width: 100%;
    padding: 20px;
}

.mainHabilidades .conteudo .imgLinguagens img {
  width: 40px;
}
.mainHabilidades .conteudo .descricaoHabilidades {
  padding: 20px;
  max-width: 100%;
}
.mainHabilidades .conteudo .descricaoHabilidades p {
  font-size: 15px;
  letter-spacing: 1.5px;
}
}
</style>