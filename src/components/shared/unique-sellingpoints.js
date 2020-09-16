import React from 'react'
import Logo from './logo'

const UniqueSellingpoints = () => (
    <div className="usps">
        <span className="heading">Why </span><Logo /><span className="heading">?</span>
        <div className="usp__container">
            <div className="usp">
                <div className="usp__image" />
                <h4 className="subheading usp__title">Interaction</h4>
                <p className="text">
                    Comment on your favorite tunes and have a chat with
                    your friends and family. ShareTune is all about that
                    interaction concerning your favorite tunes.
                </p>
            </div>

            <div className="usp">
                <div className="usp__image" />
                <h4 className="subheading usp__title">Enjoy</h4>
                <p className="text">
                    Enjoy some of your favorite tunes uploaded by your
                    friends, family, and even strangers!
                </p>
            </div>
            
            <div className="usp">
                <div className="usp__image" />
                <h4 className="subheading usp__title">Share</h4>
                <p className="text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Cras rutrum nunc magna, vel luctus justo interdum ac.
                    Vestibulum lobortis ipsum ante, vel ultricies quam tincidunt ac.
                </p>
            </div>
        </div>
    </div>
)

export default UniqueSellingpoints