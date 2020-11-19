import {useState} from 'react';
import VideoText from './VideoText';
import { v4 as uuidv4 } from 'uuid';
import style from './style/App.module.css';

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
  // 1. inline style
  // 2. File css tramite ID e CLASSNAME
  // 3. CSS module
  // 4. CSS in JS (diverse librerie => Styled Components)
  // 5. SASS
  return (
    <div className="App">
    <h1 className={style.title}>Youtube fake video</h1>
    <h3 className={style.paragraph}>Scrivi il titolo</h3>
     <input type="text" onChange={handleTitle} value={title} />
     <h3 className={style.paragraph}>scrivi il colore</h3>
     <input type="text" onChange={handleColor} value={color} />
     <button onClick={createVideoHandler}>Crea nuovo video</button>
     {videoList.map(function(video) {
       return <VideoText deleteVideo={() => deleteVideo(video.id)} key={video.id} title={video.title} color={video.color} />
     })}
    </div>
  );
}



export default App;
