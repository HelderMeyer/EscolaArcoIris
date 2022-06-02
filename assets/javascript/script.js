//ANIMAÇÕES

//SUBNAVBAR E NAVBAR
//Quando o usuário descer o site em 20px, a subnavbar irá sumir
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById('header').style.top = '0px';
    document.getElementById('section-contact-area').style.top = '-56px';
    if (screen.width < 600) {
      document.getElementById("section-contact-area").style.top = "-200px";
    }
  } else {
    document.getElementById('header').style.top = '46px';
    document.getElementById('section-contact-area').style.top = '0px';

  }
}

//NAVBAR
//Quando o usuário acessar o site pelo celular, a navbar será adaptada para proporção da tela e, além disso, um botão de menu irá aparecer, contendo
//os botões da barra de navegação do site

function responsividadeNavbar() {
  var x = document.getElementById('header');
  if (x.className === 'header') {
    x.className += ' responsividade';
  } else {
    x.className = 'header';
  }
}

//FORMULÁRIO

const nome = document.getElementById('name');
const email = document.getElementById('email');
const telefone = document.getElementById('phone');
const mensagem = document.getElementById('text-area');
const enviar = document.getElementById('submit');

//
// MÁSCARA NÚMERO
//

let entradaTelefone = document.getElementById('phone');

entradaTelefone.addEventListener('input', addMascaraTelefone);

function addMascaraTelefone() {

  let digitosTelefone = entradaTelefone.value
  let arrayTelefone = []

  if (digitosTelefone.length == 11 && digitosTelefone.indexOf('.') == -1) {

    for (let i = -1; i < 11; i++) {

      if (i == -1) {
        arrayTelefone.push(digitosTelefone[i]);
        arrayTelefone.push('(');
      } else if (i == 1) {
        arrayTelefone.push(digitosTelefone[i]);
        arrayTelefone.push(')');
        arrayTelefone.push(' ');
      } else if (i == 2) {
        arrayTelefone.push(digitosTelefone[i]);
        arrayTelefone.push(' ');
      } else if (i == 6) {
        arrayTelefone.push(digitosTelefone[i]);
        arrayTelefone.push('-');
      } else {
        arrayTelefone.push(digitosTelefone[i]);
      }

    }

    console.log(arrayTelefone.join(''));
    entradaTelefone.value = arrayTelefone.join('');

  } else if (digitosTelefone.indexOf(' ') != -1) {

    let z = 0
    while (digitosTelefone.indexOf(' ') != -1 && z <= 3) {

      digitosTelefone = digitosTelefone.replace('(', '');
      digitosTelefone = digitosTelefone.replace(' ', '');
      digitosTelefone = digitosTelefone.replace(')', '');
      digitosTelefone = digitosTelefone.replace('-', '');
      console.log(digitosTelefone);
      entradaTelefone.value = digitosTelefone;
      z++

    }
  }
}

//
// ENVIAR DADOS PARA O CONSOLE
//

enviar.addEventListener('click', mostrarConsole);

function mostrarConsole() {

  if (
    nome.value == '' ||
    mensagem.value == '' ||
    email.value == '' ||
    telefone.value == ''
  ) {
    window.alert('Por favor, prencha todo o formulário!')
  } else if (
    nome.value != '' ||
    mensagem.value != '' ||
    email.value != '' ||
    telefone.value != ''
  ) {
    if (
      nome.value.indexOf(0) != -1 ||
      nome.value.indexOf(1) != -1 ||
      nome.value.indexOf(2) != -1 ||
      nome.value.indexOf(3) != -1 ||
      nome.value.indexOf(4) != -1 ||
      nome.value.indexOf(5) != -1 ||
      nome.value.indexOf(6) != -1 ||
      nome.value.indexOf(7) != -1 ||
      nome.value.indexOf(8) != -1 ||
      nome.value.indexOf(9) != -1
    ) {
      window.alert('Nome inválido! Por favor, remova o(s) número(s)!')
    } else if (
      nome.value.indexOf(0) == -1 ||
      nome.value.indexOf(1) == -1 ||
      nome.value.indexOf(2) == -1 ||
      nome.value.indexOf(3) == -1 ||
      nome.value.indexOf(4) == -1 ||
      nome.value.indexOf(5) == -1 ||
      nome.value.indexOf(6) == -1 ||
      nome.value.indexOf(7) == -1 ||
      nome.value.indexOf(8) == -1 ||
      nome.value.indexOf(9) == -1
    ) {
      console.log('Nome: ' + nome.value)
      console.log('Telefone: ' + telefone.value)
      console.log('Email: ' + email.value)
      console.log('Mensagem: ' + document.getElementById("text-area").value)
      window.alert('O seu formulário foi enviado com sucesso!')
    }
  }
}

//
//ADIÇÃO DE FOTOS NA SECTION NOSSA INFRAESTRUTURA
//

const buttonShowHide = document.getElementById('ver-mais');

buttonShowHide.addEventListener('click', esconder);

const sectionInfraestrutura1 = document.getElementById('infraestrutura-parte-adicional1');
const sectionInfraestrutura2 = document.getElementById('infraestrutura-parte-adicional2');

buttonShowHide.value = 'Ver mais';

function esconder() {

  if (sectionInfraestrutura1.className.indexOf('esconder') != -1 && sectionInfraestrutura2.className.indexOf('esconder') != -1) {
    sectionInfraestrutura1.classList.remove('esconder');
    sectionInfraestrutura2.classList.remove('esconder');
    if (screen.width < 600) {
      document.getElementById('section-infraestutura').style.height = '4550px';
    }else{
      document.getElementById('section-infraestutura').style.height = '2650px';
    }
    buttonShowHide.value = 'Ver menos';

  } else if (sectionInfraestrutura1.className.indexOf('esconder') == -1 && sectionInfraestrutura2.className.indexOf('esconder') == -1) {
    sectionInfraestrutura1.classList.add('esconder');
    sectionInfraestrutura2.classList.add('esconder');
    if (screen.width < 600) {
      document.getElementById('section-infraestutura').style.height = '2400px';
    }else{
      document.getElementById('section-infraestutura').style.height = '1450px';
    }
    buttonShowHideTable.value = 'Ver mais';
  }

}