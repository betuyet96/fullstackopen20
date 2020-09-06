
import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import Button from './Button'
import Statistic from './Statistic'

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const all = good + neutral + bad
  const average = ((good + neutral * 0 + bad * (-1))/all).toFixed(2)
  const positive = (good/all *100).toFixed(2) + `%`

  return (
    <div>
      <h1>Give feedback</h1>
      <Button feedback={good} setFeedback={setGood} text="Good" />
      <Button feedback={neutral} setFeedback={setNeutral} text="Neutral" />
      <Button feedback={bad} setFeedback={setBad} text="Bad" />

      <h1>Statistics</h1>

      {/*Conditional in JSX*/}
      {all === 0 ? (
      <div>
        <p>No feedback given</p>
      </div>
      ) : (
      <table>
        <tbody>
          <Statistic text="Good" value={good} />
          <Statistic text="Bad" value={bad} />
          <Statistic text="Neutral" value={neutral} />
          <Statistic text="All" value={all} />
          <Statistic text="Average" value={average} />
          <Statistic text="Positive" value={positive} />
        </tbody>
      </table>
      )}
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)
