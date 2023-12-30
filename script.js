function alerta() {
    
let email = document.getElementById('email').value;
let senha = document.getElementById('senha').value;

if(email !== '' && senha !== '') {
    alert('Dados Enviados Com Sucesso');
}else{
    alert('Digite Email e Senha');
}
}