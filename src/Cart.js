import React from "react";
import './Cart.scss';

class Cart extends React.Component {
    render() {
        return(
            <div className="mainCartContainer">
                <div onClick={() => {this.props.handleCartClosure()}} className="cartLeftContainer">
                    <p className="closeCartButton">X</p>                    
                </div>
                <div className="cartRightContainer">
                    <div className="cartHeaderContainer">
                        <h2>Cart</h2>
                        
                    </div>
                    <div className="cartItemsContainer">
                        Cart Items
                    </div>
                </div>
            </div>
        )
    }
}
export default Cart
