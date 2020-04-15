import React from 'react'
import Helmet from 'react-helmet'

const NotFound = () => (
    <div className="not-found">
        <Helmet>
            <title>Sharetune - Not Found</title>
        </Helmet>
        
        <div className="inner">
            <h1 className="title title--dark title--center">Not Found</h1>
        </div>
    </div>
)

export default NotFound