import About from 'pages/About';
import Main from 'pages/Main';
import { Route, Routes } from 'react-router-dom';
import Projects from 'pages/Projects';
import Project from 'pages/Project';
import Authorization from 'pages/Authorization';
import AdminProjects from 'pages/AdminProjects';
import EditProject from 'pages/EditProject';
import EditUsers from 'pages/EditUsers';
import Error from '../pages/Error';
import CreateProject from '../pages/CreateProject';

export const Routing = () => {
  return (
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/auth" element={<Authorization />} />
          <Route path="/admin-projects" element={<AdminProjects />} />
          <Route path="/edit-project/:id" element={<EditProject />} />
          <Route path="/edit-users/:id" element={<EditUsers />} />
          <Route path="/projects/:id" element={<Project />} />
          <Route path="/error" element={<Error />} />
          <Route path="/create-project" element={<CreateProject />} />
          <Route path="*" element={<Main />} />
        </Routes>
  );
}
