import React from "react";
import './Cards.scss';

import image from './cart.jpg';
import imageOne from './pics/image-1.jpg'


class Cards extends React.Component {
    render() {
        return(
            <div>
                <div className="mainCardContainer">
                    {this.props.itemDetails.map((elm, index) => {
                        return(
                            <div className="cardContainer">
                                <div className="freeShipping">
                                    <p>Free shipping</p>
                                </div>
                                <div className="imageContainer">
                                    <img src={imageOne} />
                                </div>
                                <div className="productDetailContainer">
                                    <div>
                                        <h5 className="productTitle">{elm.title}</h5>
                                    </div>
                                    <div className="orangeBorder">
                                    </div>
                                    <div className="priceContainer">
                                        <span className="dollarSign">$</span><span className="price">{elm.price}</span>
                                    </div>
                                </div>
                                <div onClick={() => this.props.addProductElementInCart(elm)}
                                    className="addToCartContainer">
                                    <a href="#">Add to cart</a>
                                </div>
                            </div>                                
                        )
                    })}
                </div>
            </div>
        )
    }
}
export default Cards;