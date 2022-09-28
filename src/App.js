import React, { useState } from 'react'
import { Route, BrowserRouter, Navigate, Routes} from 'react-router-dom';

import Homepage from './feed/Homepage'
import Profile from './profile/Profile';
import MainNavBar from './shared/component/navigation/MainNavbar';
import NewPost from './feed/pages/NewPost'
import UpdatePost from './feed/pages/UpdatePost'
import Settings from './profile/Settings';


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
          <Route path='/new' element={<NewPost />} /> 
          <Route path='/:postId/update' element={<UpdatePost />} />
        <Route path='/settings' element={<Settings />} /> 
        <Route
          path="*"
          element={<Navigate to="/" />}
        />
      </Routes>
    )
  }


  return (
    <BrowserRouter>
      <MainNavBar />
        <div>
          {routes}
        </div>
    </BrowserRouter>
  );
}

export default App;
