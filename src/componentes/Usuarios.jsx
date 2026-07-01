import { useState, useEffect } from 'react';
import api from '../services/api';

function Usuarios() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    api.get('/users')
      .then(({ data }) => setUsers(data))
      .catch(err => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>Carregando....</p>;

  if (error) return <p>Erro: {error}</p>;

  return (
    <ul>
      {users.map(u => (
        <li key={u.id}>
          <strong>{u.name}</strong>
          <br />
          {u.email}
        </li>
      ))}
    </ul>
  );
}

export default Usuarios;