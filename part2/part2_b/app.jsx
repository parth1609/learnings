import { useState } from "react";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456", id: 1 },
    { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", number: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
  ]);
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
      <Filter filterValue={filterValue} handlenewfilter={handlenewfilter} />
      
      <h2>Add a New</h2>
      <PersonForm
        addPerson={addPerson}
        newName={newName}
        handlenewperson={handlenewperson}
        newNumber={newNumber}
        handlenewNumber={handlenewNumber}
      />
      
      <h2>Numbers</h2>
      <Persons persons={filteruser} />
      
      <div>debug: {newName}</div>
    </div>
  );
};

export default App;
