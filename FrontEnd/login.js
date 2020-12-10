function login(){

    loginusuario = document.getElementById('loginusuario').value
    loginsenha = document.getElementById('loginsenha').value


    if (loginusuario == "") {

      alert('Preencha o campo email');
      formuser.loginusuario.focus();
      return false;
    }

    if (loginsenha == "" ) {

      alert('Preencha o campo senha ');
      formuser.loginsenha.focus();
      return false;
    }


var myHeaders = new Headers();

var myInit = { method: 'POST',
headers: { "Content-Type": "application/json; charset=UTF-8" },
mode: 'cors',
body: JSON.stringify({

email: loginusuario,
password: loginsenha

      }),
cache: 'default' };

fetch('http://localhost:9993/sessions',myInit)
.then(response => {
 return response.json().then(data => {
     if(data.user) {
        window.location.href="cadastroefetuado.html"
     }else if(data.error){
         alert("Usuario ou senha invalidos")
     }

 });
});

}

function sair() {
    window.location.href="index.html"
}
