import { DB } from "../../database"
import TrendingItem from "./trendsItem"
import WhoToFlowItem from "./whoToFollowText"
import React from 'react';



function BarTrending() {
  const whoToFollowUsers = DB.slice(1, 4)
  const trend = [
    {
      firstParagraph: "Trending in Turkey",
      secondParagraph: "#SQUID",
      thirdParagraph: "2,066 Tweets"
    },
    {
      firstParagraph: "Trending in Turkey",
      secondParagraph: "#AnotherTrend",
      thirdParagraph: "1,500 Tweets"
    },
    {
      firstParagraph: "Trending in the World",
      secondParagraph: "#GlobalTopic",
      thirdParagraph: "10,000 Tweets"
    },
    {
      firstParagraph: "Trending in Sports",
      secondParagraph: "#Football",
      thirdParagraph: "5,000 Tweets"
    },
  ]

  return (
    <div className="hidden lg:block border-l border-grayColor p-4 w-[28rem]">
      <div className="sticky top-0 backdrop-blur-xl bg-black p-0">
        <div className="flex items-center h-10 rounded-full bg-grayColor p-4 gap-2 placeholder-graycolor2">
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" className="text-graycolor2"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m21 21l-4.343-4.343m0 0A8 8 0 1 0 5.343 5.343a8 8 0 0 0 11.314 11.314"/></svg>
          <input type="search" name="" id="" placeholder="Search Twitter" className="h-10 rounded-full bg-grayColor p-4 outline-none placeholder-graycolor2"/>
        </div>
      </div>

      <div className="bg-grayColor mt-3 rounded-xl p-4">
        <div className="flex justify-between">
          <h3 className="font-bold text-[20px]">Trends for you</h3>
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M12.563 3.2h-1.126l-.645 2.578l-.647.2a6.3 6.3 0 0 0-1.091.452l-.599.317l-2.28-1.368l-.796.797l1.368 2.28l-.317.598a6.3 6.3 0 0 0-.453 1.091l-.199.647l-2.578.645v1.126l2.578.645l.2.647q.173.568.452 1.091l.317.599l-1.368 2.28l.797.796l2.28-1.368l.598.317q.523.278 1.091.453l.647.199l.645 2.578h1.126l.645-2.578l.647-.2a6.3 6.3 0 0 0 1.091-.452l.599-.317l2.28 1.368l.796-.797l-1.368-2.28l.317-.598q.278-.523.453-1.091l.199-.647l2.578-.645v-1.126l-2.578-.645l-.2-.647a6.3 6.3 0 0 0-.452-1.091l-.317-.599l1.368-2.28l-.797-.796l-2.28 1.368l-.598-.317a6.3 6.3 0 0 0-1.091-.453l-.647-.199zm2.945 2.17l1.833-1.1a1 1 0 0 1 1.221.15l1.018 1.018a1 1 0 0 1 .15 1.221l-1.1 1.833q.33.62.54 1.3l2.073.519a1 1 0 0 1 .757.97v1.438a1 1 0 0 1-.757.97l-2.073.519q-.21.68-.54 1.3l1.1 1.833a1 1 0 0 1-.15 1.221l-1.018 1.018a1 1 0 0 1-1.221.15l-1.833-1.1q-.62.33-1.3.54l-.519 2.073a1 1 0 0 1-.97.757h-1.438a1 1 0 0 1-.97-.757l-.519-2.073a7.5 7.5 0 0 1-1.3-.54l-1.833 1.1a1 1 0 0 1-1.221-.15L4.42 18.562a1 1 0 0 1-.15-1.221l1.1-1.833a7.5 7.5 0 0 1-.54-1.3l-2.073-.519A1 1 0 0 1 2 12.72v-1.438a1 1 0 0 1 .757-.97l2.073-.519q.21-.68.54-1.3L4.27 6.66a1 1 0 0 1 .15-1.221L5.438 4.42a1 1 0 0 1 1.221-.15l1.833 1.1q.62-.33 1.3-.54l.519-2.073A1 1 0 0 1 11.28 2h1.438a1 1 0 0 1 .97.757l.519 2.073q.68.21 1.3.54zM12 14.8a2.8 2.8 0 1 0 0-5.6a2.8 2.8 0 0 0 0 5.6m0 1.2a4 4 0 1 1 0-8a4 4 0 0 1 0 8"/></svg>
          </div>
        </div>

        {trend.map((trendItem, index) => (
          <TrendingItem
            key={index}
            firstParagraph={trendItem.firstParagraph}
            secondParagraph={trendItem.secondParagraph}
            thirdParagraph={trendItem.thirdParagraph}
          />
        ))}

          <div className="pt-8">
            <a href="#" className="text-blue text-[15px]">Show more</a>
          </div>
      </div>

      <div className="bg-grayColor mt-3 rounded-xl p-4">
        <h3 className="font-bold text-[20px]">Who to follow</h3>

        {whoToFollowUsers.map(user => (
          <WhoToFlowItem
            key={user.userId}
            image={user.profilePicture}
            username={user.name}
            handle={user.username}
          />
        ))}

      <div className="pt-8">
        <a href="#" className="text-blue">Show more</a>
      </div>
      </div>
      
    </div>
  )
}

export default BarTrending