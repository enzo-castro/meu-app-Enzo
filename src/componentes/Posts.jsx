import { useState, useEffect } from 'react';

function Posts() { const [posts, setPosts] = useState([]);

  useEffect(() => {fetch('https://jsonplaceholder.typicode.com/todos/')
    .then(r => r.json())
    .then(d => setPosts(d));
  }, []);

  return (
    <ul>
      {posts.slice(0, 5).map(p => ( 
        <li 
        key={p.id}>{p.title}
        </li>
      ))}
    </ul>
  );
}

async function buscarPost(id) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`);
  const data = await res.json();
  return data;
}

export {Posts, buscarPost};