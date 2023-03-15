import About from 'pages/About';
import 'shared/styles/fonts.scss';
import './App.scss';
import Main from 'pages/Main';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from 'shared/ui/Header';
import Authorization from 'pages/Authorization';
import AdminProjects from 'pages/AdminProjects';
import EditProject from 'pages/EditProject';
import EditUsers from 'pages/EditUsers';
import Project from 'pages/Project';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/about" element={<About />} />
          <Route path="/auth" element={<Authorization />} />
          <Route path="/admin-projects" element={<AdminProjects />} />
          <Route path="/edit-project" element={<EditProject />} />
          <Route path="/edit-users" element={<EditUsers />} />
          <Route path="/project" element={<Project />} />
          <Route path="*" element={<Main />} />
          <Route path="/project" element={<Project />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
