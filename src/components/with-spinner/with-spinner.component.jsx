import React from 'react'
import './with-spinner.styles.scss'
import { connect } from 'react-redux'

import { ReactComponent as CrownLogo } from '../../assets/crown-logo.svg'

const Spinner = () => (
    <CrownLogo className='spinner' />
)

const withSpinner = (WrappedComponent) => ({isLoading, ...otherProps}) => {
    return isLoading ? <Spinner /> : <WrappedComponent {...otherProps} />
}

export default withSpinner