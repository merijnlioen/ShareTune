import React, { useEffect, useState } from 'react'
import { withFirebase } from '../../../firebase'
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
            {trendingProfiles?.map((profile, index) => (
                <div className="trending__profile">
                    <p>{profile.username}</p>
                    <Avatar
                        avatar={profile.avatar}
                        username={profile.username}
                    />
                </div>
            ))}
        </div>
    )
}

export default withFirebase(Home)