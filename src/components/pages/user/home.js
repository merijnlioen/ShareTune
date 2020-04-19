import React, { useEffect, useState } from 'react'
import { withFirebase } from '../../../firebase'
import { Link } from 'react-router-dom'
import Avatar from '../../shared/avatar'

const Home = ({ firebase }) => {
    const [trendingProfiles, setTrendingProfiles] = useState()

    useEffect(() => {
        firebase.db.collection('users').get()
            .then(querySnapshot => querySnapshot.docs.map(user => user.data()))
            .then(users => setTrendingProfiles(users))
            .catch(error => console.log(error))
    }, [])

    return (
        <div className="inner">
            <h1 className="heading">Home</h1>
            <h2 className="subheading">Trending profiles</h2>

            <div className="trending__profile__container">
                {trendingProfiles?.map((profile, index) => (
                    <Link to={`/profile/${profile.id}`} key={index} className="trending__profile">
                        <div className="trending__profile__overlay" />
                        <p className="trending__profile__username">{profile.username}</p>

                        <Avatar
                            avatar={profile.avatar}
                            username={profile.username}
                        />
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default withFirebase(Home)