import React from 'react'
import AvatarImage from '../../assets/img/avatar.jpg'
import classNames from 'classnames'

const Avatar = ({ avatar, username, isRound }) => (
    <img className={classNames('avatar', { 'avatar--round': isRound })} src={avatar || AvatarImage} alt={`Avatar ${username ? `of ${username}`: ''}`} />
)

export default Avatar