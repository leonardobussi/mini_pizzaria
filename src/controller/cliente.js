const  Cliente = require('../resources/cliente');

exports.getCriar =  async (req, res, next) => {
    try {
        return res.send('view  de cadastro de clientes');
    } catch (err) {
        next(err);
    }
}

exports.postCriar =  async (req, res, next) => {
    try {
       let resultado = await Cliente.validarRegistro(req.body);
       if(!resultado){
        const cliente = await Cliente.criar(req.body);
        return res.json(cliente);
       }else {
           return res.json({error: 'cliente ja foi registrado'});
       }
    } catch (err) {
        next(err);
    }
}

exports.buscarTodos = async (req, res, next) => {
    try {
        const todos = await Cliente.buscarTodos();
        return res.json(todos);
    } catch (err) {
        next(err);
    }
}