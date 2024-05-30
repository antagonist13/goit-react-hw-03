import { useState, useEffect } from 'react'
import Description from '../Description/Description'
import Options from '../Options/Options'
import Feedback from '../Feedback/Feedback'
import css from './App.module.css'

export default function App() {
    const data = () => {
    const savedRating = {
        good: Number(localStorage.getItem("good")),
        neutral: Number(localStorage.getItem("neutral")),
        bad: Number(localStorage.getItem("bad"))
        }
        if (savedRating !== null) {
            return savedRating
        }
        return {
	good: 0,
	neutral: 0,
	bad: 0
    }
    }

    const [reviews, setReviews] = useState(data)
    const { good, neutral, bad } = reviews
    
    const totalFeedback = good + neutral + bad;
    const positiveFeedback = Math.round((good / totalFeedback) * 100)

    useEffect(() => {
        Object.entries(reviews).forEach(([key, value]) => {
            localStorage.setItem(key, value);
        })
    }, [reviews]);
    
    const updateFeedback = feedbackType => {
        setReviews((previousFeedback) => ({
            ...previousFeedback,
            [feedbackType]: previousFeedback[feedbackType] + 1
    }))
    }
    const handleReset = () => {
        setReviews(prevFeedback => {
            const newData = Object.keys(prevFeedback).reduce((key, data) => {
                key[data] = 0
                return key
            }, {})
            return newData
        })
    }
    return <div className={css.header}>
        <Description />
        <Options handleClick={updateFeedback} reviews={reviews} total={totalFeedback} handleReset={handleReset} />
        {totalFeedback === 0 ? <p>No feedback yet</p> : <Feedback rating={reviews} total={totalFeedback} positive={positiveFeedback} />}
        </div>
}