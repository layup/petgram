import React from "react";
import ReactDOM from 'react-dom'

import Backdrop from "../shared/component/UIElement/Backdrop";
import {GrClose} from 'react-icons/gr'

const CommentModalOverlay = (props) => {
    const content = (
        <div className='modal fixed w-2/4 top-72 left-1/4 z-40' >
            <div className=" flex justify-end">
                <button onClick={props.onCancel}>
                    <GrClose className="h-6 w-6"/>
                </button>
            </div>
            <div className="bg-slate-100 w-full p-4 rounded-2xl flex">
                <div className="w-96 h-96 bg-black flex rounded-lg">
                    <img 
                        className='object-contain' 
                        src={props.image}
                        alt='test'
                    />   
                </div>
                <div className="p-2 divide-y-2">
                    <div className="py-2 flex items-center ">
                        <img 
                            className="h-10 w-10 rounded-full"
                            src={props.profile}
                            alt='test'
                        />
                        <p className="px-2 text-blue-600 font-semibold">{props.username}</p>
                       
                    </div>
                    <div className="p-2 flex">
                        <p className="font-semibold">{props.username}</p>
                        <p>: {props.description}</p>
                    </div>
        
                    <div>
                        <ul className="">
                            {props.comments.map((user) => {
                                return (
                                    <li className="px-2 py-1 flex">
                                        <p className="font-semibold">{user.username}</p> 
                                        <p>: {user.comment}</p>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>

                </div>
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