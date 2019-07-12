import React from 'react';
import Header from './header';
import ProductList from './product-list';
import ProductDetails from './product-details';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      view: {
        name: 'catalog',
        params: {}
      }
    };
    this.setView = this.setView.bind(this);
  }
  componentDidMount() {
    this.getProducts();
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
  render() {
    if (this.state.view.name === 'catalog') {
      return (
        <div>
          <Header text='Wicked Sales' />
          <ProductList click={this.setView} products={this.state.products} />
        </div>
      );
    } else {
      return (
        <div>
          <Header text='Wicked Sales' />
          <ProductDetails params={this.state.view.params} click={this.setView}/>
        </div>
      );
    }
  }
}
