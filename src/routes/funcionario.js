const Funcionario = require('../controller/funcionario');
const auth = require('../middleware/auth');

const express = require('express');
const router = express.Router();

router.get('/', Funcionario.getCriar);
router.post('/', Funcionario.postCriar);

router.get('/deslogar', Funcionario.getDeslogar);
router.get('/todos', auth.autorizar, Funcionario.buscarTodos);

router.get('/logar', Funcionario.getLogar);
router.post('/logar', Funcionario.postLogar);




module.exports = router;