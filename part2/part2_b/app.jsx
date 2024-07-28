import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([{ id: 1, name: "Arto Hellas",number: "040-123456" }]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filterValue, setFilterValue] = useState("");

  const addPerson = (event) => {
    event.preventDefault();
    const newobj = { id: persons.length + 1, name: newName ,number: newNumber};

    if (persons.some((person) => person.name === newName.trim())) {
      alert(`${newName} is already added to phonebook`);
    } else {
      setPersons(persons.concat(newobj));
      setNewName("");
      setNewNumber("");
    }
  };

  const handlenewperson = (event) => {
    setNewName(event.target.value);
  };

  const handlenewNumber = (event) => {
    setNewNumber(event.target.value);
  };

  const handlenewfilter = (event) => {
    setFilterValue(event.target.value);
  };
  const filteruser = persons.filter((person) =>
    person.name.toLowerCase().includes(filterValue.toLowerCase()),
  );
 
  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        filter shown with 
        <input value={filterValue} onChange={handlenewfilter} />
      </div>
      <h2>Add a New</h2>
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
      <h2>Numbers</h2>
      {filteruser.map((person) => (
        <li key={person.id}>
          {person.name} : {person.number}
        </li>
      ))}
      <div>debug: {newName}</div>
    </div>
  );
};

export default App;
