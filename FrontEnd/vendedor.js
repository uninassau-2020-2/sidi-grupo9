function cadastrarVendedor() {
    codigo = document.getElementById('codigo').value
    name = document.getElementById('name').value
    login = document.getElementById('login').value
    senha = document.getElementById('senha').value

var myHeaders = new Headers();

var myInit = { method: 'POST',
headers: { "Content-Type": "application/json; charset=UTF-8" },
mode: 'cors',
body: JSON.stringify({

id: codigo,
name: name,
email: login,
password: senha
}),

cache: 'default' };

 fetch('http://localhost:9993/users',myInit)
.then(response => {
}); {
    alert("Vendedor cadastrado com sucesso!");
  return response.json();
};
};

// function deletaFornecedor(){

//     codigo = document.getElementById('codigo').value
//     name = document.getElementById('name').value
//     login = document.getElementById('login').value
//     senha = document.getElementById('senha').value

//        var myHeaders = new Headers();

//        var myInit = { method: 'DELETE',
//        headers: { "Content-Type": "application/json; charset=UTF-8" },
//        mode: 'cors',
//        body: JSON.stringify({
//         : codigo,
//         : name,
//         : login,
//         : senha
//              }),
//        cache: 'default' };

//         fetch('http://localhost:9993/users/'+ codigo, myInit)
//       .then(function(response) {

// });
//       LimparTela();

// };

function atualizarVendedor() {
    codigo = document.getElementById('codigo').value
    name = document.getElementById('name').value
    login = document.getElementById('login').value
    senha = document.getElementById('senha').value

       var myHeaders = new Headers();

       var myInit = { method: 'PUT',
       headers: { "Content-Type": "application/json; charset=UTF-8" },
       mode: 'cors',
       body: JSON.stringify({

        id: codigo,
        name: name,
        email: login,
        password: senha
             }),
       cache: 'default' };

        fetch('http://localhost:9993/users/'+codigo, myInit)
      .then(function(response) {
         return response.json(), alert("Vendedor atualizado!");
});

};

function visualizarVendedor(){
    codigo = document.getElementById('codigo').value
if (codigo != null ){
    var myHeaders = new Headers();
    var myInit = { method: 'GET',
    headers: { "Content-Type": "application/json; charset=UTF-8" },
    mode: 'cors',
    cache: 'default' };

fetch('http://localhost:9993/users/'+codigo, myInit)
.then(function(response) {
 return response.json().then(data => {
     console.log(">>>>>>>>>>>>>>>>>>>", data)
    if (!data.users[0]) {
       return alert("Vendedor não existe!");
    }
        codigo = document.getElementById('codigo').value=(data.users[0].id);
        name = document.getElementById('name').value=(data.users[0].name);
        login = document.getElementById('login').value=(data.users[0].email);
        //senha = document.getElementById('senha').value=(data.providers[0].password);
    });
});

}
else{

     var myHeaders = new Headers();

     var myInit = { method: 'GET',
     headers: { "Content-Type": "application/json; charset=UTF-8" },
     mode: 'cors',
     cache: 'default' };

fetch('http://localhost:9993/users',myInit)
.then(function(response) {
 return response.json().then(data => {

  document.getElementById('codigo').value=(data.id)
  document.getElementById('name').value=(data.name);
  document.getElementById('login').value=(data.email);
  //document.getElementById('senha').value=(data.password);
  });
});

}
};



function LimparTela(){
    document.getElementById('codigo').value=" ";
    document.getElementById('name').value=" ";
    document.getElementById('login').value=" ";
    document.getElementById('senha').value=" ";

}



