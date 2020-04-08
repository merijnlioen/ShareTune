import React from 'react'
import classNames from 'classnames'

const Logo = ({ size, isWhite }) => (
    <div className={classNames('logo', { [`logo--${size}`]: size }, { 'logo--white': isWhite })}>
        <span>Share</span>
        Tune
    </div>
)

export default Logo