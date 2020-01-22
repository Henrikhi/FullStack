import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Statistics = (props) => {

    const good = props.good
    const neutral = props.neutral
    const bad = props.bad
    const all = good + neutral + bad
    const avg = (good - bad) / all
    const pos = (100 * good) / all + '%'





    if (good === 0 && neutral === 0 && bad === 0) {

        return (
            <div>
                < h2 > statistics</h2 >

                <p>
                    No feedback given
                </p>
            </div>
        )
    }

    return (
        <div>
            < h2 > statistics</h2 >
            <table>
                <tbody>
                    <StatisticLine text='good' value={good} />
                    <StatisticLine text='neutral' value={neutral} />
                    <StatisticLine text='bad' value={bad} />
                    <StatisticLine text='all' value={all} />
                    <StatisticLine text='average' value={avg} />
                    <StatisticLine text='positive' value={pos} />
                </tbody>
            </table>
        </div>
    )
}

const Button = ({ onClick, text }) => (
    <button onClick={onClick}>
        {text}
    </button>
)


const StatisticLine = ({ text, value }) => {
    return (<tr><td>{text}</td><td>{value}</td></tr>)
}



const App = () => {
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)


    const handleGoodClick = () => {
        setGood(good + 1)
    }

    const handleNeutralClick = () => {
        setNeutral(neutral + 1)
    }

    const handleBadClick = () => {
        setBad(bad + 1)
    }

    return (
        <div>
            <div>

                <h2>Give feedback</h2>

                <Button onClick={handleGoodClick} text='good' />
                <Button onClick={handleNeutralClick} text='neutral' />
                <Button onClick={handleBadClick} text='bad' />

                <Statistics good={good} neutral={neutral} bad={bad} />

            </div>
        </div>
    )
}

ReactDOM.render(<App />,
    document.getElementById('root')
)