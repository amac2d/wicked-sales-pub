import React from 'react';

class CartSummary extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <div>
          <button>Back to catalog Button</button>
        </div>
        <div>
          <h3>My Cart Title</h3>
        </div>
        <div>
          cart summary
        </div>
        <div>Item Total $0.00</div>
      </div>
    );
  }
}

export default CartSummary;
