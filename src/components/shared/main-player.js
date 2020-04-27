import React, { useState, useRef, useEffect, Fragment } from 'react'
import { connect } from 'react-redux'
import { updateIsPlaying, updateIsLoading } from '../../actions/player-actions'
import { CSSTransition } from 'react-transition-group'
import Pause from 'react-ionicons/lib/MdPause'
import Play from 'react-ionicons/lib/MdPlay'

const MainPlayer = ({ updateIsPlaying, isPlaying, activeSong, updateIsLoading, isLoading }) => {
    const [volume, setVolume] = useState(50)
    const [currentSong, setCurrentSong] = useState()
    const [rangeValue, setRangeValue] = useState(0)
    const player = useRef()

    useEffect(() => {
        if (!activeSong) return
        if (currentSong?.id !== activeSong.id) return

        if (isPlaying) {
            player.current.play()
                .then(() => {
                    updateIsLoading(false)
                })
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
                updateIsLoading(false)
                setCurrentSong(activeSong)
            })

    }, [activeSong])

    const onTimeUpdate = currentTime => {
        if (!player.current.duration) return

        setRangeValue(1000 / player.current.duration * currentTime)
    }

    const updateCurrentTime = value => {
        player.current.currentTime = player.current.duration / 1000 * value
    }

    return (
        <CSSTransition
            in={!!activeSong}
            timeout={500}
            classNames="slide-up"
            unmountOnExit
        >
            <div className="main-player">
                <input type="range" className="time-range" min={0} max={1000} value={rangeValue} onChange={e => updateCurrentTime(e.currentTarget.value)} />

                <audio ref={player} onTimeUpdate={e => onTimeUpdate(e.currentTarget.currentTime)}>
                    <source src={activeSong?.song} type="audio/mpeg" />
                </audio>

                <div className="main-player__info">
                    <p className="song__name">{activeSong?.title}</p>
                    <p className="song__artist">{activeSong?.artist}</p>
                </div>
        
                <div className="main-player__actions">
                    {!isLoading &&
                        <Fragment>
                            {isPlaying && <Pause onClick={() => updateIsPlaying(false)} />}
                            {!isPlaying && <Play onClick={() => updateIsPlaying(true)} />}
                        </Fragment>
                    }
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
    activeSong: state.player.activeSong,
    isLoading: state.player.isLoading
})

const mapDispatchToProps = dispatch => ({
    updateIsPlaying: value => dispatch(updateIsPlaying(value)),
    updateIsLoading: value => dispatch(updateIsLoading(value))
})

export default connect(mapStateToProps, mapDispatchToProps)(MainPlayer)