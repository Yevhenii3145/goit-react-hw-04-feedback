import React from 'react'
import PropTypes from 'prop-types';
import styles from './Statistics.module.css'

const Statistics = ({ good, neutral, bad, total, positivProcentage }) => (
    <div className={styles.statisticBox}>
    <h3 className={styles.hadding}>Statistics</h3>
    <p className={styles.goodFeedback}>Good: {good}</p>
    <p className={styles.neutralFeedback}>Neutral: {neutral}</p>
    <p className={styles.badFeedback}>Bad: {bad}</p>
    <p className={styles.cauntFeedback}>Total: {total}</p>
    <p className={styles.procentageGoodFeedback}>Positive feedback: {positivProcentage}%</p>
    </div>
)

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivProcentage: PropTypes.number.isRequired,
}

export default Statistics;
