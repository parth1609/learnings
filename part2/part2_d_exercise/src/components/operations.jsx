import React from "react";



const Persons = ({ persons,deletefun }) => {
    return (
      <ul>
        {persons.map((person) => (
          <li key={person.id}>
            {person.name} : {person.number}
            <button onClick={()=> deletefun(person.id)}>delete</button>
          </li>
        ))}
        
      </ul>
    );
  };


  const Filter = ({ filterValue, handlenewfilter }) => {
    return (
      <div>
        filter shown with
        <input value={filterValue} onChange={handlenewfilter} />
      </div>
    );
  };

  const PersonForm = ({
    addPerson,
    newName,
    handlenewperson,
    newNumber,
    handlenewNumber,
  }) => {
    return (
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handlenewperson} />
        </div>
        <div>
          number: <input value={newNumber} onChange={handlenewNumber} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    );
  };



  export default {
    Persons,
    Filter,
    PersonForm
  }