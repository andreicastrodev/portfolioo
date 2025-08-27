import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext.jsx';
import Navigation from './components/Navigation.jsx';
import Home from './components/Home.jsx';
import ProjectsPage from './components/ProjectsPage.jsx';
import AboutPage from './components/AboutPage.jsx';
import ProjectDetail from './components/ProjectDetail.jsx';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen">
          <Navigation />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/project/:slug" element={<ProjectDetail />} />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;