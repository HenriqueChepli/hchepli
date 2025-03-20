<script setup>
import { ref } from 'vue';
import { usePerfilStore } from '@/stores/perfil';

const perfilStore = usePerfilStore();
const perfil = perfilStore.perfil[0];
</script>
<template>
     <a :href="perfil.linkGithub" target="_blank">
        <img src="@/assets/icons/github.png" alt="Logo-GitHub" />
        <span>Github</span>
      </a>
      <a :href="perfil.linkLinkedIn" target="_blank">
        <img src="@/assets/icons/linkedin.png" alt="Logo-Linkedin" />
        <span>LinkedIn</span>
      </a>
      <a :href="perfil.linkInstagram" target="_blank">
        <img src="@/assets/icons/instagram.png" alt="Logo-Instagram" />
        <span>Instagram</span>
      </a>
</template>
<style scoped>
.redesSociais a {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  border-radius: 25px;
  transition: all 0.5s ease;
  border: #ecec53 2px solid;
  position: relative;
}

.redesSociais a:hover {
  transform: translateY(-5px);
  background: #ecec53;
}

.redesSociais a img {
  width: 40px;
}

.redesSociais a span {
  position: absolute;
  opacity: 0;
  top: -35px;
  right: -45px;
  transition: all 0.5s ease;
  background: #fff;
  color: #0d0d0d;
  padding: 5px;
  border-radius: 5px;
}

.redesSociais a:hover span {
  opacity: 1;
}
</style>
