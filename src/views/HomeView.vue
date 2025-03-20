<script setup>
import { ref } from 'vue';
import { usePerfilStore } from '@/stores/perfil';
import HabilidadesComponente from '@/components/viewsHome/HabilidadesComponente.vue';
import PrincipalComponente from '@/components/viewsHome/PrincipalComponente.vue';
import ProjetosComponente from '@/components/viewsHome/ProjetosComponente.vue';
import ContatoComponente from '@/components/viewsHome/ContatoComponente.vue';

const perfilStore = usePerfilStore();
const perfil = perfilStore.perfil[0];

</script>

<template>
 <PrincipalComponente />
  <ProjetosComponente />
  <HabilidadesComponente />
</template>

<style scoped>

</style>