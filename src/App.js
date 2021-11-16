import { Card } from 'react-bootstrap';
import './App.css';
import Header from './component/Header';
import Navigation from './component/Navigation';
import InfoCart from "./component/InfoCart";
import Hero from './component/Hero';
import Spots from './component/Spots';
import Footer from './component/Footer';
import CopyRight from "./component/CopyRight";


function App() {
  return (
    <div className="App">
      <Navigation />
      <div className="container">
        <Header />
        <Card />
        <Hero />
        <Card />
        <div className="d-flex justify-content-between">
          <Spots />
          <Spots />
          <Spots />
        </div>
        <Card />
        <div className="d-flex"></div>
        <Card />
        <InfoCart />
        <Card />
        <Footer />
        <Card />
        <CopyRight />
      </div>
    </div>
  );
}

export default App;
