import VideoText from './VideoText';

function App() {
  // PROPS - proprietà
  return (
    <div className="App">
      <VideoText title="four seasons - vivaldi" color="blue" />
      <VideoText title="The best of vivaldi" views="33M" published="7 years ago" color="green" />
      <VideoText title="vivaldi - classical music for relax" views="" color="white" />
      <VideoText title="Vivaldi: la follia" color="red" />
    </div>
  );
}



export default App;
