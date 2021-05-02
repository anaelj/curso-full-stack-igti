import mongoose from 'mongoose';

import TransactionModel from '../models/TransactionModel.js';

//const ObjectId = mongoose.Types.ObjectId;

const getTransactions = async (req, res) => {
    try {

        const period = req.query.period;

        const criteria = {"month": parseInt(period.split("-")[1]), "year": parseInt(period.split("-")[0]) };

        const data = await TransactionModel.find(criteria);

        if (!data){
            res.status(404).send('Não há movimentações neste período')
        } else {
            res.send(data);
        }
      } catch (error) {
        res.status(500).send(error);
    }

}
const insertTransaction = async (req, res) => {
    try {
        const newTransaction = new TransactionModel(req.body);
        await newTransaction.save();
        res.send(newTransaction);
      } catch (error) {
        res.status(500).send(error);
    }
}
const putTransaction = async (req, res) => {
    try {
        const id = req.params.id;

        const updatedTransaction = await TransactionModel.findByIdAndUpdate({_id: id}, req.body, {new: true});

        await updatedTransaction.save();
        res.send(updatedTransaction);
      } catch (error) {
        res.status(500).send(error);
    }
}

const deleteTransaction = async (req, res) => {
    try {
//       console.log(req.params.id)
        const data = await TransactionModel.findByIdAndDelete(req.params.id);

        res.send(data);
      } catch (error) {
        res.status(500).send(error);
    }
}

export default {getTransactions, insertTransaction , deleteTransaction, putTransaction} ;