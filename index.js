import express from "express";
import productsRouter from './src/routes/products.router.js'

const app = express();

app.get('/', (req, res)=>{
    res.json({message:"Bienvenido a la API REST!!"});
})

// http://localhost:3000/api/products
app.use("api",productsRouter);

const PORT = 3000;

app.listen(PORT, () => console.log(`http://localhost:${PORT}`))
