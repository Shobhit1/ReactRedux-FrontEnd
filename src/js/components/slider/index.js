import React, { Component } from 'react'
import Slider from 'react-slick'

import styles from './style'

class ReactSlider extends Component {
  getObject() {
    const arr = Object.keys(this.props.data).map((k) => this.renderDiv(this.props.data[k]))
    return arr.slice(0, 3)
  }
  renderDiv(product) {
    return <img key={product.name} style={styles.image} src={product.pictures[1]} alt="product" />
  }
  render() {
    return (
      <div>
        <div style={styles.slider}>
          <Slider {...this.props.settings}>
            {this.getObject()}
          </Slider>
        </div>
      </div>
    )
  }
}

ReactSlider.propTypes = {
  settings: React.PropTypes.object,
  data: React.PropTypes.oneOfType([React.PropTypes.array, React.PropTypes.object])
}
export default ReactSlider
