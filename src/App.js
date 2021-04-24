import Menu from './components/Menu'
import Lista from './components/Lista'

import './App.css';

function App() {
  return (
    <div className="contenedor">
      <Menu />
      <div className="contenido">
        <Lista />
      </div>
    </div>
  );
}

export default App;
