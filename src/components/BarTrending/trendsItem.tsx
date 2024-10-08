import React from 'react';

interface TrendsItem {
  firstParagraph: string,
  secondParagraph: string,
  thirdParagraph: string,
}

function TrendsItem({ firstParagraph, secondParagraph, thirdParagraph }: TrendsItem) {
return (
  <div className="flex justify-between pt-8">
      <div className="flex flex-col gap-1">
          <p className="text-graycolor2 text-[15px]">{firstParagraph}</p> 
          <p className="text-[15px]">{secondParagraph}</p>
          <p className="text-graycolor2 text-[15px]">{thirdParagraph}</p>
      </div>
      <div>
          <p className="text-graycolor2">...</p>
      </div>
  </div>
)
}

export default TrendsItem


