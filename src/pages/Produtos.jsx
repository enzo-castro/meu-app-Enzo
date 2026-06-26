import { useParams} from "react-router-dom";

const podutos = [
    {id: 1, nome: 'placa de video'},
    {id: 2, nome: 'processador'},
    {id: 3, nome: 'memoria Ram'}];


function Produto(){
const{id} = useParams();

{produtos.map((produto) => (
  <div key={produto.id}>
    <Link to={`/produto/${produto.id}`}>
      {produto.nome}
    </Link>
  </div>
))}

 return(
    <div>
        <h1>Produto #{id}</h1>
        <p>Carregando dados do produto{id}...</p>
    </div>
 );
}

export default Produto;