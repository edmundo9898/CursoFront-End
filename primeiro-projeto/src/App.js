
import { useState, useEffect } from "react";


function App() {

  const [input, setInput] = useState('');
  const [tarefas, setTarefas] = useState([
    "Pagar contas",
    "Estudar React",
  ]);


 useEffect(() => {
      const saveStorage = localStorage.getItem("@key");

      if(saveStorage){
        setTarefas(JSON.parse(saveStorage))
      }
 }, [])

  useEffect(() => {
    localStorage.setItem("@key", JSON.stringify(tarefas))


  }, [tarefas]);


  function handleRegister(event) {
    event.preventDefault();

    setTarefas([...tarefas, input]);
    setInput("")


  }

  return (
    <div>
      <h1>Cadastrando Usuário</h1>
      <form onSubmit={handleRegister}>
        <label>
          Nome:
        </label>
        <br />
        <input
          placeholder="Digite seu nome"
          value={input}
          onChange={(event) => setInput(event.target.value)} />
        <br />




        <button type="submit">Registrar</button>
      </form>
      <br />
      <br />

      <ul>
        {tarefas.map(tarefa => (
          <li key={tarefa}>{tarefa}</li>

        ))}


      </ul>
    </div>
  )
}

export default App;

