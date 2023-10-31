import { Alata } from "next/font/google"

const policy: { name: string, des: string }[] = [{
  name: ' Information We Collect', des: `We collect the YouTube video URL provided by users for the purpose of generating and displaying the video thumbnail.
We do not collect or store any personal information, such as names, email addresses, or user accounts.`
}, {
  name: 'User of Information', des: `The YouTube video URL is solely used to retrieve and display the video thumbnail.
We do not use this information for any other purpose, such as marketing or tracking.`
},
{ name: 'Cookies', des: `We do not use cookies to track or collect user data.` },
{ name: 'hird-Party Services', des: `We do not use third-party services or advertising networks` },
{ name: ' Data Security', des: `We take measures to ensure the security of the data you provide.` },
{ name: '. Data Retention', des: `We do not store the YouTube video URLs or generated thumbnails.` },
{ name: 'Changes to this Policy', des: `We may update this Privacy Policy. Any changes will be posted on this page.` },
{
  name: 'Contact Us', des: `If you have questions or concerns about your privacy or this policy, please contact us at [Contact Information].
By using ThumbnailDownloadersave.com, you acknowledge that you have read and agreed to this Privacy Policy.` },
]
const mfont = Alata({
  subsets: ['latin'], weight: '400'
})
const Policy = () => {
  return (
    <div className={`p-3 ${mfont.className} py-6`}>
      <p className="text-4xl">Privacy Policy for ThumbnailDownloadersave.com</p>
      <p className="my-3">This Privacy Policy outlines how ThumbnailDownloadersave.com ("we," "us," or "our") collects, uses, and protects your personal information when you use our service.</p>
      <div>
        {
          policy.map((item, i: number) => (
            <div key={i}>
              <p className="py-4 text-3xl font-bold">{item.name}</p>
              <p className="text-gray-900">{item.des}</p>

            </div>
          ))
        }
      </div>
    </div>
  )
}
export default Policy
