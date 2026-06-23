import { useState } from 'react'

const Statistics = (props) => {
  // calculate the average feedback score
  const average = (props.good - props.bad)/props.totalFeedback
  // calculate the percentage of positive feedback
  const positive = (props.good/props.totalFeedback)*100
  
  // if no feedback has been given then don't show anything
  if  (props.totalFeedback === 0){
    return (
      <div>
        <p>No feedback given</p>
      </div>
    )
  }
  return (
    <div>
      <p>good {props.good}</p>
      <p>neutral {props.neutral}</p>
      <p>bad {props.bad}</p>
      <p>all {props.totalFeedback}</p>
      <p>average {average}</p>
      <p>positive {positive} %</p>
    </div>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  // keep a total of all button presses
  const [totalFeedback, setTotal] = useState(0)

  const addGood = newGood => {
    console.log('good', newGood)
    setGood(newGood)
    setTotal(addTotal)
  }

  const addNeutral = newNeutral => {
    console.log('neutral', newNeutral)
    setNeutral(newNeutral)
    setTotal(addTotal)
  }

  const addBad = newBad => {
    console.log('bad', newBad)
    setBad(newBad)
    setTotal(addTotal)
  }

  const addTotal = newTotal => {
    console.log('total', newTotal)
    setTotal(newTotal + 1)
  }

  return (
    <div>
      <h1>give feedback</h1>
      <button onClick={() => addGood(good + 1)}>good</button>
      <button onClick={() => addNeutral(neutral + 1)}>neutral</button>
      <button onClick={() => addBad(bad + 1)}>bad</button>

      <h1>statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad} totalFeedback={totalFeedback}/>
      <p></p>
    </div>
  )
}

export default App