import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Navigate, Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import App from './components/App.tsx';
import ArticlesPage from './components/ArticlesPage.tsx';
import './style/index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<App />} />
        <Route path="/articles" element={<ArticlesPage />} />
      </Routes>
    </Router>
  </StrictMode>,
)
