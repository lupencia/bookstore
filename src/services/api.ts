// Paso 1: Importaciones y Constantes
// Necesitas definir qué tipo de datos vas a manejar y a dónde vas a llamar.

// Instrucción: Importa el tipo Book (que debes tener definido en tus tipos) y define la URL base de la API para no tener que escribirla repetidamente.

// Paso 2: Crear la Función de Búsqueda (searchBooks) utilizando la función fetch de JavaScript
// Esta función será responsable de recibir lo que el usuario escribe y pedirle a Google una lista de libros.

// Conceptos clave:
// Async/Await: La petición tarda tiempo, por eso la función es asíncrona.
// Start Index: Necesario para la paginación (cargar más libros).

// Paso 3: Crear la Función de Detalles (getBookDetails) utilizando la función fetch de JavaScript
// A veces necesitamos ver la inforamción completa de un solo libro. Para ello usamos su ID.

// Instrucción: Crea una función que reciba un id y retorne un solo objeto Book o null si falla.

// Aquí tienes el enlace a la documentación de la API de Google Books para que puedas revisar los detalles técnicos si lo necesitas: https://developers.google.com/books/docs/v1/reference/volumes
// Vamos trabajar con volumes, que es la parte de la API que maneja los libros.
// El tipo de dato Book puedes encontrarlo en la section volume resource de la documentación.

// Objetivo del ejercicio: 
// Implementar dos funciones en TypeScript para interactuar con la API de Google Books: una para buscar libros y otra para obtener detalles de un libro específico. 
// Entender el patrón "Service Layer" para separar la lógica de negocio de la lógica de presentación.