import { Link, Outlet } from "react-router-dom";

function Painel() {
  return (
    <div className="layout">
      {/* SIDEBAR */}
      <aside className="sidebar">
        <h1 className="logo">Painel</h1>

        <nav>
          <Link to="/home">🏠 Home</Link>
          <Link to="/sobre">ℹ️ Sobre</Link>
          <Link to="/contato">📞 Contato</Link>
          <Link to="/posts">📝 Posts</Link>
          <Link to="/usuarios">👤 Usuários</Link>
        </nav>
      </aside>

      {/* CONTEÚDO */}
      <main className="content">
        <Outlet />
      </main>
    </div>
  );
}

export default Painel;