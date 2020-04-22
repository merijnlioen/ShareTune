import React from 'react'
import { withFirebase } from '../../../firebase'
import TrendingProfiles from '../../shared/trending-profiles'

const Home = () => (
    <div className="inner">
        <h1 className="heading">Home</h1>
        <h2 className="subheading">Trending profiles</h2>

        <div className="trending__profile__container">
            <TrendingProfiles />
        </div>
    </div>
)

export default withFirebase(Home)