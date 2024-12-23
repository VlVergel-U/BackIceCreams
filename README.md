# 🍦 Ice Cream API
![Ice Cream GIF](https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExdDZ1NTZ5aW9iOWNkcnUwc2d6dGN5cmppaHVicmVnYmliZnRhdnJoNyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/cMyXD8p0nDRDPdZ6E8/giphy.gif)

Esta API permite crear, actualizar, obtener y eliminar helados en una base de datos, además de validar entradas y manejar errores adecuadamente.

## ⚙️ Instalación y Configuración

### Requisitos previos:

- Node.js v14+
- PostgreSQL

### Pasos para correr el proyecto:

1. Clona este repositorio:
   ```bash
   git clone https://github.com/VlVergel-U/ArquitecturaParcial.git
   ```

2. Instala las dependencias:
   ```bash
   npm install
   ```

3. Crea un archivo `.env` y define las variables de entorno:
   ```bash
    DB_HOST= localhost
    DB_PORT= 5432
    DB_USER= tuusuario
    DB_PASSWORD= tucontraseña
    DB_NAME= tubasededatos
    JWT_HASH= 
    PORT= tupuerto
   ```

4. Inicia el servidor:
   ```bash
   npm run dev
   ```

## 🛠️ Tecnologías Utilizadas

- **Node.js**: Entorno de ejecución para JavaScript en el servidor.
- **Express.js**: Framework web para construir la API.
- **PostgreSQL**: Base de datos relacional para almacenar información de los helados.
- **Sequelize**: ORM utilizado únicamente para la creación de tablas.
- **dotenv**: Módulo para gestionar variables de entorno.
- **express-validator**: Middleware para validación de datos en Express.
- **bycript**: Biblioteca utilizada para el cifrado de contraseñas


## 📖 Endpoints

### 1. **Crear Helado**  
Crea un nuevo helado con los datos proporcionados.

**POST** `/api/iceCream`

#### Request:
- **body**:
  - `flavor`: **requerido**, el sabor del helado. Ejemplo: `"Chocolate"`
  - `price`: **requerido**, el precio del helado. Ejemplo: `1500`
  - `company`: **requerido**, la empresa fabricante. Ejemplo: `"Popsy"`
  - `type`: **requerido**, el tipo de helado (cono o vaso). Ejemplo: `"Cono"`

#### Response:
```json
{
  "success": true,
  "msg": "Helado creado exitosamente",
  "data": {
    "flavor": "Chocolate",
    "price": 1500,
    "company": "Popsy",
    "type": "Cono"
  }
}
```

---

### 2. **Obtener Helado por ID**  
Obtiene los detalles de un helado específico por su `id`.

**GET** `/api/iceCream/:id`

#### Request:
- **params**:
  - `id`: **requerido**, el ID del helado. Ejemplo: `1`

#### Response:
```json
{
  "success": true,
  "msg": "Helado obtenido exitosamente",
  "data": {
    "id": 1,
    "flavor": "Chocolate",
    "price": 1500,
    "company": "Popsy",
    "type": "Cono"
  }
}
```

---

### 3. **Actualizar Helado**  
Actualiza un helado existente con los nuevos datos proporcionados.

**PUT** `/api/iceCream/:id`

#### Request:
- **params**:
  - `id`: **requerido**, el ID del helado. Ejemplo: `1`
- **body**:
  - `flavor`: **requerido**, el nuevo sabor. Ejemplo: `"Vainilla"`
  - `price`: **requerido**, el nuevo precio. Ejemplo: `2000`
  - `company`: **requerido**, la empresa. Ejemplo: `"CremHelado"`
  - `type`: **requerido**, el tipo de helado. Ejemplo: `"Vaso"`

#### Response:
```json
{
  "success": true,
  "msg": "Helado actualizado exitosamente",
  "data": {
    "id": 1,
    "flavor": "Vainilla",
    "price": 2000,
    "company": "CremHelado",
    "type": "Vaso"
  }
}
```

---

### 4. **Eliminar Helado**  
Elimina un helado específico por su `id`.

**DELETE** `/api/iceCream/:id`

#### Request:
- **params**:
  - `id`: **requerido**, el ID del helado. Ejemplo: `1`

#### Response:
```json
{
  "success": true,
  "msg": "Helado eliminado exitosamente",
  "data": {
    "id": 1,
    "flavor": "Vainilla",
    "price": 2000,
    "company": "CremHelado",
    "type": "Vaso"
  }
}
```

### 5. **Obtener Todos Los Helados**  
Obtiene una lista de todos los helados creados.

**GET** `/api/iceCream`

#### Response:
```json
{
  "success": true,
  "msg": "Helado creado exitosamente",
  "data": {
    "id": 1,
    "flavor": "Vainilla",
    "price": 2000,
    "company": "CremHelado",
    "type": "Vaso"
  }
}
```

---

### 6. **Login**

Autentica un usuario y retorna su rol y demás información relevante.

**GET** `/auth/login`

#### Request:
- **query**:
  - `username`: **requerido**, nombre de usuario. Ejemplo: `"Vale"`
  - `password`: **requerido**, contraseña del usuario. Ejemplo: `"123456"`


### 7. **Registro**

Crea un nuevo usuario.

**GET** `/auth/register`

#### Request:
- **query**:
  - `username`: **requerido**, nombre de usuario. Ejemplo: `"Vale"`
  - `password`: **requerido**, contraseña del usuario. Ejemplo: `"123456"`


## 🧪 Validaciones

- **Flavor (sabor):** Solo se permiten valores como `vainilla`,`chocolate`,`fresa`,`coco` y `chicle`. Se ignora la diferencia entre mayúsculas y minúsculas.
- **Price (precio):** Debe ser un número entre 1000 y 200,000 COP.
- **Company (empresa):** Solo se permiten `Popsy` o `CremHelado`.
- **Type (tipo):** Solo se permiten `Cono` o `Vaso`.


## 📂 Estructura del Proyecto

```bash
├── src
│   ├── config
│   │   └── server.js  #Configuración del servidor
│   ├── controllers
│   │   └── auth.controller.js   # Lógica de control para manejar solicitudes de helados
│   │   └── ice_cream.controller.js
│   ├── libs
│   │   └── createAdmin.js   # Lógica de valores de inicio
│   │   └── createIceCreams.controller.js
│   ├── middelwares
│   │   └── index.middelware.js  # Manejar validaciones de token y respuestas de errores
│   │   └── token.middelware.js
│   │   └── validator.middelware.js
│   ├── models
│   │   └── ice_cream_crud.model.js     # Modelo de CRUD para controlador
│   │   └── ice_cream.model.js          # Modelo de tabla para sequelize
│   │   └── user_crud.model.js  
│   │   └── user.model.js  
│   ├── routes
│   │   └── auth.routes.js       # Rutas para los endpoints de helados
│   │   └── ice_cream.router.js
│   │   └── index.router.js
│   └── services
│       └── pgConection.service.js    # Conexión con el servicio de postgres
│   └── validators
│       └── ice_cream.validators.js    # Validaciones de entrada
│       └── user.validators.js    
├── index.js                          # Configuración de la aplicación Express
├── .env                            # Archivo de configuración de variables de entorno
```


