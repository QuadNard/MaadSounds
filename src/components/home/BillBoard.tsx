import React from 'react'
import Image from 'next/image'
import { Characters } from '../Characters'
import { Button } from '../Button'



const BillBoard = () => {
  return (
    <section className="mx-auto max-w-780 text-center [text-wrap:balance]">
        <div className="mx-auto mb-30 md:mb-10 flex items-center justify-center gap-[1.25rem]">
          <Image src="/logo-base.png" alt="Billboard" width={60} height={60}  className="" />
          <span className="pl-2 text-5xl font-bold tracking-tighter" style={{ color: 'rgb(235, 89, 45)'}}>MaadSounds</span>
        </div>
        <h1 className="mb-30 text-32 font-800 -tracking-2 supports-clamp:text-clamp-h1 text-white">   Beats Producer | Marketer</h1>
        <div className="mb-10 text-18 supports-clamp:text-clamp-sub md:mb-30 text-white">
        <p className="my-4 leading-loose">
              discover new{" "}
              <em className="music">
                <Characters>music</Characters>
              </em>{" "}
              every week.
            </p>
            <p className="my-4 leading-loose">
              My production style is based on{" "}
              <a
                className="focusable rounded-sm font-medium underline decoration-2 underline-offset-2 transition duration-100  text-[#383732] decoration-violet-400 hover:text-violet-400 hover:decoration-violet-400/30 focus:text-violet-400 focus:ring-violet-400/40"
                href="/"
                rel="noreferrer"
                target="_blank"
              >
                ambient/fantasy
              </a>{" "}
              like sounds that are reminiscent of{" "}
              <a
                className="focusable rounded-sm font-medium  underline  decoration-2 underline-offset-2 transition duration-100   text-[#383732] decoration-rose-400 hover:text-rose-400 hover:decoration-rose-400/30 focus:text-rose-400 focus:ring-rose-400/40"
                href="/"
                rel="noreferrer"
                target="_blank"
              >
                japanese role-playing
              </a>{" "}
              games. Im alway looking for new and innovative ways to incorporate
              different sounds into my{" "}
              <a
                className="focusable rounded-sm font-medium  underline decoration-2 underline-offset-2 transition duration-100    text-[#383732] decoration-sky-400 hover:text-sky-400 hover:decoration-sky-400/30 focus:text-sky-400 focus:ring-sky-400/40"
                href="/"
                rel="noreferrer"
                target="_blank"
              >
                work.
              </a>
            </p>
        </div>
        <div className="flex items-center justify-center gap-4">
        <a
              className="focusable flex flex-none cursor-pointer items-center justify-center gap-2 rounded-md  py-2 px-2.5 font-medium  shadow-lg  transitionhover:shadow-flower-500/5  bg-flower-400 text-zinc-900 shadow-flower-400/10 selection:bg-zinc-900/30 hover:bg-flower-400/80 hover:shadow-flower-400/5 focus:ring-flower-400/40 md:w-auto md:px-3 md:pl-2.5"
              href="/"
              rel="noreferrer"
              target="_blank"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-instagram"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
              <span className="hidden md:inline">Instagram</span>
            </a>
            <a
              className="focusable flex flex-none cursor-pointer items-center justify-center gap-2 rounded-md  py-2 px-2.5 font-medium  shadow-lg  transition     bg-rose-400 text-zinc-900 shadow-rose-400/10 selection:bg-zinc-900/30 hover:bg-rose-400/80 hover:shadow-rose-400/5 focus:ring-rose-400/40 md:w-auto md:px-3 md:pl-2.5"
              href="/"
              rel="noreferrer"
              target="_blank"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-youtube"
              >
                <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
                <path d="m10 15 5-3-5-3z" />
              </svg>
              <span className="hidden md:inline">Youtube</span>
            </a>
            <a
              className="focusable flex flex-none cursor-pointer items-center justify-center gap-2 rounded-md  py-2 px-2.5 font-medium text-zinc-900 shadow-lg  transition bg-lavender-400  shadow-lavender-400/10 selection:bg-zinc-900/30 hover:bg-lavender-400/80 hover:shadow-lavender-400/5 focus:ring-lavender-400/40 md:w-auto md:px-3 md:pl-2.5"
              href="/"
              rel="noreferrer"
              target="_blank"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                width="24"
                viewBox="0 0 448 512"
              >
                <path d="M448 209.9a210.1 210.1 0 0 1 -122.8-39.3V349.4A162.6 162.6 0 1 1 185 188.3V278.2a74.6 74.6 0 1 0 52.2 71.2V0l88 0a121.2 121.2 0 0 0 1.9 22.2h0A122.2 122.2 0 0 0 381 102.4a121.4 121.4 0 0 0 67 20.1z" />
              </svg>
              <span className="hidden md:inline">Tiktok</span>
            </a>
            <a
              className="focusable flex flex-none cursor-pointer items-center justify-center gap-2 rounded-md py-2 px-2.5 font-medium shadow-lg transition hover:bg-sky-500/80 hover:shadow-sky-500/5 focus:ring-sky-500/40 bg-sky-400 text-zinc-900 shadow-sky-400/10 selection:bg-zinc-900/30 hover:bg-twitter-400/80 hover:shadow-twitter-400/5 focus:ring-twitter-400/40 md:w-auto md:px-3 md:pl-2.5"
              href="/"
              rel="noreferrer"
              target="_blank"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-music"
              >
                <path d="M9 18V5l12-2v13" />
                <circle cx="6" cy="18" r="3" />
                <circle cx="18" cy="16" r="3" />
              </svg>
              <span className="hidden md:inline">BeatsMusic</span>
            </a>
        </div>
    </section>
  )
}

export default BillBoard
 