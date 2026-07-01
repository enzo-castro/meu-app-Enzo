import { useState, useEffect } from "react";
import api from "../services/api";


function Usuarios() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    api.get("/users")
      .then(({ data }) => setUsers(data))
      .catch(err => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <h2 className="loading">Carregando...</h2>;

  if (error)
    return (
      <div className="erro">
        <h2>Erro ao carregar usuários</h2>
        <p>{error}</p>
      </div>
    );

  return (
    <div className="usuarios">
      <h1>Usuários</h1><br/>

      <div className="cards">
        {users.map((u) => (
          <div className="card" key={u.id}>
            <h2>{u.name}</h2>

            <p>✉️ {u.email}</p>

            <p>🏙️ {u.address.city}</p>

          </div>
        ))}
      </div>
    </div>
  );
}

export default Usuarios;