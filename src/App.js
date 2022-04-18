import React from 'react'
import './App.scss';
import Cards from './Cards';
import Cart from './Cart';

import image from './cart.jpg';
import imageOne from './pics/image-1.jpg'
import imageTwo from './pics/image-2.jpg'
import imageThree from './pics/image-3.jpg'
import imageFour from './pics/image-4.jpg'
import imageFive from './pics/image-5.jpg'
import imageSix from './pics/image-6.jpg'
import imageSeven from './pics/image-7.jpg'
import imageEight from './pics/image-8.jpg'
import imageNine from './pics/image-9.jpg'
import imageTen from './pics/image-10.jpg'
import imageEleven from './pics/image-11.jpg'
import imageTwelve from './pics/image-12.jpg'
import imageThirteen from './pics/image-13.jpg'
import imageFourteen from './pics/image-14.jpg'
import imageFifteen from './pics/image-15.jpg'
import imageSixteen from './pics/image-16.jpg'
import imageSeventeen from './pics/image-17.jpg'



class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isCartOpen: false,
      itemDetails: [
        {title: "Cat Tee Grey T-Shirt",
         price: 13.25,
         id: Math.floor(Math.random()*90000) + 10000,
         image: imageOne,
         size: ["S", "M", "L"],
         quantity: 1
        },
        {
          title: "Tso 3D Black T-Shirt",
          price: 18.7,
          id: Math.floor(Math.random() * 90000) + 10000,
          image: imageTwo,
          size: ["XL", "ML", "XXL"],
          quantity: 1
        },
        {
          title: "Dark Thug Maroon T-Shirt",
          price: 29.45,
          id: Math.floor(Math.random() * 90000) + 10000,
          image: imageThree,
          size: ["ML", "XS"],
          quantity: 1
        },
        {
          title: "Tso 3D Short Sleeve T-Shirt A",
          price: 10.9,
          id: Math.floor(Math.random() * 90000) + 10000,
          image: imageFour,
          size: ["XL", "ML"]
        },
        {
          title: "Red Pewdiepie Cool T-Shirt",
          price: 12.5,
          id: Math.floor(Math.random() * 90000) + 10000,
          image: imageFive,
          size: ["XL", "XXL"],
          quantity: 1
        },
        {
          title: "Sphynx Tie Dye Wine T-Shirt",
          price: 9.00,
          id: Math.floor(Math.random() * 90000) + 10000,
          image: imageSix,
          size: ["XL"],
          quantity: 1
        },
        {
          title: "Skuul",
          price: 14.00,
          id: Math.floor(Math.random() * 90000) + 10000,
          image: imageSeven,
          size: ["XXL"]
        },
        {
          title: "Crazy Monkey Grey",
          price: 134.9,
          id: Math.floor(Math.random() * 90000) + 10000,
          image: imageEight,
          size: ["S", "M"]
        },
        {
          title: "Black Beard T-Shirt",
          price: 11.9,
          id: Math.floor(Math.random() * 90000) + 10000,
          image: imageNine,
          size: ["S", "L"]
        },
        {
          title: "Cat Tee Black T-Shirt",
          price: 10.9,
          id: Math.floor(Math.random() * 90000) + 10000,
          image: imageTen,
          size: ["M", "L"]
        },
        {
          title: "White DGK Script Tee",
          price: 14.9,
          id: Math.floor(Math.random() * 90000) + 10000,
          image: imageEleven,
          size: ["M", "XXL"]
        },
        {
          title: "Born On The Streets",
          price: 25.9,
          id: Math.floor(Math.random() * 90000) + 10000,
          image: imageTwelve,
          size: ["M", "XXL", "XL"]
        },
        {
          title: "Sphynx Tie Dye Grey T-Shirt",
          price: 10.9,
          id: Math.floor(Math.random() * 90000) + 10000,
          image: imageThirteen,
          size: ["M", "XS", "XL"]
        },
        {
          title: "Crazy Monkey Black T-Shirt",
          price: 22.5,
          id: Math.floor(Math.random() * 90000) + 10000,
          image: imageFourteen,
          size: ["XS", "XL"]
        },
        {
          title: "Danger Knife Grey",
          price: 14.9,
          id: Math.floor(Math.random() * 90000) + 10000,
          image: imageFifteen,
          size: ["XS", "XL"]
        },
        {
          title: "Short Sleeve T-Shirt",
          price: 75.00,
          id: Math.floor(Math.random() * 90000) + 10000,
          image: imageSixteen,
          size: ["XS", "XL"]
        },
        {
          title: "White Pewdiepie Hot T-Shirt",
          price: 20.9,
          id: Math.floor(Math.random() * 90000) + 10000,
          image: imageSeventeen,
          size: ["XS", "XL"]
        }
      ],
      itemInCart: [],
      filteredArray: [],
      cartSubtotal: 0,
      selectedSize: [
      ]
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.itemInCart.length !== this.state.itemInCart.length) {
      this.setState({
        cartSubtotal: this.state.itemInCart.reduce((acc, val) => acc + val.price, 0)
      })
    }
    console.log(this.state)
  }

  handleCartPage = (event) => {
    this.setState({
      isCartOpen: !this.state.isCartOpen
    })
  }

  handleCartClosure = () => {
    this.setState({
      isCartOpen: false
    })
  }
  addProductElementInCart = (elm) => {
    if (!this.state.itemInCart.includes(elm)) {
      this.setState({
        itemInCart: [...this.state.itemInCart, elm]
      })
    } else {
      const changePrice = this.state.itemInCart.map((item) => {
        item.quantity++
        item.price = item.price * item.quantity
        return item
      })
      this.setState({
        itemInCart: changePrice
      })
    }
  }

  getItemsFilteredBySize = (selectedSizeArr) => {
    const savedSize = this.state.itemDetails.filter((elm, index) => {
      for (let i = 0; i < selectedSizeArr.length; i++) {
        if (elm.size.includes(selectedSizeArr[i])) {
          return true
        }
      }
    })
    return savedSize;
  } 


  handleSort = (event) => {
    const sizeClicked = event.target.textContent
    if (sizeClicked === "S" || sizeClicked === "XS" || 
        sizeClicked === "M" || sizeClicked === "L" || 
        sizeClicked === "XL" || sizeClicked === "XXL" || 
        sizeClicked === "ML") {

      const isSizeAlreadySelected = this.state.selectedSize.includes(event.target.textContent)

      if (isSizeAlreadySelected) {
        const newSelectedSizeArr = this.state.selectedSize.filter(size => size !== event.target.textContent);
        this.setState({
          selectedSize: newSelectedSizeArr,
          filteredArray: this.getItemsFilteredBySize(newSelectedSizeArr)
        })

        return;
      }

      const newSelectedSizeArr = [...this.state.selectedSize, event.target.textContent];

      this.setState({
        selectedSize: newSelectedSizeArr,
        filteredArray: this.getItemsFilteredBySize(newSelectedSizeArr)
      })  
  }
}
  
  sortWithPrice = (event) => {
    let sortedPrice = 0
    if (event.target.value === "Highest to Lowest") {
      sortedPrice = this.state.itemDetails.sort(function(a, b) { 
        if (a.price < b.price) {return 1} else {return -1}
      })
    }
    if (event.target.value === "Lowest to Highest") {
      sortedPrice = this.state.itemDetails.sort(function(a, b) { 
        if (a.price > b.price) {return 1} else {return -1}
      })
    }
    if (event.target.value === "Select") {
      sortedPrice = this.state.itemDetails
    }
    this.setState({
      itemDetails: sortedPrice
    }, () => {console.log(this.state.itemDetails)})
  }

  deleteItemFromCart = (event) => {
    const deleteFromCart = this.state.itemInCart.filter((elm, index) => {
      if (elm.id !== event.id) {
        return true
      }
    })
    this.setState({
      itemInCart: deleteFromCart
    })
  }

  render() {
    return (
      <div>
        {this.state.isCartOpen?
        (<div className="mainContainer">
        <div className='cartIconContainer' style={{display: "none"}}>
          <div onClick={this.handleCartPage}>
            <img src={image} alt={"cart"}/>
            <p className='counterIcon'>{this.state.itemInCart.length}</p>
          </div>
        </div>
        <div className='allItemsContainer'>
          <div className='sortButtonsContainer'>
              <div>
                <h6>Sizes:</h6>
              </div>
              <div onClick={this.handleSort} className='sizeSelectionContainer'>
                  <p>S</p>
                  <p>XS</p>
                  <p>M</p>
                  <p>L</p>
                  <p>XL</p>
                  <p>XXL</p>
                  <p>ML</p>
              </div>
          </div>
          <div className='itemsAndOrderDropdownContainer'>
            <div className='orderDropdownContainer'>
              <p>{this.state.filteredArray.length? this.state.filteredArray.length: this.state.itemDetails.length} Product(s) found</p>
              <div className='dropdownContainer'>
                <span>Order By:  </span>
                <select onChange={this.sortWithPrice}>
                  <option value={"Highest to Lowest"}/>
                  <option value={"Lowest to Highest"}/>
                </select>
              </div>
            </div>
            <div className='itemsCardContainer'>
              <Cards 
                itemDetails={this.state.itemDetails}
                isCartOpen={this.state.isCartOpen}
                addProductElementInCart={this.addProductElementInCart}
                filteredArray={this.state.filteredArray}
              />
            </div>
          </div>
        </div>
        <Cart isCartOpen={this.state.isCartOpen} 
          handleCartClosure={this.handleCartClosure} 
          itemInCart={this.state.itemInCart}
          cartSubtotal={this.state.itemInCart.reduce((previousValue, currentValue) => {
            return previousValue + currentValue.price      
          }, 0)}
          deleteItemFromCart={this.deleteItemFromCart}
        />
      </div>
      ) : (
        <div className="mainContainer">
        <div className='cartIconContainer' >
          <span onClick={this.handleCartPage} ><img src={image}/></span>
          <p className='counterIcon'>{this.state.itemInCart? this.state.itemInCart.length : this.state.itemInCart.length}</p>
        </div>
        <div className='allItemsContainer'>
          <div className='sortButtonsContainer'>
              <div>
                <h6>Sizes:</h6>
              </div>
              <div className='sizeSelectionContainer' onClick={this.handleSort}>
                <button>S</button>
                <button>XS</button>
                <button>M</button>
                <button>L</button>
                <button>XL</button>
                <button>XXL</button>
                <button>ML</button>
              </div>
          </div>
          <div className='itemsAndOrderDropdownContainer'>
            <div className='orderDropdownContainer'>
              <p>{this.state.filteredArray.length? this.state.filteredArray.length: this.state.itemDetails.length} Product(s) found</p>
              <div className='dropdownContainer'>
                <span>Order By:  </span>
                <select onChange={this.sortWithPrice}>
                  <option >Select</option>
                  <option>Highest to Lowest</option>
                  <option>Lowest to Highest</option>
                </select>
              </div>
            </div>
            <div className='itemsCardContainer'>
              <Cards 
                itemDetails={this.state.itemDetails}
                isCartOpen={this.state.isCartOpen}
                addProductElementInCart={this.addProductElementInCart}
                filteredArray={this.state.filteredArray}
              />
            </div>
          </div>
        </div>
      </div>
      )
      }
      </div>
    );
  }
}

export default App;
