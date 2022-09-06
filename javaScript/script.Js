document.getElementById(nomeUsuario)
document.getElementById(emailUsuario)
document.getElementById(telefoneUsuario)
document.getElementById("botaoEnviar").addEventListener("click", validaFormulario)


function validaFormulario() {
    if(document.getElementById("nomeUsuario").value != "" && document.getElementById("emailUsuario").value != "" && document.getElementById("telefoneUsuario") != "") {
        alert("Prontinho! Você receberá as novidades por email.")
    }else{
        alert("Por favor, preencha os campos nome, email e telefone!")
    }
}
