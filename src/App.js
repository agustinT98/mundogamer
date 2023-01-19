import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import PC from './pages/PC/PC';
import Home from './pages/Home/Home';
import Consola from './pages/Consolas/Consola';
import Accesorios from './pages/Accesorios/Accesorios';
import Titulo from './componentes/Titulo';
import Navbar from './componentes/Navbar';


function App() {
  return (
    <BrowserRouter> 
     <div className="App">
      <header className="App-header">
      <Titulo/>
      </header>
      <div className="App">
      <Navbar />  
      
    </div>
    </div>
      
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='Consolas' element={<Consola />} />
        <Route path='PCgamers' element={<PC />} />
        <Route path='Accesorios' element={ <Accesorios />} />
      </Routes>
    </BrowserRouter>    
    
    
    );
}

export default App;
