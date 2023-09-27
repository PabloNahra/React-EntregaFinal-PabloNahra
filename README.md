# ART MATUIZ - E-COMMERCE
* Autor: Pablo Nahra
* Fecha doc: 26/09/2023
* Objetivo: Desarrollar un e-commercer para la empresa Art Matuiz

## Resumen
Desarrollamos en React JS una plataforma de venta on-line donde se pueden listar todos los productos a la venta o filtrar por categoria.

## Funcionamiento
El usuario ingresa a la página de inicio y puede elegir entre todos los productos u optar por las categorias: Bebe o Casa.
A medida que navega el sítio puede elegir los productos y agregarlos al carrito. 
El carrito aparece visible en el NavBar cuando tiene items incluidos.
Desde el carWidget o con el botón "Terminar Compra" en el item puede dirigirse al carrito para revisar el listado de productos, eliminar los que no correspondan, visualizar el resumen de total en $ y total de unidades, limpiar todo el carrito y finalizar la compra.
Se dirige el CheckOut donde debe obligatoriamente registrar sus datos y confirmar la compra.
Si la compra se registra exitosamente visualiza el ID del pedido.

## Detalles Técnicos
El catálogo de productos y las órdenes creadas se almacenan en Firebase

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
