import React, { Fragment } from 'react'
import Gradient from '../../../shared/gradient'
import TrendingProfiles from '../../../shared/trending-profiles'
import Footer from '../../../shared/footer'
import UniqueSellingpoints from '../../../shared/unique-sellingpoints'
import Helmet from 'react-helmet'
import { CSSTransition } from 'react-transition-group'
import { Link } from 'react-router-dom'

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
                        <h2 className="subtitle">Register for free and start sharing today!</h2>
                        <Link to="/register" className="button button--outline button--margin">Register</Link>
                    </div>
                </CSSTransition>
            </div>
        </Gradient>

        <div className="content__container">
            <div className="inner">
                <UniqueSellingpoints />

                <h3 className="heading">Newest profiles</h3>
                <div className="trending__container">
                    <TrendingProfiles />
                </div>
            </div>
        </div>

        <Footer />
    </Fragment>
)

export default Home