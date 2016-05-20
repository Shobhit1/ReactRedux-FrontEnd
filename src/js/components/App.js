import React, { Component } from 'react'
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'

import AppBar from 'material-ui/AppBar'
const lightMuiTheme = getMuiTheme(lightBaseTheme)

class App extends Component {
  render() {
    const styles = {
      toolbar: {
        padding: '10px 10px 10px 0px',
        zIndex: '1301',
        height: '50px',
        margin: '0px'
      },
      largeIcon: {
        width: '45px',
        height: '45px',
        marginLeft: '20px'
      },
    }
    return (
      <MuiThemeProvider muiTheme={lightMuiTheme}>
        <div>
          <header>
            <AppBar style={styles.toolbar} showMenuIconButton={false} titleStyle={{ flex: 'none' }} />
          </header>
          <section>
            {this.props.children}
          </section>
        </div>
      </MuiThemeProvider>
    )
  }
}

App.propTypes = {
  children: React.PropTypes.oneOfType([React.PropTypes.array, React.PropTypes.object])
}

export default App
