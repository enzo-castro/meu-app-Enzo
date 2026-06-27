import {Outlet, Link} from "react-router-dom";

function Painel(){

   return (
    <div>
     <nav>
        <Link to="/home">Home</Link><br></br>
        <Link to="/sobre">Sobre</Link><br></br>
        <Link to="/contato">Contato</Link><br></br>
      </nav>
     <h1>Painel</h1>
{/* filho renderiza aqui */}

      <Outlet />
    </div>
  );
}

export default Painel;
