'use client'

import React from "react"
import copy from 'copy-to-clipboard'
const Thumb = () => {
  const [name, setName] = React.useState(':')
  const [videoURL, setVideoURL] = React.useState("");
  const [idV, setIdVideo] = React.useState('')
  const [thumbnailOptions, setThumbnailOptions] = React.useState<any[]>([]);

  const getYouTubeThumbnail = (url: string) => {
    let regExp = /.*(?:youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=)([^#\&\?]*).*/;
    let match = url.match(regExp);

    if (match && match[1].length === 11) {
      const videoURL = match[1];
      console.log(videoURL);
      setIdVideo(videoURL)
      const thumbnailBaseUrl = "http://img.youtube.com/vi/";

      const options = [
        { resolution: "HD (1280x720)", code: "maxresdefault" },
        { resolution: "SD (640x480)", code: "sddefault" },
        { resolution: "Normal (480x360)", code: "hqdefault" },
        { resolution: "Medium (320x180)", code: "mqdefault" },
        { resolution: "Low (120x90)", code: "default" },
      ];

      const thumbnailOptions = options.map((option) => ({
        resolution: option.resolution,
        url: `${thumbnailBaseUrl}${videoURL}/${option.code}.jpg`,
      }));
      alert(JSON.stringify(thumbnailOptions))

      setThumbnailOptions(thumbnailOptions);
      setVideoURL("");
    } else {
      setThumbnailOptions([]);
    }
  }
  const sayHello = () => {
    console.log('hello from esmail ahbal')
  }
  return (
    <div className="container mx-auto px-4 py-8">
      <header className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2">
          Youtube Thumbnail Downloader
        </h1>
        <p className="text-gray-600">
          Download high-quality thumbnails from YouTube videos.
        </p>
      </header>
      <div className="text-center">
        <input
          type="text"
          className="w-full md:w-1/2 px-4 py-2 border rounded outline-sky-500 border-sky-100"
          placeholder="Enter YouTube URL"
          value={videoURL}
          onChange={(e) => setVideoURL(e.currentTarget.value)}
        />
        <button
          className="btn-blue mt-2 mx-4 bg-sky-200 px-4 py-2"
          onClick={() => getYouTubeThumbnail(videoURL)}
        >
          Download Thumbnails
        </button>
      </div>
      {thumbnailOptions.length > 0 && (
        <div className="mt-8 relative">
          <h2 className="text-xl font-semibold mb-4">Thumbnail Options</h2>
          <div className="grid gap-4 md:grid-cols-1 lg:grid-cols-2">
            {thumbnailOptions.map((option, index) => (
              <div key={index} className=" relative thumbnail-option">
                <img src={option.url} alt={`Thumbnail ${index + 1}`} className="object-cover object-center my-4" />
                <a
                  href={option.url}
                  download={option.url}
                  className="btn-blue mt-7 text-xs px-10 bg-sky-200 rounded-sm py-4 "
                  onClick={() => copy(option.url)}
                >
                  Copy Image URL
                </a>
                <a className="text-sky-700 mx-3 " href={`https://thumbnailphoto.net/download.php?id=${idV}&quality=HD`} target="_blank" download="youtube_thumbnail.jpg"
                >Download</a>
                <div className="absolute left-0 top-5 bg-sky-200 px-4 text-sm rounded-2xl">{option.resolution}</div>
              </div>
            ))}
          </div>
        </div>
      )}
      <div className="mt-10 flex justify-center items-center">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-2xl lg:text-5xl mt-2 font-bold ">YouTube Thumbnail Downloader - Download YT Video Thumbnails</p>
        </div>
      </div>
    </div>
  )
}
export default Thumb
