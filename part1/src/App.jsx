import { useState } from 'react'

const randomNumber = (props) => {
  const maxValue = props
  return (
    Math.floor(Math.random() * maxValue)
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const maxValue = anecdotes.length

  const [selected, setSelected] = useState(0)
  const [votes, setVote] = useState(Array(maxValue).fill(0))

  const anecdoteSelection = newAncedote => {
    console.log(newAncedote)
    setSelected(newAncedote)
  }

  const anecdoteVote = newVote => {
    const copyVotes = [...votes]
    copyVotes[newVote] += 1
    console.log(copyVotes)
    setVote(copyVotes)
  }

  return (
    <div>
      <p>
        {anecdotes[selected]}
      </p>
      <p>
        has {votes[selected]} votes
      </p>
      <p>
        <button onClick={() => anecdoteVote(selected)}>vote</button>
        <button onClick={() => anecdoteSelection(randomNumber(maxValue))}>next ancedote</button>
      </p>
    </div>
  )
}

export default App