import { useState, useEffect } from "react";
import phoneOperations from "./components/operations"
import axios from "axios";


const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filterValue, setFilterValue] = useState("");

  useEffect(() => {
    axios
      .get('http://localhost:3001/phonebook')
      .then(response => {
        setPersons(response.data);
      });
  }, [])


  const addPerson = (e) => {
    e.preventDefault();
    const newobj = {
      id: String(persons.length + 1),
      name: newName.trim(),
      number: newNumber
    };

    const existingperson = persons.find(person => person.name === newName.trim());

    if (existingperson) {
      const replaceNumber = window.confirm(`${existingperson.name} is already in phonebook. Replace new phone number with new one`)
      if (replaceNumber) {
        axios
          .put(`http://localhost:3001/phonebook/${existingperson.id}`, newobj)
            .then(response => {
              setPersons(persons.map(person => person.id === existingperson.id ? { ...person, number: newNumber } : person));
              setNewName("");
              setNewNumber("");
            })
            .catch(error => {
              console.log("error while updating phonebook: ", error)
            });
      }
    } else {
      axios
        .post('http://localhost:3001/phonebook', newobj)
        .then(response => {
          setPersons(persons.concat(response.data));
          setNewName("");
          setNewNumber("");
        });
    }
  };


  const handlenewperson = (e) => {
    setNewName(e.target.value);
  };

  const handlenewNumber = (e) => {
    setNewNumber(e.target.value);
  };

  const handlenewfilter = (e) => {
    setFilterValue(e.target.value);
  };

  const filteruser = persons.filter((person) =>
    person.name.toLowerCase().includes(filterValue.toLowerCase())
  )

  const deletePerson = (id) => {
    const person = persons.find((p) => p.id === id) // to get the 'id' of selected person
    if (person && window.confirm(`Do you want to delete ${person.name}`)) {
      axios
        .delete(`http://localhost:3001/phonebook/${id}`)
        .then(() => {
          // console.log(`deleted peroson with id = ${id}`)
          setPersons(persons.filter((p) => p.id !== id))
        })
        .catch((error) => {
          alert(`The Person ${person.name} is already deleted`)
          // console.log(`the Person already existed with id = ${id}`)
          setPersons(persons.filter((p) => p.id !== id))
        });
    }

  };


  return (
    <div>
      <h2>Phonebook</h2>
      <phoneOperations.Filter filterValue={filterValue} handlenewfilter={handlenewfilter} />

      <h2>Add a New</h2>
      <phoneOperations.PersonForm
        addPerson={addPerson}
        newName={newName}
        handlenewperson={handlenewperson}
        newNumber={newNumber}
        handlenewNumber={handlenewNumber}
      />

      <h2>Numbers</h2>
      <phoneOperations.Persons
        persons={filteruser} deletefun={deletePerson}
      />

      <div>debug: {newName}</div>
    </div>
  );
};

export default App;