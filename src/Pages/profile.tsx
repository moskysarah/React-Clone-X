import UserProfiles from "../components/profiles/userProfiles"
import BarTrending from "../components/BarTrending/barTrending"
import Sidebar from "../components/sidebar/sidebar"
import React from 'react';

function Profile() {
  return (
    <div className='flex sm:justify-center'>
    <Sidebar />
    <UserProfiles />
    <BarTrending />
  </div>
  )
}

export default Profile