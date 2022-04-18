import React from "react";
import './Size.scss';

class Size extends React.Component {
  render() {
    return(
      <div className="mainButtonContainer">
        <div>
          <h6>Sizes:</h6>
        </div>

        <div className="sortButtonsContainer" >

          {this.props.sizeButton.map((elm, index) => {
            return (
              <div className='sizeSelectionContainer' onClick={this.props.handleSort}>
                <button>{elm}</button>
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}
export default Size