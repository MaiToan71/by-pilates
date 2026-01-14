'use client'

import { Menu, X } from 'lucide-react'
import { useState } from 'react'

const navigation = [
  { name: 'Trang chủ', href: '/' },
  { name: 'Về chúng tôi', href: '/about' },
  { name: 'Chương trình', href: '/programs' },
  { name: 'Bảng giá', href: '/pricing' },
  { name: 'Lịch tập', href: '/schedule' },
  { name: 'Blog', href: '/blog' },
  { name: 'Liên hệ', href: '/contact' },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-[#E8E4DC]">
      <nav className="container-custom" aria-label="Main navigation">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <a href="#home" className="text-2xl font-bold font-heading text-[#2D3436] hover:text-[#c4aa8e] transition-colors">
              By Pilates
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-[#4A5568] hover:text-[#c4aa8e] font-medium transition-colors cursor-pointer"
              >
                {item.name}
              </a>
            ))}
            <button className="bg-[#c4aa8e] text-white px-6 py-2.5 rounded-lg font-semibold hover:bg-[#b39a7e] transition-all duration-200 cursor-pointer">
              Đặt lịch
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              type="button"
              className="text-[#4A5568] hover:text-[#c4aa8e] cursor-pointer"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-[#E8E4DC]">
            <div className="flex flex-col gap-4">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-[#4A5568] hover:text-[#c4aa8e] font-medium transition-colors cursor-pointer py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <button className="bg-[#c4aa8e] text-white px-6 py-2.5 rounded-lg font-semibold hover:bg-[#b39a7e] transition-all duration-200 cursor-pointer mt-2">
                Đặt lịch
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
