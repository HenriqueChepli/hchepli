<script setup>
import { ref } from 'vue';
import { usePerfilStore } from '@/stores/perfil';
import RedesSociaisComponente from '@/components/assets/RedesSociaisComponente.vue';
import emailjs from 'emailjs-com';

emailjs.init('5KmHMfiWHbxUaMpBr'); // Substitua pela sua chave pública

const perfilStore = usePerfilStore();
const perfil = perfilStore.perfil[0];

// Refs para controlar o estado dos inputs
const nome = ref('');
const email = ref('');
const mensagem = ref('');

const enviarEmail = (e) => {
  e.preventDefault();

  const dados = {
    nome: nome.value,
    email: email.value,
    mensagem: mensagem.value,
  };

  emailjs
    .send(
      'service_gde9w6f', // Service ID
      'template_3m40zsh', // Template ID
      dados
    )
    .then(
      (response) => {
        alert('E-mail enviado com sucesso!');
        console.log('SUCESSO!', response.status, response.text);
      },
      (error) => {
        alert('Erro ao enviar e-mail.');
        console.error('ERRO:', error);
      }
    );
};

</script>

<template>
  <section class="mainContato">
    <h1>Entre em Contato</h1>
    <div class="containerContato">
      <div class="infosContato">
        <p>Email: {{ perfil.email }}</p>
        <div class="redesSociais">
          <RedesSociaisComponente />
        </div>
      </div>
      <div class="formularioContato">
        <form @submit="enviarEmail">
    <div class="input-container" :class="{ filled: nome }">
      <input type="text" id="nome" v-model="nome" required />
      <label for="nome">Nome:</label>
    </div>
    <div class="input-container" :class="{ filled: email }">
      <input type="email" id="email" v-model="email" required />
      <label for="email">Email:</label>
    </div>
    <div class="input-container" :class="{ filled: mensagem }">
      <textarea id="mensagem" v-model="mensagem" required></textarea>
      <label for="mensagem">Mensagem:</label>
    </div>
    <button type="submit">Enviar</button>
  </form>
      </div>
    </div>
  </section>
</template>

<style scoped>
.mainContato {
  display: flex;
  justify-content: start;
  align-items: center;
  flex-direction: column;
  width: 100%;
  min-height: 50dvh;
}

.mainContato h1 {
  width: 100%;
  display: flex;
  font-size: 50px;
  justify-content: start;
  padding: 0 50px;
}

.mainContato .containerContato {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 50px;
  padding: 0 50px;
}

.mainContato .containerContato .infosContato {
  display: flex;
  justify-content: center;
  align-items: start;
  flex-direction: column;
  gap: 20px;
  min-width: 50dvh;
}

.mainContato .containerContato .infosContato .redesSociais {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
}

.mainContato .containerContato .formularioContato {
  min-width: 50dvh;
}

.mainContato .containerContato .formularioContato form {
  display: flex;
  justify-content: center;
  align-items: start;
  flex-direction: column;
  gap: 20px;
}

.input-container {
  position: relative;
  width: 100%;
}

.input-container label {
  position: absolute;
  top: 10px;
  left: 10px;
  font-size: 16px;
  color: #999;
  transition: all 0.3s ease;
  pointer-events: none;
}

.input-container input,
.input-container textarea {
  width: 100%;
  padding: 10px;
  border-radius: 12px;
  border: 2px solid #ccc;
  transition: all 0.3s ease;
  font-size: 16px;
}

.input-container textarea {
  min-height: 100px;
}

.input-container.filled label,
.input-container input:focus + label,
.input-container textarea:focus + label {
  top: -15px;
  left: 5px;
  font-size: 12px;
  color: #161660;
  background: #ecec53;
  border-radius: 7px;
  padding: 5px 10px;
}

.input-container input:focus,
.input-container textarea:focus {
  border-color: #161660;
  outline: none;
}

.mainContato .containerContato .formularioContato form button {
  width: 100%;
  padding: 10px;
  border-radius: 12px;
  background: #ecec53;
  color: #000;
  font-weight: bold;
  border: 2px solid transparent;
  transition: all 0.5s;
}

.mainContato .containerContato .formularioContato form button:hover {
  background: transparent;
  color: #ecec53;
  border: 2px solid #ecec53;
}
</style>