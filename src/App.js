import React from 'react'
import './App.scss';
import Cards from './Cards';
import Cart from './Cart';

import image from './cart.jpg';
import imageOne from './pics/image-1.jpg'
import imageTwo from './pics/image-1.jpg'
import imageThree from './pics/image-1.jpg'
import imageFour from './pics/image-1.jpg'
import imageFive from './pics/image-1.jpg'
import imageSix from './pics/image-1.jpg'
import imageSeven from './pics/image-1.jpg'
import imageEight from './pics/image-1.jpg'
import imageNine from './pics/image-1.jpg'
import imageTen from './pics/image-1.jpg'
import imageEleven from './pics/image-1.jpg'
import imageTwelve from './pics/image-1.jpg'
import imageThirteen from './pics/image-1.jpg'
import imageFourteen from './pics/image-1.jpg'
import imageFifteen from './pics/image-1.jpg'
import imageSixteen from './pics/image-1.jpg'
import imageSeventeen from './pics/image-1.jpg'



class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isCartOpen: false,
      itemDetails: [
        {title: "Cat Tee Grey T-Shirt",
         price: 13.25,
         id: Math.floor(Math.random()*90000) + 10000,
         image: {imageOne},
         size: ["S", "M", "L"],
         quantity: 1
        },
        {
          title: "Tso 3D Black T-Shirt",
          price: 18.7,
          id: Math.floor(Math.random() * 90000) + 10000,
          image: { imageTwo },
          size: ["XL", "ML", "XXL"],
          quantity: 1
        },
        {
          title: "Dark Thug Maroon T-Shirt",
          price: 29.45,
          id: Math.floor(Math.random() * 90000) + 10000,
          image: { imageThree },
          size: ["ML", "XS"],
          quantity: 1
        },
        {
          title: "Tso 3D Short Sleeve T-Shirt A",
          price: 10.9,
          id: Math.floor(Math.random() * 90000) + 10000,
          image: { imageFour },
          size: ["XL", "ML"]
        },
        {
          title: "Red Pewdiepie Cool T-Shirt",
          price: 12.5,
          id: Math.floor(Math.random() * 90000) + 10000,
          image: { imageFive },
          size: ["XL", "XXL"],
          quantity: 1
        },
        {
          title: "Sphynx Tie Dye Wine T-Shirt",
          price: 9.00,
          id: Math.floor(Math.random() * 90000) + 10000,
          image: { imageSix },
          size: ["XL"],
          quantity: 1
        },
        {
          title: "Skuul",
          price: 14.00,
          id: Math.floor(Math.random() * 90000) + 10000,
          image: { imageSeven },
          size: ["XXL"]
        },
        {
          title: "Crazy Monkey Grey",
          price: 134.9,
          id: Math.floor(Math.random() * 90000) + 10000,
          image: { imageEight },
          size: ["S", "M"]
        },
        {
          title: "Black Beard T-Shirt",
          price: 11.9,
          id: Math.floor(Math.random() * 90000) + 10000,
          image: { imageNine },
          size: ["S", "L"]
        },
        {
          title: "Cat Tee Black T-Shirt",
          price: 10.9,
          id: Math.floor(Math.random() * 90000) + 10000,
          image: { imageTen },
          size: ["M", "L"]
        },
        {
          title: "White DGK Script Tee",
          price: 14.9,
          id: Math.floor(Math.random() * 90000) + 10000,
          image: { imageEleven },
          size: ["M", "XXL"]
        },
        {
          title: "Born On The Streets",
          price: 25.9,
          id: Math.floor(Math.random() * 90000) + 10000,
          image: { imageTwelve },
          size: ["M", "XXL", "XL"]
        },
        {
          title: "Sphynx Tie Dye Grey T-Shirt",
          price: 10.9,
          id: Math.floor(Math.random() * 90000) + 10000,
          image: { imageThirteen },
          size: ["M", "XS", "XL"]
        },
        {
          title: "Crazy Monkey Black T-Shirt",
          price: 22.5,
          id: Math.floor(Math.random() * 90000) + 10000,
          image: { imageFourteen },
          size: ["XS", "XL"]
        },
        {
          title: "Danger Knife Grey",
          price: 14.9,
          id: Math.floor(Math.random() * 90000) + 10000,
          image: { imageFifteen },
          size: ["XS", "XL"]
        },
        {
          title: "Short Sleeve T-Shirt",
          price: 75.00,
          id: Math.floor(Math.random() * 90000) + 10000,
          image: { imageSixteen },
          size: ["XS", "XL"]
        },
        {
          title: "White Pewdiepie Hot T-Shirt",
          price: 20.9,
          id: Math.floor(Math.random() * 90000) + 10000,
          image: { imageSeventeen },
          size: ["XS", "XL"]
        }
      ]
    }
  }

  handleCartPage = (event) => {
    this.setState({
      isCartOpen: !this.state.isCartOpen
    }, () => {console.log(this.state.isCartOpen)})
  }

  render() {
    return (
      <div className="mainContainer">
        <div className='cartIconContainer' >
          <span onClick={this.handleCartPage} ><img src={image}/></span>
          <p className='counterIcon'>0</p>
        </div>
        <div style={{display: "flex"}} className='allItemsContainer'>
          <div className='sortButtonsContainer'>
              <div>
                <p>Sizes:</p>
              </div>
              <div className='sizeSelectionContainer'>
                <p className='selectSeize'>S</p>
                <p className='selectSeize'>XS</p>
                <p className='selectSeize'>M</p>
                <p className='selectSeize'>L</p>
                <p className='selectSeize'>XL</p>
                <p className='selectSeize'>XXL</p>
                <p className='selectSeize'>ML</p>
              </div>
          </div>
          <div className='itemsAndOrderDropdownContainer'>
            <div className='orderDropdownContainer'>
              <p>17 Product(s) found</p>
              <div className='dropdownContainer'>
                <span>Order By:  </span>
                <select>
                  <option>Select</option>
                  <option>Highest to Lowest</option>
                  <option>Lowest to Highest</option>
                </select>
              </div>
            </div>
            <div className='itemsCardContainer'>
              <Cards 
                itemDetails={this.state.itemDetails}
                isCartOpen={this.state.isCartOpen}
              />
              <Cart/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
