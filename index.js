//Carga las variables de entorno desde el archivo .env
import "dotenv/config";
//Importa Express
import express from "express";
const app = express();

//Habilita CORS para permitir solicitudes de otros orígenes
app.use(cors());
//Permite recibir y procesar JSON en las solicitudes
app.use(express.json());

//Ruta principal de bienvenida
app.get("/", (req, res) => {
  res.json({ message: "Bienvenidos a la API REST" });
});

//Rutas de productos
import productsRouter from "./src/routes/products.router.js";
app.use("/api", productsRouter);

//Rutas de autenticación
import authRouter from "./src/routes/auth.router.js";
app.use("/api/auth", authRouter);

//Middleware para manejar rutas no encontradas (Ejemplo 404)
app.use((req,res,next) => {
    res.status(404).json({ error: "Not Found" })
});

//Defino el puerto
const PORT = process.env.PORT || 3001;

//Inicia el servidor y muestra la URL en consola
app.listen(PORT, () => console.log(`http://localhost:${PORT}`));