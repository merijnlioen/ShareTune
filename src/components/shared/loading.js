import React, { Suspense, Fragment } from 'react'
import Logo from './logo'

const LoadingContainer = () => (
    <div className="loading__container">
        <div className="loader">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>

        <Logo />
    </div>
)

const Loading = ({ isLoading, children }) => (
    <Suspense fallback={ LoadingContainer }>
        {isLoading && <LoadingContainer />}

        {!isLoading &&
            <Fragment>
                {children}
            </Fragment>
        }
    </Suspense>
)

export default Loading