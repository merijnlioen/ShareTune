import React from 'react'
import AvatarImage from '../../assets/img/avatar.jpg'
import classNames from 'classnames'

const Avatar = ({ avatar, username, isSmall, isRound }) => (
    <img className={classNames('avatar', { 'avatar--small': isSmall }, { 'avatar--round': isRound })} src={avatar || AvatarImage} alt={`Avatar ${username ? `of ${username}`: ''}`} />
)

export default Avatar