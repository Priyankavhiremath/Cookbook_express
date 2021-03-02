const express = require ('express')
const contentful = require ('./Router/contentful')

const app = express();
app.use(express.json())

const PORT = process.env.PORT || 4000

app.get('/', (req, res)=> {
    res.send('Hi There')
})

// GET multiple recipes
 app.get('/', )

// GET single recipes
app.get('/api/recipes',)

// POST recipes
app.post('/api/recipes', (req,res)=>{

})

// PUT recipes
app.put('/api/recipes', (req, res)=> {

})

// DELETE recipes
app.delete('/api/recipes', (req, res)=>{

})

app.use ('/api/recipes', contentful)

app.listen(PORT, () =>console.log(`Server is running at Port ${PORT}`) )



