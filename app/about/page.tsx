import { Alata } from 'next/font/google'

const fontT = Alata({
  weight: '400', subsets: ['latin-ext']
})
const About = () => {
  return (
    <div className={`${fontT.className}`}>
      <p className="text-5xl border-b-4 border-sky-100 py-3 p-2 mx-2 tracking-widest">About Us </p>

      <div className="mt-4 leading-7 tracking-wider p-3">
        humbnailGrabber.net is a user-friendly, web-based tool that allows you to effortlessly view and download YouTube video thumbnails in various sizes and qualities. Simply paste your YouTube video link into the provided input box and click the "Download YouTube Thumbnail" button. Your thumbnail will be instantly downloaded in high-definition (HD) quality. For step-by-step instructions on how to download YouTube thumbnail images, visit our YouTube Thumbnail Downloader Homepage in the section below
      </div>
    </div>
  )
}
export default About
