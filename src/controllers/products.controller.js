import * as Service from "../services/products.service.js"

//Exportamos la funcion
export const getAllProducts = (req,res)=>{
    const products = Service.getAllProducts();
    res.json(products);
};