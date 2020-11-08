

function VideoText(props) {
    return (
        <div style={{display: 'flex'}}>
            <div style={{padding: '30px', background: props.color}}>
                <h1>image</h1>
            </div>
            <div>
                <h1>{props.title}</h1>
                <h4>{props.views} - {props.published}</h4>
                <h2>Vivaldi</h2>
            </div>
        </div>
    )
}


export default VideoText;