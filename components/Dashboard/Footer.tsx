import React from 'react'
import Link from 'next/link'

/**
 * Footer Component
 *
 * This component renders the footer section of the page. It includes links to
 * the Privacy Policy and Terms of Use, as well as a copyright notice.
 * The layout is responsive and adjusts for different screen sizes.
 */
export default function Footer(): JSX.Element {
  return (
    <footer className="mt-8 flex w-full flex-row items-center justify-between p-4 text-sm max-sm:flex-col">
      {/* Links section */}
      <div className="flex space-x-4">
        {/* Privacy Policy link */}
        <Link href="#" prefetch={false}>
          Privacy Policy
        </Link>
        {/* Terms of Use link */}
        <Link href="#" prefetch={false}>
          Terms of Use
        </Link>
      </div>
      {/* Copyright notice */}
      <p className="mt-2">&copy; 2024 Endpoint Data Inc</p>
    </footer>
  )
}
