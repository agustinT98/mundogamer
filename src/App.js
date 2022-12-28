import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Titulo from './componentes/Titulo';
import Navbar from './componentes/Navbar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Titulo/>
      </header>
      <div className="App">
      <nav>
        <Navbar/>
        
      </nav>      
      
    </div>
    </div>
    
  );
}

export default App;
