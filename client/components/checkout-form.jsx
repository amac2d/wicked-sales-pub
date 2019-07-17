import React from 'react';

class CheckoutForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      creditCard: '',
      shippingAddress: ''
    };
    this.handleNameInput = this.handleNameInput.bind(this);
    this.handleCreditCardInput = this.handleCreditCardInput.bind(this);
    this.handleShippingAddressInput = this.handleShippingAddressInput.bind(this);
    this.handlePlaceOrder = this.handlePlaceOrder.bind(this);
    this.sendBackToCatalog = this.sendBackToCatalog.bind(this);
  }
  handleNameInput(event) {
    let name = this.state.name;
    name = event.target.value;
    this.setState({ name });
  }
  handleCreditCardInput(event) {
    let creditCard = this.state.creditCard;
    creditCard = event.target.value;
    this.setState({ creditCard });
  }
  handleShippingAddressInput(event) {
    let shippingAddress = this.state.shippingAddress;
    shippingAddress = event.target.value;
    this.setState({ shippingAddress });
  }
  handlePlaceOrder(event) {
    event.preventDefault();
    this.props.onSubmit(this.state);
    this.setState({
      name: '',
      creditCard: '',
      shippingAddress: ''
    });
  }
  sendBackToCatalog() {
    const setViewToCatalogObj = {
      name: 'catalog',
      params: {}
    };
    this.props.click(setViewToCatalogObj.name, setViewToCatalogObj.params);
  }
  render() {
    const cartItemPrice = this.props.cartItems;
    let priceTotal = 0;
    for (let indexPrice = 0; indexPrice < cartItemPrice.length; indexPrice++) {
      priceTotal += parseFloat(cartItemPrice[indexPrice].price);
    }
    return (
      <div className='checkoutForm Container main'>
        <div>
          <div>
            <h3>Checkout</h3>
            <br />
            Order Total: ${(priceTotal / 100).toFixed(2)}
          </div>
        </div>
        <div>
          <div>
            Name
            <br />
            <input value={this.state.name} onChange={this.handleNameInput} type="text" placeholder='Name' />
          </div>
          <div>
            Credit Card
            <br />
            <input value={this.state.creditCard} onChange={this.handleCreditCardInput} type="text" placeholder='Credit Card #' />
          </div>
          <div>
            Shipping Address
            <br />
            <textarea value={this.state.shippingAddress} onChange={this.handleShippingAddressInput} name="" id="" cols="30" rows="10" placeholder='Street Address, City, State, Zipcode'></textarea>
          </div>
          <div>
            <button onClick={this.sendBackToCatalog} >Continue Shopping</button>
            <br />
            <button onClick={this.handlePlaceOrder} >Place Order</button>
          </div>
        </div>
      </div>
    );
  }
}

export default CheckoutForm;
