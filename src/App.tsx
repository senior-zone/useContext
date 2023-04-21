import { Route, Routes, Link } from 'react-router-dom';
import './App.css';
import NoContextExample from './NoContextExample/NoContextExample';
import ContextExample from './ContextExample/ContextExample';
import BestPracticeIndex from './BestPracticeExample/BestPracticeIndex';

function App() {
  return (
    <div className="App">
      <div className="app__content">
        <div className="links">
          <Link to="no-context">No Context</Link>
          <Link to="context">Context</Link>
          <Link to="best-practice-use-context">Best Practice</Link>
        </div>
        <Routes>
          <Route path="/no-context" element={<NoContextExample />} />
          <Route path="/context" element={<ContextExample />} />
          <Route path="/best-practice-use-context" element={<BestPracticeIndex />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
