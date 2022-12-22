import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import LOL from './components/LOL';
import LOL_console from './components/LOL_console';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/lol' element={<LOL />} />
        <Route path='/lolconsole' element={<LOL_console />} />
      </Routes>
    </div>
  );
}

export default App;
