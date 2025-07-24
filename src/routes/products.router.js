import { Router } from "express";
import { getAllProducts } from "../controllers/products.controller.js";

const router = Router();

//Va a haber un controlador llamado getAllProducts
router.get('/products', getAllProducts);
export default router;