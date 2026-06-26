import {Outlet, Link} from "react-router-dom";

function Painel(){

   return (
    <div>
      <h2>Painel</h2>
     <nav>
        <Link to="/home">Home</Link><br></br>
        <Link to="/sobre">Sobre</Link><br></br>
        <Link to="/contato">Contato</Link><br></br>
      </nav>

{/* filho renderiza aqui */}

      <Outlet />
    </div>
  );
}

export default Painel;
