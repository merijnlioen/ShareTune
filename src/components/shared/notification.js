import React from 'react'
import { CSSTransition } from 'react-transition-group'
import { connect } from 'react-redux'
import { Close } from './icons'
import { withFirebase } from '../../firebase'
import Avatar from '../shared/avatar'
import classNames from 'classnames'

const NotificationContainer = ({ notifications, activeSong, firebase }) => (
    <div className={classNames(
        'notifications',
        { 'notifications--spacing': !!activeSong?.id }
    )}>
        {notifications.map((notification, index) => (
            <Notification
                notification={notification}
                firebase={firebase}
                key={index}
            />
        ))}
    </div>
)

const Notification = ({ notification, firebase }) => {
    const closeNotification = () => {
        firebase.db.collection('notifications').doc(notification.id).update({
            seen: true
        })
            .catch(error => console.log(error))
    }

    return (
        <CSSTransition
            in={!notification.seen}
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
                
                <Close onClick={() => closeNotification()} />
            </div>
        </CSSTransition>
    )
}

const mapStateToProps = state => ({
    notifications: state.global.notifications,
    activeSong: state.player.activeSong
})

export default connect(mapStateToProps)(withFirebase(NotificationContainer))