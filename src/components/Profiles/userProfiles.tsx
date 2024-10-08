import { useState, useEffect } from "react";
import { Link, useParams, Outlet, useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import Button from "../Button/button";
import { User } from "./type";
import React from 'react';

import Icon from "../icon/icons";
import Tweets from "../Tweet/tweet";
import { TweetType } from "../tweet/type";
import TableItem from "../tweet/tableTweets";
import { DB } from "../../database";

const PageUsers = () => {
  const { username } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState<User | null>(null);
  const [userTweets, setUserTweets] = useState<TweetType[]>([]);
  const [activeTab, setActiveTab] = useState<string>("posts");

  useEffect(() => {
    const fetchUserData = () => {
      const foundUser = DB.find((user) => user.username === username);
      if (foundUser) {
        setUser(foundUser);
        setUserTweets(foundUser.tweets);
      }
    };

    fetchUserData();
  }, [username]);

  if (!user) {
    return <p className="text-gray-500">User not found.</p>;
  }

  const isCurrentUserProfile = user.userId === 1;

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
    if (tab === "replies") {
      navigate("replie");
    } else if (tab === "media") {
      navigate("media");
    }else if (tab === "highlights") {
      navigate("highlights")
    }else if (tab === "likes"){
      navigate("likes")
    }else{
      navigate(`/${username}`)
    }
}

  return (
    <div className="w-full sm:w-[40rem] min-h-screen">
      <div className="sticky top-0 border-b border-grayColor px-4 py-2 flex justify-between items-center backdrop-blur-xl bg-black/30 ">
        <div className="flex gap-3 items-center">
          <Link to="/">
            <FaArrowLeft />
          </Link>
          <h1 className="text-xl font-bold">{user.name}</h1>
        </div>
        <span className="text-gray-500">{userTweets.length} posts</span>
      </div>

      <div className="relative">
        <img
          className="w-full h-48 object-cover"
          src={user.coverImage || "/image_twitter/backgroundImg.png"}
          alt="Cover"
        />
        <img
          className="absolute bottom-[-3rem] left-4 w-24 h-24 rounded-full border-3 border-black"
          src={user.profilePicture}
          alt="Avatar"
        />
      </div>

      <div className="flex gap-2 justify-end pt-4 pr-4">
        {isCurrentUserProfile ? (
          <Button color="black" size="secondary">
            Edit Profile
          </Button>
        ) : (
          <>
            <div className="w-8 h-8 rounded-full flex justify-center items-center border border-gray-500">
              <Icon name="message" />
            </div>
            <Button color="white" size="secondary">
              Follow
            </Button>
          </>
        )}
      </div>

      <div className="p-4 border-b border-grayColor">
        <h2 className="text-2xl font-bold">{user.name}</h2>
        <span className="text-sm text-gray-500">@{user.username}</span>
        <p className="mt-2 text-sm">{user.bio}</p>
        {user.website && (
          <a href={user.website} className="text-blue-500 text-sm">
            {user.website}
          </a>
        )}
        <p className="text-sm text-gray-500">Joined February 2023</p>
        <div className="flex gap-4">
          <div className="flex gap-1">
            <p className="text-sm font-bold">{user.followersCount}</p>
            <span className="text-sm text-gray-500">Following</span>
          </div>
          <div className="flex gap-1">
            <p className="text-sm font-bold">{user.followingCount}</p>
            <span className="text-sm text-gray-500">Followers</span>
          </div>
        </div>
      </div>

      <div className="border-b border-grayColor flex justify-around">
        {isCurrentUserProfile ? (
          <>
            <TableItem
              label="Posts"
              active={activeTab === "posts"}
              onClick={() => handleTabClick("posts")}
            />
            <TableItem
              label="Replies"
              active={activeTab === "replies"}
              onClick={() => handleTabClick("replies")}
            />
            <TableItem
              label="HighLights"
              active={activeTab === "highlights"}
              onClick={() => handleTabClick("highlights")}
            />
            <TableItem
              label="Media"
              active={activeTab === "media"}
              onClick={() => handleTabClick("media")}
            />
            <TableItem
              label="Likes"
              active={activeTab === "likes"}
              onClick={() => handleTabClick("likes")}
            />
          </>
        ) : (
          <>
            <TableItem
              label="Posts"
              active={activeTab === "posts"}
              onClick={() => handleTabClick("posts")}
            />
            <TableItem
              label="Replies"
              active={activeTab === "replies"}
              onClick={() => handleTabClick("replies")}
            />
            <TableItem
              label="Media"
              active={activeTab === "media"}
              onClick={() => handleTabClick("media")}
            />
          </>
        )}
      </div>

      {activeTab === "posts" ? (
        userTweets.length > 0 ? (
          userTweets.map((Tweet) => (
            <div key={Tweet.tweetId} className="mb-4">
              <Tweets
                avatar={user.profilePicture}
                username={user.username}
                handle={user.name}
                time={Tweet.createdAt}
                content={Tweet.content}
                image={Tweet.image}
                numberLike={Tweet.likes}
                numberComment={Tweet.comments}
                numberRetweet={Tweet.retweets}
                numberShare={Tweet.numberShare}
              />
            </div>
          ))
        ) : (
          <p className="text-gray-500">No tweets found for {user.username}.</p>
        )
      ) : (
        <Outlet />
      )}
    </div>
  );
};

export default PageUsers;
