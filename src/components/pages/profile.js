import React from 'react'
import { useParams } from 'react-router-dom'

const ProfilePage = () => {
    const { id } = useParams()

    return (
        <div>
            <h1>Merijn Lioen - {id}</h1>
        </div>
    )
}

export default ProfilePage