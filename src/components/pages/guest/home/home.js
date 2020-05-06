import React, { Fragment } from 'react'
import Gradient from '../../../shared/gradient'
import TrendingProfiles from '../../../shared/trending-profiles'
import Footer from '../../../shared/footer'
import UniqueSellingpoints from '../../../shared/unique-sellingpoints'
import Helmet from 'react-helmet'
import { CSSTransition } from 'react-transition-group'

const Home = () => (
    <Fragment>
        <Helmet>
            <title>ShareTune - Share your favorite tunes</title>
        </Helmet>

        <Gradient>
            <div className="inner">
                <CSSTransition
                    in={true}
                    appear={true}
                    classNames="fade"
                    timeout={500}
                >
                    <div>
                        <h1 className="title">Share your favourite tunes</h1>
                        <h2 className="subtitle">Sign up for free and get started today.</h2>
                    </div>
                </CSSTransition>
            </div>
        </Gradient>

        <div className="content__container">
            <div className="inner">
                <h3 className="heading">Newest profiles</h3>
                <div className="trending__container">
                    <TrendingProfiles />
                </div>

                <UniqueSellingpoints />
            </div>
        </div>

        <Footer />
    </Fragment>
)

export default Home