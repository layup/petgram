import React, {useState} from 'react'

import { AiOutlineHeart } from "react-icons/ai";
import { AiFillHeart } from 'react-icons/ai'
import {FaRegComment} from 'react-icons/fa'

const PostLikes = props =>  {

    const [likePost, setLikePost] = useState(false); 

    const toggleLikePost = () => {
        setLikePost(!likePost)
    }


    return (
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
                onClick={props.showComments}
            >
                <FaRegComment className='h-5 w-5 hover:cursor-pointer' />
            </button>

        </div> 
        <p
            className='text-blue-500 px-2 hover:text-blue-600 cursor-pointer'  
            onClick={props.showLikes}
        >
            {props.totalLikes} Likes
        </p>
    </div>
    )
}

export default PostLikes