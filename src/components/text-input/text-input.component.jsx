import React from 'react'
import './text-input.styles.scss'

const Input = ({name, value, ...props}) => (
    <div className='input'>
        <input name={name} value={value} {...props} />
        {/* <span className='name-text'>{name}</span> */}
        <label className={`label ${value === '' ? '' : 'label-shrunk'}`}>{name ? name : 'Enter...'}</label>
        <div className='divider'></div>
    </div>
)

export default Input