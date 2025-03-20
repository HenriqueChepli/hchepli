<script setup>
const scrollToSection = (className) => {
  const section = document.getElementsByClassName(className);
  if (section.length > 0) {
    section[0].scrollIntoView({ behavior: 'smooth' });
  }
};
</script>

<template>
  <header class="header">
    <div class="nav">
      <a @click="(e) => { e.preventDefault(); scrollToSection('mainPrincipal'); }" role="button" tabindex="0">Home</a>
      <a @click="(e) => { e.preventDefault(); scrollToSection('mainProjetos'); }" role="button" tabindex="0">Projetos</a>
      <a @click="(e) => { e.preventDefault(); scrollToSection('mainHabilidades'); }" role="button" tabindex="0">Habilidades</a>
      <a @click="(e) => { e.preventDefault(); scrollToSection('mainContato'); }" role="button" tabindex="0">Contato</a>
    </div>
  </header>
</template>

<style scoped>
.header {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 25px 0 0 0;
  position: fixed;
  top: 0;
  z-index: 1000;
}

.header .nav {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
  background: #161660;
  padding: 20px;
  border-radius: 20px;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.1);
  flex-wrap: wrap;
}

.header .nav a {
  text-decoration: none;
  font-size: 20px;
  color: #fff;
  font-weight: bold;
  transition: all 0.5s;
  cursor: pointer;
}

.header .nav a:after {
  content: '';
  display: block;
  width: 0;
  height: 1px;
  background: #ecec53;
  transition: all 0.5s;
}

.header .nav a:hover:after {
  width: 100%;
}

@media(max-width: 500px){
  .header .nav a {
  font-size: 15px;
}
.header {
  padding: 0px 0 0 0;
}
}
</style>