import React from 'react'
import './empty-state.styles.scss'
import { connect } from 'react-redux'

import { Link } from 'react-router-dom'

import BlockButton from '../block-button/block-button.component'

const EmptyState = () => (
    <div className="empty-state-container">
        <h2>Sorry, we can't find what you're looking for ¯\_(ツ)_/¯</h2>
        <Link to='/'>
            <BlockButton value="Start shopping" />
        </Link>
    </div>
)

export default connect()(EmptyState)