import React, { Fragment, useState, useEffect } from 'react'
import { getMostRecentProfiles } from '../../actions/global-actions'
import { withFirebase } from '../../firebase'
import { Link } from 'react-router-dom'
import Avatar from './avatar'

const TrendingProfiles = ({ firebase, limit }) => {
    const [trendingProfiles, setTrendingProfiles] = useState()

    useEffect(() => {
        getMostRecentProfiles(firebase, limit)
            .then(users => setTrendingProfiles(users))
    }, [])

    return (
        <Fragment>
            {trendingProfiles?.map((profile, index) => (
                <Link to={`/profile/${profile.id}`} key={index} className="trending__profile">
                    <div className="trending__profile__overlay">
                        <p className="trending__profile__username">{profile.username}</p>
                    </div>

                    <Avatar
                        avatar={profile.avatar}
                        username={profile.username}
                    />
                </Link>
            ))}
        </Fragment>
    )
}

export default withFirebase(TrendingProfiles)