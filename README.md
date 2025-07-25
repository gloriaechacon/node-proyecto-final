# Node.js - Proyecto Final

Sistema de Gestión de Productos con Express y Firebase

## Tabla de Contenidos

- [Descripción](#descripción)
- [Instalación](#instalación)
- [Variables de Entorno](#variables-de-entorno)
- [Ejecución del Proyecto](#ejecución-del-proyecto)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [API Endpoints](#api-endpoints)
- [Despliegue en Vercel](#despliegue-en-vercel)
- [Buenas Prácticas](#buenas-prácticas)
- [Licencia](#licencia)

---

## Descripción

Este proyecto es un sistema de gestión de productos construido con Node.js, Express y Firebase Firestore como base de datos. Permite realizar operaciones CRUD sobre productos y cuenta con autenticación básica.

---

## Instalación

1. Clona el repositorio:
   ```bash
   git clone https://github.com/tu-usuario/node-proyecto-final.git
   cd node-proyecto-final
   ```

2. Instala las dependencias:
   ```bash
   npm install
   ```

---

## Variables de Entorno

Crea un archivo `.env` en la raíz del proyecto con las siguientes variables (usa tus propias credenciales de Firebase):

```
FIREBASE_API_KEY=tu_api_key
FIREBASE_AUTH_DOMAIN=tu_auth_domain
FIREBASE_PROJECT_ID=tu_project_id
FIREBASE_STORAGE_BUCKET=tu_storage_bucket
FIREBASE_MESSAGING_SENDER_ID=tu_messaging_sender_id
FIREBASE_APP_ID=tu_app_id
```

> **Nota:** En producción (por ejemplo, en Vercel), configura estas variables en el panel de Environment Variables.

---

## Ejecución del Proyecto

Para desarrollo local:
```bash
npm run dev
```
O para producción:
```bash
node index.js
```

El servidor estará disponible en [http://localhost:3000](http://localhost:3000) (o el puerto configurado).

---

## Estructura del Proyecto

```
src/
  controllers/      # Lógica de controladores para rutas
  middlewares/      # Middlewares personalizados (autenticación, etc.)
  models/           # Configuración de Firebase y modelos de datos
  routes/           # Definición de rutas de la API
  services/         # Lógica de negocio y acceso a datos
index.js            # Punto de entrada de la aplicación
```

---

## API Endpoints

### Autenticación

- `POST /api/auth/login`  
  Inicia sesión de usuario.

### Productos

- `GET /api/products`  
  Obtiene la lista de productos.

- `GET /api/products/:id`  
  Obtiene un producto por ID.

- `POST /api/products`  
  Crea un nuevo producto.

- `PUT /api/products/:id`  
  Actualiza un producto existente.

- `DELETE /api/products/:id`  
  Elimina un producto.

