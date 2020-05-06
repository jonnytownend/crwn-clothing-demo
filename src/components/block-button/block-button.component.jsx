import React from 'react'
import './block-button.styles.scss'

class BlockButton extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            hoverOrFocus: false
        }
    }

    onHoverOrFocus = () => {
        this.setState({hoverOrFocus: true})
    }

    onLeaveHoverOrFocus = () => {
        this.setState({hoverOrFocus: false})
    }

    render() {
        const backgroundColor = this.props.backgroundColor ? this.props.backgroundColor : 'white'
        const hoverColor = this.props.hoverColor ? this.props.hoverColor : 'black'
        const style = {
            backgroundColor: this.state.hoverOrFocus ? hoverColor : backgroundColor,
            color: this.state.hoverOrFocus ? backgroundColor : null,
            border: this.state.hoverOrFocus ? `1px solid ${hoverColor}` : null,
        }

        const {type, value, className, onClick} = this.props
        return (
            <button
                className={`block-button ${className}`}
                type={type ? type : 'button'}
                onMouseEnter={this.onHoverOrFocus}
                onMouseLeave={this.onLeaveHoverOrFocus}
                onFocus={this.onHoverOrFocus}
                onBlur={this.onLeaveHoverOrFocus}
                onClick={onClick}
                style={style}>
                    {value.toUpperCase()}
            </button>
        )
    }
}

export default BlockButton