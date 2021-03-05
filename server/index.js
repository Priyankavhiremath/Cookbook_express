require("dotenv").config();
const express = require ('express')
const cors = require("cors")
const app = express();

app.use(cors())

const contentful = require("./Router/contentful");

app.use(express.json())
app.use(express.static(__dirname + "/public"));
const PORT = process.env.PORT || 3000

app.get('/', (req, res)=> {
    res.send('Hi There')
})
app.use ('/api/recipes', contentful)

app.listen(PORT, () =>{console.log(`Server is running at Port ${PORT}`) })



