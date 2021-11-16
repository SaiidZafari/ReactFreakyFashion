import { Card } from 'react-bootstrap';
import './App.css';
import Header from './component/Header';
import Navigation from './component/Navigation';
import InfoCart from "./component/InfoCart";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Header />
      <Card />
      <InfoCart />
      
    </div>
  );
}

export default App;
