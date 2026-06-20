import { useState } from 'react'

const Button = (props) => (
  <button onClick={props.onClick}>{props.text}</button>
)

const Display = (props) => (
  <div>
    <p>good {props.good}</p>
    <p>neutral {props.neutral}</p>
    <p>bad {props.bad}</p>
  </div>
)

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const addGood = newGood => {
    console.log('good', newGood)
    setGood(newGood)
  }

  const addNeutral = newNeutral => {
    console.log('neutral', newNeutral)
    setNeutral(newNeutral)
  }

  const addBad = newBad => {
    console.log('bad', newBad)
    setBad(newBad)
  }

  return (
    <div>
      <h1>give feedback</h1>
      <Button onClick={() => addGood(good + 1)} text='good' />
      <Button onClick={() => addNeutral(neutral + 1)} text='neutral' />
      <Button onClick={() => addBad(bad + 1)} text='bad' />

      <h1>statistics</h1>
      <Display good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

export default App