import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {BrowserRouter,Link, Route, Routes} from 'react-router';
import { Card } from './components/Card';
import { Home } from './Home';

function App() {
  return (
    <BrowserRouter>
        <Link to="/card" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
          <p>Página Card</p>
        </Link>
        <Link to="/" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
          <p>Página de inicio</p>
        </Link>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/card' element={<Card/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default App
