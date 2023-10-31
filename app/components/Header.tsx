"use client"
import Link from "next/link"
import React, { useEffect } from "react"
import Image from 'next/image'
import Logo from '../../public/logo.png'
import { useRouter, usePathname } from "next/navigation"
import { Alata } from "next/font/google"
const Pages: { name: string, url: string }[] = [{ name: 'home', url: '/' }, { name: 'about', url: '/about' }
  , { name: "terms of use", url: '/terms' }, { name: 'privacy policy', url: '/policy' }]
const thefont = Alata({
  subsets: ['latin-ext'], weight: '400'

})
const Header = () => {
  const router = usePathname()
  const [isShow, setShow] = React.useState(true)
  useEffect(() => {
    console.log('hello');
    setShow(true)
  }, [router])

  return (
    <div className={` ${thefont.className} shadow-sky-100 tracking-widest shadow-sm py-3`}>
      <div className={` ${isShow ? 'flex justify-between items-center w-full' : 'hidden'}  `}>
        <Link href={'/'}>
          <Image src={Logo} alt="logo" width={140} height={80} />
        </Link>
        <div onClick={() => setShow(false)}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
            stroke="currentColor" className="w-10 h-10">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
          </svg>

        </div>
      </div>
      <div className={`${!isShow ? "w-full min-h-screen bg-sky-200 flex justify-center pt-2 relative delay-200 transition-all duration-1000 ease-in-out" : 'hidden'}`}>
        <div className="absolute right-3 top-0 pt-4" onClick={() => setShow(true)}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
            strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>

        </div>
        <div className="pt-14 flex flex-col">
          {
            Pages.map((item, i: number) => (
              <Link
                href={item.url}
                key={i} className="text-4xl py-5   first-letter:uppercase font-bold  border-b-gray-50 border-b-2 text-center">
                {item.name}
              </Link>
            ))
          }
        </div>
      </div>
    </div>
  )
}
export default Header
