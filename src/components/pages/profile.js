import React, { useState, useEffect, Fragment } from 'react'
import { useParams } from 'react-router-dom'
import { withFirebase } from '../../firebase'
import { useHistory } from 'react-router-dom'
import Helmet from 'react-helmet'
import DefaultBanner from '../../assets/img/banner.jpg'
import NotFound from './not-found'
import Avatar from '../shared/avatar'

const ProfilePage = ({ firebase }) => {
    const [profile, setProfile] = useState()
    const [profileLoaded, setProfileLoaded] = useState()
    const [friendStatus, setFriendStatus] = useState()
    const { id } = useParams()

    const history = useHistory()
    const isUsersProfile = firebase.auth.currentUser?.uid === id
    const userId = firebase.auth.currentUser?.uid

    useEffect(() => {
        setProfile(null)
        setProfileLoaded(false)

        firebase.db.collection('users').doc(id).get()
            .then(user => {
                setProfile(user.data())
            })
            .then(() => {
                setProfileLoaded(true)
            })

        
        if (!userId || id === userId) return

        const friendId = getFriendId()

        firebase.db.collection('friends').doc(friendId).get()
            .then(friendship => friendship.data())
            .then(response => setFriendStatus(response))
            .catch(error => {
                console.log(error)
            })
    }, [id])

    const addFriend = () => {
        const friendId = getFriendId()

        const friendShip = {
            status: 'pending',
            sender: userId,
            receiver: id,
            timeStamp: Date.now()
        }

        firebase.db.collection('friends').doc(friendId).set(friendShip)
            .then(() => setFriendStatus(friendShip))
            .catch(error => console.log(error))
    }

    const acceptFriend = () => {
        const friendId = getFriendId()
        const status = 'friends'

        firebase.db.collection('friends').doc(friendId).update({ status })
            .then(() => {
                setFriendStatus({
                    ...friendStatus,
                    status
                })
            })
            .catch(error => console.log(error))
    }

    const removeFriend = () => {
        const friendId = getFriendId()

        firebase.db.collection('friends').doc(friendId).delete()
            .then(() => setFriendStatus(null))
            .catch(error => console.log(error))
    }

    const getFriendId = () => {
        if (userId > id) {
            return `${userId}${id}`
        } else {
            return `${id}${userId}`
        }
    }

    return (
        <Fragment>
            {profileLoaded && !profile && <NotFound />}

            {profileLoaded && profile &&
                <div className="profile">
                    <Helmet>
                        <title>{`Sharetune - Profile of ${profile?.username}`}</title>
                    </Helmet>

                    <div className="inner">
                        <img className="banner" src={profile?.banner || DefaultBanner} />
                        <Avatar 
                            isRound
                            avatar={profile?.avatar}
                            userName={profile?.username}
                        />

                        {userId &&
                            <div className="action__container">
                                {!isUsersProfile && 
                                    <Fragment>
                                        {!friendStatus && <p className="text" onClick={() => addFriend()}>Add friend</p>}

                                        {friendStatus &&
                                            <Fragment>
                                                {friendStatus.status === 'pending' &&
                                                    <Fragment>
                                                        {friendStatus.sender === userId &&
                                                            <p className="text text--disabled">Friend request pending</p>
                                                        }

                                                        {friendStatus.sender !== userId &&
                                                            <Fragment>
                                                                <p onClick={() => acceptFriend()} className="text">Accept</p>
                                                                <p onClick={() => removeFriend()} className="text">Decline</p>
                                                            </Fragment>
                                                        }
                                                    </Fragment>
                                                }

                                                {friendStatus.status === 'friends' &&
                                                    <Fragment>
                                                        <p onClick={() => removeFriend()} className="text">Remove friend</p>
                                                        <p className="text">Message</p>
                                                    </Fragment>
                                                }
                                            </Fragment>
                                        }
                                    </Fragment>
                                }
                                {isUsersProfile &&
                                    <p className="text" onClick={() => history.push('/settings')}>Edit profile</p>
                                }
                            </div>
                        }

                        <div className="text-center">
                            <h1 className="heading">{profile?.username}</h1>
                            <p className="subheading">{profile?.bio}</p>
                        </div>
                    </div>
                </div>
            }
        </Fragment>
    )
}

export default withFirebase(ProfilePage)