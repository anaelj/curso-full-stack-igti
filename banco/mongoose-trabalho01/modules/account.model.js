import mongoose from 'mongoose';

const accountSchema = mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    agencia: {
        type: Number,
        require: true
    },
    conta: {
        type: Number,
        require: true
    },
    balance: {
        type: Number,
        require: true,
        min: 0
        // validate(value){
        //     if (value < 0) {
        //         throw new Error('Valor menor que zero não é permitido!');
        //     }
        // }
    },
    lastModified: {
        type: Date,
        require: Date.now()
    }
});

const accountModel = mongoose.model('account', accountSchema, 'accounts');

export {accountModel};