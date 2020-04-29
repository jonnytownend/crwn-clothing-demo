import React from 'react'
import MenuItem from '../menu-item/menu-item.component'

export default class Directory extends React.Component {
    render() {
        return (
            <div className="directory-menu">
                {this.props.sections.map( ({id, items, ...sectionProps}) =>
                    <MenuItem id={id} imageUrl={items[0].imageUrl} {...sectionProps} />
                )}
            </div>
        )
    }
}