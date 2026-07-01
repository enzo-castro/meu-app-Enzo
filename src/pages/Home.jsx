function Home() {
  return (
    <div className="home">
      <h1>Bem-vindo ao Sistema</h1><br/>

      <p>
        Este projeto foi desenvolvido utilizando React, React Router e Axios.
        O objetivo é demonstrar o consumo de APIs, gerenciamento de rotas e
        criação de interfaces modernas.
      </p>

      <h2>Recursos</h2>

      <ul>
        <li>✔ Consumo de API com Axios</li>
        <li>✔ Navegação entre páginas</li>
        <li>✔ Busca de posts por ID</li>
        <li>✔ Listagem de usuários</li>
        <li>✔ Interface responsiva</li>
      </ul>
      <h2>Funcionalidades</h2>
      <ul>
        <li>✔ Busca de posts por ID</li>
        <li>✔ Listagem de usuários</li>
        <li>✔ Visualização de informações obtidas por uma API pública</li>
        <li>✔ Tratamento de erros e estados de carregamento</li>
        <li>✔ Interface moderna com tema escuro</li>
      </ul>
      <h2>Curiosades</h2>
<p>Este projeto utiliza a API pública JSONPlaceholder para simular o funcionamento de um sistema real,
   permitindo testar requisições sem a necessidade de criar um banco de dados próprio.
    A aplicação foi desenvolvida utilizando componentes reutilizáveis, o que facilita futuras melhorias e a manutenção do código.
     Além disso, o uso do React Router permite navegar entre as páginas de forma rápida, sem recarregar o navegador, proporcionando uma experiência mais fluida para o usuário. 
     Outro ponto interessante é que o Axios foi configurado em uma instância única, tornando as requisições mais organizadas e evitando a repetição da URL base em diferentes partes do projeto.
     Embora seja um projeto de estudos, sua estrutura segue práticas comuns no desenvolvimento de aplicações modernas em React.</p>

    </div>
  );
}

export default Home;