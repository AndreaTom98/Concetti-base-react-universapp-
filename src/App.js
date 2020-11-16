import {useState} from 'react';
import VideoText from './VideoText';

function App() {
  const [text, setText] = useState("");
  const [textList, setTextList] = useState([])
  const onChangeHandler = (e) => {
    setText(e.target.value)
  }
  const addTextHandler = () => {
    setTextList([...textList, text]);
    // 1. ...textList => copia l'array attuale
    // 2. text => aggiunge text a textList

    setText("")
  }

  return (
    <div className="App">
     <input type="text" onChange={onChangeHandler} value={text} />
     <button onClick={addTextHandler}>aggiungi text</button>
     <ul>
     {textList.map(function(text) {
       return <li>{text}</li>
     })}
     </ul>
    </div>
  );
}



export default App;
