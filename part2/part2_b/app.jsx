import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([{ name: "Arto Hellas" }]);
  const [newName, setNewName] = useState("");
  const [showall, setShowAll] = useState(true);

  const addPerson = (event) => {
    event.preventDefault();
    const newobj = { name: newName };

    setPersons(persons.concat(newobj));
    setNewName("");
  };

  const handlenewperson = (event) => {
    setNewName(event.target.value);
  };

  const showpersons = showall
    ? persons
    : persons.filter((person) => person.name);

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
      {showpersons.map((person) => (
        <li key={person}>{person.name}</li>
      ))}
      <div>debug: {newName}</div>
    </div>
  );
};

export default App;
