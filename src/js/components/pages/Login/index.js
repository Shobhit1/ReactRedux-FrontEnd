import React, { Component } from 'react'
import { connect } from 'react-redux'
import Paper from 'material-ui/Paper'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import { authenticate } from '../../../redux/actions/loginActions'

import styles from './style'

class LoginView extends Component {
  renderLoginForm() {
    let username
    let password
    return (
      <Paper style={styles.paper} zdepth={1}>
        <form
          onSubmit={(event) => {
            event.preventDefault()
            this.props.onSubmit(username.getValue(), password.getValue())
          }}
        >
          <div>
            <TextField
              ref={(node) => { username = node }}
              style={styles.field}
              floatingLabelText="Git Hub Username"
              required="true"
              type="text"
            />
          </div>
          <div>
            <TextField
              ref={(node) => { password = node }}
              style={styles.field}
              floatingLabelText="Password"
              required="true"
              type="password"
            />
          </div>
          <div style={styles.buttonWrapper}>
            <RaisedButton label="Login" primary type="submit" disabled={false} style={styles.button} />
          </div>
        </form>
      </Paper>
    )
  }
  render() {
    return (
      <div className="grid grid-pad">
        {this.renderLoginForm()}
      </div>
    )
  }
}
LoginView.propTypes = {
  onSubmit: React.PropTypes.func,
  onSubmitRegistration: React.PropTypes.func,
  changeMode: React.PropTypes.func,
  data: React.PropTypes.object,
  attemptFailed: React.PropTypes.bool
}

const mapStateToProps = (state) => {
  return {
    attemptFailed: state.login.attemptFailed,
    data: state.login
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    onSubmit: (username, password) => {
      dispatch(authenticate({
        email: username,
        password
      }))
    }
  }
}
const Login = connect(mapStateToProps, mapDispatchToProps)(LoginView)
export default Login
