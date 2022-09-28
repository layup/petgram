import React from 'react'
import ReactDOM from 'react-dom'
import Backdrop from './Backdrop'

import './modal.css'

const ModalOverlay = (props) => {

    const content = (
        <React.Fragment>
            <div className='modal fixed w-4/5 top-72 left-20  flex justify-center items-center z-40'>
                <div className='modal-content bg-orange-100 w-1/4'>
                    <div className='modal-header'>
                        <h4>Modal Title</h4>
                    </div>
                    <div className='modal-body'>
                        <p>Modal Body </p>
                    </div>
                    <div className='modal-footer'>
                        <p>Modal Footer</p>
                    </div>
                </div>         
            </div> 
        </React.Fragment>
    )
    return ReactDOM.createPortal(content, document.getElementById('modal-hook'))
}

const  Modal = (props) => {

    return (
        <React.Fragment>
            {props.show && <Backdrop onClick={props.onCancel} /> }
            <ModalOverlay /> 
        </React.Fragment>

    )
}

export default Modal