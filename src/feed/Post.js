import React, { useState}  from 'react'

import Comments from './Comments';
import ViewLikeModal from './ViewLikesModal';
import ViewCommentsModal from './ViewCommentsModal';

import { AiOutlineHeart } from "react-icons/ai";
import { AiFillHeart } from 'react-icons/ai'
import { FaShareSquare } from 'react-icons/fa'
import {FaRegComment} from 'react-icons/fa'
import Modal from '../shared/component/UIElement/Modal';


const Post = (props) => {

    const [likePost, setLikePost] = useState(false); 
    const [viewLikes, setViewLikes] = useState(false); 
    const [viewComment, setViewComment] = useState(false);
 
    const toggleLikePost = () => {
        setLikePost(!likePost)
    }
    
    const toggleViewLike = () => {
        setViewLikes(!viewLikes)
    }
    const toggleViewComment = () => {
        setViewComment(!viewComment)
    }


    return (
        <React.Fragment>
            {viewComment && 
                <ViewCommentsModal
                    {...props} 
                    onCancel={toggleViewComment}
                    show={viewComment}
                />
            }
            {viewLikes && 
                <ViewLikeModal 
                    likes={props.likes}
                    onCancel={toggleViewLike}
                    show={viewLikes} 
                />
            }
            <div className='bg-grey-100 w-96 h-min mb-5 bg-slate-50 border-2 md:rounded-xl'>
                <div className='flex p-2 items-center'> 
                    <img 
                        className='h-10 w-10 rounded-full'
                        src={props.profile}
                        alt='profile'
                    /> 
                    <p className='px-2 font-semibold'>{props.username}</p>
                </div>
                <div className='border-y-2'>
                    <img 
                        className='' 
                        src={props.image}
                        alt='test'
                    /> 
                </div>
                <div>
                    <div className='flex justify-between p-2'>
                        <div className='grid grid-cols-3 w-2/6'>
                            <button 
                                className='w-min' 
                                onClick={toggleLikePost} 
                            >
                                {likePost ? 
                                    <AiFillHeart className='h-6 w-6 '/>:
                                    <AiOutlineHeart className='h-6 w-6 hover:cursor-pointer' />
                                }
                            </button>
                            <button 
                                className='w-min ' 
                                onClick={toggleViewComment}
                            >
                                <FaRegComment className='h-5 w-5 hover:cursor-pointer' />
                            </button>

                        </div> 
                        <p
                            className='text-blue-500 px-2 hover:text-blue-600 cursor-pointer'  
                            onClick={toggleViewLike}
                        >
                            {props.totalLikes} Likes
                        </p>
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
                        <Comments
                            comments={props.comments}
                            showComments={toggleViewComment}
                        />
                    </div>
                    <form className='border-t-2'>
                        <input 
                            className='w-5/6 p-2 rounded-bl-xl focus:outline-none bg-slate-50'
                            placeholder='Add a comment' 
                        /> 
                        <button className=' w-1/6 p-2 text-blue-500'> Post</button>
                    </form>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Post