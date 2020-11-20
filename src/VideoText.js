import style from './style/VideoText.module.css';
import './style/myStyle.scss'

function VideoText({title, color, deleteVideo}) {
    return (
        <div id="container" style={{display: 'flex'}}>
            <div style={{padding: '30px', background: color}}>
                <h1>image</h1>
                <button onClick={deleteVideo}>cancella video</button>
            </div>
            <div>
                <h1 className={style.title}>{title}</h1>
                <h4>3m - 6 novembre</h4>
                <h2>Vivaldi</h2>
            </div>
        </div>
    )
}


export default VideoText;