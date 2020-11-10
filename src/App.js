import {useState} from 'react';

function App() {
  const [numero, setNumero] = useState(0)
  const aumentaNumero = () => {
    setNumero(numero / 2)
  }
  return (
    <div className="App">
      <button onClick={aumentaNumero}>aumenta numero</button>
      <h3>ciao {numero}</h3>
    </div>
  );
}



export default App;
