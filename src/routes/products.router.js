import { Router } from "express";
const router = Router();

import {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
  getProductsByCategory, // Import the new controller
} from "../controllers/products.controller.js";

import { auth } from "../middlewares/auth.middleware.js";

router.get("/products", getAllProducts);

router.get("/products/category/:category", getProductsByCategory);

router.get("/products/:id", getProductById);

router.post("/products", auth, createProduct);

router.put("/products/:id", auth, updateProduct);

router.delete("/products/:id", auth, deleteProduct);

export default router;