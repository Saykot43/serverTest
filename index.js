const express = require('express');

const { MongoClient } = require('mongodb');
require("dotenv").config();
const app = express();


const uri = `mongodb+srv://${process.env.DB_USER}:hplJPH0No59uHYRX@cluster0.pt4ax.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true});

const run = async () => {
    try {
        await client.connect();
        app.get('/', (req, res) => {
            res.send('Server working')
          })
    } catch (error) {
        console.log(error);
    }
    finally {

    }
}

run();

app.listen(5000, ()=>console.log("server is running"));

