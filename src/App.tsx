import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {BrowserRouter,Link, Route, Routes} from 'react-router';
import { Card } from './components/Card';
import { Home } from './Home';

function App() {
  return (
    //Observación: Mover las rutas a un archivo routes.ts o main.tsx según convenga y despues importarlas aquí. Hay una diferencia entre las dos formas de hacerlo. INVESTIGAR.
    <BrowserRouter>
        <Link to="/card" target="_blank">
          <button>Página Card</button>
        </Link>
        <Link to="/" target="_blank"/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/card' element={<Card/>}/>
        </Routes>
    </BrowserRouter>
    //1. Agregar un componente Header con enlaces de navegación a las páginas Home y Cart
    //2. Crear una sección hero en Home con un mensaje de bienvenida y un campo de búsqueda con botón para buscar libros
    //3. Crear un diseño de cuadrícula para mostrar tarjetas de libros en Home
    //4. Cada tarjeta debe mostrar la imagen, título, autor, precio y un botón "Agregar al carrito"
    //5. Agregar un componente de paginación al final de Home para navegar entre varias páginas de libros
    //6. Agregar un footer con enlaces a redes sociales e información de contacto...
  )
}

export default App
