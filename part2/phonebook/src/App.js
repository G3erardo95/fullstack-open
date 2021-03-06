import React, { useState, useEffect } from "react";
import { Filter } from "./components/Filter";
import { Persons } from "./components/Persons";
import { PersonForm } from "./components/PersonForm";
import phoneServices from "./services/phoneServices";
import { Notification } from "./components/Notification";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const [color, setColor] = useState("");

  const NoteStyle = {
    color: color,
    background: "lightgrey",
    fontSize: "20px",
    borderStyle: "solid",
    borderRadius: "5px",
    padding: "10px",
    marginBottom: "10px"
  }
  
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
        phoneServices.changePerson(existingPerson.id, newPerson).then((res) => {
          if (res.status !== 200) {
            return;
          } else if (res.status === 200) {
            return phoneServices.getPerson().then((response) => {
              setFilteredData(response.data);
              handleMessage('green',`Changed ${existingPerson.name}'s number`);
            });
          }
        })
        .catch(() => {
          handleMessage(
            'red',`${existingPerson.name} was already removed from server`
          ) 
        }
        )};
    } else {
      phoneServices.addNewPerson(newPerson).then((response) => {
        setPersons(persons.concat(response.data));
        setFilteredData(persons.concat(response.data));
        setNewName("");
        setNewNumber("");
        handleMessage('green',`Added ${response.data.name}`);
      });
    }
  };

  const handleDelete = (id, people, name) => {
    if (window.confirm(`Delete ${name} ?`)) {
      phoneServices.deletePerson(id).then(() => {
        const deletedPerson = people.filter((p) => p.id !== id);
        setPersons(deletedPerson);
        setFilteredData(deletedPerson);
        handleMessage('green',`Deleted ${name} successfully`);
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
    const filterSearch = (s) =>
      persons.filter((f) => f.name.toLowerCase().includes(s));
    setFilteredData(filterSearch(event.target.value));
  };

  const handleMessage = (color, message) => {
    setColor(color);
    setErrorMessage(message);
    setTimeout(() => {
      setErrorMessage(null);
    }, 2500);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={errorMessage} style={NoteStyle} />
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
