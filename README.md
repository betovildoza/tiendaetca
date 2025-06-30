# 🏹 Tienda de Arquería ETCA

Este es un proyecto de e-commerce desarrollado con **React**, que simula la tienda de la Escuela de Tiro con Arco. Incluye navegación, carrito de compras, filtrado de productos, confirmaciones visuales y notificaciones dinámicas.

## 🚀 Tecnologías utilizadas

- React
- React Router DOM
- Context API (para gestión global del carrito)
- React Toastify (notificaciones al agregar productos)
- SweetAlert2 (confirmaciones visuales al eliminar productos)
- CSS puro
- Bootstrap (paginación)
- Fetch a API externa (MockAPI)
- React-Bootstrap Pagination
- Hooks de React: `useState`, `useEffect`, `useContext`, `useRef`
- Modales personalizados con CSS (para agregar y editar productos)
- Scroll automático suave al cambiar de página en la galería de productos

## 📂 Estructura del proyecto

```plaintext
src/
├── assets/ # Imágenes y recursos gráficos
├── auth/ # Lógica de rutas protegidas
├── components/ # Componentes reutilizables (Header, Footer, Formularios, etc.)
│ └── style/ # Estilos CSS de componentes
├── context/ # Contextos globales (carrito, auth, admin)
├── layout/ # Vistas principales (Inicio, Productos, Contacto, Login)
├── utils/ # Funciones auxiliares (si las hubiera)
├── App.jsx # Componente principal de la app
├── App.css # Estilos globales
├── index.jsx # Punto de entrada
└── main.js # Configuración de Vite

public/
├── data/ # Archivos JSON simulados
└── _redirects # Redirecciones para hosting
```


## 🛒 Funcionalidades

- 🧭 Navegación entre páginas (Inicio, Productos, Nosotros, Contacto)
- 🛍️ Carrito con suma, resta, eliminación y vaciado de productos
- 🔁 Manejo de cantidades y persistencia en el carrito
- 🔔 Alertas visuales con SweetAlert2 al eliminar productos
- 🍞 Toasts al agregar productos al carrito
- 🔍 Filtro por nombre en la galería de productos
- 📑 Paginación con scroll automático (y sin moverse en la primera carga)
- 📩 Formulario de contacto básico (con validación simple)
- 🔐 Página de login simulada
- 🧰 Panel de administrador con:
  - Modal para agregar producto
  - Modal para editar producto
  - Eliminación inmediata con confirmación


🙌 Créditos
Proyecto desarrollado por **Alberto Alejandro Vildoza** como práctica de React con enfoque en:

- Manejo de estados globales con Context
- Componentización
- Diseño responsive básico
- Integración de librerías externas para mejorar la experiencia de usuario

¡Gracias por visitar este proyecto! 🎯