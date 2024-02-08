import React from 'react';
import { useContext } from 'react';
import UserContext from '../UseContext/UserContext';

function Profile() {
  const {user} = useContext(UserContext)
if(!user) return  <div>Please Login</div>
return <div>Wellcome{user.username}</div>
}

export default Profile;
