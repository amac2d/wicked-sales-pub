import React from 'react';

class ProductListItem extends React.Component {
  render() {
    const img = this.props.element.image;
    const imgStyle = {
      backgroundImage: 'url(' + img + ')',
      height: '300px',
      widtch: '300px',
      backgroundSize: '100% 100%',
      backgroundRepeat: 'no-repeat',
      objectFit: 'contain'
    };
    return (
      <div className='col-md-4'>
        <div className='productCard card mb-4 shadow-sm'>
          <div className='productImage card-img-top' style={imgStyle}></div>
          <div className='productCardBody card-body'>
            <p className='productName card-title'>
              <strong>{this.props.element.name}</strong>
            </p>
            <p className='productPrice card-text'>
              ${(this.props.element.price / 100).toFixed(2)}
            </p>
            <p className='productDescription card-text'>
              {this.props.element.shortDescription}
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductListItem;
