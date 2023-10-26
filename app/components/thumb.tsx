/* eslint react/no-unescaped-entities */
'use client'
import { Titillium_Web } from 'next/font/google'
import React from "react"
import copy from 'copy-to-clipboard'
const font = Titillium_Web({
  weight: '400', subsets: ['latin']
})
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
        { resolution: "HD (1280x720)", code: "maxresdefault", quality: 'HD' },
        { resolution: "SD (640x480)", code: "sddefault", quality: 'SD' },
        { resolution: "Normal (480x360)", code: "hqdefault", quality: 'HQ' },
        { resolution: "Medium (320x180)", code: "mqdefault", quality: 'MQ' },
        { resolution: "Low (120x90)", code: "default", quality: 'def' },
      ];

      const thumbnailOptions = options.map((option) => ({
        resolution: option.resolution,
        url: `${thumbnailBaseUrl}${videoURL}/${option.code}.jpg`,
        quality: option.quality
      }));

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
    <div className={`container mx-auto px-4 py-8 ${font.className}`}>
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

        <div className="mt-8 relative flex justify-center items-center">
          <div className="grid gap-4 grid-cols-1  w-1/2 ">
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
                <a className="text-sky-700 mx-3 " href={`https://thumbnailphoto.net/download.php?id=${idV}&quality=${option.quality}`} target="_blank" download="youtube_thumbnail.jpg"

                >Download</a>
                <div className="absolute left-0 top-5 bg-sky-200 px-4 text-sm rounded-2xl">{option.resolution}</div>
              </div>
            ))}
          </div>
        </div>
      )}
      <div className="mt-10 flex justify-center items-center">
        <div className="max-w-7xl mx-auto text-center tracking-wide">
          <p className="text-2xl lg:text-4xl mt-2 font-bold border-gray-100 border-b-2 py-9 ">
            Download YouTube video thumbnails in different sizes and qualities with our free YouTube Thumbnail Downloader.
          </p>
          <p className=" my-4 text-xl lg:text-3xl ">            Learn why engaging thumbnails matter and how to download them effortlessly.
          </p>
          <p className="my-4 text-xl">

            Are you searching for a reliable and free YouTube Thumbnail Downloader to enhance your video content or gather inspiration from other creators?
            <br />
            Our online tool simplifies the process of downloading YouTube video thumbnails in various dimensions and quality settings.
          </p>
          <p className="text-sky-700 mt-2 text-4xl lg:text-5xl" >
            What is a YouTube Thumbnail Downloader?

          </p>
          <p className="my-4 text-lg leading-10 tracking-wide">
            Our YouTube Thumbnail Downloader is a handy online tool designed for YouTube content creators and enthusiasts. It allows you to effortlessly obtain and save high-quality YouTube video thumbnails, all at no cost. By simply entering a video link, you can access and download these thumbnails with ease.
          </p>
          <p className="my-5 text-4xl">
            Understanding YouTube Video Thumbnails

          </p>
          <p className="my-4 text-lg">
            A YouTube video thumbnail is a critical visual element that serves as a snapshot of your video's content. It provides viewers with a quick preview of what they can expect from your video.
          </p>
          <p className="my-4 text-4xl">
            The Significance of Compelling Thumbnails

          </p>
          <p className="my-4 text-lg">
            Engaging thumbnails play a pivotal role in attracting viewers to your YouTube videos. They serve as the digital packaging that entices potential viewers. Just like a well-designed product label influences a consumer's choice, a captivating YouTube video thumbnail can significantly impact your video's click-through rate.
          </p>
          <p className="my-4 text-4xl">
            How to Download a YouTube Thumbnail: Step-by-Step

          </p>
          <p className="mt-4 border-gray-200 py-4 border-t-4">
            Copy the URL/link of the YouTube video you wish to download a thumbnail from.
            Paste the video link into the designated input box on our website.
            Click the "Download YouTube Thumbnail" button to initiate the process.
            A list of available thumbnail qualities, including High Quality (HQ), High Definition (HD), 4K, 720p, 1080p, Low Quality, and Medium Quality, will be displayed.
            Choose your preferred thumbnail quality and click the corresponding Download button. Your selected YouTube video thumbnail will be saved to your device's storage.
          </p>
          <p className="mt-4 text-4xl">
            Where Are Downloaded YouTube Thumbnails Stored?

          </p>
          <p className="mt-4 text-lg">
            The location where your downloaded YouTube video thumbnails are stored may vary depending on your web browser and operating system. Typically, they are saved in your system's "Downloads" folder. Alternatively, you can access your download history by pressing CTRL+J in your web browser.
          </p>
          <span className="text-2xl text-gray-900  mt-10">Optimal YouTube Thumbnail Size in 2022</span>
          <p className="my-4 text-lg">
            For the year 2022, the recommended and optimal YouTube thumbnail size is 1280 x 720 pixels. Utilizing this size ensures your thumbnails look their best on YouTube.

          </p>
          <p className="my-4 text-2xl">
            YouTube Thumbnail Downloader App (Coming Soon)

          </p>
          <p className="my-4 text-lg">
            While we currently do not offer a dedicated YouTube Thumbnail Downloader app, we are actively developing applications for both Android and iOS platforms. Soon, we will share links to download our YouTube thumbnail downloader APK directly from our website.

          </p>
          <p className="my-6 text-2xl ">
            Downloading Thumbnails for Public YouTube Videos

          </p>
          <p>
            Our YouTube Thumbnail Downloader tool is specifically designed for public YouTube videos. You can conveniently download thumbnails for any public YouTube video with just a single click.
            <br></br>
            Whether you're a content creator or an avid YouTube viewer, our YouTube Thumbnail Downloader is a valuable resource to enhance your YouTube experience. Download visually compelling thumbnails in the desired quality and captivate your audience effectively.
          </p>
        </div>
      </div>
    </div>
  )
}
export default Thumb
