import React, { Component } from 'react'
import { connect } from 'react-redux'
import { authenticate } from '../../../redux/actions/loginActions'

import ReactSlider from '../../slider'
import GridList from '../../GridList'
import styles from './style'

class ProductsView extends Component {
  render() {
    return (
      <div>
        <div>
          <ReactSlider
            settings={{
              dots: true,
              infinite: true,
              speed: 500,
              slidesToShow: 1,
              slidesToScroll: 1,
              arrows: true
            }}
          />
        </div>
        <div>
          <GridList />
        </div>
      </div>
    )
  }
}
ProductsView.propTypes = {
  onSubmit: React.PropTypes.func,
  data: React.PropTypes.object
}

const mapStateToProps = (state) => {
  return {
  }
}
const mapDispatchToProps = (dispatch) => {
  return {

  }
}
const Products = connect(mapStateToProps, mapDispatchToProps)(ProductsView)
export default Products
