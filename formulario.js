const listaUsuarios = document.getElementById('lista_usuarios');
const btnUsuarios = document.getElementById('btn_usuarios');
const btnVoltar = document.getElementById('btn_voltar');
const form = document.getElementById('form');
const nome = document.getElementById('nome');
const email = document.getElementById('email');
const senha = document.getElementById('senha');
const confirmarSenha = document.getElementById('confirmar_senha');
const telefone = document.getElementById('telefone');
const dataNascimento = document.getElementById('data_nascimento');
const termos = document.querySelector('input[name="termos_aceitacao"]');
const btnCadastrar = document.getElementById('btn_cadastrar');
const usuariosUl = document.getElementById('usuarios');

let usuarios = [];


btnUsuarios.addEventListener('click', () => {
  form.classList.add('hidden');
  listaUsuarios.classList.remove('hidden');
});

btnVoltar.addEventListener('click', () => {
  listaUsuarios.classList.add('hidden');
  form.classList.remove('hidden');
});


function validarNome() {
  return nome.value.trim().length >= 3;
}

function validarEmail() {
  const padrao = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return padrao.test(email.value);
}

function validarSenha() {

    const senhaValor = senha.value.trim();
    const padrao = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    return padrao.test(senhaValor);

}

function validarConfirmarSenha() {
  return senha.value === confirmarSenha.value && confirmarSenha.value !== '';
}

function validarTermos() {
  return termos.checked;
}

function validarDataNascimento() {
  return dataNascimento.value.trim() !== '';
}


telefone.addEventListener('input', () => {
  let valor = telefone.value.replace(/\D/g, '');
  if (valor.length > 11) valor = valor.slice(0, 11);

  if (valor.length > 6) {
    telefone.value = `(${valor.slice(0, 2)}) ${valor.slice(2, 7)}-${valor.slice(7)}`;
  } else if (valor.length > 2) {
    telefone.value = `(${valor.slice(0, 2)}) ${valor.slice(2)}`;
  } else {
    telefone.value = valor;
  }
});


form.addEventListener('input', () => {
  const valido =
    validarNome() &&
    validarEmail() &&
    validarSenha() &&
    validarConfirmarSenha() &&
    validarTermos() &&
    validarDataNascimento();

  btnCadastrar.disabled = !valido;

});

nome.addEventListener('blur', () => {

    if (!validarNome()) {
        alert('O nome deve ter pelo menos 3 caracteres.');
    }

});

senha.addEventListener('blur', () => {

    if (!validarSenha()) {
        alert('A senha deve ter pelo menos 8 caracteres, incluindo letras e números.');

    }
});

confirmarSenha.addEventListener('blur', () => {

    if (confirmarSenha.value.trim() !== '' && !validarConfirmarSenha()) {
    alert('As senhas não conferem. Verifique a confirmação.');

  }
});

form.addEventListener('submit', (e) => {
  e.preventDefault();

    if (!form.checkValidity()) {

        form.reportValidity(); 
        return;
        
    }

  const novoUsuario = {
    nome: nome.value.trim(),
    email: email.value.trim(),
    telefone: telefone.value.trim(),
    dataNascimento: dataNascimento.value
  };

  usuarios.push(novoUsuario);
  atualizarLista();

  form.reset();
  btnCadastrar.disabled = true;
  alert('Usuário cadastrado com sucesso!');
});

function atualizarLista() {
  usuariosUl.innerHTML = '';
  usuarios.forEach((u) => {
    const li = document.createElement('li');
    li.textContent = `${u.nome} — ${u.email}`;
    usuariosUl.appendChild(li);
  });
}
