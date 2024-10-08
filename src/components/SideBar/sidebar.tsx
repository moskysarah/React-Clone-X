import { Link, useNavigate } from "react-router-dom";
import Button from "../Button/button";
import SidebarItem from "./sidebarItem";
import Icon from "../icon/icons";
import { DB } from "../../database";
import React from 'react';


function Sidebar({}) {
  const loggedUserId = 1;
  const navigate = useNavigate();
  const user = DB.find((user) => user.userId === loggedUserId)

  const handleProfileClick = () => {
    navigate(`/${user?.username}`);
  };

    return (

    <>
      <div className="flex flex-col-reverse sm:hidden fixed bottom-0 w-full gap-4 items-end">
        <div className="flex justify-between bg-black w-full py-6">
          <SidebarItem href="/home" children={<Icon name='home'/>} />
          <SidebarItem href="/search" children={<Icon name='search'  />} />
          <SidebarItem href="/notification" children={<Icon name='notification' />} />
          <SidebarItem href="/message" children={<Icon name='message' />} />
          <Link to='/:username'>
            <SidebarItem href="/list" children={<Icon name='profil' />} heading="Lists" />
          </Link>
          <SidebarItem href="/bookmarks" children={<Icon name='bookmarks'/>} heading="Bookmarks" />
        </div>

        <div>
          <Button size="primary" color="blue">
          <Button size="primary" color="blue">
              <Icon name='iconButtonMobile' />
            </Button>
          </Button>
      </div>
    </div>    
        
        <div className="hidden md:flex flex-col justify-between border-r border-grayColor p-4 h-screen sticky top-0">
        <div className="flex flex-col gap-3 md:gap-3 xl:gap-5 md:items-center lg:items-start">
          <Link to="/">
            <Icon name='logo' />
          </Link>
          <Link to="/">
            <SidebarItem href="/home" children={<Icon name='home'/>} heading="Home" />
          </Link>
          <SidebarItem href="/search" children={<Icon name='search' />} heading="Explore" />
          <SidebarItem href="/notification" children={<Icon name='notification' />} heading="Notifications" />
          <SidebarItem href="/message" children={<Icon name='message' />} heading="Messages" />
          <SidebarItem href="/list" children={<Icon name='lists' />} heading="Lists" />
          <SidebarItem href="/bookmarks" children={<Icon name='bookmarks' />} heading="Bookmarks" />
          <SidebarItem 
            href={`/${user?.username}`} 
            children={<Icon name='profil' />} 
            heading="Profile" 
            onClick={handleProfileClick} 
          />
          <SidebarItem href="/more" children={<Icon name='more' />} heading="More" />
          <div className="hidden lg:block">
            <Button color="blue" size="primary">Post</Button>
          </div>
          <div className="block lg:hidden">
            <Button size="primary" color="blue">
              <Icon name='iconButtonMobile' />
            </Button>
          </div>
        </div>

        <div className="flex gap-2 items-center">
          {user ? (
            <>
              <img src={user.profilePicture} alt="photo de profil" className="w-12 h-12 rounded-full object-cover"/>
              <div>
                <div className="flex gap-3 items-center">
                  <p className="hidden lg:block text-white">{user.name}</p> 
                  <img src="/image_twitter/Vector.png" alt="" className="hidden lg:block w-5 h-4" />
                </div>
                <p className="hidden lg:block text-graycolor2">@{user.username}</p> 
              </div>
              <p className="hidden lg:block text-white">...</p>
            </>
          ) : (
            <p>Utilisateur non disponible</p>
          )}
        </div>
      </div>
    </>
  );
}

export default Sidebar;