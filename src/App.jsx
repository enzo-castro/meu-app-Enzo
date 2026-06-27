

import { Routes, Route, Link } from 'react-router-dom'
import Home    from './pages/Home'
import Sobre   from './pages/Sobre'
import Contato from './pages/Contato'
import Painel from './pages/Painel'
import axios from 'axios';
import {Posts, buscarPost} from './componentes/Posts'
import api from './services/api'
import './App.css'

const { data } = await api.get( '/posts');

const { data: novo } = await api.post('/posts', { title: 'Novo' });

function App() {

  return (
    <>
    <div>
      <Routes>
  <Route path="/painel" element={<Painel />}/>
  <Route path="/home" element={<Home/>} />
  <Route path="/sobre" element={<Sobre/>} />
  <Route path="/contato" element={<Contato />} />
      </Routes>
      
    </div>
    </>
  )
}
   

export default App
