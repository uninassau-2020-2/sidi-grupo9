function cadastrarFornecedor() {
    idproduto = document.getElementById('idproduto').value
    nomeproduto = document.getElementById('nomeproduto').value
    nrpreco = document.getElementById('nrpreco').value
    nrquantidade = document.getElementById('nrquantidade').value
    TPCategoria = document.getElementById('TPCategoria').value

    var myHeaders = new Headers();

    var myInit = { method: 'POST',
    headers: { "Content-Type": "application/json; charset=UTF-8" },
    mode: 'cors',
    body: JSON.stringify({

    : idproduto,
    : nomeproduto,
    : nrpreco,
    : nrquantidade,
    : TPCategoria
        }),

    cache: 'default' };

    fetch('http://localhost:9993/provider',myInit)
    .then(response => {
    }); {
        alert("Produto cadastrado com sucesso!");
    return response.json();
    };
};

function deletaFornecedor(){

    idproduto = document.getElementById('idproduto').value
    nomeproduto = document.getElementById('nomeproduto').value
    nrpreco = document.getElementById('nrpreco').value
    nrquantidade = document.getElementById('nrquantidade').value
    TPCategoria = document.getElementById('TPCategoria').value

       var myHeaders = new Headers();

       var myInit = { method: 'DELETE',
       headers: { "Content-Type": "application/json; charset=UTF-8" },
       mode: 'cors',
       body: JSON.stringify({
        : idproduto,
        : nomeproduto,
        : nrpreco,
        : nrquantidade,
        : TPCategoria
             }),
       cache: 'default' };

        fetch('http://localhost:9993/provider/'+ cdFornecedor,myInit)
      .then(function(response) {

});
      LimparTela();

};

function atualizarFornecedor() {
    idproduto = document.getElementById('idproduto').value
    nomeproduto = document.getElementById('nomeproduto').value
    nrpreco = document.getElementById('nrpreco').value
    nrquantidade = document.getElementById('nrquantidade').value
    TPCategoria = document.getElementById('TPCategoria').value

       var myHeaders = new Headers();

       var myInit = { method: 'PUT',
       headers: { "Content-Type": "application/json; charset=UTF-8" },
       mode: 'cors',
       body: JSON.stringify({

        : idproduto,
        : nomeproduto,
        : nrpreco,
        : nrquantidade,
        : TPCategoria
             }),
       cache: 'default' };

        fetch('http://localhost:9993/provider/'+cdFornecedor, myInit)
      .then(function(response) {
         return response.json(), alert("Produto atualizado!");
        });
};


function buscarFornecedor(){
    cdFornecedor = document.getElementById('idproduto').value;
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
         return alert("Produto não existe!");
      }

      idproduto = document.getElementById('idproduto').value=(data.providers[0].);
      nomeproduto = document.getElementById('nomeproduto').value=(data.providers[0].);
      nrpreco = document.getElementById('nrpreco').value=(data.providers[0].);
      nrquantidade = document.getElementById('nrquantidade').value=(data.providers[0].);
      TPCategoria = document.getElementById('TPCategoria').value=(data.providers[0].);

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

    idproduto = document.getElementById('idproduto').value=(data.);
    nomeproduto = document.getElementById('nomeproduto').value=(data.);
    nrpreco = document.getElementById('nrpreco').value=(data.);
    nrquantidade = document.getElementById('nrquantidade').value=(data.);
    TPCategoria = document.getElementById('TPCategoria').value=(data.);
    });
  });
  
  }
};

function LimparTela(){

    idproduto = document.getElementById('idproduto').value=" ";
    nomeproduto = document.getElementById('nomeproduto').value=" ";
    nrpreco = document.getElementById('nrpreco').value=" ";
    nrquantidade = document.getElementById('nrquantidade').value=" ";
    TPCategoria = document.getElementById('TPCategoria').value=" ";

}