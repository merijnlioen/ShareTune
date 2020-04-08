import React, { Fragment } from 'react'
import Gradient from '../../../shared/gradient'
import TrendingProfiles from './trending-profiles'

const Home = () => (
    <Fragment>
        <Gradient>
            <div className="inner">
                <h1 className="title">Share your favourite tunes</h1>
                <h2 className="subtitle">Sign up for free and get started today.</h2>
            </div>
        </Gradient>

        <div className="content__container">
            <div className="inner">
                <TrendingProfiles />
            </div>
        </div>
    </Fragment>
)

export default Home