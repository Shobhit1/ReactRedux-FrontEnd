import React, { Component } from 'react'
import { connect } from 'react-redux'
import Paper from 'material-ui/Paper'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'

import styles from './style'

class Login extends Component {
  onSubmit(username, password) {
    console.log(username, password)
  }
  render() {
    let username
    let password
    return (
      <div>
        <Paper style={styles.paper}>
          <form onSubmit={ (event) => {
            event.preventDefault()
            this.onSubmit(username.getValue(), password.getValue())
          }}
          >
            <div>
              <TextField ref={(node) => {username = node}} style={styles.field} floatingLabelText="Email" type="email" required="true" />
            </div>
            <div>
              <TextField
                ref={(node) => {password = node}}
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

export default Login
