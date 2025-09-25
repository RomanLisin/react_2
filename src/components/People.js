import './People.css';
import male from './icons/male.png';
import female from './icons/female.png';

function People(props)
{
    return(
       <>
        {/* <div className='card'>
            <img src={props.human.photo} alt="Photo" />
            <div className='name'>{props.human.name} {props.human.surname}</div>
            <div className = 'age'>{props.human.age}</div>
        </div> */}
        {
        Object.keys(props.db).map
        (
            element =>
            {
                return(
                    <div className='card'>
                        <img src={props.db[element].photo} alt="Photo" />
                        <div className='name'>{props.db[element].name} {props.db[element].surname}</div>
                        <div className='gender'><img src={props.db[element].pol === 'male' ? male : female} alt="" /></div>
                        <div className='age'>{props.db[element].age}</div>
                    </div>
                )
            }
        )
        }
       </> 
    )
}
export default People;