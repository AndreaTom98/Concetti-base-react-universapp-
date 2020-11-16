import {useState} from 'react';
import VideoText from './VideoText';

function App() {
  const [title, setTitle] = useState("");
  const [color, setColor] = useState("");
  const [videoList, setVideoList] = useState([]);

  const handleTitle = (e) => {
    setTitle(e.target.value)
  
  }
  const handleColor = (e) => {
    setColor(e.target.value)
  }

  // 1. Creiamo la lista di video con le loro proprieta
  // 2. Facciamo vedere nella UI i nostri video 

  const createVideoHandler = () => {
    setVideoList([...videoList, {title: title, color: color}])
    setTitle("");
    setColor("")
  }

  return (
    <div className="App">
    <h3>Scrivi il titolo</h3>
     <input type="text" onChange={handleTitle} value={title} />
     <h3>scrivi il colore</h3>
     <input type="text" onChange={handleColor} value={color} />
     <button onClick={createVideoHandler}>Crea nuovo video</button>
     {videoList.map(function(video) {
       return <VideoText title={video.title} color={video.color} />
     })}
    </div>
  );
}



export default App;
