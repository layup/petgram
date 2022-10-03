import React, { useState } from 'react'

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
    <div className='h-screen flex justify-center bg-slate-50' >

      <div className=' w-3/5 p-24 rounded-3xl'>
        <div className='flex  p-2 w-full' >
          <div className='flex justify-center w-1/4 h-fit hover:bg-orange-200'>
            <img 
              className='h-32 w-32 rounded-full' 
              src={FAKE_PROFILE_DATA.profile_pic}
              alt='test'
            />
        
          </div>
          <div className='flex flex-col '>
              <h2 className='font-semibold p-2'>{FAKE_PROFILE_DATA.username}</h2>
                <ul className='flex child:p-2 font-medium'>
                  <li><p>Posts: {FAKE_PROFILE_DATA.posts}</p></li>
                  <li><p>Followers: {FAKE_PROFILE_DATA.followers}</p></li>
                  <li><p>Following: {FAKE_PROFILE_DATA.following}</p></li>
                </ul>
              <p className='p-2'>{FAKE_PROFILE_DATA.description}</p>
            
          </div>
        </div>

        <div className=''>
          <ul className="flex flex-wrap text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400">
            <li className="mr-2">
              {PostSelection? 
                <button 
                  className="inline-block p-4 text-blue-600 bg-gray-100 rounded-t-lg active dark:bg-gray-800 dark:text-blue-500" 
                >
                  Posts
                </button>: 
                <button 
                  className="inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300"
                  onClick={toggleForumSection}
                >
                  Posts
                </button>
              }
            </li>
            <li className="mr-2">
              {PostSelection? 
                <button 
                  className="inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300" 
                  onClick={toggelPostSection} 
                >
                    Forum
                </button>: 
                <button 
                  className="inline-block p-4 text-blue-600 bg-gray-100 rounded-t-lg active dark:bg-gray-800 dark:text-blue-500"
                >
                  Forum
                </button>
              }
            </li>
          </ul>
        </div>

        <div className='bg-orange-100 grid grid-cols-3'>
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