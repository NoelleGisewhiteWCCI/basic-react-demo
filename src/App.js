import logo from './logo.svg';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import AppNav from './components/app-navigation/AppNav';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Home from './pages/home-page/Home';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Header />
      <AppNav />
      {/* <Home /> */}
      <Footer />
    </BrowserRouter>
    </div>
  );
}

export default App;
