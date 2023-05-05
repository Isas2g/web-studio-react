import About from 'pages/About';
import 'shared/styles/fonts.scss';
import './App.scss';
import Main from 'pages/Main';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Projects from 'pages/Projects';
import Project from 'pages/Project';
import Header from 'shared/ui/Header';
import Authorization from 'pages/Authorization';
import AdminProjects from 'pages/AdminProjects';
import EditProject from 'pages/EditProject';
import EditUsers from 'pages/EditUsers';
import Footer from 'shared/ui/Footer';
import Error from '../pages/Error';

//TODO: вернуть хэдер на место

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/*<Header />*/}
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/auth" element={<Authorization />} />
          <Route path="/admin-projects" element={<AdminProjects />} />
          <Route path="/edit-project" element={<EditProject />} />
          <Route path="/edit-users" element={<EditUsers />} />
          <Route path="/project" element={<Project />} />
          <Route path="/error" element={<Error />} />
          <Route path="*" element={<Main />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
