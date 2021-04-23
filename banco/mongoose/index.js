import mongoose from 'mongoose';

// mongoose.connect("mongodb+srv://root:yF6yckzgMHBEln84@cluster0.gmms2.mongodb.net/grades?retryWrites=true&w=majority", {
//  useNewUrlParser: true,
//  useUnifiedTopology: true,   
// }).then(
//     console.log("Conectado")
// ).catch((error) => {console.log(error)});

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
        require: true
    },
    lastModified: {
        type: Date,
        require: Date.now()
    }
});

mongoose.model('student', studentSchema, 'student');

const student = mongoose.model('student');

new student({
    name: "Clarice Medeiros",
    subject: "Matemática",
    type: "Trabalho Pratico",
    value: 22
}).save().then(()=> console.log('Inserido com sucesso')).catch((error)=> console.log(error));

//mongoose.close();
//yF6yckzgMHBEln84