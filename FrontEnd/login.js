function login(){

    loginusuario = document.getElementById('loginusuario').value
    loginsenha = document.getElementById('loginsenha').value


    if (loginusuario == "") {
  
      alert('Preencha o campo email');
      formuser.loginusuario.focus();
      return false;
    }

    if (pass == "" ) {
  
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

 fetch('http://localhost:3333/session',myInit)
 .then(function(response) {
  if(response.status == 200){
  return window.location = "";}
  else{
  alert("Usuario não encontrado");  
  return  window.location = "";
  }
});

}




