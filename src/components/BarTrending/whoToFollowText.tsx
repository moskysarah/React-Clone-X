
import React from 'react';
import Button from "../Button/button"


interface WhoToFlowText{
    image:string,
    username:string,
    handle:string,
}
function WhoToFlowText({ image, username, handle }: WhoToFlowText) {
  return (
    <div className="flex justify-between pt-8">
        <div className="flex gap-2">
            <img src={image} alt={`${username}'s image`} className="w-10 h-10 rounded-full"/>
            <div>
                <div className="flex gap-2 items-center">
                    <span className="text-white text-[15px]">{username}</span>
                    <img src="/image_twitter/badge.png" alt="" />
                </div>
                <span className="text-graycolor2 text-[15px]">@{handle}</span>
            </div>
        </div>
        <Button color="white" size="secondary">Follow</Button>
        </div>
  )
}

export default WhoToFlowText