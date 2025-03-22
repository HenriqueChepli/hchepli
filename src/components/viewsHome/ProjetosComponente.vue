<script setup>
import { ref } from 'vue';
import { usePerfilStore } from '@/stores/perfil';

const perfilStore = usePerfilStore();
const perfil = perfilStore.perfil[0];
</script>
<template>
<section class="mainProjetos">
    <h1>Projetos</h1>
    <div class="projetos">
      <div class="projeto" v-for="projeto in perfil.projetos" :key="projeto.name">
        <a :href="projeto.link" target="_blank">
          <img :src="projeto.image" alt="Projeto 1" />
          <h2>{{ projeto.name }}</h2>
          <p>{{ projeto.descricao }}</p>
          <ul>
            <li v-for="linguagem in projeto.linguagens" :key="linguagem">
              <img :src="linguagem" alt="Linguagens de Programação" />
            </li>
          </ul>
        </a>
      </div>
    </div>
  </section>
</template>
<style scoped>
.mainProjetos {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 50px;
  padding: 0 0 50px 0;
}

.mainProjetos h1 {
  font-size: 50px;
  font-weight: 900;
  letter-spacing: 1.5px;
}

.mainProjetos .projetos {
  display: flex;
  justify-content: center;
  align-items: stretch;
  flex-wrap: wrap;
  gap: 50px;
}

.mainProjetos .projetos .projeto {
  background: #0d0d0d;
  padding: 20px;
  border-radius: 10px;
  border: #ecec53 0.1px solid;
  transition: all 0.5s;
  width: 350px;
}

.mainProjetos .projetos .projeto:hover {
  transform: translateY(-5px) scale(1.01);
}

.mainProjetos .projetos .projeto a {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 10px;
  text-align: justify;
  color: #fff;
}

.mainProjetos .projetos .projeto a h2 {
  font-size: 17px;
  font-weight: 900;
  letter-spacing: 0.5px;
}

.mainProjetos .projetos .projeto a p {
  font-size: 14.5px;
  letter-spacing: 0.5px;
}

.mainProjetos .projetos .projeto a img {
  width: 325px;
  border-radius: 10px;
}

.mainProjetos .projetos .projeto a ul {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 20px;
  flex-wrap: wrap;
  list-style: none;
}

.mainProjetos .projetos .projeto a ul li {
  padding: 5px;
  border-radius: 10px;
}

.mainProjetos .projetos .projeto a ul li img {
  width: 35px;
}

@media (max-width: 700px){
  .mainProjetos .projetos .projeto {
  width: 300px;
}
.mainProjetos .projetos .projeto a h2 {
  font-size: 14px;
}

.mainProjetos .projetos .projeto a p {
  font-size: 12.5px;
}

.mainProjetos .projetos .projeto a img {
  width: 250px;
}
.mainProjetos h1 {
  font-size: 30px;
}
}
</style>