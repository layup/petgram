
import React from 'react'

const PostHeader = (props) => {
    return (
        <div className='flex p-2 items-center'> 
            <img 
                className='h-10 w-10 rounded-full'
                src={props.profile}
                alt='profile'
            /> 
            <p className='px-2 font-semibold'>{props.username}</p>
        </div>
    )
}

export default PostHeader