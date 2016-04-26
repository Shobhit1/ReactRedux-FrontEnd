import React, { Component } from 'react'
import AppBar from 'material-ui/AppBar'
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'

const lightMuiTheme = getMuiTheme(lightBaseTheme)

class App extends Component {
  render() {
    const styles = {
      toolbar: {
        padding: '10px 10px 10px 0px',
        zIndex: '1301',
        height: '64px',
        margin: '0px'
      },
      logo: {
        height: '40px'
      }
    }
    return (
      <MuiThemeProvider muiTheme={lightMuiTheme}>
        <div>
          <AppBar style={styles.toolbar} showMenuIconButton={false} titleStyle={{ flex: 'none' }} />
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
