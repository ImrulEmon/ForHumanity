require('dotenv').config();
const express = require('express');
const { MongoClient, ServerApiVersion } = require('mongodb');
const cors = require('cors');
const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.dkpyk.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

async function run() {
    try {
      await client.connect();
      const database = client.db("forHumanity");
      const activitiesCollection = database.collection("activities");
     
      // GET API - SHOW EVENTS
      app.get('/events',async(req,res)=>{
        const query = {}
        const cursor = activitiesCollection.find(query);
        const events=await cursor.toArray();
        res.send(events);
      })
      
    } finally {
     // await client.close();
    }
  }
  run().catch(console.dir);

app.get('/',(req,res)=>{
    res.send('ForHumanity Server is running...')
})

app.listen(port,()=>{
    console.log(`Ok ${port}!!!`);
})