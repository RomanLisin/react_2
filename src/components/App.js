//import logo from '../logo.svg';
import './App.css';
import Header from './Header';
import Nav from './Nav';
import data from './db.json';
import People from './People';

function App(props) {
  let db = data.people;
  return (
    <div className="App">
      <Header />
      <Nav navigation={props.navigation} />
      <People db = {db}/>
    </div>
  );
}

export default App;
