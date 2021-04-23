import express from 'express';
import { accountModel } from '../modules/account.model.js';

const accountRouter = express();

accountRouter.post('/account', async (req, res)=> {
   try {
       const account = new accountModel(req.body);

       await account.save();

       res.send(account);
   } catch (error) {
       res.status(500).send(error);
   } 
})

accountRouter.get('/account', async (req, res)=> {
    try {
        const account = await accountModel.find({});
        res.send(account);

    } catch (error) {
        res.status(500).send(error);
    }
});

accountRouter.patch('/account/:id', async (req, res)=> {
    try {
        const id = req.params.id;

        const account = await accountModel.findByIdAndUpdate({_id: id}, req.body, {new: true});

        res.send(account);

    } catch (error) {
        res.status(500).send(error);
    }
});

accountRouter.patch('/deposit', async (req, res)=> {
    try {
        const accountDeposit = req.body;
        const {agencia, conta, value } = accountDeposit;

        const account = await accountModel.findOne({agencia, conta});

        if (account) {
            account.balance += parseInt(value);
            await account.save();
            res.send(account);
        } else {
            res.status(404).send('Conta não encontrada');
        }

    } catch (error) {
        res.status(500).send(error);
    }
});
accountRouter.patch('/moveprivate', async (req, res)=> {
    try {
        const accountPrivate = await accountModel.findOne().sort({balance: -1}).limit(1);
//        res.send(accountPrivate);

        if (accountPrivate) {
            accountPrivate.agencia = 99;
            accountPrivate.save();
            res.send(accountPrivate);

        } else {
            res.status(404).send('Conta não encontrada');
        }

    } catch (error) {
        res.status(500).send(error);
    }

});
accountRouter.patch('/balance', async (req, res)=> {
    try {
        const accountDeposit = req.body;
        const {agencia, conta } = accountDeposit;
        const account = await accountModel.findOne({agencia, conta});

        if (account) {
            res.send(account);
        } else {
            res.status(404).send('Conta não encontrada');
        }

    } catch (error) {
        res.status(500).send(error);
    }
});
accountRouter.get('/minbalance/:limit', async (req, res)=> {
    try {
        const limit = req.params.limit;
        
        const accountList = await accountModel.find().sort({balance: 1}).limit(parseInt( limit));

        if (accountList) {
            res.send(accountList);
        } else {
            res.status(404).send('Conta não encontrada');
        }

    } catch (error) {
        res.status(500).send(error);
    }
});
accountRouter.get('/rich/:limit', async (req, res)=> {
    try {
        const limit = req.params.limit;
        
        const accountList = await accountModel.find().sort({balance: -1}).limit(parseInt( limit));

        if (accountList) {
            res.send(accountList);
        } else {
            res.status(404).send('Conta não encontrada');
        }

    } catch (error) {
        res.status(500).send(error);
    }
});

accountRouter.get('/average/:agenceID', async (req, res)=> {
    try {
        const agenceID = req.params.agenceID;
      //  console.log(agenceID);

        const agenceAverage = await accountModel.aggregate([
            {
                $match: {
                    agencia: parseInt(agenceID)
                }
            },
            {
                $group: {
                    _id: '$agencia',
                    media: {
                        $avg: '$balance'
                    }
                }
            }
        ]);

        if (agenceAverage) {
            res.send(agenceAverage);
        } else {
            res.status(404).send('Sem dados para resultado!');
        }

    } catch (error) {
        res.status(500).send(error);
    }
});
accountRouter.patch('/transfer', async (req, res)=> {
    try {
        const transfer = req.body;
        console.log(req.body);    
        const {contaOrigem, contaDestino, value } = transfer;
        let rateTransfer = contaDestino.agencia === contaOrigem.agencia ? 0 : 8;
        const accountOrigem = await accountModel.findOne({agencia: contaOrigem.agencia, conta: contaOrigem.conta});
        const accountDestino = await accountModel.findOne({agencia: contaDestino.agencia, conta: contaDestino.conta});

        if (!accountOrigem) {
            res.status(404).send('Conta de origem não encontrada!');
        } else
        if (!accountDestino) {
            res.status(404).send('Conta de destino não encontrada!');
        } else if ( accountOrigem.balance < value+rateTransfer) {
            res.status(404).send('Conta de origem não possui saldo para esta operação!');
        } else {
            accountDestino.balance += parseInt(value);
            accountOrigem.balance -= parseInt(value+rateTransfer);
            accountOrigem.save();
            accountDestino.save();
            res.send(accountOrigem);
        }

    } catch (error) {
        res.status(500).send(error);
    }
});
accountRouter.patch('/withdraw', async (req, res)=> {
    try {
        const accountDeposit = req.body;
        const rateSaque = 1;
        const {agencia, conta, value } = accountDeposit;
        const account = await accountModel.findOne({agencia, conta});

        if (account) {
            if ( account.balance < parseInt(value+rateSaque)) {
                res.status(404).send('Conta sem saldo para saque!');
            }
            else {
                account.balance -= parseInt(value+rateSaque);
                await account.save();
                res.send(account);
            }
        } else {
            res.status(404).send('Conta não encontrada');
        }

    } catch (error) {
        res.status(500).send(error);
    }
});

accountRouter.delete('/account', async (req, res)=> {
    try {
        const dropedAccount = req.body;
        const {agencia, conta } = dropedAccount;

       const data = await accountModel.findOneAndDelete({agencia, conta});

       if (!data){
         res.status(404).send('Documento não encontrado')
       } else {
        const docs = await accountModel.find({agencia});  
         res.send(`Documento excluído, restam ${docs.length} documentos`);
       }

    } catch (error) {
        res.status(500).send(error);
    }
})

export {accountRouter};