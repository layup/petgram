import React from 'react'

const PostComments = (props) => {
    
    const total_comments = props.comments.length 
    
    return (
        <div>
            <div className='flex px-2 pb-1'>
                <a 
                    className='pr-1 font-semibold' 
                    href='/'
                >
                    {props.username}:
                </a>
                <p>{props.description.substring(0,29)}...</p>
            </div>
            <div className='px-2 pb-2'>
                {total_comments > 2 && 
                    <p className='text-gray-400 hover:cursor-pointer' onClick={props.showComments}>
                            View all {total_comments} comments 
                    </p>
                }
                {total_comments >= 1 && 
                    <div className='flex'>
                        <p className='font-semibold'>{props.comments[total_comments-1].username} </p>
                        <p>: {props.comments[total_comments-1].comment} </p>
                    </div>

                }
                {total_comments >= 2 &&               
                    <div className='flex'>
                        <p className='font-semibold'>{props.comments[total_comments-2].username} </p>
                        <p>: {props.comments[total_comments-2].comment} </p>
                    </div>
                }
            </div>
        </div>
    )
}

export default PostComments