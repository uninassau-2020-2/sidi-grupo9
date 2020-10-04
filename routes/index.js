var express = require('express');
var router = express.Router();
var axios = require('axios');
var validacep = /^[0-9]{8}$/;

/* GET home page. */
router.get('/:cep', function(req, res, next) {

const cep = req.params.cep;

if(validacep.test(cep)) {

axios.get('https://viacep.com.br/ws/'+cep+'/json/')
  .then(function(response){
    res.send(response.data);
  })
  .catch(function (error) {
    // handle error
    res.send({'erro':'Cep não encontrado.'});
    console.log(error);
  });
} else {
    //cep é inválido.
    res.send({'erro':'Formato de CEP inválido.'})
}
});

module.exports = router;