import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Avatar from '../../shared/avatar'

const Notifications = ({ notifications }) => (
    <div className="inner">
        <h1 className="heading">Notifications</h1>

        <div className="notifications__container">
            {notifications?.map((notification, index) => (
                <Link to={`/profile/${notification.sender.id}`} key={index} className="notification">
                    <div className="notification__content">
                        <Avatar
                            avatar={notification.sender.avatar}
                            username={notification.sender.username}
                            isRound
                            isSmall
                        />

                        <p className="text">{notification.sender.username}</p>
                        <p className="text text--primary">{notification.notification}</p>
                    </div>
                    <div className="timestamp">
                        <p className="text">{new Date(notification.timestamp).toLocaleString()}</p>
                    </div>
                </Link>
            ))}

            {notifications?.length <= 0 &&
                <p className="subheading">No notifications found, check back later</p>
            }
        </div>
    </div>
)

const mapStateToProps = state => ({
    notifications: state.global.notifications
})

export default connect(mapStateToProps)(Notifications)