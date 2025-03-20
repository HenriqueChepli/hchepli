import { ref, computed } from 'vue';
import { defineStore } from 'pinia';
import henrique from '@/assets/img/henrique-img.png';
import javascript from '@/assets/img/javascript.png';
import css from '@/assets/img/css.png';
import html from '@/assets/img/html.png';
import python from '@/assets/img/python.png';
import vue from '@/assets/img/vue.png';
import django from '@/assets/img/django.svg';
import bensa from '@/assets/img/henrique-img.png';
import embreve from '@/assets/img/em-breve.jpeg';

export const usePerfilStore = defineStore('perfil', () => {
    const perfil = ref([
        {
            id: 1,
            name: 'Henrique Chepli',
            email: 'henriquechepli@gmail.com',
            linkLinkedIn: 'https://www.linkedin.com/in/henrique-chepli-de-souza-140837357/',
            linkGithub: 'https://github.com/henriquechepli',
            linkInstagram: 'https://www.instagram.com/hchepli/',
            avatar: henrique,
            linguagens: [javascript, css, html, python, vue, django],
            descricaoHabilidades: 'Comecei na área de programação em 2023, com HTML, CSS E JavaScript basico, desde lá, venho estudando essas linguagens. Em 2024 comecei a usar o Framework Vue.js, foi nesse periodo que comecei a me apaixonar por essa área. Nesse inicio de 2025, comecei a estudar a parte de BackEnd com Python e Django. ',
            projetos: [
                {
                    id: 1,
                    name: 'Bensa StreetWear',
                    descricao: 'Desenvolvi esse projeto em grupo para o Hackaton do IFC. O projeto não possui BackEnd, que em breve será desenvolvido. O sistema foi desenvolvido com Vue.js, HTML e CSS.',
                    linguagens: [javascript, css, html, vue],
                    image: bensa,
                    link: 'https://project-sales.vercel.app/',
                },
                {
                    id: 2,
                    name: 'Sistema de Psicologia',
                    descricao: 'Esse projeto foi desenvolvido para fins de estudo. O sistema foi feito com um curso de Python e Django. O sistema foi desenvolvido com Python, Django, HTML e CSS.',
                    linguagens: [ css, html, python, django],
                    image: bensa,
                    link: 'https://github.com/henriquechepli/SistemaPsicologia',
                },
                {
                    id: 3,
                    name: 'Em Breve!',
                    descricao: 'Em Breve!',
                    linguagens: [],
                    image: embreve,
                    link: '',
                },
                {
                    id: 4,
                    name: 'Em Breve!',
                    descricao: 'Em Breve!',
                    linguagens: [],
                    image: embreve,
                    link: '',
                },
            ],
        },
    ]);

    return { perfil };
});