import React from 'react'
import Logo from './logo'
import People from 'react-ionicons/lib/IosPeopleOutline'
import HeadPhones from 'react-ionicons/lib/IosHeadsetOutline'
import Note from 'react-ionicons/lib/IosMusicalNoteOutline'

const UniqueSellingpoints = () => (
    <div className="usps">
        <span className="heading">Why </span><Logo /><span className="heading">?</span>
        <div className="usp__container">
            <div className="usp">
                <div className="usp__image">
                    <Note fontSize="50px" />
                </div>

                <h4 className="subheading usp__title">Share</h4>
                <p className="text">
                    Share your favorite tunes with the outside world,
                    so your family, friends and even strangers can enjoy
                    your outstanding taste in music.
                </p>
            </div>

            <div className="usp">
                <div className="usp__image">
                    <People fontSize="50px" />
                </div>

                <h4 className="subheading usp__title">Interaction</h4>
                <p className="text">
                    Comment on your favorite tunes and have a chat with
                    your friends and family. ShareTune is all about that
                    interaction concerning your favorite tunes.
                </p>
            </div>

            <div className="usp">
                <div className="usp__image">
                    <HeadPhones fontSize="50px" />
                </div>

                <h4 className="subheading usp__title">Enjoy</h4>
                <p className="text">
                    Enjoy some of your favorite tunes uploaded by your
                    friends, family, and even strangers!
                </p>
            </div>
        </div>
    </div>
)

export default UniqueSellingpoints