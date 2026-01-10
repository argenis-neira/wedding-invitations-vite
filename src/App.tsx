import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Invitacion from './clients/aguilar-pachecho-01/Invitacion';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aguilar-pacheco-01" element={<Invitacion />} />
        {/* Ruta para manejar errores 404 */}
        <Route path="*" element={<h2>404 - No encontrado</h2>} />
      </Routes>
    </Router>
  );
}

export default App;