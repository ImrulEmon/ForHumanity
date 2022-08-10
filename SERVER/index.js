require("dotenv").config();
const express = require("express");
const { MongoClient, ServerApiVersion } = require("mongodb");
const ObjectId = require('mongodb').ObjectId;
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.dkpyk.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});

async function run() {
  try {
    await client.connect();

    const database = client.db("forHumanity");
    const activitiesCollection = database.collection("activities");
    const membersCollection = database.collection('member');

    // GET API - SHOW EVENTS
    app.get("/events", async (req, res) => {
      const query = {};
      const cursor = activitiesCollection.find(query);
      const events = await cursor.toArray();
      res.send(events);
    });

    // POST API - ADD VOLUNTEER
    app.post("/member",async(req,res)=>{
      const member = req.body;
      //console.log(service);
      const result = await membersCollection.insertOne(member);
      //console.log(result);
      res.json(result);
    })

    // GET API - ADD VOLUNTEER/Member
   app.get('/member',async(req,res)=>{
      const query = {};
      const cursor = await membersCollection.find(query);
      const members = await cursor.toArray();
      res.send(members);
   })

   // DELETE API Volunteer/Member

   app.delete('/member/:id',async(req,res)=>{
    const id = req.params.id;
    const query = {_id:ObjectId(id)};
    const result = await membersCollection.deleteOne(query);
    res.json(result);
  })

  } 
  finally {
    //await client.close();
  }
}
run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("ForHumanity Server is running...");
});

app.listen(port, () => {
  console.log(`Ok Port : ${port}!!!`);
});