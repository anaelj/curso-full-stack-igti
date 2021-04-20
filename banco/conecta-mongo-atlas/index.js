
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://anael:110923@cluster0.xfnpu.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(async err => {
  const collection = client.db("grades").collection("student");
  
    const documents = await collection.find({name : "Anael"}).toArray();
     
    console.log(documents);

    const databaselist = await client.db().admin().listDatabases();

    console.log(databaselist);

  client.close();
});
