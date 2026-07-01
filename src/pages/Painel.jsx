import { Link, Outlet } from "react-router-dom";

function Painel() {
  return (
    <>
      <header className="navbar">
        <h2>Dashboard</h2>

        <nav className="nav-links">
          <Link to="/home">🏠 Home</Link>
          <Link to="/sobre">ℹ️ Sobre</Link>
          <Link to="/contato">📞 Contato</Link>
          <Link to="/posts">📝 Posts</Link>
          <Link to="/usuarios">👤 Usuários</Link>
        </nav>
      </header>

      <main className="page">
        <Outlet />
      </main>
    </>
  );
}

export default Painel;
