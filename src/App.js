
import './App.css';
import SomeCards from './components/SomeCards';

function App() {
  return (
    <div className="app">
      <SomeCards firstName={"Jane"} lastName={"Doe"} age={45} hairColor={"Black"} />
      <SomeCards firstName={"John"} lastName={"Smith"} age={88} hairColor={"Brown"} />
      <SomeCards firstName={"Millard"} lastName={"Fillmore"} age={50} hairColor={"Brown"} />
      <SomeCards firstName={"Brian"} lastName={"Vera"} age={26} hairColor={"Brown"} />
    </div>
  );
}

export default App;
