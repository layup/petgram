import React, { useState}  from 'react'
import { ReactDOM } from 'react-dom';
import ViewComments from './ViewComments';

import { AiOutlineHeart } from "react-icons/ai";
import { AiFillHeart } from 'react-icons/ai'
import { FaShareSquare } from 'react-icons/fa'
import {FaRegComment} from 'react-icons/fa'
import Modal from '../shared/component/UIElement/Modal';


const Post = (props) => {

    const [likePost, setLikePost] = useState(false); 
    const [viewComment, setViewComment] = useState(false);
 
    const toggleLike = () => {
        setLikePost(!likePost)
    }
    const toggleViewComment = () => {
        setViewComment(!viewComment)
    }

    return (
        <React.Fragment>
            {viewComment && 
                <Modal 
                    
                    onCancel={toggleViewComment}
                    show={viewComment}
                />
            }
            <div className='bg-grey-100 w-96 h-min my-5 bg-slate-100 border-2'>
                <div>
                    <img 
                        className='' 
                        src={props.image}
                        alt='test'
                    /> 
                </div>
                <div>
                    <div className='flex justify-between px-2 pt-1'>
                        <div className='grid grid-cols-3 w-2/6'>
                            <button 
                                className='w-min' 
                                onClick={toggleLike} 
                            >
                                {likePost ? 
                                    <AiFillHeart className='h-6 w-6 '/>:
                                    <AiOutlineHeart className='h-6 w-6 hover:cursor-pointer' />
                                }
                            </button>
                            <button 
                                className='w-min' 
                                onClick={toggleViewComment}
                            >
                                <FaRegComment className='h-5 w-5 hover:cursor-pointer' />
                            </button>

                        </div> 
                        <a 
                            className='text-blue-500 px-2' 
                            href='/'
                        >
                            {props.likes} Likes
                        </a>
                    </div>

                    <div className='flex px-2 pb-1'>
                        <a 
                            className='pr-1 font-semibold' 
                            href='/'
                        >
                            {props.username}:
                        </a>
                        <p>{props.description.substring(0,29)}...</p>
                    </div>
                    <div>
                        <ViewComments
                            comments={props.comments}
                        />
                    </div>
                    <form className=''>
                        <input 
                            className='w-5/6 p-2'
                            placeholder='Add a comment' 
                        /> 
                        <button className='border-2 w-1/6 p-2 '> Post</button>
                    </form>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Post