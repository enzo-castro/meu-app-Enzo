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
      <h1>Buscar Post</h1>

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
    </div>
  );
}

export default Posts;