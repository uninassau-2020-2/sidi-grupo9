function cadastrarFornecedor() {
    codigo = document.getElementById('codigo').value
    name = document.getElementById('name').value
    login = document.getElementById('login').value
    senha = document.getElementById('senha').value

var myHeaders = new Headers();

var myInit = { method: 'POST',
headers: { "Content-Type": "application/json; charset=UTF-8" },
mode: 'cors',
body: JSON.stringify({

: codigo,
: name,
: login,
: senha
}),

cache: 'default' };

 fetch('http://localhost:9993/provider',myInit)
.then(response => {
}); {
    alert("Vendedor cadastrado com sucesso!");
  return response.json();
};
};

function deletaFornecedor(){

    codigo = document.getElementById('codigo').value
    name = document.getElementById('name').value
    login = document.getElementById('login').value
    senha = document.getElementById('senha').value

       var myHeaders = new Headers();

       var myInit = { method: 'DELETE',
       headers: { "Content-Type": "application/json; charset=UTF-8" },
       mode: 'cors',
       body: JSON.stringify({
        : codigo,
        : name,
        : login,
        : senha
             }),
       cache: 'default' };

        fetch('http://localhost:9993/provider/'+ cdFornecedor,myInit)
      .then(function(response) {

});
      LimparTela();

};

function atualizarFornecedor() {
    codigo = document.getElementById('codigo').value
    name = document.getElementById('name').value
    login = document.getElementById('login').value
    senha = document.getElementById('senha').value

       var myHeaders = new Headers();

       var myInit = { method: 'PUT',
       headers: { "Content-Type": "application/json; charset=UTF-8" },
       mode: 'cors',
       body: JSON.stringify({

        : codigo,
        : name,
        : login,
        : senha
             }),
       cache: 'default' };

        fetch('http://localhost:9993/provider/'+cdFornecedor, myInit)
      .then(function(response) {
         return response.json(), alert("Fornecedor atualizado!");
});

};

function buscarFornecedor(){
  cdFornecedor = document.getElementById('codigo').value;
if (cdFornecedor != null ){
    var myHeaders = new Headers();
    var myInit = { method: 'GET',
    headers: { "Content-Type": "application/json; charset=UTF-8" },
    mode: 'cors',
    cache: 'default' };

fetch('http://localhost:9993/provider/'+cdFornecedor,myInit)
.then(function(response) {
 return response.json().then(data => {
    if (!data.providers[0]) {
       return alert("Fornecedor não existe!");
    }
        codigo = document.getElementById('codigo').value=(data.providers[0].);
        name = document.getElementById('name').value=(data.providers[0].);
        login = document.getElementById('login').value=(data.providers[0].);
        senha = document.getElementById('senha').value=(data.providers[0].);
    });
});

}
else{

     var myHeaders = new Headers();

     var myInit = { method: 'GET',
     headers: { "Content-Type": "application/json; charset=UTF-8" },
     mode: 'cors',
     cache: 'default' };

fetch('http://localhost:9993/provider',myInit)
.then(function(response) {
 return response.json().then(data => {

  document.getElementById('codigo').value=(data.id)
  document.getElementById('name').value=(data.fantasy_name);
  document.getElementById('login').value=(data.cnpj_cpf);
  document.getElementById('senha').value=(data.active);
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



