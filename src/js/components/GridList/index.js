import React, { Component } from 'react'
import { GridList, GridTile } from 'material-ui/GridList'
import IconButton from 'material-ui/IconButton'
import StarBorder from 'material-ui/svg-icons/toggle/star-border'

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around'
  },
  gridList: {
    width: '100%',
    height: 500,
    overflowY: 'auto',
    padding: '20px'
  }
}
class GridListComp extends Component {
  constructor(props) {
    super(props)
    this.state = {
      tileData: []
    }
  }
  componentWillReceiveProps(nextProps) {
    this.convertData(nextProps.data)
  }
  convertData(props) {
    const arr = Object.keys(props).map((k) => this.createObject(props[k]))
    this.setState({ tileData: arr.slice(3) })
  }
  createObject(product) {
    return Object.assign({}, { img: product.pictures[0], title: product.name, category: product._category })
  }
  render() {
    return (
      <div style={styles.root}>
        <GridList
          cellHeight={200}
          style={styles.gridList}
          cols={4}
        >
          {this.state.tileData.map((tile) => (
            <GridTile
              key={tile.title}
              title={tile.title}
              subtitle={<span>Category: <b>{tile.category}</b></span>}
            >
              <img src={tile.img} alt="tile" />
            </GridTile>
          ))}
        </GridList>
      </div>
    )
  }
}

GridListComp.propTypes = {
  data: React.PropTypes.oneOfType([React.PropTypes.array, React.PropTypes.object])
}

export default GridListComp
