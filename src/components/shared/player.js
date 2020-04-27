import React from 'react'
import { connect } from 'react-redux'
import { updateActiveSong, updateIsPlaying } from '../../actions/player-actions'
import Pause from 'react-ionicons/lib/MdPause'
import Play from 'react-ionicons/lib/MdPlay'

const Player = ({ song, updateActiveSong, activeSong, isPlaying, updateIsPlaying }) => (
    <div className="player" style={{ backgroundImage: 'url(https://images.pexels.com/photos/3312664/pexels-photo-3312664.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)' }}>
        <div className="player__info">
            <p className="text">{song.title}</p>
            <p className="text">{song.artist}</p>
        </div>
        <div className="player__actions">
            {(song.id === activeSong?.id) && isPlaying && <Pause onClick={() => updateIsPlaying(false)} />}

            {(song.id !== activeSong?.id || (!isPlaying && (song.id === activeSong?.id))) && <Play onClick={() => {
                if (song.id !== activeSong?.id) updateActiveSong(song)
                updateIsPlaying(true)
            }} />}

        </div>
    </div>
)

const mapStateToProps = state => ({
    activeSong: state.player.activeSong,
    isPlaying: state.player.isPlaying
})

const mapDispatchToProps = dispatch => ({
    updateActiveSong: value => dispatch(updateActiveSong(value)),
    updateIsPlaying: value => dispatch(updateIsPlaying(value))
})

export default connect(mapStateToProps, mapDispatchToProps)(Player)