import React from 'react';

class CheckoutForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className='checkoutForm Container main'>
        <div>
          <div>
            <h3>Checkout</h3>
            <br />
            Order Total: $0.00
          </div>
        </div>
        <div>
          <div>
            Name
            <br />
            <input type="text" placeholder='Name' />
          </div>
          <div>
            Credit Card
            <br />
            <input type="text" placeholder='Credit Card #' />
          </div>
          <div>
            Shipping Address
            <br />
            <textarea name="" id="" cols="30" rows="10" placeholder='Street Address, City, State, Zipcode'></textarea>
          </div>
          <div>
            <button>Continue Shopping</button>
            <br />
            <button>Place Order</button>
          </div>
        </div>
      </div>
    );
  }
}

export default CheckoutForm;
