
import { Routes ,Route} from 'react-router-dom';
import './App.css';
import LobbyScreen from './screens/Lobby';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<h1><LobbyScreen/></h1>} />
      </Routes>
    </div>
  );
}

export default App;
