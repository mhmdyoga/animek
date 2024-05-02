'use client'

import React from 'react'
import YouTube from 'react-youtube'
const TrailerPlayer = ({YoutubeId}: any) => {
    const option = {
        width: "300",
        height: "250"
    }

  return (
    <div className="bottom-0 right-0 fixed">
    <div>
        <button className='text-white font-semibold'>
            X
        </button>
    </div>
        <YouTube videoId={YoutubeId} opts={option} onReady={(event) => event.target.pauseVideo()}/>
    </div>
  )
}

export default TrailerPlayer