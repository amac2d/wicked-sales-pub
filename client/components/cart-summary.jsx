import React from 'react';
import CartSummaryItem from './cart-summary-item';

class CartSummary extends React.Component {
  render() {
    if (this.props.cartItems === 0) {
      return null;
    } else {
      const cartItemPrice = this.props.cartItems;
      let priceTotal = 0;
      for (let indexPrice = 0; indexPrice < cartItemPrice.length; indexPrice++) {
        priceTotal += cartItemPrice[indexPrice].price;
      }
      return (
        <div className='cartSummaryContainer main'>
          <div className='col mx-auto'>
            <div>
              <button>Back to catalog Button</button>
            </div>
            <br />
            <div>
              <h3>My Cart</h3>
            </div>
            <div>
              {this.props.cartItems.map(element => <CartSummaryItem key={element.id} element={element} />)}
            </div>
            <div>Item Total ${(priceTotal / 100).toFixed(2)}</div>
          </div>
        </div>
      );
    }
  }
}

export default CartSummary;
