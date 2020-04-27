import React, { Suspense } from 'react'
import Logo from './logo'
import { CSSTransition } from 'react-transition-group'

const LoadingContainer = () => (
    <div className="loading__container">
        <div className="loader">
            <div/>
            <div/>
            <div/>
            <div/>
            <div/>
            <div/>
            <div/>
            <div/>
        </div>

        <Logo />
    </div>
)

const Loading = ({ isLoading, children }) => (
    <Suspense fallback={ LoadingContainer }>
        <CSSTransition
            in={isLoading}
            unmountOnExit
            timeout={500}
            classNames="fade"
        >
            <LoadingContainer />
        </CSSTransition>

        {children}
    </Suspense>
)

export default Loading