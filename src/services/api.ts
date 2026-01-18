//Aquí tienes un ejemplo de implementación de un padrón de deseño muy común en proyectos para manejar llamadas a una API externa.
//Se crea un archivo api.ts en la carpeta services donde se definen funciones para interactuar con la API.

//Las vantajas de usar este patrón incluyen:
//1. Centralización de la lógica de llamadas a la API, lo que facilita el mantenimiento y las actualizaciones.
//2. Reutilización de código en diferentes partes de la aplicación.
//3. Mejora de la legibilidad del código al abstraer los detalles de las llamadas a la API.
import type { BookList } from '../types/Book';

const BASE_URL = 'https://www.googleapis.com/books/v1/volumes';

export async function fetchBooks(): Promise<BookList> {
    const response = await fetch(`${BASE_URL}?q=react`);

    if(!response.ok) {
        throw new Error(`Response status: ${response.status}`);    }

    const ListResult = await response.json();
    return ListResult;
}

export async function fetchByBookId(id: string): Promise<BookList> {
    const response = await fetch(`${BASE_URL}/books/${id}`);
    if(!response.ok) {
        throw new Error(`Response status: ${response.status}`)
    }

    const bookResult = await response.json();
    return bookResult;
}





// import { ProductList } from '../types/Product';
// import { Product } from '../types/Product';

// // Define la URL base de la API (lo que normalmente se repite en todas las llamadas)
// const BASE_URL = 'https://api.example.com';

// // Función para obtener un listado de productos desde la API (en nuestro caso libros y enviamos un parámetro de búsqueda para que nos devuelva una lista filtrada de libros)
// export const fetchProducts = async (): Promise<ProductList> => {
//   const response = await fetch(`${BASE_URL}/products`);
  
//   if (!response.ok) {
//     throw new Error('Network response was not ok');
//   }
  
//   return response.json();
// };

// // Función para obtener un producto específico por su ID (en nuestro caso un libro)
// export const fetchProductById = async (id): Promise<Product> => {
//   const response = await fetch(`${BASE_URL}/products/${id}`);
//   return response.json();
// };