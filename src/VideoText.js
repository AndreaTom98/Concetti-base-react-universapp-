import {useEffect} from 'react';
import style from "./style/VideoText.module.css";
import styled, {css} from "styled-components";

function VideoText({ title, color, deleteVideo }) {
  return (
    <div id="container" style={{ display: "flex" }}>
      <div style={{ padding: "30px", background: color }}>
        <h1>image</h1>
        <MyButton primary={true} onClick={deleteVideo}>cancella video</MyButton>
      </div>
      <div>
        <h1 className={style.title}>{title}</h1>
        <h4>3m - 6 novembre</h4>
        <h2>Vivaldi</h2>
      </div>
    </div>
  );
}

const MyButton = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid blue;
  color: blue;
  margin: 0 1em;
  padding: 0.25em 1em;

  ${props => 
    props.primary ? css `
      color: grey;
      border: 2px solid grey;
    `: null} 
`;

// 1. Crea un componente personalizzato con styled components
// 2. Fai vedere uno stile diverso in base al prop che passi

export default VideoText;
