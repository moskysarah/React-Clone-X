import React from 'react';

function Likes() {
  return (
    <div className="flex flex-col gap-2 items-center p-4">
        <h1 className="text-3xl font-bold">You don't have any likes yet</h1>
        <p className="text-graycolor2 w-96">Tap the heart on any post to show it some love. When you do, it’ll show up here.</p>
    </div>
  )
}

export default Likes