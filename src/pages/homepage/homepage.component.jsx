import React from 'react'
import Directory from '../../components/directory/directory.component'
import SHOP_DATA from '../../data/shop.data'
import './homepage.styles.scss'

const HomePage = () => (
    <div className="homepage">
        <Directory sections={SHOP_DATA} />
    </div>
)

export default HomePage