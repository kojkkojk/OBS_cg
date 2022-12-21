import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import LOL from './components/LOL';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/lol' element={<LOL />} />
      </Routes>
    </div>
  );
}

export default App;
