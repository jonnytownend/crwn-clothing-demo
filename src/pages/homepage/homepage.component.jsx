import React from 'react'
import Directory from '../../components/directory/directory.component'
import './homepage.styles.scss'

import withSpinner from '../../components/with-spinner/with-spinner.component'

const HomePage = () => (
    <div className="homepage">
        <Directory />
    </div>
)

export default HomePage