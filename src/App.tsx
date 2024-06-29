import './App.css';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import GridLayout from './components/layouts/GridLayout';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>

          <Route path="/" element={<Navigate to="/home" />} />

          <Route path="/*" element={<GridLayout />} />

          {/* 404 bugfix: redirect to home page */}
          <Route path="*" element={<Navigate to="/" />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
