import React from 'react';
import ProductListItem from './product-list-item';

class ProductList extends React.Component {
  render() {
    return (
      <div className='productListContainer main'>
        <div className='album py-5 bg-light'>
          <div className='row'>
            {this.props.products.map(element => <ProductListItem key={element.id} element={element} />)}
          </div>
        </div>
      </div>
    );
  }
}

export default ProductList;
