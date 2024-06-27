import { Link} from 'react-router-dom';

function Home() {
    return (
      <div>
        <h1>Página Home</h1>

        <Link to="/sobre">Sobre</Link><br></br>
        <Link to="/contato">Contato Empresa</Link>
        <br/>


        <Link to="/produto/12345">Acessar produto 12345</Link>
  
      </div>
    );
  }
  
  export default Home;
  