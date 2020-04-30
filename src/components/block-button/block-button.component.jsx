import React from 'react'
import './block-button.styles.scss'

const BlockButton = ({type, value, className, ...props}) => {
    return (
        <button
            className={`block-button ${className}`}
            type={type ? type : 'button'}
            {...props}>
                {value.toUpperCase()}
        </button>
    )
}

export default BlockButton