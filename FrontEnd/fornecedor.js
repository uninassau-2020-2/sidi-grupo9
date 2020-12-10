function cadastrarFornecedor() {
    cdFornecedor = document.getElementById('codigo').value
    nmFornecedor = document.getElementById('nmFornecedor').value
    cpfCnpj = document.getElementById('cpfCnpj').value
    snAtivo = document.getElementById('snAtivo').value

var myHeaders = new Headers();

var myInit = { method: 'POST',
headers: { "Content-Type": "application/json; charset=UTF-8" },
mode: 'cors',
body: JSON.stringify({

fantasy_name: nmFornecedor,
cnpj_cpf: cpfCnpj
}),

cache: 'default' };

 fetch('http://localhost:9993/provider',myInit)
.then(response => {
}); {
    alert("Fornecedor cadastrado com sucesso!");
  return response.json();
};
};

function deletarFornecedor(){

    cdFornecedor = document.getElementById('codigo').value
    nmFornecedor = document.getElementById('nmFornecedor').value
    cpfCnpj = document.getElementById('cpfCnpj').value
    snAtivo = document.getElementById('snAtivo').value

       var myHeaders = new Headers();

       var myInit = { method: 'DELETE',
        headers: { "Content-Type": "application/json; charset=UTF-8" },
        mode: 'cors',
        cache: 'default'
       };

        fetch('http://localhost:9993/provider/'+ cdFornecedor, myInit)
      .then(function(response) {
        return response.json(), LimparTela();
});

};

function atualizarFornecedor() {
    cdFornecedor = document.getElementById('codigo').value
    nmFornecedor = document.getElementById('nmFornecedor').value
    cpfCnpj = document.getElementById('cpfCnpj').value
    snAtivo = document.getElementById('snAtivo').value

       var myHeaders = new Headers();

       var myInit = { method: 'PUT',
       headers: { "Content-Type": "application/json; charset=UTF-8" },
       mode: 'cors',
       body: JSON.stringify({

        id: cdFornecedor,
        fantasy_name: nmFornecedor,
        cnpj_cpf: cpfCnpj,
        active:   snAtivo
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
        document.getElementById('codigo').value=(data.providers[0].id);
        document.getElementById('nmFornecedor').value=(data.providers[0].fantasy_name);
        document.getElementById('cpfCnpj').value=(data.providers[0].cnpj_cpf);
        document.getElementById('snAtivo').checked=(data.providers[0].active);
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
  document.getElementById('nmFornecedor').value=(data.fantasy_name);
  document.getElementById('cpfCnpj').value=(data.cnpj_cpf);
  document.getElementById('snAtivo').value=(data.active);
  });
});

}
};

function LimparTela(){
    document.getElementById('codigo').value="";
    document.getElementById('nmFornecedor').value="";
    document.getElementById('cpfCnpj').value="";
    document.getElementById('snAtivo').checked= false;

}
