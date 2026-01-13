import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import InvAguilarPacheco from './clients/aguilar-pachecho-01/Invitacion';
import TemplateXV from './templates/quinceanera';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aguilar-pacheco-01" element={<InvAguilarPacheco />} />
        <Route path='/mis-quince' element={<TemplateXV />} />
        {/* Ruta para manejar errores 404 */}
        <Route path="*" element={<h2>404 - No encontrado</h2>} />
      </Routes>
    </Router>
  );
}

export default App;