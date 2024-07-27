import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([{ id: 1, name: "Arto Hellas" }]);
  const [newName, setNewName] = useState("");
  

  const addPerson = (event) => {
    event.preventDefault();
    const newobj = { id: persons.length + 1, name: newName };

    if (persons.some((person) => person.name === newName.trim())) {
      alert(`${newName} is already added to phonebook`);
    } else {
      setPersons(persons.concat(newobj));
      setNewName("");
    }
  };

  const handlenewperson = (event) => {
    setNewName(event.target.value);
  };

 
  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handlenewperson} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map((person) => (
        <li key={person.id}>{person.name}</li>
      ))}
      <div>debug: {newName}</div>
    </div>
  );
};

export default App;
