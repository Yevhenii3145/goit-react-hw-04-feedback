import React from 'react'
import PropTypes from 'prop-types';
import styles from './Feedback.module.css'

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    const elements = options.map((option) =>
        <button key={option} className={styles.feedbackButton} onClick={() => onLeaveFeedback(option)}>{option}</button>
    )
    return (
        <div className={styles.buttonsBox}>
            {elements}
        </div>
    )
} 
    
FeedbackOptions.propTypes = {
    onLeaveFeedback: PropTypes.func.isRequired,
    options: PropTypes.array.isRequired
}

export default FeedbackOptions;