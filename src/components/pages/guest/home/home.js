import React, { Fragment } from 'react'
import Gradient from '../../../shared/gradient'
import TrendingProfiles from './trending-profiles'
import Footer from '../../../shared/footer'
import Search from '../../../shared/search'
import UniqueSellingpoints from '../../../shared/unique-sellingpoints'
import Helmet from 'react-helmet'

const Home = () => (
    <Fragment>
        <Helmet>
            <title>ShareTune - Share your favorite tunes</title>
        </Helmet>

        <Gradient>
            <div className="inner">
                <h1 className="title">Share your favourite tunes</h1>
                <h2 className="subtitle">Sign up for free and get started today.</h2>
            </div>
        </Gradient>

        <div className="content__container">
            <div className="inner">
                <Search placeholder="Search for Friends, Artists, Songs" />

                <TrendingProfiles />

                <UniqueSellingpoints />
            </div>
        </div>

        <Footer />
    </Fragment>
)

export default Home