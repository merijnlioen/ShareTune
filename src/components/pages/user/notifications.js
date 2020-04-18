import React, { useEffect, useState } from 'react'
import { withFirebase } from '../../../firebase'
import { Link } from 'react-router-dom'
import Avatar from '../../shared/avatar'

const Notifications = ({ firebase }) => {
    const [notifications, setNotifications] = useState()

    useEffect(() => {
        firebase.db.collection('notifications').where('receiver', '==', firebase.auth.currentUser.uid).get()
            .then(querySnapshot => querySnapshot.docs.map(notification => notification.data()))
            .then(notifications => setNotifications(notifications))
    }, [])

    return (
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
}


export default withFirebase(Notifications)