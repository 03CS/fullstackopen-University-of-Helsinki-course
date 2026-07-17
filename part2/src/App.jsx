import { useState } from 'react'

const Name = ({value}) => {
 return <li>{value.name}</li>
}

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' },
  ]) 
  const [newName, setNewName] = useState('')

  const isNameUsed = (nameValue) => {
    return nameValue.name !== newName
  }

  const addName = (event) => {
    event.preventDefault()
    if (persons.every(isNameUsed)){
      const nameObject = {
        name: newName,
      }
      
      setPersons(persons.concat(nameObject))
      setNewName('')
    }
    else{
      return alert(`${newName} is already added to the phonebook`)
    }
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        <div>
          name: <input value={newName} onChange={handleNameChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map(name =>
          <Name key={name.name} value={name} />
        )}
      </ul>
    </div>
  )
}

export default App