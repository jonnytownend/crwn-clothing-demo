import React from 'react'
import styled, { keyframes } from 'styled-components'
import { connect } from 'react-redux'

import { toggleCartHidden } from '../../redux/cart/cart.actions'
import { selectCartItemsCount } from '../../redux/cart/cart.selectors'

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg'

const shakeAnimation = keyframes`
    $rotation: 10deg;
    0% {transform: rotate(0);}
    25% {transform: rotate($rotation);}
    50% {transform: rotate(-$rotation);}
    75% {transform: rotate($rotation);}
    100% {transform: rotate(0);}
`

const MainDiv = styled.div`
    position: relative;
    user-select: none;
    width: 28px;
    animation-duration: 0.3s;
    transition: transform 0.2s;
    cursor: pointer;
    animation-name: ${shakeAnimation};

    &:hover {
        transform: scale(1.1) rotate(10deg);
    }
`

const ItemCountSpan = styled.div`
    position: absolute;
    top: 52%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 0.7rem;
    font-weight: bold;
`

class CartIcon extends React.Component {
    constructor(props) {
        super(props)
        this.lastItemCount = this.props.itemCount
    }

    render() {
        const {toggleCartHidden, itemCount} = this.props
        return (
            <MainDiv onClick={toggleCartHidden}>
                <ShoppingIcon className='shopping-icon' />
                <ItemCountSpan>{itemCount}</ItemCountSpan>
            </MainDiv>
        )
    }
}

const matchStateToProps = (state) => ({
    itemCount: selectCartItemsCount(state)
})

const mapDispatchToProps = (dispatch) => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})

export default connect(matchStateToProps, mapDispatchToProps)(CartIcon)