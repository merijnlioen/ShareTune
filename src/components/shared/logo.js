import React from 'react'
import classNames from 'classnames'

const Logo = ({ size, isWhite }) => (
    // Size = Small || Large
    <div className={classNames('logo', `logo--${size}`, { 'logo--white': isWhite })}>
        <span>Share</span>
        Tune
    </div>
)

export default Logo