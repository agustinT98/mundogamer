import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home/Home'; 
import Titulo from './componentes/Titulo/Titulo';
import Navbar from './componentes/NavBar/Navbar';
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer';

import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';

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
        <Route path='/*' element={<h2>La categoria a la que intenta acceder no existe, intente volviendo al  <a href='/'>inicio </a></h2>} />
        <Route path='/' element={<Home />} />
        <Route path='/category/:categoria' element={<ItemListContainer />} />
        <Route path='item/:id' element= {<ItemDetailContainer />} />
        <Route path="/category/:categoria/item/:id" element={<ItemDetailContainer />} />
      </Routes>
    </BrowserRouter>    
    
    
    );
}

export default App;
