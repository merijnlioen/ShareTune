import React, { useEffect } from 'react'
import { withFirebase } from '../../../firebase'
import { connect } from 'react-redux'
import { updateSongs } from '../../../actions/player-actions'
import TrendingProfiles from '../../shared/trending-profiles'
import Player from '../../shared/player'

const Home = ({ firebase, updateSongs, songs }) => {
    useEffect(() => {
        firebase.db.collection('songs').limit(12).get()
            .then(snapshot => snapshot.docs.map(song => {
                return {
                    ...song.data(),
                    id: song.id
                }
            }))
            .then(songs => updateSongs(songs))
    }, [])

    return (
        <div className="inner">
            <h1 className="heading">Home</h1>
    
            <h2 className="subheading">Trending profiles</h2>
            <div className="trending__profile__container">
                <TrendingProfiles
                    limit={10}
                />
            </div>
    
            <h2 className="subheading">Songs</h2>
            <div className="players__container">
                {songs.map((song, index) => (
                    <Player song={song} key={index} />
                ))}
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    songs: state.player.songs
})

const mapDispatchToProps = dispatch => ({
    updateSongs: value => dispatch(updateSongs(value))
})

export default connect(mapStateToProps, mapDispatchToProps)(withFirebase(Home))