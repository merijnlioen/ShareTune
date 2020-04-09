import React from 'react'
import classNames from 'classnames'

const Gradient = ({ children, isVertical }) => (
    <div className={classNames('gradient', { 'gradient--vertical': isVertical } )}>
        {children}
    </div>
)

export default Gradient