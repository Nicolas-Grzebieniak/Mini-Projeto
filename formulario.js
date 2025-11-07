const listaUsuarios = document.getElementById('lista_usuarios');
const btnUsuarios = document.getElementById('btn_usuarios');
const btnVoltar = document.getElementById('btn_voltar');
const form = document.getElementById('form');

btnUsuarios.addEventListener('click', () => {

    form.classList.add('hidden');
    listaUsuarios.classList.remove('hidden');

});

btnVoltar.addEventListener('click', () => {

    listaUsuarios.classList.add('hidden');
    form.classList.remove('hidden');

});
