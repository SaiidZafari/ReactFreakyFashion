import { Card } from 'react-bootstrap';
import './App.css';
import Header from './component/Header';
import Navigation from './component/Navigation';
import InfoCart from "./component/InfoCart";
import Hero from './component/Hero';
import SpotsSection from "./component/SpotsSection";
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
        <SpotsSection/>
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
