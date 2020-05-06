import React from 'react'
import { Facebook, Instagram, LinkedIn } from './icons'

const Footer = () => (
    <footer className="footer">
        <div className="inner">
            <nav className="footer__nav">
                <Facebook />
                <Instagram />
                <LinkedIn />
            </nav>
            <p className="copyrights">&copy; 2020 ShareTune. All rights reserved.</p>
        </div>
    </footer>
)

export default Footer