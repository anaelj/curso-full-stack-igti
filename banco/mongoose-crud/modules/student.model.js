import mongoose from 'mongoose';

const studentSchema = mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    subject: {
        type: String,
        require: true
    },
    type: {
        type: String,
        require: true
    },
    value: {
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

const studentModel = mongoose.model('student', studentSchema, 'student');

export {studentModel};