'use client'

import Link from "next/link";

export function Header() {
  return (
    <header className='py-6'>
      <div className='container flex items-center justify-between'>
        <Link href="/" className='text-4xl font-extrabold no-underline z-20 text-[#335AB5]'>
          pierre.
        </Link>
        <div className="hidden lg:flex gap-3 lg:gap-6">
          <Link href="/projects" className="text-lg font-bold no-underline">
            Projects
          </Link>
          <Link href="/contact" className="text-lg font-bold no-underline">
            Contact
          </Link>
        </div>
      </div>
    </header>
  )
}