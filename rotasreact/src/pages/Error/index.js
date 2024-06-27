import { Link } from "react-router-dom";

function Error() {
    return (
        <div>
            <h2>Ops!! Essa página não existe!!</h2>
            <h3>Encontramos paginas do site abaixo:</h3>
             <Link to="/home">Home</Link>
             <Link to="/contato">Contato</Link>
             <Link to="/sobre">Sobre</Link>
        
        </div>
    )
}

export default Error;