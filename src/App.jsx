
import { useState, useEffect } from 'react';
import { Routes, Route, Link } from 'react-router-dom'
import Painel from './pages/Painel'
import Home from "./pages/Home";
import Sobre from "./pages/Sobre";
import Contato from "./pages/Contato";
import Posts from "./componentes/Posts";
import api from './services/api';
import Usuarios from './componentes/Usuarios';
import './App.css'

function App() {
  return (
    <>
    <div>
     <Routes>
      <Route element={<Painel />}>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/usuarios" element={<Usuarios />} />
      </Route>
    </Routes>
    </div>
    </>
  );
}
   

export default App
