import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { withFirebase } from '../../../firebase'
import Avatar from '../../shared/avatar'

const Notification = ({ firebase, notification }) => {
	const [sender, setSender] = useState()

    useEffect(() => {
        getSender()
	}, [])

    const getSender = async () => {
        if (!notification.sender.id) return

		firebase.db.collection('users').doc(notification.sender.id).get()
			.then(user => user.data())
			.then(user => {
				setSender(user)
			})
    }
	
	return (
		<Link to={`/profile/${notification.sender.id}`} className="notification">
			<div className="notification__content">
				<Avatar
					avatar={sender?.avatar}
					username={sender?.username}
					isRound
					isSmall
				/>

				<p className="text">{sender?.username}</p>
				<p className="text text--primary">{notification.notification}</p>
			</div>
			<div className="timestamp">
				<p className="text">{new Date(notification.timestamp).toLocaleString()}</p>
			</div>
		</Link>
	)
}

export default withFirebase(Notification)