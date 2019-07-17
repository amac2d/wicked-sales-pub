import React from 'react';
import Header from './header';
import ProductList from './product-list';
import ProductDetails from './product-details';
import CartSummary from './cart-summary';
import CheckoutForm from './checkout-form';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      view: {
        name: 'checkout',
        params: {}
      },
      cart: []
    };
    this.setView = this.setView.bind(this);
    this.addToCart = this.addToCart.bind(this);
  }
  componentDidMount() {
    this.getProducts();
    this.getCartItems();
  }
  getProducts() {
    fetch('/api/products.php')
      .then(promiseObj => promiseObj.json())
      .then(successObj => {
        this.setState({ products: successObj });
      });
  }
  setView(name, params) {
    this.setState({
      view: {
        name,
        params
      }
    });
  }
  getCartItems() {
    fetch('/api/cart.php')
      .then(promiseObj => promiseObj.json())
      .then(successObj => {
        this.setState({ cart: successObj });
      });
  }
  addToCart(product) {
    fetch('/api/cart.php', {
      method: 'POST',
      body: JSON.stringify(product),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(promiseObj => promiseObj.json())
      .then(successObj => {
        this.setState({ cart: [...this.state.cart, successObj] });
      })
      .catch(error => console.error('Error:', error));
  }
  placeOrder(orderObj) {
    // orderObj is going to be an object {name: , creditCard: , shippingAddress: }
    fetch('/api/orders.php', {
      method: 'POST',
      body: JSON.stringify(orderObj),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(promiseObj => promiseObj.json())
      .then(successObj => {
        this.setState({
          cart: [],
          view: {
            name: 'catalog',
            params: {}
          }
        });
      })
      .catch(error => console.error('Error:', error));
  }
  render() {
    if (this.state.view.name === 'catalog') {
      return (
        <div>
          <Header text='Wicked Sales' cartItemCount={this.state.cart.length} click={this.setView} />
          <ProductList click={this.setView} products={this.state.products} />
        </div>
      );
    } else if (this.state.view.name === 'details') {
      return (
        <div>
          <Header text='Wicked Sales' cartItemCount={this.state.cart.length} click={this.setView} />
          <ProductDetails params={this.state.view.params} click={this.setView} addToCart={this.addToCart} />
        </div>
      );
    } else if (this.state.view.name === 'cart') {
      return (
        <div>
          <Header text='Wicked Sales' cartItemCount={this.state.cart.length} click={this.setView} />
          <CartSummary cartItems={this.state.cart} click={this.setView} />
        </div>
      );
    } else if (this.state.view.name === 'checkout') {
      return (
        <div>
          <Header text='Wicked Sales' cartItemCount={this.state.cart.length} click={this.setView} />
          <CheckoutForm />
        </div>
      );
    }
  }
}
