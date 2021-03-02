require("dotenv").config();
const express = require ('express')
const app = express();

const {Pool} = require("pg")

app.use(express.json())

const pool = new Pool()


const PORT = process.env.PORT || 3000

app.get('/', (req, res)=> {
    res.send('Hi There')
})

app.get('/api/recipes', (req, res) =>{
    pool
        .query("Select * FROM recipes")
        .then((data) => res.json(data.rows))
        .catch((err) => res.sendStatus(500));
} )

app.post('/seed', async (req, res) => {
    const seedTable = `
    CREATE TABLE recipes(
        id SERIAL PRIMARY KEY,
        title varchar(100), 
        description varchar(255),
        ingredients varchar(255),
        directions text,
        mealtype varchar(255),
        image varchar(100),
        cook_time int,
        prep_time int
        
    );
    `
    try {
        const response = await pool.query(seedTable)
        res.json(response)
    } catch (e) {
        res.status(500).send(e.message)
    }
})

app.delete('/destroy', async (req, res) => {
    const destroyTable = `DROP TABLE recipes;`
    try {
        const response = await pool.query(destroyTable)
        res.json(response)
    } catch (e) {
        res.status(500).send(e.message)
    }
})


app.get('/time', (req,res)=>{
    pool.query("SELECT now();")
    .then((data) => res.json(data.rows))
        .catch((err) => res.sendStatus(500));
})

// app.use ('/api/recipes', contentful)

app.listen(PORT, () =>console.log(`Server is running at Port ${PORT}`) )



