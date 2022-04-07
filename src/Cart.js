import React from "react";
import './Cart.scss';
import imageOne from './pics/image-1.jpg'

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
                        <span className='cartCounterIcon'>0</span>
                    </div>
                    <div style={{marginBottom: "20px", marginTop: "20px"}}>
                        {this.props.itemInCart && this.props.itemInCart.map((elm, index) => {
                            return(
                                <div className="cartItemsContainer">
                                    <div className="cartImageContainer">
                                        <div className="imageThumbnail">
                                            <img src={imageOne}/>
                                        </div>
                                        <div className="cartItemTitle">
                                            <h5>{elm.title}</h5>
                                            <p style={{textAlign: "left"}}>Quantity: </p>
                                        </div>
                                    </div>
                                    <div className="cartPriceContainer">
                                        <p><span>$</span>{elm.price}</p>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                    
                </div>
                <div className="checkoutContainerInCart">
                        
                        <div className="subtotalContainerInCart">
                            <h6 className="subtotalHeading">SUBTOTAL</h6>
                            <p className="dollarSign">$ {this.props.cartSubtotal}</p>
                        </div>
                        <div className="checkoutHeadingContainer">
                            <h3>CHECKOUT</h3>
                        </div>
                    </div>

            </div>
        )
    }
}
export default Cart
