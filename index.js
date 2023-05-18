const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;

// middleware
app.use(cors());
app.use(express.json());

//dollsManager
// guN0fmksjtHHgkz5


const { MongoClient, ServerApiVersion } = require("mongodb");
const uri =
  "mongodb+srv://dollsManager:guN0fmksjtHHgkz5@cluster0.dyntprt.mongodb.net/?retryWrites=true&w=majority";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();

    const toysCollection = client.db("toysDB").collection('toys')
    

    app.post("/upload-toy", async (req, res) => {
      
      const data = req.body;
      console.log(data)
      const result = await toysCollection.insertOne(data);
      res.send(result)
    })



    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);




app.get("/", (req, res) => {
  res.send("dreamy server is running ....");
});

app.listen(port, () => {
  console.log(`dreamy server is running on PORT${port}`);
});
