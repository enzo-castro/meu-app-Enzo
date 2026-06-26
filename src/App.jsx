

import { Routes, Route, Link } from 'react-router-dom'
import Home    from './pages/Home'
import Sobre   from './pages/Sobre'
import Contato from './pages/Contato'
import Painel from './pages/Painel'
import './App.css'


function App() {

  return (
    <>
    <div>
      <Routes>
  <Route path="/painel" element={<Painel />}/>
  <Route path="/home" element={<Home/>} />
  <Route path="/sobre" element={<Sobre/>} />
  <Route path="/contato" element={<Contato />} />
  <Route path="*" element={<PaginaNaoEncontrada />} />
      </Routes>
      
    </div>
    </>
  )
}
   

export default App
