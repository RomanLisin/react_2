import './Header.css';
import logo from '../logo.svg';

function Header() {
    return(
      <header className="App-header">
          <div className="header-container">
            <img src={logo} className="App-logo" alt="logo" />
                   <form action="/search" method="GET" className="search-form">
               <input type="search" name="q" placeholder="Поиск..." aria-label="Поиск" />
               <button type="submit">Найти</button>
             </form>
         </div>
      </header>
    )
}
export default Header;