import React from 'react';

function Header(props) {
  return (
    <h1 className='col-sm-12 col-md-12 col-lg-12 text-center'>
      { props.text }
      <img src="/images/shoppingCartIcon.png" alt="shopping cart for wicked sales" style={{ height: '2rem' }}/>
    </h1>
  );
}

export default Header;
