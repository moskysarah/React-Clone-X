import { useState } from "react"
import Button from "../Button/button"
import Tweet from "./tweet"

import Icon from "../icon/icons";

import React from "react";
import { DB } from "../../database";

function Main() {
  const [tweets] = useState(DB.flatMap(user =>
    user.tweets.map(tweet => ({
      avatar: user.profilePicture,
      username: user.username,
      name: user.name,
      content: tweet.content,
      time: tweet.createdAt,
      numberLike: tweet.likes,
      numberComment: tweet.comments,
      numberRetweet: tweet.retweets,
      numberShare: tweet.numberShare,
      image: tweet.image 
    }))
  )
);
const loggedUser = DB.slice(0, 1)

  return (
    <div className="w-full sm:w-[40rem] border-x border-grayColor">
        <div className="flex sm:justify-between sm:p-4 border-b border-grayColor">
            <p className="hidden md:block text-white">Home</p>

            <div className="flex md:hidden gap-32 items-center bg-black w-full p-4">
              <img src="/image_twitter/Profile-Photo.png" alt="photo de profil" />
              <Icon name='logo' />
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M12.563 3.2h-1.126l-.645 2.578l-.647.2a6.3 6.3 0 0 0-1.091.452l-.599.317l-2.28-1.368l-.796.797l1.368 2.28l-.317.598a6.3 6.3 0 0 0-.453 1.091l-.199.647l-2.578.645v1.126l2.578.645l.2.647q.173.568.452 1.091l.317.599l-1.368 2.28l.797.796l2.28-1.368l.598.317q.523.278 1.091.453l.647.199l.645 2.578h1.126l.645-2.578l.647-.2a6.3 6.3 0 0 0 1.091-.452l.599-.317l2.28 1.368l.796-.797l-1.368-2.28l.317-.598q.278-.523.453-1.091l.199-.647l2.578-.645v-1.126l-2.578-.645l-.2-.647a6.3 6.3 0 0 0-.452-1.091l-.317-.599l1.368-2.28l-.797-.796l-2.28 1.368l-.598-.317a6.3 6.3 0 0 0-1.091-.453l-.647-.199zm2.945 2.17l1.833-1.1a1 1 0 0 1 1.221.15l1.018 1.018a1 1 0 0 1 .15 1.221l-1.1 1.833q.33.62.54 1.3l2.073.519a1 1 0 0 1 .757.97v1.438a1 1 0 0 1-.757.97l-2.073.519q-.21.68-.54 1.3l1.1 1.833a1 1 0 0 1-.15 1.221l-1.018 1.018a1 1 0 0 1-1.221.15l-1.833-1.1q-.62.33-1.3.54l-.519 2.073a1 1 0 0 1-.97.757h-1.438a1 1 0 0 1-.97-.757l-.519-2.073a7.5 7.5 0 0 1-1.3-.54l-1.833 1.1a1 1 0 0 1-1.221-.15L4.42 18.562a1 1 0 0 1-.15-1.221l1.1-1.833a7.5 7.5 0 0 1-.54-1.3l-2.073-.519A1 1 0 0 1 2 12.72v-1.438a1 1 0 0 1 .757-.97l2.073-.519q.21-.68.54-1.3L4.27 6.66a1 1 0 0 1 .15-1.221L5.438 4.42a1 1 0 0 1 1.221-.15l1.833 1.1q.62-.33 1.3-.54l.519-2.073A1 1 0 0 1 11.28 2h1.438a1 1 0 0 1 .97.757l.519 2.073q.68.21 1.3.54zM12 14.8a2.8 2.8 0 1 0 0-5.6a2.8 2.8 0 0 0 0 5.6m0 1.2a4 4 0 1 1 0-8a4 4 0 0 1 0 8"/></svg>
              </div>
            </div> 

            <img className="hidden sm:block" src="/image_twitter/Vector.svg" alt="" />
        </div>

        <div className="hidden md:block">
          <div className="flex gap-5 p-4 ">
          {loggedUser.map(user => (
            <img src={user.profilePicture} alt="" className="w-12 h-12 rounded-full object-cover"/>
          ))}
            <input type="text" placeholder="What's happening?" className="outline-none placeholder-graycolor2 w-full border-none bg-black text-white" />
          </div>

          <div className="flex gap-20 sm:justify-between border-b border-grayColor p-4">
            <div className="h-10 flex justify-center items-center">
              <div className="flex gap-5 pl-16">
                <img src="/image_twitter/imageIcon.png" alt="" />
                <img src="/image_twitter/Group.png" alt="" />
                <img src="/image_twitter/Group.svg" alt="" />
                <img src="/image_twitter/vectorList.svg" alt="" />
                <img src="/image_twitter/groupSec.svg" alt="" />
              </div>
            </div>
            <div>
            <Button color="blue" size="secondary">Post</Button>
            </div>
          </div> 
        </div>
        
        <div>
           {tweets.map((tweet, index) => (
          <Tweet
            key={index}
            avatar={tweet.avatar}
            username={tweet.username}
            handle={tweet.name}
            time={tweet.time}
            content={tweet.content}
            image={tweet.image}
            numberLike={tweet.numberLike}
            numberComment={tweet.numberComment}
            numberRetweet={tweet.numberRetweet}
            numberShare={tweet.numberShare}
          />
        ))}
        </div>
    </div>
  )
}

export default Main