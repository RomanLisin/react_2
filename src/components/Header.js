import './Header.css';
import logo from '../logo.svg';
import { useState } from 'react';


function Header({ onSearch }) {
  const [query, setQuery] = useState('');  // текствоый поиск
  const [gender, setGender] = useState('all');
  const [ageGroup, setAgeGroup] = useState('all');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch({ query, gender, ageGroup });
  };

    return(
      <header className="App-header">
          <div className="header-container">
            <img src={logo} className="App-logo" alt="logo" />
                   <form onSubmit={handleSubmit} className="search-form">
               <input 
               type="text" 
               value={query}
               onChange={(e) => setQuery(e.target.value)}
               placeholder="Имя или фамилия..." 
               aria-label="Поиск по имени" 
               />
               <select value={gender} onChange={(e) => setGender(e.target.value)}>
                <option value="all">Любой пол</option>
                <option value="male">Мужской</option>
                <option value="female">Женский</option>
               </select>
               
               <select value={ageGroup} onChange={(e) => setAgeGroup(e.target.value)}>
                <option value="all">Любой возраст</option>
                <option value="young">До 25</option>
                <option value="middle">25-40</option>
                <option value="senior">40+</option>
               </select>

               <button type="submit">Найти</button>
             </form>
         </div>
      </header>
    )
}
export default Header;