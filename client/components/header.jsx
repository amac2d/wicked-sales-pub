import React from 'react';

function Header(props) {
  return (
    <h1 className='col-sm-12 col-md-12 col-lg-12 row'>
      <div className='col mx-4' >
        {props.text}
      </div>
      <div className='col text-right'>
        <img className='' src="/images/shoppingCartIcon.png" alt="shopping cart for wicked sales" style={{ height: '2.25rem' }} />
        <span className='' style={{ fontSize: '1.5rem' }}> {props.cartItemCount} Items</span>
      </div>
    </h1>
  );
}

export default Header;
