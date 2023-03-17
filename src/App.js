import './App.css';
import Generator from './components/Generator/Generator';
import Header from './components/Header/Header';
import Logs from './components/Logs/Logs';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element= {<Generator/>}/>
          <Route path='/logs' element= {<Logs/>}/>
        </Routes>


      </BrowserRouter>
    </div>
  );
}

export default App;
