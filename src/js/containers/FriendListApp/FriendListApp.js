import style from './style'

import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as FriendsActions from '../../actions/FriendsActions'
import { AddFriendInput, FriendList } from '../../components'

class FriendListApp extends Component {

  render () {
    const { friendList: { friendsById }, actions } = this.props

    return (
      <section style={style.body}>
        <div className="friendListApp" style={style.friendListApp}>
          <div style={style.friendListAppHeading}>
            <h1>Da Bro's List</h1>
          </div>
          <AddFriendInput addFriend={actions.addFriend} />
          <FriendList friends={friendsById} actions={actions} />
        </div>
      </section>

    )
  }
}

function mapStateToProps(state) {
  return {
    friendList: state.friendList
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(FriendsActions, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FriendListApp)
