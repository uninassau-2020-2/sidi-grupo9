

function cadastrarClientes() {
    cdClientes = document.getElementById('codigo').value
    cepClientes = document.getElementById('cep').value
    ruaClientes = document.getElementById('rua').value
    bairroClientes = document.getElementById('bairro').value
    cidadeClientes = document.getElementById('cidade').value
    ufClientes = document.getElementById('uf').value
}

var myHeaders = new Headers();

var myInit = { method: 'POST',
headers: { "Content-Type": "application/json; charset=UTF-8" },
mode: 'cors',
body: JSON.stringify({
cd_produto: cdClientes,
nm_produto: cepClientes,
vl_produto: ruaClientes,
tp_produto: bairroClientes,
sn_ativo:   cidadeClientes,
sn_ativo:   ufClientes
      }),
cache: 'default' };

 fetch('http://localhost:8080/api/produtoSave',myInit)
.then(function(response) {
  return response.json().then(data => {

    document.getElementById('codigo').value=(data.id_produto);
    document.getElementById('cep').value=(data.cd_produto);
    document.getElementById('rua').value=(data.nm_produto);
    document.getElementById('bairro').value=(data.vl_produto);
    document.getElementById('cidade').value=(data.sn_ativo);
    document.getElementById('uf').value=(data.tp_produto);

  });

});