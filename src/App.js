import {useState} from 'react';

function App() {
  const [text, setText] = useState("")
  const onChangeHandler = (e) => {
    setText(e.target.value)
  }
  return (
    <div className="App">
     <input type="text" onChange={onChangeHandler} value={text} />
     {text}
     <button onClick={() => setText("")}>azzera state</button>
    </div>
  );
}



export default App;
