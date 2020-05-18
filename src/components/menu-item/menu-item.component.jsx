import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import './menu-item.styles.scss'

const MenuItem = ({ title, imageUrl, size, history, match }) => (
    <Link to={`/shop/${title.toLowerCase()}`} className={`menu-item ${size}`}>
        <div className="menu-image" style={{backgroundImage: `url(${imageUrl})`}}></div>
        <div className="content">
            <h1 className="title">{title.toUpperCase()}</h1>
            <span className="subtitle">SHOP NOW</span>
        </div>
    </Link>
)

export default withRouter(MenuItem)