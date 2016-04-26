import React, { Component } from 'react'
import Slider from 'react-slick'

import styles from './style'

class ReactSlider extends Component {
  render() {
    return (
      <div>
        <div style={styles.slider}>
          <Slider {...this.props.settings}>
            <div style={{ height: '500px' }}><h3>6</h3></div>
            <div style={{ height: '500px' }}><h3>3</h3></div>
            <div style={{ height: '500px' }}><h3>1</h3></div>
          </Slider>
        </div>
      </div>
    )
  }
}

ReactSlider.propTypes = {
  settings: React.PropTypes.object
}
export default ReactSlider
