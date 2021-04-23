import express from 'express';
import {studentRouter} from './routes/student.router.js';
import mongoose from 'mongoose';

(async ()=> {
    try {
        mongoose.connect("mongodb+srv://root:yF6yckzgMHBEln84@cluster0.gmms2.mongodb.net/grades?retryWrites=true&w=majority", {
     useNewUrlParser: true,
     useUnifiedTopology: true,   
    });
        
    } catch (error) {
        console.log(error);
    }
})();

const  app = express();
app.use(express.json());
app.use(studentRouter);

app.listen(3000, ()=> console.log('API Iniciada'));