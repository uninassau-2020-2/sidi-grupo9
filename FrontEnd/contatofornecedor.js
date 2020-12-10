
function cadastrarContato() {
    cdFornecedor = document.getElementById('codigoFornec').value
    cdContato = document.getElementById('codigo').value
    email = document.getElementById('email').value
    telefone = document.getElementById('telefone').value
    cep = document.getElementById('cep').value
    logradouro = document.getElementById('logradouro').value
    nCasa = document.getElementById('nCasa').value
    bairro = document.getElementById('bairro').value
    cidade = document.getElementById('cidade').value
    uf = document.getElementById('uf').value
    complemento = document.getElementById('complemento').value

var myHeaders = new Headers();

var myInit = { method: 'POST',
headers: { "Content-Type": "application/json; charset=UTF-8" },
mode: 'cors',
body: JSON.stringify({

provider_id: cdFornecedor,
email: email,
phone_number: telefone,
postal_code: cep,
place: logradouro,
number: nCasa,
district: bairro,
city: cidade,
state: uf,
complement: complemento
}),

cache: 'default' };

 fetch('http://localhost:9993/contact',myInit)
.then(response => {
    alert("Contato cadastrado com sucesso!");
  return response.json();
});
};

function deletaContato(){

    cdContato = document.getElementById('codigo').value

       var myHeaders = new Headers();

       var myInit = { method: 'DELETE',
       headers: { "Content-Type": "application/json; charset=UTF-8" },
       mode: 'cors',
       body: JSON.stringify({
        fantasy_name: nmFornecedor,
        cnpj_cpf: cpfCnpj,
        active:   snAtivo
             }),
       cache: 'default' };

        fetch('http://localhost:9993/provider/'+ cdFornecedor,myInit)
      .then(function(response) {

});
      LimparTela();

};

function atualizarContato() {
    cdFornecedor = document.getElementById('codigoFornec').value
    cdContato = document.getElementById('codigo').value
    email = document.getElementById('email').value
    telefone = document.getElementById('telefone').value
    cep = document.getElementById('cep').value
    logradouro = document.getElementById('logradouro').value
    nCasa = document.getElementById('nCasa').value
    bairro = document.getElementById('bairro').value
    cidade = document.getElementById('cidade').value
    uf = document.getElementById('uf').value
    complemento = document.getElementById('complemento').value

       var myHeaders = new Headers();

       var myInit = { method: 'PUT',
       headers: { "Content-Type": "application/json; charset=UTF-8" },
       mode: 'cors',
       body: JSON.stringify({

        provider_id: cdFornecedor,
        id: cdContato,
        email: email,
        phone_number: telefone,
        postal_code: cep,
        place: logradouro,
        number: nCasa,
        district: bairro,
        city: cidade,
        state: uf,
        complement: complemento
             }),
       cache: 'default' };

        fetch('http://localhost:9993/contact/'+cdContato, myInit)
      .then(function(response) {
         return response.json(), alert("Contato do fornecedor atualizado!");
});

};

function buscarContato(){
    cdContato = document.getElementById('codigo').value

if (cdContato != null ){
    var myHeaders = new Headers();
    var myInit = { method: 'GET',
    headers: { "Content-Type": "application/json; charset=UTF-8" },
    mode: 'cors',
    cache: 'default' };

fetch('http://localhost:9993/contact/'+cdContato, myInit)
.then(function(response) {
 return response.json().then(data => {
    if (!data.contacts[0]) {
       return alert("Contato não existe!");
    }
    document.getElementById('codigoFornec').value = data.contacts[0].provider_id;
    document.getElementById('codigo').value = data.contacts[0].id;
    document.getElementById('email').value = data.contacts[0].email;
    document.getElementById('telefone').value = data.contacts[0].phone_number;
    document.getElementById('cep').value = data.contacts[0].postal_code;
    document.getElementById('logradouro').value = data.contacts[0].place;
    document.getElementById('nCasa').value = data.contacts[0].number;
    document.getElementById('bairro').value = data.contacts[0].district;
    document.getElementById('cidade').value = data.contacts[0].city;
    document.getElementById('uf').value = data.contacts[0].state;
    document.getElementById('complemento').value = data.contacts[0].complement;
    });
});

}
else{

     var myHeaders = new Headers();

     var myInit = { method: 'GET',
     headers: { "Content-Type": "application/json; charset=UTF-8" },
     mode: 'cors',
     cache: 'default' };

fetch('http://localhost:9993/contact',myInit)
.then(function(response) {
 return response.json().then(data => {

    document.getElementById('codigoFornec').value = data.contacts[0].provider_id;
    document.getElementById('codigo').value = data.contacts[0].id;
    document.getElementById('email').value = data.contacts[0].email;
    document.getElementById('telefone').value = data.contacts[0].phone_number;
    document.getElementById('cep').value = data.contacts[0].postal_code;
    document.getElementById('logradouro').value = data.contacts[0].place;
    document.getElementById('nCasa').value = data.contacts[0].number;
    document.getElementById('bairro').value = data.contacts[0].district;
    document.getElementById('cidade').value = data.contacts[0].city;
    document.getElementById('uf').value = data.contacts[0].state;
    document.getElementById('complemento').value = data.contacts[0].complement;
  });
});

}
};


function LimparTela(){
    document.getElementById('codigoFornec').value = ""
    document.getElementById('codigo').value = ""
    document.getElementById('codigo').value = ""
    document.getElementById('email').value = ""
    document.getElementById('telefone').value = ""
    document.getElementById('cep').value = ""
    document.getElementById('logradouro').value = ""
    document.getElementById('nCasa').value = ""
    document.getElementById('bairro').value = ""
    document.getElementById('cidade').value = ""
    document.getElementById('uf').value = ""
    document.getElementById('complemento').value = ""
}
