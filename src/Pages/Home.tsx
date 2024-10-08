import React from "react";


import Sidebar from "../components/sidebar/sidebar"
import BarTrending from "../components/BarTrending/barTrending";
import Main from "../components/Tweet/mainPage";

function Home() {
  return (
        <div className='flex sm:justify-center'>
        <Sidebar />
        <Main />
        <BarTrending />
      </div>
  )
}

export default Home