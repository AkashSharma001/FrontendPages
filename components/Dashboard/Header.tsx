import Image from 'next/image'
import React from 'react'

/**
 * Header Component
 *
 * This component renders the header section of the page. It includes a welcome message,
 * the user's name, and an organization selector. The layout is responsive and adjusts
 * for different screen sizes.
 */
export default function Header(): JSX.Element {
  return (
    <header className="flex w-full max-w-6xl items-center bg-white max-[680px]:flex-col max-[680px]:gap-6 min-[680px]:justify-between">
      {/* Welcome message section */}
      <div className="flex w-full flex-col justify-start">
        {/* Personalized greeting */}
        <h2 className="text-lg">
          Hi <span className="text-[#5932e6]">Name_of_the_person</span>
        </h2>
        {/* Main welcome header */}
        <h1 className="text-3xl">
          Welcome to{' '}
          <span className="rounded-md bg-[#5932e6] px-2 font-light text-white">
            endpoint.
          </span>
        </h1>
      </div>

      {/* Organization selector section */}
      <div className="flex w-full items-center justify-end space-x-4 max-[680px]:w-full max-[680px]:justify-start">
        <div className="flex w-fit items-center justify-around rounded-md border p-3 max-[680px]:w-full">
          {/* Organization text */}
          <div className="text-left">
            <p className="text-lg font-bold leading-3">
              Your
              <span className="block text-lg font-bold text-[#5932e6]">
                organization
              </span>
            </p>
          </div>
          {/*  Arrow icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.2"
            stroke="currentColor"
            className="h-8 w-8 text-[#5932e6]"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 5l7 7-7 7"
            />
          </svg>
          {/* Organization logo */}
          <Image
            src="/vercel.svg"
            alt="Organization"
            className="h-8 w-fit"
            height={8}
            width={2}
          />
        </div>
      </div>
    </header>
  )
}
