import React, { Children } from 'react'
import { Link } from 'react-router-dom'
import './underline-button.styles.scss'

const UnderlineButton = ({className, children, onClick}) => (
    <div className={className} onClick={onClick}>
        <div className='underline-button'>
            {children}
            <div className='underline'></div>
        </div>
    </div>
)

export default UnderlineButton