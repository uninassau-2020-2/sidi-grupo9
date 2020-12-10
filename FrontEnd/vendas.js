function f() {
    
    setaVl()
    document.getElementsByClassName('dropdown')[0].classList.toggle('down');
    document.getElementsByClassName('arrow')[0].classList.toggle('gone');
    if (document.getElementsByClassName('dropdown')[0].classList.contains('down')) {
      setTimeout(function() {
        document.getElementsByClassName('dropdown')[0].style.overflow = 'visible'
      }, 500)

    } else {
      document.getElementsByClassName('dropdown')[0].style.overflow = 'hidden'
      
    }
    
  }


function buscaProduto(idProduto) {
    if (idProduto != null ){

    document.getElementById('nm_produto').value="...";
    document.getElementById('vl_produto').value="...";


     
       var myHeaders = new Headers();

       var myInit = { method: 'GET',
       headers: { "Content-Type": "application/json; charset=UTF-8" },
       mode: 'cors',
       cache: 'default' };

        fetch('http://localhost:8080/api/produto/'+idProduto+'/json',myInit)
      .then(function(response) {
         return response.json().then(data => {

    document.getElementById('nm_produto').value=(data.nm_produto);
    document.getElementById('vl_produto').value=(data.vl_produto);

});
    
    


});

}//FIM IF
 else{

       var myHeaders = new Headers();

       var myInit = { method: 'GET',
       headers: { "Content-Type": "application/json; charset=UTF-8" },
       mode: 'cors',
       cache: 'default' };

        fetch('http://localhost:8080/api/produtos',myInit)
      .then(function(response) {
         return response.json().then(data => {

    document.getElementById('id_produto').value=(data.id_produto);
    document.getElementById('cd_produto').value=(data.cd_produto);
    document.getElementById('nm_produto').value=(data.nm_produto);
    document.getElementById('vl_produto').value=(data.vl_produto);
    document.getElementById('sn_ativo').value=(data.sn_ativo);
    });
 });
      
}  

}; 

function setaVl(){
    
    var valor = 0.0
    var quantidade = 0.0 
    var desconto = 0.0
    
    resultado = 0.0 
    valor = document.getElementById('vl_produto').value
    quantidade = document.getElementById('quantidade').value
    desconto = document.getElementById('desconto').value
    if(desconto != null){

        resultado = (valor * quantidade) - desconto
        document.getElementById('valor_total_final').value = resultado 
        
    }
    else{
        resultado = valor * quantidade
        document.getElementById('valor_total_final').value = resultado 
    }


}

function RetornaDataHoraAtual(){
  var dNow = new Date();
  var localdate = dNow.getDate() + '-' + (dNow.getMonth()+1) + '-' + dNow.getFullYear() + "" + dNow.getHours() + ":" + dNow.getMinutes() + ":" + dNow.getSeconds();
  return localdate;
  } 




function LimparTela(){
  document.getElementById('valor_total_final').value= null;
  document.getElementById('nm_produto').value=null;
  document.getElementById('desconto').value=null;
  document.getElementById('vl_produto').value=null;
  document.getElementById('quantidade').value=null;
  document.getElementById('id_produto').value=null;
 
}

function inserirPedido(){
    snAtivo = 'N'
    var dNow = new Date();
    var localdate = dNow.getDate() + '-' + (dNow.getMonth()+1) + '-' + dNow.getFullYear() + " " + dNow.getHours() + ":" + dNow.getMinutes() + ":" + dNow.getSeconds();
    

    var checado = document.getElementById('avista');

            if(checado.checked){
              tpPagamento = 'A VISTA'
            }
            else{
              tpPagamento = 'CREDITO'
            }
            
        
            vltotproduto = document.getElementById('valor_total_final').value
            nmProduto = document.getElementById('nm_produto').value
            desconto = document.getElementById('desconto').value
            vlProduto = document.getElementById('vl_produto').value
            quantidade = document.getElementById('quantidade').value
            cdVendedor = localStorage.getItem("@ReiCangaco/cd_vendedor")
           
 			
               var myHeaders = new Headers();

               var myInit = { method: 'POST',
               headers: { "Content-Type": "application/json; charset=UTF-8" },
               mode: 'cors',
               body: JSON.stringify({
               vl_produto: vlProduto,
               quantidade: quantidade,
               nm_produto: nmProduto,
               vl_desconto: desconto,
               vl_total: vltotproduto,
               id_vendedor: cdVendedor,
               tp_pagamento: tpPagamento,
               dt_pedido: localdate
                     }),
               cache: 'default' };

 			   fetch('http://localhost:8080/api/pedidoSave',myInit)
			  .then(function(response) {
  			   return response.json().then(data => {

  		

  			   });

        });
        LimparTela();
        alert("PEDIDO CRIADO!!!!!")
        

}

