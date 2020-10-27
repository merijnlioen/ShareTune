import React, { useState, useEffect, Fragment } from 'react'
import { connect } from 'react-redux'
import { updateActiveSong, updateIsPlaying, updateIsLoading } from '../../actions/player-actions'
import { withFirebase } from '../../firebase'
import Pause from 'react-ionicons/lib/MdPause'
import Play from 'react-ionicons/lib/MdPlay'
import Loading from 'react-ionicons/lib/MdRefresh'
import Avatar from '../shared/avatar'
import { Link } from 'react-router-dom'

const Player = ({ song, updateActiveSong, activeSong, isPlaying, updateIsPlaying, updateIsLoading, isLoading, firebase }) => {
	const [uploader, setUploader] = useState()

    useEffect(() => {
        getUploader()
	}, [])

    const getUploader = async () => {
        if (!song.uploader) return

		firebase.db.collection('users').doc(song.uploader).get()
			.then(user => user.data())
			.then(user => {
				setUploader(user)
            })
    }

    return (
        <div>
            <div className="player" style={{ backgroundImage: `url(${song.background})` }}>
                <div className="player__info">
                    <p className="text">{song.title}</p>
                    <p className="text">{song.artist}</p>
                </div>
                
                <div className="player__actions">
                    {(song.id === activeSong?.id && isLoading) &&
                        <Loading rotate={true} />
                    }

                    {(song.id === activeSong?.id) && isPlaying && !isLoading && <Pause onClick={() => updateIsPlaying(false)} />}

                    {(song.id !== activeSong?.id || (!isPlaying && (song.id === activeSong?.id))) && <Play onClick={() => {
                        if (song.id !== activeSong?.id) {
                            updateIsLoading(true)
                            updateActiveSong(song)
                        }

                        updateIsPlaying(true)
                    }} />}
                </div>
            </div>
            <div className="player__uploader">
                <Link to={`/profile/${uploader?.id}`}>
                    <Fragment>
                        <Avatar avatar={uploader?.avatar} username={uploader?.username} isRound isSmall />

                        <p>{uploader?.username}</p>
                    </Fragment>
                </Link>
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    activeSong: state.player.activeSong,
    isPlaying: state.player.isPlaying,
    isLoading: state.player.isLoading
})

const mapDispatchToProps = dispatch => ({
    updateActiveSong: value => dispatch(updateActiveSong(value)),
    updateIsPlaying: value => dispatch(updateIsPlaying(value)),
    updateIsLoading: value => dispatch(updateIsLoading(value))
})

export default connect(mapStateToProps, mapDispatchToProps)(withFirebase(Player))