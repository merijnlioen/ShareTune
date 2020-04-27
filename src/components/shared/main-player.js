import React, { useState, useRef, useEffect, Fragment } from 'react'
import { connect } from 'react-redux'
import { updateIsPlaying } from '../../actions/player-actions'
import { CSSTransition } from 'react-transition-group'
import Pause from 'react-ionicons/lib/MdPause'
import Play from 'react-ionicons/lib/MdPlay'

const MainPlayer = ({ updateIsPlaying, isPlaying, activeSong }) => {
    const [volume, setVolume] = useState(50)
    const [currentSong, setCurrentSong] = useState()
    const player = useRef()

    useEffect(() => {
        if (!activeSong) return
        if (currentSong?.id !== activeSong.id) return

        if (isPlaying) {
            player.current.load()
            player.current.play()
        }
        else player.current.pause()
    }, [isPlaying])

    useEffect(() => {
        if (!activeSong) return

        player.current.volume = volume / 100
    }, [volume])

    useEffect(() => {
        if (!activeSong) return
        
        player.current.pause()
        player.current.load()
        player.current.play()
            .then(() => {
                setCurrentSong(activeSong)
            })

    }, [activeSong])

    return (
        <CSSTransition
            in={!!activeSong}
            timeout={500}
            classNames="slide-up"
            unmountOnExit
        >
            <div className="main-player">
                <audio ref={player}>
                    <source src={activeSong?.song} type="audio/mpeg" />
                </audio>

                <div className="main-player__info">
                    <p className="song__name">{activeSong?.title}</p>
                    <p className="song__artist">{activeSong?.artist}</p>
                </div>
        
                <div className="main-player__actions">
                    {isPlaying && <Pause onClick={() => updateIsPlaying(false)} />}
                    {!isPlaying && <Play onClick={() => updateIsPlaying(true)} />}
                </div>
        
                <div className="main-player__volume">
                    <input type="range" min="0" max="100" value={volume} onChange={e => setVolume(e.currentTarget.value)} />
                </div>
            </div>
        </CSSTransition>
    )
}

const mapStateToProps = state => ({
    isPlaying: state.player.isPlaying,
    songs: state.player.songs,
    activeSong: state.player.activeSong
})

const mapDispatchToProps = dispatch => ({
    updateIsPlaying: value => dispatch(updateIsPlaying(value))
})

export default connect(mapStateToProps, mapDispatchToProps)(MainPlayer)