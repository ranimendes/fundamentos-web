let nome = document.getElementById('nome')
let email = document.querySelector('#email')
let assunto = document.querySelector('#assunto')
let nomeOK = false
let emailOk = false
let assuntoOk = false
let mapa = document.querySelector('#mapa')


function validaNome() {
    let txtNome = document.querySelector('#txtNome')
    if (nome.value.length < 3) {
        txtNome.innerHTML = 'Nome inválido!'
        txtNome.style.color = 'red'
    } else {
        txtNome.innerHTML = ''
        nomeOK = true
    }
}

function validaEmail() {
    let txtEmail = document.querySelector('#txtEmail')
    if (email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1) {
        txtEmail.innerHTML = 'E-mail inválido!'
        txtEmail.style.color = 'red'
    } else {
        txtEmail.innerHTML = ''
        emailOk = true
    }
}

function validaAssunto() {
    let txtAssunto = document.querySelector('#txtAssunto')
    if (assunto.value.length >= 100) {
        txtAssunto.innerHTML = 'Texto muito longo, escreva até 100 caracteres.'
        txtAssunto.style.color = 'red'
            // txtAssunto.style.display = 'block' se estivessemos usando display none
    } else {
        txtAssunto.innerHTML = ''
            // txtAssunto.style.display = 'none' faz a mesma função acima precisa ter display block acima
        assuntoOk = true
    }
}

function enviar() {
    if (nomeOK == true & emailOk == true & assuntoOk == true) {
      alert ('Formulário enviado com sucesso!')
    } else {
      alert ('Preencha o formulário corretamente!')
    }
}

function mapaZoom(){
mapa.style.width = '800px'
mapa.style.height = '600px'
}

function mapaNormal(){
mapa.style.width = '400px'
mapa.style.height = '300px'
}