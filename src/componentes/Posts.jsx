import { useState } from "react";
import api from "../services/api";

function Posts() {
  const [id, setId] = useState("");
  const [post, setPost] = useState(null);

  async function buscarPost() {
    try {
      const { data } = await api.get(`/posts/${id}`);
      setPost(data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="posts-container">
      <h1>Buscar Post</h1><br/>
      <p>Utilize o campo abaixo para buscar um post específico pelo seu ID.</p>

      {/* 🔎 SEARCH BOX ESTILIZADA */}
      <div className="search-box">
        <input
          type="number"
          placeholder="Digite o ID do post..."
          value={id}
          onChange={(e) => setId(e.target.value)}
        />

        <button onClick={buscarPost}>
          🔍 Buscar
        </button>
      </div>

      {post && (
        <div className="post-card">
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </div>
      )}
      <br/><p>Dica: Experimente pesquisar pelos IDs 1, 5, 10, 25, 50 ou 100 para visualizar diferentes posts.</p>
    </div>
  );
}

export default Posts;