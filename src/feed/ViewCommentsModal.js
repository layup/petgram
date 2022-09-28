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
                <div className="w-2/4 h-96 bg-black flex  ">
                    <img 
                        className='object-contain' 
                        src={props.image}
                        alt='test'
                    />   
                </div>
                <div className="p-2 flex flex-col  w-2/3">
                    <div className="p-2 flex items-center self-start border-b-2 w-full">
                        <img 
                            className="h-12 w-12 rounded-full"
                            src={props.profile}
                            alt='test'
                        />
                        <p className="px-2 text-blue-600 font-semibold">{props.username}</p>
                       
                    </div>
                    <div className="flex-grow" >
                        <div className="flex px-2">
                            <p className="font-semibold">{props.username}</p>
                            <p>: {props.description}</p>
                        </div>

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

                    <div className=" flex flex-col border-2">
                        <form className=''>
                            <input 
                                className='w-5/6 p-2 focus:outline-none bg-slate-50'
                                placeholder='Add a comment' 
                            /> 
                            <button className=' w-1/6 p-2 text-blue-500'> Post</button>
                        </form>
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