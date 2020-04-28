import React from 'react'
import MenuItem from '../menu-item/menu-item.component'

export default class Directory extends React.Component {
    constructor() {
        super()

        this.state = {
            sections: [
                {
                    title: "hats",
                    imageUrl: "https://images.unsplash.com/photo-1533827432537-70133748f5c8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80",
                    id: 1
                },
                {
                    title: "jackets",
                    imageUrl: "https://images.unsplash.com/photo-1521223890158-f9f7c3d5d504?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=928&q=80",
                    id: 2
                },
                {
                    title: "trainers",
                    imageUrl: "https://images.unsplash.com/photo-1514989940723-e8e51635b782?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80",
                    id: 3
                },
                {
                    title: "mens clothing",
                    imageUrl: "https://images.unsplash.com/photo-1552783858-1e47edf7898b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80",
                    id: 4
                },
                {
                    title: "womens clothing",
                    imageUrl: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1262&q=80",
                    id: 5
                }
            ]
        }
    }

    render() {
        return (
            <div className="directory-menu">
                {this.state.sections.map( ({title, imageUrl, id, size}) =>
                    <MenuItem title={title} imageUrl={imageUrl} key={id} size={size} />
                )}
            </div>
        )
    }
}