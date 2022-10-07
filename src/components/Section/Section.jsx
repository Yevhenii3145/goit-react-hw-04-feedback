import React from 'react'
import PropTypes from 'prop-types';
import styles from './Sextion.module.css'

const Section = ({ title, children }) => (
        <section className={styles.boxApp}>
        <h2 className={styles.titleApp}>{title}</h2> 
        {children}
        </section>
    )
Section.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.arrayOf(PropTypes.shape())
}

export default Section;