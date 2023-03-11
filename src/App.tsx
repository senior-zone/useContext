import { Route, Routes, Link } from 'react-router-dom';
import './App.css';
import UseTransitionExample from './UseTransitionExample/useTransitionExample';
import UseDeferredValueExample from './UseDeferredValueExample/UseDeferredValueExample';

function App() {
  return (
    <div className="App">
      <div className="links">
        <Link to="useDeferredValue">useDeferredValue</Link>
        <Link to="useTransition">useTransition</Link>
      </div>
      <div className="app__content">
        <Routes>
          <Route path="/useDeferredValue" element={<UseDeferredValueExample />} />
          <Route path="/useTransition" element={<UseTransitionExample />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
