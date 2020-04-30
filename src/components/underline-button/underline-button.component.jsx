import React from 'react'
import { Link } from 'react-router-dom'
import './underline-button.styles.scss'

const UnderlineButton = ({text, link, className}) => (
    <div className={className}>
        <Link to={link} className='underline-button'>
            {text.toUpperCase()}
            <div className='underline'></div>
        </Link>
    </div>
)

export default UnderlineButton