import React, { Component } from 'react'

import Post from '../post/Post'

const FAKE_POST_DATA = [
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


export class Homepage extends Component {


  render() {
    return (
      <div className='pt-20 flex justify-center h-full bg-orange-100'>
        <div className='flex flex-col  bg-red-100'>
          <Post 
            title={FAKE_POST_DATA[0].title} 
            description={FAKE_POST_DATA[0].description}
            totalLikes={FAKE_POST_DATA[0].totalLikes}
            image={FAKE_POST_DATA[0].image}
            profile={FAKE_POST_DATA[0].profile_pic}
            username={FAKE_POST_DATA[0].username}
            comments={FAKE_POST_DATA[0].comments}
            likes={FAKE_POST_DATA[0].likes}
          />
          <Post 
            title={FAKE_POST_DATA[0].title} 
            description={FAKE_POST_DATA[0].description}
            totalLikes={FAKE_POST_DATA[0].totalLikes}
            image={FAKE_POST_DATA[0].image}
            profile={FAKE_POST_DATA[0].profile_pic}
            username={FAKE_POST_DATA[0].username}
            comments={FAKE_POST_DATA[0].comments}
            likes={FAKE_POST_DATA[0].likes}
          />
          <Post 
            title={FAKE_POST_DATA[0].title} 
            description={FAKE_POST_DATA[0].description}
            totalLikes={FAKE_POST_DATA[0].totalLikes}
            image={FAKE_POST_DATA[0].image}
            profile={FAKE_POST_DATA[0].profile_pic}
            username={FAKE_POST_DATA[0].username}
            comments={FAKE_POST_DATA[0].comments}
            likes={FAKE_POST_DATA[0].likes}
          />
        </div>
      </div>
    )
  }
}

export default Homepage