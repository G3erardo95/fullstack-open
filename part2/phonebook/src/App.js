import React, { useState, useEffect } from "react";
import { Filter } from "./components/Filter";
import { Persons } from "./components/Persons";
import { PersonForm } from "./components/PersonForm";
import phoneServices from "./services/phoneServices";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    phoneServices.getPerson().then((response) => {
      setPersons(response.data);
    });
  }, []);

  const newPerson = {
    name: newName,
    number: newNumber,
  };

  const addPerson = (event) => {
    event.preventDefault();
    const isPersonAdded = persons.map((p) => p.name).includes(newName);
    const existingPerson = persons.find((p) => newName === p.name);

    if (isPersonAdded) {
      if (
        window.confirm(
          `${existingPerson.name} is already added to phonebook, replace the old number with a new one?`
        )
      ) {
        phoneServices.changePerson(existingPerson.id, newPerson);
      }
    } else {
      phoneServices.addNewPerson(newPerson).then((response) => {
        setPersons(persons.concat(response.data));
        setNewName("");
        setNewNumber("");
      });
    }
  };

  const handleDelete = (id, people, name) => {
    if (window.confirm(`Delete ${name} ?`)) {
      phoneServices.deletePerson(id).then(() => {
        const deletedPerson = people.filter((p) => p.id !== id);
        setPersons(deletedPerson);
        setFilteredData(deletedPerson);
      });
    }
  };

  const handleAddPerson = (event) => {
    setNewName(event.target.value);
  };

  const handleAddNumber = (event) => {
    setNewNumber(event.target.value);
  };

  const handleFilter = (event) => {
    const filterSearch = (s) => persons.filter((f) => f.name.includes(s));
    setFilteredData(filterSearch(event.target.value));
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter handler={handleFilter} />
      <h2>Add a new</h2>
      <PersonForm
        onSubmit={addPerson}
        nameValue={newName}
        numberValue={newNumber}
        handlerName={handleAddPerson}
        handlerNumber={handleAddNumber}
      />
      <h2>Numbers</h2>
      <Persons filteredData={filteredData} deletefunc={handleDelete} />
    </div>
  );
};

export default App;
