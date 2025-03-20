<script setup>
import { ref } from 'vue';
import { usePerfilStore } from '@/stores/perfil';
import RedesSociaisComponente from '@/components/assets/RedesSociaisComponente.vue';

const perfilStore = usePerfilStore();
const perfil = perfilStore.perfil[0];
</script>
<template>
 <section class="mainPrincipal">
    <div class="redesSociais">
     <RedesSociaisComponente />
    </div>
    <div class="info">
      <p>{{ perfil.email }}</p>
      <h1>{{ perfil.name }}</h1>
      <p>Atualmente estou cursando o 3º ano do Ensino Médio Técnico em Informática no IFC - Campus Araquari.</p>
      <ul>
        <li v-for="linguagem in perfil.linguagens" :key="linguagem">
          <img :src="linguagem" alt="Linguagens de Programação" />
        </li>
      </ul>
    </div>
    <article class="article">
      <div class="imagem">
        <img :src="perfil.avatar" alt="Imagem Aqui" />
      </div>
    </article>
  </section>

</template>
<style scoped>
.mainPrincipal {
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  min-height: 100vh;
  padding: 150px 0;
}

.mainPrincipal .redesSociais {
  position: absolute;
  left: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 20px;
}


.mainPrincipal .info {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  max-width: 30dvw;
  gap: 20px;
}

.mainPrincipal .info h1 {
  font-size: 60px;
  border-bottom: 1.5px solid #ecec53;
  padding: 0 0 10px 0;
  margin: 0 0 10px 0;
  font-weight: 900;
  letter-spacing: 1px;
}

.mainPrincipal .info p {
  font-size: 20px;
  letter-spacing: 1.5px;
}

.mainPrincipal .info ul {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 20px;
  list-style: none;
}

.mainPrincipal .info ul li img {
  width: 40px;
}

.mainPrincipal .info ul li:last-child img {
  width: 80px;
}

.mainPrincipal .article {
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.mainPrincipal .article .imagem img {
  width: 500px;
  border-radius: 50%;
  border: 2px solid #ecec53;
  height: 504px;
}

@media (max-width: 1500px) {
  .mainPrincipal .redesSociais {
  left: 20px;
}
  .mainPrincipal .info h1 {
  font-size: 40px;
}

.mainPrincipal .info p {
  font-size: 15px;
}

.mainPrincipal .info ul li img {
  width: 30px;
}

.mainPrincipal .info ul li:last-child img {
  width: 60px;
}

.mainPrincipal .article .imagem img {
  width: 300px;
  height: auto;
}
}

@media (max-width: 1050px){
  .mainPrincipal {
    flex-direction: column-reverse;
    gap: 80px;
}

.mainPrincipal .info {
  max-width: 70%;
  align-items: center;
}
}

@media (max-width: 650px){
  .mainPrincipal .info{
    max-width: 90%;
  }
  .mainPrincipal .info h1 {
  font-size: 6vw;
}

.mainPrincipal .info p {
  font-size: 12px;
}

.mainPrincipal .info ul li img {
  width: 25px;
}

.mainPrincipal .info ul li:last-child img {
  width: 50px;
}

.mainPrincipal .article .imagem img {
  width: 250px;
}

}
</style>