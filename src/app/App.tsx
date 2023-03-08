import About from 'pages/About';
import 'shared/styles/fonts.scss';
import './App.scss';
import Main from 'pages/Main';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<Main />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
