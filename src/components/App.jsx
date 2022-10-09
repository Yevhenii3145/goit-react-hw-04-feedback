import React from 'react'
import Section from './Section/Section'
import FeedbackOptions from './Feedback/FeedbackOptions'
import Statistics from './Statistics/Statistics'
import Notification from '../components/Notification/Notification'
import { useState } from "react";

export default function App() {
    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);
    const keys = ["good", "neutral", "bad"];

    const makeFeedback = (option) => {
        switch (option) {
            case "good":
                return setGood((prev) => prev + 1);
            case "neutral":
                return setNeutral((prev) => prev + 1);
            case "bad":
                return setBad((prev) => prev + 1);
            default:
                return;
        }
    }
        const countTotalFeedback = () => {
            return good + neutral + bad;
        }
        const countPositiveFeedbackPercentage = () => {
            const total = countTotalFeedback();
            if (!total) {
                return 0;
            }
            const result = (good / total) * 100
            return Number(result.toFixed(0));
        }
    const total = countTotalFeedback();
    const positivProcentage = countPositiveFeedbackPercentage();
        return (
            <>
                <Section title={"Pleas leave feedback"}>
                    <FeedbackOptions options={keys} onLeaveFeedback={makeFeedback} />
                    {!total ? <Notification /> : <Statistics good={good} neutral={neutral} bad={bad} total={total} positivProcentage={positivProcentage} />}
                </Section>
            </>
        )
    }
