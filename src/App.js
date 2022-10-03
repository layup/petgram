import React, { useState } from 'react'
import { Route, BrowserRouter, Navigate, Routes} from 'react-router-dom';

import Homepage from './posts/pages/Homepage'
import Profile from './user/pages/Profile';
import MainNavBar from './shared/component/navigation/MainNavbar';
import NewPost from './posts/pages/NewPost'
import UpdatePost from './posts/pages/UpdatePost'


/* TODO: 
* 404 not found page 

*/ 

function App() {

  const [logStatus, setLogStatus] = useState(true); 

  let routes; 

  if(logStatus){
    routes = (
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/:userId' element={<Profile />} /> 
        <Route path='/:userId/new' element={<NewPost />} /> 
        <Route path='/:userId/:postId/update' element={<UpdatePost />} />
        <Route
          path="*"
          element={<Navigate to="/" />}
        />
      </Routes>
    )
  }


  return (
    <BrowserRouter>
      <MainNavBar/>
        <div >
          {routes}
        </div>
    </BrowserRouter>
  );
}

export default App;
