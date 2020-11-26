

function cadastrarFornecedor() {
    cdFornecdor = document.getElementById('codigo').value
    nmFornecedor = document.getElementById('nome').value
    cpfCnpj = document.getElementById('cnpj').value
    snAtivo = document.getElementById('snativo').value


var myHeaders = new Headers();

var myInit = { method: 'POST',
headers: { "Content-Type": "application/json; charset=UTF-8" },
mode: 'cors',
body: JSON.stringify({

fantasy_name: nmFornecedor,
cnpf_cpf: cpfCnpj,
active:   snAtivo

      }),
cache: 'default' };

 fetch('http://localhost:3333/provider',myInit)
.then(function(response) {
  return response.json().then(data => {
    document.getElementById('codigo').value=(data.id)
    document.getElementById('nmFornecedor').value=(data.fantasy_name);
    document.getElementById('cpfCnpj').value=(data.cnpf_cpf);
    document.getElementById('snAtivo').value=(data.active);
});

});

}

function deletaFornecedor(){

    cdFornecdor = document.getElementById('codigo').value
    nmFornecedor = document.getElementById('nome').value
    cpfCnpj = document.getElementById('cnpj').value
    snAtivo = document.getElementById('snativo').value
     
       var myHeaders = new Headers();

       var myInit = { method: 'DELETE',
       headers: { "Content-Type": "application/json; charset=UTF-8" },
       mode: 'cors',
       body: JSON.stringify({
        fantasy_name: nmFornecedor,
        cnpf_cpf: cpfCnpj,
        active:   snAtivo
             }),
       cache: 'default' };

        fetch('http://localhost:3333/provider/'+ cdFornecdor,myInit)
      .then(function(response) {
         
});
      LimparTela();

};


function atualizarFornecedor() {

  
    cdFornecdor = document.getElementById('codigo').value
    nmFornecedor = document.getElementById('nome').value
    cpfCnpj = document.getElementById('cnpj').value
    snAtivo = document.getElementById('snativo').value
     
       var myHeaders = new Headers();

       var myInit = { method: 'PUT',
       headers: { "Content-Type": "application/json; charset=UTF-8" },
       mode: 'cors',
       body: JSON.stringify({
        fantasy_name: nmFornecedor,
        cnpf_cpf: cpfCnpj,
        active:   snAtivo
             }),
       cache: 'default' };

        fetch('http://localhost:3333/provider/'+cdFornecdor,myInit)
      .then(function(response) {
         return response.json()
});

};

function BuscarFornecedor(){


  cdFornecedor = document.getElementById('codigo').value;

if (cdFornecedor != null ){

  
   document.getElementById('nome').value="...";
   document.getElementById('cnpj').value="...";
   document.getElementById('snativo').value="...";

   
     var myHeaders = new Headers();

     var myInit = { method: 'GET',
     headers: { "Content-Type": "application/json; charset=UTF-8" },
     mode: 'cors',
     cache: 'default' };

fetch('http://localhost:3333/provider'+cdFornecedor,myInit)
.then(function(response) {
 return response.json().then(data => {

  document.getElementById('codigo').value=(data.id)
  document.getElementById('nmFornecedor').value=(data.fantasy_name);
  document.getElementById('cpfCnpj').value=(data.cnpf_cpf);
  document.getElementById('snAtivo').value=(data.active);
});
  
  


});

}
else{

     var myHeaders = new Headers();

     var myInit = { method: 'GET',
     headers: { "Content-Type": "application/json; charset=UTF-8" },
     mode: 'cors',
     cache: 'default' };

fetch('http://localhost:3333/provider',myInit)
.then(function(response) {
 return response.json().then(data => {

  document.getElementById('codigo').value=(data.id)
  document.getElementById('nmFornecedor').value=(data.fantasy_name);
  document.getElementById('cpfCnpj').value=(data.cnpf_cpf);
  document.getElementById('snAtivo').value=(data.active);
  });
});

}  



}; 



function LimparTela(){


    document.getElementById('codigo').value=" ";
    document.getElementById('nome').value=" ";
    document.getElementById('cpfCnpj').value=" ";
    document.getElementById('snativo').value=" ";
    
}



