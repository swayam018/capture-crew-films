'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from 'framer-motion'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  const menuItems = [
    { href: '/photography', label: 'Photography' },
    { href: '/films', label: 'Films' },
    { href: '/contact', label: 'Contact Us' },
    { href: '/gallery', label: 'Gallery' },
    { href: '/about', label: 'About Us' },
  ]

  return (
    <header className="absolute z-50 w-full">
      <div className="flex items-center justify-between py-4 px-6">
        <div className="text-4xl font-serif">CCF</div>
        <nav className="hidden lg:flex items-center space-x-6">
          {menuItems.map((item) => (
            <Link key={item.href} href={item.href} className="text-sm hover:text-gray-600">
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="hidden lg:flex items-center space-x-4">
          <Link href="https://instagram.com" aria-label="Instagram">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
          </Link>
          
          <Button variant="outline" className="bg-[#C9AB81] text-white border-[#C9AB81] hover:bg-[#B69A70] hover:border-[#B69A70]">
            Get In Touch
          </Button>
        </div>
        <button className="lg:hidden" onClick={toggleMenu} aria-label="Toggle menu">
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden absolute top-full left-0 right-0 bg-white bg-opacity-20 shadow-lg"
          >
            <nav className="flex flex-col py-4 items-center">
              {menuItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="px-6 py-2 text-sm hover:bg-gray-100"
                  onClick={toggleMenu}
                >
                  {item.label}
                </Link>
              ))}
              <div className="flex justify-center space-x-4 mt-4">
                <Link href="https://instagram.com" aria-label="Instagram">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
                </Link>
                <Link href="https://twitter.com" aria-label="Twitter">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-twitter"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
                </Link>
              </div>
              <div className="px-6 mt-4">
                <Button variant="outline" className=" w-1/7 bg-[#C9AB81] text-white border-[#C9AB81] hover:bg-[#B69A70] hover:border-[#B69A70]">
                  Get In Touch
                </Button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}