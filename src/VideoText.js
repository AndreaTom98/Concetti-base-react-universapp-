

function VideoText({title, views, published, color}) {
    return (
        <div style={{display: 'flex'}}>
            <div style={{padding: '30px', background: color}}>
                <h1>image</h1>
            </div>
            <div>
                <h1>{title}</h1>
                <h4>{views} - {published}</h4>
                <h2>Vivaldi</h2>
            </div>
        </div>
    )
}


export default VideoText;