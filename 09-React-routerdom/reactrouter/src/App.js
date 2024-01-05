
import './App.css';
import { Route, Routes } from 'react-router-dom';

import Inicio from './components/Inicio';
import Contacto from './components/Contactos';
import Nosotros from './components/Nosotros';
import Header from './components/Header';
import Contactos from './components/Contactos';
function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/contactos" element={<Contactos />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="*" exact={true} element={<h1>Not Found, no encontrado</h1>} />
      </Routes>
    </div>
  );
}

export default App;
