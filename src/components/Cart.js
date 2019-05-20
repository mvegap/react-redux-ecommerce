import React from 'react'
import PropTypes from 'prop-types'
import Product from './Product'

const Cart = ({products,total,onCheckoutClicked}) => {

  const hasProducts = products.length > 0
  const nodes = hasProducts ? (products.map(product => <Product title={product.title} price={product.price} stock={product.stock} key={product.id} />)) : (<em>Cart empty</em>)

  return(
    <div>
      <h3>Tu carrito</h3>
      <div>{nodes}</div>
      <p>Total: &#36; {total}</p>
      <button onClick={onCheckoutClicked} disabled={hasProducts ? '' : 'disabled'}>Checkout</button>
    </div>
  )

}

Cart.propTypes = {
  products: PropTypes.array,
  total: PropTypes.string,
  onCheckoutClicked: PropTypes.func
}

export default Cart