const smc = require('simple-mongoose-creator');

smc.smc('clientes', {
    nome: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        trim: true,
    },
    telefone: {
        type: String,
        required: true
    },
    cpf: {
        type: String,
        required: false
    }
});

module.exports = smc;