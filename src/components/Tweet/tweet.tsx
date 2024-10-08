import { useState } from "react";
import { Link } from "react-router-dom";
import React from 'react';

export interface TweetProps {
  avatar: string,
  username: string,
  handle: string,
  time: string,
  content: string,
  image?: string,
  numberLike: number,
  numberComment: number,
  numberRetweet: number,
  numberShare?: number
}

const Tweet = ({ avatar, username, handle, time, content, image, numberLike, numberComment, numberRetweet, numberShare }: TweetProps) => {
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(numberLike);

  const handleLikeClick = () => {
    if (liked) {
      setLikeCount(likeCount - 1); 
    } else {
      setLikeCount(likeCount + 1);
    }
    setLiked(!liked);
  };
  return (
    <div className="sm:w-full border-b border-grayColor p-4 flex">
      <div className="mr-4">
      <Link to={`/${username}`}>  
        <img
          src={avatar}
          alt={`${username}'s avatar`}
          className="w-12 h-12 rounded-full object-cover"
        />
        </Link>
      </div>

      <div className="flex flex-col w-5/6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Link to={`/${username}`}>  
              <span className="font-bold text-white text-[15px]">{handle}</span>
            </Link>
            <img src="/image_twitter/badge.png" alt="" />
            <Link to={`/${username}`}>  
              <span className="text-graycolor2 text-[15px]">@{username}</span>
            </Link>
            <span className="text-graycolor2 text-[15px]">·</span>
            <span className="text-graycolor2 text-[15px]">{time}</span>
          </div>
        </div>

        <p className="mt-2 text-white font-light text-[15px]">{content}</p>

        {image && (
          <div className="mt-2">
            <img src={image} alt="Tweet" className="rounded-3xl w-full object-cover" />
          </div>
        )}

        <div className="flex gap-10 md:gap-12 mt-4 text-graycolor2">
          <div className="group flex gap-1 md:gap-3 w-28">
            <button>
            <svg className="group-hover:stroke-blue" width="14" height="14" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10.705 0.868349L7.24834 0.860016H7.24667C3.60167 0.860016 0.746674 3.71585 0.746674 7.36168C0.746674 10.7767 3.40167 13.3667 6.96751 13.5033V16.6933C6.96751 16.7833 7.00417 16.9317 7.06751 17.0292C7.18584 17.2167 7.38751 17.3183 7.59417 17.3183C7.70917 17.3183 7.82501 17.2867 7.92917 17.22C8.14917 17.08 13.3233 13.77 14.6692 12.6317C16.2542 11.29 17.2025 9.32335 17.205 7.37168V7.35752C17.2 3.71835 14.3467 0.868349 10.705 0.867516V0.868349ZM13.8608 11.6783C12.9158 12.4783 9.80917 14.5159 8.21751 15.5475V12.8917C8.21751 12.5467 7.93834 12.2667 7.59251 12.2667H7.26251C4.21251 12.2667 1.99751 10.2034 1.99751 7.36168C1.99751 4.41668 4.30417 2.11002 7.24751 2.11002L10.7033 2.11835H10.705C13.6483 2.11835 15.955 4.42335 15.9567 7.36502C15.9542 8.95668 15.1717 10.5683 13.8617 11.6783H13.8608Z" fill="#6E767D"/>
              </svg></button>
            <p className="text-graycolor2 group-hover:text-blue text-[12px] md:text-[15px]">{numberComment}</p>
          </div>

          <div className="group flex gap-1 md:gap-3 w-28">
            <button>
              <svg className="group-hover:stroke-green-500" width="14" height="14" viewBox="0 0 20 15" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M19.8083 10.0583C19.565 9.81416 19.1692 9.81416 18.925 10.0583L17.075 11.9083V3.37499C17.075 1.65166 15.6725 0.24999 13.95 0.24999H9.07501C8.73001 0.24999 8.45001 0.52999 8.45001 0.87499C8.45001 1.21999 8.73001 1.49999 9.07501 1.49999H13.95C14.9833 1.49999 15.825 2.34166 15.825 3.37499V11.9083L13.975 10.0583C13.7308 9.81416 13.335 9.81416 13.0917 10.0583C12.8483 10.3025 12.8467 10.6983 13.0917 10.9417L16.0083 13.8583C16.1292 13.9808 16.2892 14.0417 16.45 14.0417C16.6108 14.0417 16.7692 13.9817 16.8917 13.8583L19.8083 10.9417C20.0533 10.6983 20.0533 10.3025 19.8083 10.0583ZM10.925 12.7917H6.05001C5.01667 12.7917 4.17501 11.95 4.17501 10.9167V2.38332L6.02501 4.23332C6.14834 4.35582 6.30834 4.41666 6.46834 4.41666C6.62834 4.41666 6.78834 4.35582 6.91001 4.23332C7.15417 3.98916 7.15417 3.59332 6.91001 3.34999L3.99334 0.433323C3.74917 0.188323 3.35334 0.188323 3.11001 0.433323L0.19334 3.34999C-0.0516599 3.59332 -0.0516599 3.98916 0.19334 4.23332C0.43834 4.47749 0.832507 4.47749 1.07667 4.23332L2.92667 2.38332V10.9167C2.92667 12.64 4.32917 14.0417 6.05167 14.0417H10.9267C11.2717 14.0417 11.5517 13.7617 11.5517 13.4167C11.5517 13.0717 11.2708 12.7917 10.9267 12.7917H10.925Z" fill="#6E767D"/>
              </svg>
            </button>
            <p className="text-graycolor2 group-hover:text-green-500 text-[12px] md:text-[15px]">{numberRetweet}</p>
          </div>

          <div className="group flex gap-1 md:gap-3 w-28">
            <button onClick={handleLikeClick}>
            <svg  className={`group-hover:stroke-red-500 ${
                  liked ? "stroke-red-500" : "stroke-graycolor2"
                }`}  width="14" height="14" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.00001 16.0317H8.98834C6.83584 15.9917 0.625008 10.38 0.625008 5.06499C0.625008 2.51166 2.72917 0.269989 5.12751 0.269989C7.03584 0.269989 8.31918 1.58666 8.99918 2.54499C9.67751 1.58832 10.9608 0.269989 12.87 0.269989C15.27 0.269989 17.3733 2.51166 17.3733 5.06582C17.3733 10.3792 11.1617 15.9908 9.00918 16.03H9.00001V16.0317ZM5.12834 1.52082C3.39501 1.52082 1.87584 3.17749 1.87584 5.06666C1.87584 9.84999 7.73751 14.73 9.00084 14.7817C10.2658 14.73 16.1258 9.85082 16.1258 5.06666C16.1258 3.17749 14.6067 1.52082 12.8733 1.52082C10.7667 1.52082 9.59001 3.96749 9.58001 3.99166C9.38834 4.45999 8.61668 4.45999 8.42418 3.99166C8.41251 3.96666 7.23667 1.52082 5.12917 1.52082H5.12834Z" fill="#6E767D"/>
              </svg>
            </button>
            <p className={`group-hover:text-red-500 text-[10px] md:text-[15px] ${liked ? 'text-red-500' : 'text-graycolor2'}`}>{likeCount}</p>
          </div>

          <div className="group flex gap-3 md:gap-3 w-24">
            <button>
            <svg className="group-hover:stroke-blue" width="14" height="14" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14.6083 6.22501L10.4417 2.05834C10.1975 1.81417 9.80167 1.81417 9.55833 2.05834L5.39167 6.22501C5.14667 6.46917 5.14667 6.86501 5.39167 7.10834C5.63667 7.35167 6.03083 7.35334 6.275 7.10834L9.375 4.00834V12.5C9.375 12.845 9.655 13.125 10 13.125C10.345 13.125 10.625 12.845 10.625 12.5V4.00834L13.725 7.10834C13.8467 7.23084 14.0067 7.29167 14.1667 7.29167C14.3267 7.29167 14.4867 7.23167 14.6083 7.10834C14.8525 6.86417 14.8525 6.46917 14.6083 6.22501Z" fill="#6E767D"/>
              <path d="M16.4233 18.2867H3.57667C2.52334 18.2867 1.66667 17.43 1.66667 16.3767V11.6667C1.66667 11.3217 1.94667 11.0417 2.29167 11.0417C2.63667 11.0417 2.91667 11.3217 2.91667 11.6667V16.3767C2.91667 16.7408 3.2125 17.0367 3.57667 17.0367H16.4233C16.7875 17.0367 17.0833 16.7408 17.0833 16.3767V11.6667C17.0833 11.3217 17.3633 11.0417 17.7083 11.0417C18.0533 11.0417 18.3333 11.3217 18.3333 11.6667V16.3767C18.3333 17.43 17.4767 18.2867 16.4233 18.2867Z" fill="#6E767D"/>
              </svg></button>
            <p className="text-graycolor2 text-[12px] group-hover:text-blue md:text-[15px]">{numberShare}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tweet;