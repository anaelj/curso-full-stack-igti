import express from 'express';

const transactionRouter = express.Router();

import service from '../services/transactionService.js';

transactionRouter.get('/', service.getTransactions );

transactionRouter.post('/', service.insertTransaction );

transactionRouter.delete('/:id', service.deleteTransaction );

transactionRouter.put('/:id', service.putTransaction );

export default {transactionRouter};

