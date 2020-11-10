import VideoText from './VideoText';

function App() {
  // Eventi
  const saluta = (nome) => {
    console.log(`ciao ${nome}`)
  }
  return (
    <div className="App">
      <button onClick={() => saluta('vbilly')}>click me</button>
      <VideoText title="four seasons - vivaldi" color="blue" />
    </div>
  );
}



export default App;
