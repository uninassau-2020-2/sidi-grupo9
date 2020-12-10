

function criarconta(){

    

    cdusuario = document.getElementById('Cusuario').value
    senha = document.getElementById('Csenha').value
    confrimaSenha = document.getElementById('Cconfirmasenha').value
    Cemail = document.getElementById('Cemail').value
    CConfirmaEmail = document.getElementById('Cconfirmaemail').value
    Cnome = document.getElementById('Cnome').value
    Cnascimento = document.getElementById('Cnascimento').value
    job = document.getElementById('job').value

    if(senha != confrimaSenha){

        return alert("Senhas diferente!");
    }

    if(Cemail != CConfirmaEmail){

        return alert("E-mails diferente!");
    }

    if(cdusuario == null &&  senha == null && Cnome == null  && Cnascimento == null ){
        
        return alert("Campos obrigatórios faltantes, favor verificar!");
    }

var myHeaders = new Headers();

var myInit = { method: 'POST',
headers: { "Content-Type": "application/json; charset=UTF-8" },
mode: 'cors',
body: JSON.stringify({

    // campoo do banco de dados
: cdusuario,
: senha,
: Cemail,
: Cnome,
: Cnascimento,
: job
}),

cache: 'default' };

 fetch('http://localhost:9993/provider',myInit)
.then(response => {
}); {
    alert("Cadastrado realizado com sucesso!");
  return response.json();
};
};

} 