

function cadastrarClientes() {
  codigoFonec = document.getElementById('codigoFonec').value
  cdClientes = document.getElementById('codigo').value
  Logradouro = document.getElementById('Logradouro').value
  nc = document.getElementById('nc').value
  cepClientes = document.getElementById('cep').value
  TelefoneFixo = document.getElementById('TelefoneFixo').value
  Celular = document.getElementById('Celular').value
  bairro = document.getElementById('bairro').value
  Complemento = document.getElementById('Complemento').value
  Email = document.getElementById('Email').value
  cidadeClientes = document.getElementById('cidade').value
  ufClientes = document.getElementById('uf').value
      
  var myHeaders = new Headers();

  var myInit = { method: 'POST',
  headers: { "Content-Type": "application/json; charset=UTF-8" },
  mode: 'cors',
  body: JSON.stringify({
    //verifica os campo do banco
    
  : codigoFonec,
  : cdClientes,
  : Logradouro,
  : nc,
  : cepClientes,
  : TelefoneFixo,
  : Celular,
  : bairro,
  : Complemento,
  : Email,
  : cidadeClientes,
  : ufClientes
        }),
  cache: 'default' };

  fetch('http://localhost:8080/api/produtoSave',myInit)
  .then(function(response) {
    return response.json().then(data => {
    //colocar o nome do banco depois do data.
      document.getElementById('codigoFonec').value=(data.);
      document.getElementById('codigo').value=(data.);
      document.getElementById('Logradouro').value=(data.);
      document.getElementById('nc').value=(data.);
      document.getElementById('cep').value=(data.);
      document.getElementById('TelefoneFixo').value=(data.);
      document.getElementById('Celular').value=(data.);
      document.getElementById('bairro').value=(data.);
      document.getElementById('Complemento').value=(data.);
      document.getElementById('Email').value=(data.);
      document.getElementById('cidade').value=(data.);
      document.getElementById('uf').value=(data.);
    });
  });
}

function deletarCliente(){
  codigoFonec = document.getElementById('codigoFonec').value
  cdClientes = document.getElementById('codigo').value
  Logradouro = document.getElementById('Logradouro').value
  nc = document.getElementById('nc').value
  cepClientes = document.getElementById('cep').value
  TelefoneFixo = document.getElementById('TelefoneFixo').value
  Celular = document.getElementById('Celular').value
  bairro = document.getElementById('bairro').value
  Complemento = document.getElementById('Complemento').value
  Email = document.getElementById('Email').value
  cidadeClientes = document.getElementById('cidade').value
  ufClientes = document.getElementById('uf').value
      
  var myHeaders = new Headers();

  var myInit = { method: 'DELETE',
  headers: { "Content-Type": "application/json; charset=UTF-8" },
  mode: 'cors',
  body: JSON.stringify({
    //verifica os campo do banco
  : codigoFonec,
  : cdClientes,
  : Logradouro,
  : nc,
  : cepClientes,
  : TelefoneFixo,
  : Celular,
  : bairro,
  : Complemento,
  : Email,
  : cidadeClientes,
  : ufClientes
        }),
  cache: 'default' };

  fetch('http://localhost:9993/provider/'+ cdFornecedor,myInit)
  .then(function(response) {

});
  LimparTela();

}


function buscarFornecedor(){
    cdFornecedor = document.getElementById('codigoFonec').value;
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
        return alert("Contato não existe!");
      }
      //colocar campos do banco de dados
          document.getElementById('codigoFonec').value=(data.providers[0].);
          document.getElementById('codigo').value=(data.providers[0].);
          document.getElementById('Logradouro').value=(data.providers[0].);
          document.getElementById('nc').value=(data.providers[0].);
          document.getElementById('cep').value=(data.providers[0].);
          document.getElementById('TelefoneFixo').value=(data.providers[0].);
          document.getElementById('Celular').value=(data.providers[0].);
          document.getElementById('bairro').value=(data.providers[0].);
          document.getElementById('Complemento').value=(data.providers[0].);
          document.getElementById('Email').value=(data.providers[0].);
          document.getElementById('cidade').value=(data.providers[0].);
          document.getElementById('uf').value=(data.providers[0].);
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
    //colocar o nome do banco depois do data.
    document.getElementById('codigoFonec').value=(data.);
    document.getElementById('codigo').value=(data.);
    document.getElementById('Logradouro').value=(data.);
    document.getElementById('nc').value=(data.);
    document.getElementById('cep').value=(data.);
    document.getElementById('TelefoneFixo').value=(data.);
    document.getElementById('Celular').value=(data.);
    document.getElementById('bairro').value=(data.);
    document.getElementById('Complemento').value=(data.);
    document.getElementById('Email').value=(data.);
    document.getElementById('cidade').value=(data.);
    document.getElementById('uf').value=(data.);
    });
  });

  }
};

function LimparTela(){
  document.getElementById('codigoFonec').value=" ";
  document.getElementById('codigo').value=" ";
  document.getElementById('Logradouro').value=" ";
  document.getElementById('nc').value=" ";
  document.getElementById('cep').value=" ";
  document.getElementById('TelefoneFixo').value=" ";
  document.getElementById('Celular').value=" ";
  document.getElementById('bairro').value=" ";
  document.getElementById('Complemento').value=" ";
  document.getElementById('Email').value=" ";
  document.getElementById('cidade').value=" ";
  document.getElementById('uf').value=" ";

}