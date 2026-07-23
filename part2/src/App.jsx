import { useState } from 'react'

const Person = ({value}) => {
 return <li>{value.name} {value.number}</li>
}

const Persons = ({names}) => {
  const entries = names.map(person => <Person key={person.name} value={person}/>)
  return (
    <ul>
      {entries}
    </ul>
  )
}
  

const PersonForm = ({persons, setPersons, newName, setName, handleNameChange, newNumber, setNumber, handleNumberChange}) => {
  const isNameUsed = (nameValue) => {
    return nameValue.name !== newName
  }

  const addName = (event) => {
    event.preventDefault()
    if (persons.every(isNameUsed)){
        const nameObject = {
          name: newName,
          number: newNumber
        }
        setPersons(persons.concat(nameObject))
        setName('')
        setNumber('')
      }
      else{
        return alert(`${newName} is already added to the phonebook`)
      }
  }

  return (
    <form onSubmit={addName}>
      <div>
        name: <input value={newName} onChange={handleNameChange}/>
      </div>
      <div>
        number: <input value={newNumber} onChange={handleNumberChange}/>
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  )
}

const Filter = ({filter, setFilter}) => {
  return (
    <div>
      filter name with: <input value={filter} onChange={setFilter}/>
    </div>
  )
}

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-1234567'},
    { name: 'Georgio Borgio', number: '667-6666667'},
    { name: 'Argos Helios', number: '555-5555'}
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilter, setNewFilter] = useState('')

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleFilterChange = (event) => {
    setNewFilter(event.target.value)
  }

  const regex = new RegExp(newFilter.toLowerCase(), "g")
  const filteredPersons = persons.filter((person) => person.name.toLowerCase().match(regex))

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filter={newFilter} setFilter={handleFilterChange}/>
      
      <h2>Add a new person</h2>
      <PersonForm persons={persons} setPersons={setPersons} 
        newName={newName} setName={setNewName} handleNameChange={handleNameChange} 
        newNumber={newNumber} setNumber={setNewNumber} handleNumberChange={handleNumberChange}
      />

      <h2>Numbers</h2>
      <Persons names={filteredPersons}/>
    </div>
  )
}

export default App