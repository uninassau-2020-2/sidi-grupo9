function cadastrarProduto() {
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

    id: idproduto,
    name: nomeproduto,
    price: nrpreco
    //: nrquantidade,
    //: TPCategoria
        }),

    cache: 'default' };

    fetch('http://localhost:9993/product',myInit)
    .then(response => {
    }); {
        alert("Produto cadastrado com sucesso!");
    return response.json();
    };
};

function deletaProduto(){

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
        id: idproduto,
        name: nomeproduto,
        price: nrpreco
        //: nrquantidade,
        //: TPCategoria
             }),
       cache: 'default' };

        fetch('http://localhost:9993/product/'+ idproduto, myInit)
      .then(function(response) {

});
      LimparTela();

};

function atualizarProduto() {
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

        id: idproduto,
        name: nomeproduto,
        price: nrpreco
        //: nrquantidade,
        //: TPCategoria
             }),
       cache: 'default' };

        fetch('http://localhost:9993/product/'+idproduto, myInit)
      .then(function(response) {
         return response.json(), alert("Produto atualizado!");
        });
};


function buscarProduto(){
    idproduto = document.getElementById('idproduto').value
  if (idproduto != null ){
      var myHeaders = new Headers();
      var myInit = { method: 'GET',
      headers: { "Content-Type": "application/json; charset=UTF-8" },
      mode: 'cors',
      cache: 'default' };

  fetch('http://localhost:9993/product/'+idproduto,myInit)
  .then(function(response) {
   return response.json().then(data => {
      if (!data.products[0]) {
         return alert("Produto não existe!");
      }

      idproduto = document.getElementById('idproduto').value=(data.products[0].id);
      nomeproduto = document.getElementById('nomeproduto').value=(data.products[0].name);
      nrpreco = document.getElementById('nrpreco').value=(data.products[0].price);
    //   nrquantidade = document.getElementById('nrquantidade').value=(data.products[0].);
    //   TPCategoria = document.getElementById('TPCategoria').value=(data.products[0].);

      });
  });

  }
  else{

       var myHeaders = new Headers();

       var myInit = { method: 'GET',
       headers: { "Content-Type": "application/json; charset=UTF-8" },
       mode: 'cors',
       cache: 'default' };

  fetch('http://localhost:9993/product',myInit)
  .then(function(response) {
   return response.json().then(data => {

    idproduto = document.getElementById('idproduto').value=(data.id);
    nomeproduto = document.getElementById('nomeproduto').value=(data.name);
    nrpreco = document.getElementById('nrpreco').value=(data.price);
    // nrquantidade = document.getElementById('nrquantidade').value=(data.);
    // TPCategoria = document.getElementById('TPCategoria').value=(data.);
    });
  });

  }
};

function LimparTela(){

    idproduto = document.getElementById('idproduto').value="";
    nomeproduto = document.getElementById('nomeproduto').value="";
    nrpreco = document.getElementById('nrpreco').value=" ";
    nrquantidade = document.getElementById('nrquantidade').value="";
    TPCategoria = document.getElementById('TPCategoria').value="";
}
