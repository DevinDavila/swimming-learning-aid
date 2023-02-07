import { Route, Routes } from 'react-router-dom';
import Admin from './Pages/Admin/Admin';
import Home from './Pages/Home/Home';
import Learner from './Pages/Learner/Learner';
import Quiz from './Pages/Quiz/Quiz';
import Stages from './Pages/Stages/Stages';

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/learner" element={<Learner />} />
      <Route path="/quiz" element={<Quiz />} />
      <Route path="/stages" element={<Stages />} />
    </Routes>
  );
}

export default App;