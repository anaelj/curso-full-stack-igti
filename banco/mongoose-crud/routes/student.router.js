import express from 'express';
import { studentModel } from '../modules/student.model.js';

const studentRouter = express();

studentRouter.post('/student', async (req, res)=> {
   try {
       const student = new studentModel(req.body);

       await student.save();

       res.send(student);
   } catch (error) {
       res.status(500).send(error);
   } 
})

studentRouter.get('/student', async (req, res)=> {
    try {
        const student = await studentModel.find({});
        res.send(student);

    } catch (error) {
        res.status(500).send(error);
    }
});

studentRouter.patch('/student/:id', async (req, res)=> {
    try {
        const id = req.params.id;
//        console.log(req.params);
        //console.log(id);

        const student = await studentModel.findByIdAndUpdate({_id: id}, req.body, {new: true});

        res.send(student);

    } catch (error) {
        res.status(500).send(error);
    }
});

studentRouter.delete('/student/:id', async (req, res)=> {
    try {
        const id = req.params.id;

//        console.log(id)

       const data = await studentModel.findByIdAndDelete({_id: id});

       if (!data){
           res.status(404).send('Documento não encontrado')
       } else {
           res.send(data);
       }

    } catch (error) {
        res.status(500).send(error);
    }
})

export {studentRouter};