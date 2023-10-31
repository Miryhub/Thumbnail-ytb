import { Alata } from "next/font/google"

const terms: { term: string, des: string }[] = [
  {
    term: ' Usage Restrictions', des: 'You may use the Service for lawful and ethical purposes. You must not use the Service for any illegal activities, including copyright infringement or unauthorized downloading of YouTube video thumbnails.'
  },
  {
    term: 'Copyright and Intellectual Property', des: 'You must respect the copyright and intellectual property rights of content creators and YouTube. The thumbnails you download are for personal use only unless you have obtained necessary permissions.'
  },
  {
    term: 'Privacy and Data Collection', des: "We collect user data to improve the Service's functionality. Your data will be handled in accordance with our Privacy Policy. We do not share user data with third parties"
  },
  {
    term: 'User Responsibility', des: 'You are responsible for maintaining the security of your account and login credentials. Do not share your account information.',
  },
  {
    term: "Termination", des: "ThumbnailGrabber.net reserves the right to terminate access to the Service at our discretion."
  }, {
    term: "Governing Law", des: `These Terms are governed by the laws of [Jurisdiction], and any disputes shall be resolved in the courts of [Jurisdiction].

By using the Service, you acknowledge that you have read and agreed to these Terms. If you have any questions or concerns, please contact us at [Contact Information].

`
  }
]
const mFont = Alata({
  weight: "400", subsets: ['latin']

})
const Terms = () => {
  return (
    <div className={`p-3 py-4 ${mFont.className}`}>
      <p className=" text-3xl font-bold"> Terms of Use for YouTube Thumbnail Downloader</p>

      <div className="mt-4">
        <p className="my-2">These terms of use ("Terms") govern your use of the YouTube Thumbnail Downloader service ("Service") provided by ThumbnailGrabber.net. By using the Service, you agree to comply with these Terms. If you do not agree with any part of these Terms, please refrain from using the Service.</p>
        <div>
          {
            terms.map((item, i: number) => (
              <div key={i}>
                <p className="py-4 font-bold text-3xl ">{item.term}</p>
                <p className="text-gray-900">{item.des}</p>

              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}
export default Terms
