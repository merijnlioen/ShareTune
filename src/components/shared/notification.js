import React, { useState } from 'react'
import { CSSTransition } from 'react-transition-group'
import { connect } from 'react-redux'
import { Close } from './icons'
import Avatar from '../shared/avatar'

const NotificationContainer = ({ notifications }) => (
    <div className="notifications">
        {notifications.map((notification, index) => (
            <Notification
                notification={notification}
                key={index}
            />
        ))}
    </div>
)

const Notification = ({ notification }) => {
    const [isNotificationOpen, setNotificationOpen] = useState(true)

    return (
        <CSSTransition
            in={isNotificationOpen}
            timeout={500}
            classNames="fade"
            unmountOnExit
            appear={true}
        >
            <div className="notification">
                <Avatar
                    avatar={notification.sender.avatar}
                    username={notification.sender.username}
                    isSmall
                />
                <div className="notification__content">
                    <p className="text">{notification.sender.username}</p>
                    <p className="text text--primary">{notification.notification}</p>
                </div>
                <Close onClick={() => setNotificationOpen(false)} />
            </div>
        </CSSTransition>
    )
}

const mapStateToProps = state => ({
    notifications: state.global.notifications
})

export default connect(mapStateToProps)(NotificationContainer)