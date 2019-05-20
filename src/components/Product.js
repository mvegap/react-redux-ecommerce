import React from 'react'
import PropTypes from 'prop-types'

const Product = ({price,stock,title}) => (
  <div>
    {title} - &#36; {price}{stock ? ` x ${stock}` : null}
  </div>
)

Product.propTypes = {
  price: PropTypes.number,
  stock: PropTypes.number,
  title: PropTypes.string
}

export default Product