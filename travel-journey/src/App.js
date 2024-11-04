import logo from './logo.svg';
import './App.css';
import Navbar from './components/nav';
import Card from './components/card'
import data from './components/data';

function App() {
  const places = data.map(place => {
    return (
      <Card
        key={place.item}
        {...place}
      />
    )
  })

  return (
    <div className="App">
      <Navbar/>
      <section>
        {places}
      </section>
    </div>
  );
}

export default App;
