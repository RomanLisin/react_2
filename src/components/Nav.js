import './Nav.css';
import {Link} from 'react-router-dom';

function Nav(props)
{
    return(
        <nav>
            <ul>
                {
                    Object.keys(props.navigation).map
                    (
                        element => 
                        {
                            return <li key={element}><Link to={props.navigation[element]}>{element}</Link></li>
                        }
                    )
                }
            </ul>
        </nav>
    )
}
export default Nav;