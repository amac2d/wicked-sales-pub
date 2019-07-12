import React from 'react';

class ProductDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: null
    };
    this.sendBackToCatalog = this.sendBackToCatalog.bind(this);
  }
  componentDidMount() {
    fetch('api/products.php?id=' + this.props.params.id)
      .then(promiseObj => promiseObj.json())
      .then(successObj => {
        this.setState({ product: successObj });
        console.log('successObj/this.state.product:', this.props.params.id);
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
    if (this.state.product) {
      const product = this.state.product;

      return (
        <div className='main col m-4'>

          <div className='row col mb-4'>
            <button onClick={this.sendBackToCatalog}>Back to catalog button</button>
          </div>

          <div className='row'>
            <img src={product.image} alt="product image" className='img-fluid col-md-6' />
            <div className='col-md-6 m-auto'>

              <p className='productDetailsName'>
                <strong>{product.name}</strong>
              </p>
              <p>${(product.price / 100).toFixed(2)}</p>
              <p>{product.shortDescription}</p>

            </div>

          </div>

          <div className='row col mt-4'>{product.longDescription}</div>

        </div>
      );
    } else {
      return null;
    }
  }
}

export default ProductDetails;
