import './People.css';
import male from './icons/male.png';
import female from './icons/female.png';

function People({db, filters})
{
    const peopleArray = Object.values(db);

    const filteredPeople = peopleArray.filter(person => {
        // 1. поиск по имени/фамиилии
        if (filters?.query) {
            const q = filters.query.toLowerCase();
            const fullName = `${person.name} ${person.surname}`.toLowerCase();
            if(!fullName.includes(q)) return false;
        }

        // 2. по полу
        if (filters?.gender && filters.gender !== 'all') {
            if (person.pol !== filters.gender) return false;
        }

        // 3. по возрастной группе
        if (filters?.ageGroup && filters.ageGroup !== 'all') {
            const age = person.age;
            if(filters.ageGroup === 'young' && age >= 25) return false;
            if(filters.ageGroup === 'middle' && (age <25 || age > 40)) return false;
            if(filters.ageGroup === 'senior' && age <= 40) return false;
        }
        return true;
    });
    return(
       <>
        {/* <div className='card'>
            <img src={props.human.photo} alt="Photo" />
            <div className='name'>{props.human.name} {props.human.surname}</div>
            <div className = 'age'>{props.human.age}</div>
        </div> */}
        <div className="people-container">
        {filteredPeople.length > 0 ? (
        filteredPeople.map((person, index) => (
          <div
            className="card"
            key={person.id || index}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <img src={person.photo} alt={`${person.name} ${person.surname}`} />
            <div className="name">{person.name} {person.surname}</div>
            <div className="gender">
              <img src={person.pol === 'male' ? male : female} alt={person.pol} />
            </div>
            <div className="age">{person.age} лет</div>
          </div>
        ))
      ) : (
        <p style={{ gridColumn: '1 / -1', textAlign: 'center', fontSize: '1.2em' }}>
          Ничего не найдено
        </p>
      )}
        </div>
       </> 
    )
}
export default People;