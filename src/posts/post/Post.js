import React, { useEffect, useState}  from 'react'

import PostLikes from './PostLikes';
import PostHeader from './PostHeader';
import PostComments from './PostComments';
import ViewLikeModal from './ViewLikesModal';
import ViewPostModal from './ViewPostModal';

/*TODO: 
* fix user and comment total length, so overflows to next screen 
* attach the buttons 
* user profile_pics for liked comments 
*/

const Post = (props) => {

    const [viewLikes, setViewLikes] = useState(false); 
    const [viewComment, setViewComment] = useState(false);
     
    const toggleViewLike = () => {
        setViewLikes(!viewLikes)
    }

    const toggleViewComment = () => {
        setViewComment(!viewComment)
    }

    useEffect(() => {
        if(viewLikes || viewComment){
            if (typeof window != 'undefined' && window.document) {
                document.body.style.overflow = 'hidden';
            }
        }else {
            document.body.style.overflow = 'unset';
        } 
    }, [viewLikes, viewComment])

    
    return (
        <React.Fragment>
            {viewComment && 
                <ViewPostModal
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
            <div className='bg-grey-100 w-full sm:w-96 h-min mb-5 bg-slate-50 border-2 md:rounded-xl'>
                <PostHeader 
                    username={props.username} 
                    profile={props.profile} 
                /> 
                <div className='border-y-2 grid grid-cols-1'>
                    <img 
                        className='' 
                        src={props.image}
                        alt='test'
                    /> 
                </div>
                <div>
                    <PostLikes  
                        showLikes={toggleViewLike} 
                        showComments={toggleViewComment} 
                        totalLikes={props.totalLikes}
                    /> 
                    <PostComments
                        comments={props.comments}
                        showComments={toggleViewComment}
                        username={props.username}
                        description={props.description}
                    />
                
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