import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function BotaoSenai({ texto }) {
  return ( 
   <button style={{
   background: "#1cf200",
   color: "#000000", 
   padding: "10px 24px",
   margin: "30px",
   alignItems: "center",
   fontWeight: "bold",
   border: "3px solid #111111b6",
    borderRadius: "12px",
    cursor: "pointer",
    animation: "move 0.5s ease-in-out infinite alternate",
}}>
  {texto}</button> 
  ); 
}
function App() {
  

  return (
    <>
<div>
  <h1>Meu App SENAI</h1>

    <BotaoSenai texto="Clique"/>
    <BotaoSenai texto="Enviar"/>
</div>
    </>
  )
}

export default App
