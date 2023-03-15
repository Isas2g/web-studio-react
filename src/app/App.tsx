import About from 'pages/About';
import 'shared/styles/fonts.scss';
import './App.scss';
import Main from 'pages/Main';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Projects from 'pages/Projects';
import Project from 'pages/Project';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="*" element={<Main />} />
          <Route path="/project" element={<Project />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
