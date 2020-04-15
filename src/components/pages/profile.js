import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { withFirebase } from '../../firebase'
import Helmet from 'react-helmet'

const ProfilePage = ({ firebase }) => {
    const [profile, setProfile] = useState(true)
    const { id } = useParams()

    useEffect(() => {
        firebase.db.collection('users').doc(id).get()
            .then(user => {
                setProfile(user.data())
            })
    }, [])

    return (
        <div className="profile">
            <Helmet>
                <title>{`Sharetune - Profile of ${profile?.username}`}</title>
            </Helmet>

            <div className="inner">
                <img className="banner" src={profile?.banner} />
                <img className="avatar avatar--small avatar--round" src={profile?.avatar} />

                <div className="text-center">
                    <h1 className="heading">{profile?.username}</h1>
                    <p className="subheading">{profile?.bio}</p>
                </div>
            </div>
        </div>
    )
}

export default withFirebase(ProfilePage)