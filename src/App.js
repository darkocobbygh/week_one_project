import logo from './logo.svg';
import './App.css';
import Design from './components/Design';

function App() {
  return (
    <div className="App">
      <Design  carName='SEDANS' details='Choose a sedan for its
affordability and excellent
fuel economy. Ideal for
cruising in the city or on
your next trip' learnMore='Learn More' />

<Design carName='SUVS' details='Take an SUV for its spacious
interior, power, and
versatility. Perfect for your
next familv vacation ano
off-road adventures' learnMore='Learn More' />

<Design carName='LUXURY' details='Cruise in the best car brands
without the bloated prices.
Enjoy the enhanced comfort
of a luxury rental and arrive
in style' learnMore='Learn More' />
    </div>
  );
}

export default App;
