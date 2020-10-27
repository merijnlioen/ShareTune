import React from 'react'
import { connect } from 'react-redux'
import Notification from './notification'

const Notifications = ({ notifications }) => {
    return (
        <div className="inner">
            <h1 className="heading">Notifications</h1>

            <div className="notifications__container">
                {notifications?.map((notification, index) => (
                    <Notification key={index} notification={notification} />
                ))}

                {notifications?.length <= 0 &&
                    <p className="subheading">No notifications found, check back later</p>
                }
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    notifications: state.global.notifications
})

export default connect(mapStateToProps)(Notifications)