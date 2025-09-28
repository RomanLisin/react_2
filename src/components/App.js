//import logo from '../logo.svg';
import './App.css';
import Header from './Header';
import Nav from './Nav';
import data from './db.json';
import People from './People';
import { useState } from 'react';

function App(props) {
  let db = data.people;
  const [filters, setFilters] = useState(null); // null- показывать всех
  const handleSearch = (filters) => {
    setFilters(filters);
  };

  return (
    <div className="App">
      <Header onSearch={handleSearch}/>
      <Nav navigation={props.navigation} />
      <People db = {db} filters={filters}/>
    </div>
  );
}

export default App;
