"use client"
// components/VideoInput.tsx
import { useState } from "react"

export default function VideoInput() {
  const [selectedVideo, setSelectedVideo] = useState<File | null>(null)

  const handleVideoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    setSelectedVideo(file || null)
  }

  const handleRemoveVideo = () => {
    setSelectedVideo(null)
  }

  const handleConvertVideo = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation()
    if (selectedVideo) {
      console.log("Selected video:", selectedVideo)
    }
  }

  return (
    <div className="relative">
      <div className="flex items-center justify-center w-full h-96 border-2 border-dashed border-gray-300 rounded-md cursor-pointer hover:bg-gray-100">
        <input
          type="file"
          accept="video/*"
          id="video-input"
          className="absolute inset-0 opacity-0 cursor-pointer"
          onChange={handleVideoChange}
        />
        {selectedVideo ? (
          <div className="relative w-full h-full">
            <video
              src={URL.createObjectURL(selectedVideo)}
              className="w-full h-full rounded-md"
              controls
            />
            <button
              className="absolute top-2 right-2 bg-red-500 text-white px-4 py-2 rounded-md"
              onClick={handleRemoveVideo}
            >
              Remove
            </button>
          </div>
        ) : (
          <div className="flex flex-col items-center text-center">
            <svg
              className="w-16 h-16 mb-4 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
              />
            </svg>
            <span className="text-lg text-gray-600">
              Drag and drop or
              <br />
              click to select a video
            </span>
          </div>
        )}
      </div>
      {selectedVideo && (
        <div className="mt-4 flex justify-center">
          <button
            className="bg-blue-500 text-white px-6 py-3 rounded-md mt-10"
            onClick={(event) => handleConvertVideo(event)} // Pass the event to the handler
          >
            Convert
          </button>
        </div>
      )}
    </div>
  )
}
