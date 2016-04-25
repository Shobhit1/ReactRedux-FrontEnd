import React, { Component } from 'react'
import { connect } from 'react-redux'
import Paper from 'material-ui/Paper'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import { authenticate } from '../../../redux/actions/loginActions'

import styles from './style'

class LoginView extends Component {
  onSubmit(username, password) {
    console.log(username, password)
  }
  render() {
    let username
    let password
    return (
      <div>
        <Paper style={styles.paper}>
          <form
            onSubmit={(event) => {
              event.preventDefault()
              this.onSubmit(username.getValue(), password.getValue())
            }}
          >
            <div>
              <TextField ref={(node) => { username = node }} style={styles.field} floatingLabelText="Email" type="email" required="true" />
            </div>
            <div>
              <TextField
                ref={(node) => { password = node }}
                style={styles.field}
                floatingLabelText="Password"
                type="password"
                required="true"
              />
            </div>
            <div style={styles.buttonWrapper}>
              <RaisedButton label="Login" primary type="submit" disabled={false} style={styles.button} />
            </div>
          </form>
        </Paper>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return state.login
}
const mapDispatchToProps = (dispatch) => {
  return {
    onSubmit: (username, password) => {
      dispatch(authenticate({
        username,
        password
      }))
    }
  }
}
const Login = connect(mapStateToProps)(mapDispatchToProps)(LoginView)
export default Login
