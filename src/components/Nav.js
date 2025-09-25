import './Nav.css';

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
                            return <li key={element}><a href={props.navigation[element]}>{element}</a></li>
                        }
                    )
                }
            </ul>
        </nav>
    )
}
export default Nav;