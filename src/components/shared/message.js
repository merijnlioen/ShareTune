import React from 'react'
import { connect } from 'react-redux'
import { CSSTransition } from 'react-transition-group'
import { updateIsMessageOpened } from '../../actions/global-actions'

const Message = ({ message, updateIsMessageOpened, isMessageOpen }) => (
    <CSSTransition
        in={message && isMessageOpen}
        timeout={1000}
        classNames="fade"
        unmountOnExit
        appear={true}
    >
        <div className="message__container">
            <div className="message">{message}</div>
            <div className="close" onClick={() => updateIsMessageOpened(false)}>X</div>
        </div>
    </CSSTransition>
)

const mapStateToProps = state => ({
    message: state.global.message,
    isMessageOpen: state.global.isMessageOpen
})

const mapDispatchToProps = dispatch => ({
    updateIsMessageOpened: value => dispatch(updateIsMessageOpened(value))
})

export default connect(mapStateToProps, mapDispatchToProps)(Message)