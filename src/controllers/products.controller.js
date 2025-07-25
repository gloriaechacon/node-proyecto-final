import * as Service from "../services/products.service.js"

//Obtengo todos los productos
export const getAllProducts = async (req, res) => {
  const products = await Service.getAllProducts();
  res.json(products);
};

//Obtengo un producto por su Id
export const getProductById = async (req, res) => {
  const { id } = req.params;
  const product = await Service.getProductById(id);
  if (product) {
    res.json(product);
  } else {
    res.status(404).json({ message: "Product not found" });
  }
};

//Creo un nuevo producto
export const createProduct = async (req, res) => {
  const newProduct = req.body;
  const createdProduct = await Service.createProduct(newProduct);
  res.status(201).json(createdProduct);
};

//Actualizo un producto existente por su Id
export const updateProduct = async (req, res) => {
  const { id } = req.params;
  const updatedProductData = req.body;

  const updatedProduct = await Service.updateProduct(id, updatedProductData);

  if (updatedProduct) {
    res.json(updatedProduct);
  } else {
    res.status(404).json({ message: "Product not found" });
  }
};

//Elimino un producto por su Id
export const deleteProduct = async (req, res) => {
  const { id } = req.params;
  const deletedProduct = await Service.deleteProduct(id);
  if (deletedProduct) {
    res.json({ message: "Product deleted successfully" });
  } else {
    res.status(404).json({ message: "Product not found" });
  }
};

//Busco productos por categoría
export const getProductsByCategory = async (req, res) => {
  const { category } = req.params;
  const products = await Service.getProductsByCategory(category);
  res.json(products);
};