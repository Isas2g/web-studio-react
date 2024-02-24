import 'shared/styles/fonts.scss';
import 'shared/styles/variables.scss';
import 'shared/styles/screens.scss';
import './App.scss';
import { BrowserRouter } from 'react-router-dom';
import { Header, Footer } from 'shared/ui';
import { Routing } from 'pages/index';
import AuthProvider from 'shared/components/AuthProvider';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AuthProvider>
          <Header />
          <Routing />
          <Footer />
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
