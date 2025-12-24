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
          <button>Página Card</button>
        </Link>
        <Link to="/" target="_blank"/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/card' element={<Card/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default App
