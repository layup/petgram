import React, { useState } from 'react'
import { Link } from "react-router-dom";

import {BsGear} from 'react-icons/bs'

const FAKE_POST_DATA = [
  {
    title: 'This is Bob',
    image: 'https://media-cldnry.s-nbcnews.com/image/upload/t_fit-1240w,f_auto,q_auto:best/rockcms/2022-08/220805-border-collie-play-mn-1100-82d2f1.jpg', 
    profile_pic:'https://m.media-amazon.com/images/M/MV5BMTQzMjkwNTQ2OF5BMl5BanBnXkFtZTgwNTQ4MTQ4MTE@._V1_.jpg',
    totalLikes: 6, 
    description:'This is my dog named bob and its his birthday',
    username: 'Ryan_Gosling',
    comments:[
      {
        username: 'Sandra_Gosling', 
        comment: 'what a cute dog' 
      }, 

      {
        username: 'Tommy_Lay', 
        comment: 'OMG they grow up so fast' 
      }, 
      {
        username: 'Rebecca_Kircsh', 
        comment: 'wowza cute dog' 
      }, 
      {
        username: 'JonahO', 
        comment: 'hot damn' 
      }, 
    ],
    likes: [
      {username: 'Sandra_Gosling'},
      {username: 'bob_ross'},
      {username: 'bob_ross'},
      {username: 'bob_ross'},
      {username: 'bob_ross'}, 
      {username: 'bob_ross'}
    ]
  }, 
  {
    title: 'This is Bob',
    image: 'https://image.cnbcfm.com/api/v1/image/106686172-1598966433320-gettyimages-1152439648-istockalypse-home-office-00062.jpeg?v=1599013160', 
    profile_pic:'https://m.media-amazon.com/images/M/MV5BMTQzMjkwNTQ2OF5BMl5BanBnXkFtZTgwNTQ4MTQ4MTE@._V1_.jpg',
    totalLikes: 6, 
    description:'This is my dog named bob and its his birthday',
    username: 'Ryan_Gosling',
    comments:[
      {
        username: 'Sandra_Gosling', 
        comment: 'what a cute dog' 
      }, 

      {
        username: 'Tommy_Lay', 
        comment: 'OMG they grow up so fast' 
      }, 
      {
        username: 'Rebecca_Kircsh', 
        comment: 'wowza cute dog' 
      }, 
      {
        username: 'JonahO', 
        comment: 'hot damn' 
      }, 
    ],
    likes: [
      {username: 'Sandra_Gosling'},
      {username: 'bob_ross'},
      {username: 'bob_ross'},
      {username: 'bob_ross'},
      {username: 'bob_ross'}, 
      {username: 'bob_ross'}
    ]
  }
]



const FAKE_PROFILE_DATA = {
  username: 'Ryan_Gosling', 
  description: 'Massa posuere tincidunt aliquam felis dapibus curae lacinia augue donec natoque venenatis ornare, nascetur consectetur commodo ridiculus ligula torquent magni ', 
  posts: 1, 
  followers: 1000, 
  following: 200, 
  profile_pic:'https://m.media-amazon.com/images/M/MV5BMTQzMjkwNTQ2OF5BMl5BanBnXkFtZTgwNTQ4MTQ4MTE@._V1_.jpg',

}

function Profile() {

  const [edit, setEditStatus] = useState(false)
  const [PostSelection, setPostSelection] = useState(true)

  const toggleEditStatus = () => {
    setEditStatus(!edit); 
  }

  const toggelPostSection = () => {
    setPostSelection(false)
  }

  const toggleForumSection = () => {
    setPostSelection(true)
  }


  return (
    <div className='h-screen flex md:justify-center bg-slate-100 ' >

      <div className=' pt-20 md:w-5/6 md:p-8 md:pt-20 lg:p-24  xl:w-3/5 xl:p-20 '>
        <div className='flex p-2 w-full' >
          <div className='flex justify-center h-fit md:basis-3/5  2xl:basis-2/5 hover:bg-orange-200'>
            <img 
              className='h-32 w-32 rounded-full' 
              src={FAKE_PROFILE_DATA.profile_pic}
              alt='test'
            />
        
          </div>
          <div className='flex flex-col'>
              <div className='flex items-center'>
                <h2 className='font-semibold text-xl p-2'>{FAKE_PROFILE_DATA.username}</h2>
                <Link to='/:userId/edit'>
                  <BsGear className='h-5 w-5' alt='edit'/>
                </Link>
              </div>
                <ul className='flex child:p-2 font-medium text-center'>
                  <li><p>Posts: {FAKE_PROFILE_DATA.posts}</p></li>
                  <li><p>Followers: {FAKE_PROFILE_DATA.followers}</p></li>
                  <li><p>Following: {FAKE_PROFILE_DATA.following}</p></li>
                </ul>
                <p className='p-2 hidden md:block'>{FAKE_PROFILE_DATA.description}</p> 
          </div>
        </div>
        <p className='p-4 md:hidden'>{FAKE_PROFILE_DATA.description}</p> 

        <div className='py-4 px-2 md:p-0 '>
          <h1 className='font-medium '>Pets</h1>
          <div className=' py-4 flex '>

            <div className=' flex flex-col bg-white rounded-xl w-36 drop-shadow-md hover:drop-shadow-xl mx-1 ' >
              <img 
                className='h-40 rounded-t-lg' 
                src={FAKE_POST_DATA[0].image}
                alt='test'
              /> 
              <div className='flex flex-col p-2 text-center'>
                <h2 className=' font-semibold'>Bruno</h2>
                <h2>Male</h2>
              </div>
            </div>

            <div className=' flex flex-col bg-white rounded-xl w-36 drop-shadow-md hover:drop-shadow-xl mx-1' >
              <img 
                className='h-40 rounded-t-lg' 
                src={FAKE_POST_DATA[1].image}
                alt='test'
              /> 
              <div className='flex flex-col p-2 text-center'>
                <h2 className=' font-semibold'>Sarah</h2>
                <h2>Female</h2>
              </div>
            </div>
      

          </div>


        </div>

        <div className=''>
          <ul className="flex flex-wrap text-sm font-medium text-center text-gray-500 border-b border-gray-300">
            <li className="mr-2">
              {PostSelection? 
                <button 
                  className="inline-block p-4 text-cyan-500 bg-gray-200 rounded-t-lg active " 
                >
                  Posts
                </button>: 
                <button 
                  className="inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50"
                  onClick={toggleForumSection}
                >
                  Posts
                </button>
              }
            </li>
            <li className="mr-2">
              {PostSelection? 
                <button 
                  className="inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 " 
                  onClick={toggelPostSection} 
                >
                    Forum
                </button>: 
                <button 
                  className="inline-block p-4 text-cyan-500 bg-gray-300 rounded-t-lg active "
                >
                  Forum
                </button>
              }
            </li>
          </ul>
        </div>

        <div className='bg-orange-100 grid grid-cols-2 sm:grid-cols-3'>
              <div>
                <img src={FAKE_POST_DATA[0].image} alt='test' /> 
              </div>
              <div>
                <img src={FAKE_POST_DATA[0].image} alt='test' /> 
              </div>
              <div>
                <img src={FAKE_POST_DATA[0].image} alt='test' /> 
              </div>
              <div>
                <img src={FAKE_POST_DATA[1].image} alt='test' /> 
              </div>
        </div>

      </div>
    </div>
  )
}

export default Profile