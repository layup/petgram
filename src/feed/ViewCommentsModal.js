import React from "react";
import ReactDOM from 'react-dom'

import Backdrop from "../shared/component/UIElement/Backdrop";
import {GrClose} from 'react-icons/gr'

const CommentModalOverlay = (props) => {
    const content = (
        <div className='modal fixed w-1/3 top-72 left-1/3 z-40' >
            <div className=" flex justify-end">
                <button onClick={props.onCancel}>
                    <GrClose className="h-6 w-6"/>
                </button>
            </div>
            <div className="bg-slate-100 w-full p-4 rounded-2xl">
                <p>Comments </p>
            </div>
        </div>
    )
    
    return ReactDOM.createPortal(content, document.getElementById('modal-hook'))
}


const ViewCommentsModal = (props) => {

    
    return (
        <React.Fragment>
            {props.show && <Backdrop onClick={props.onCancel} /> }
            <CommentModalOverlay {...props} /> 
        </React.Fragment>

    )
}

export default ViewCommentsModal