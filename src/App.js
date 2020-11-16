import {useState} from 'react';
import VideoText from './VideoText';
import { v4 as uuidv4 } from 'uuid';

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
    setVideoList([...videoList, {title: title, color: color, id: uuidv4()}])
    setTitle("");
    setColor("")
  }

  const deleteVideo = (id) => {
    setVideoList( videoList.filter(function(video) {
      return video.id !== id
    }))

  }
  return (
    <div className="App">
    <h3>Scrivi il titolo</h3>
     <input type="text" onChange={handleTitle} value={title} />
     <h3>scrivi il colore</h3>
     <input type="text" onChange={handleColor} value={color} />
     <button onClick={createVideoHandler}>Crea nuovo video</button>
     {videoList.map(function(video) {
       return <VideoText deleteVideo={() => deleteVideo(video.id)} key={video.id} title={video.title} color={video.color} />
     })}
    </div>
  );
}



export default App;
