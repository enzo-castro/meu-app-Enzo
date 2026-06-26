function BotaoSenai({texto}) {
  return (
    <button
    style={{
      background: "#F2A900",
      color: "#0D2248",
      padding: "10px 24px",
      fontWeight: "bold",
      alignItems: "center",
      border: "none",
      cursor: "pointer",
      borderRadius: "4px",
  
      }}
    >
      {texto}
    </button>
  );
}
function Cartao({ nome, cargo }) {  
  return (    
  <div>      
    <h2>{nome}</h2>      
    <p>{cargo}</p>    
    </div>  ); }
export {BotaoSenai, Cartao}; 