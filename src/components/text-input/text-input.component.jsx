import React from 'react'
import './text-input.styles.scss'

const Input = ({name, value, label, validateMessage, showShake, ...props}) => (
    <div className='input'>
        <input className={showShake ? 'showShake' : ''} name={name} value={value} {...props} />
        <label className={`label ${value === '' ? '' : 'label-shrunk'}`}>{label ? label : 'Enter...'}</label>
        <div className='divider'></div>
        {validateMessage ? <div className='validate-message'>{validateMessage}</div> : null}
    </div>
)

export default Input