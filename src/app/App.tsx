import 'shared/styles/fonts.scss';
import 'shared/styles/variables.scss';
import 'shared/styles/screens.scss';
import './App.scss';
import { BrowserRouter } from 'react-router-dom';
import { Header, Footer } from 'shared/ui';
import { Routing } from 'pages/index';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routing />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
