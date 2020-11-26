function login(){

    loginusuario = document.getElementById('loginusuario').value
    loginsenha = document.getElementById('loginsenha').value
   

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
  return response.json().then(data => {

    document.getElementById('loginusuario').value=(data.email);

});

});



}