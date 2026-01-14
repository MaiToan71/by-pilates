import { Mail, Phone, MapPin, Instagram, Facebook, Youtube } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-[#2D3436] text-white">
      {/* Main Footer */}
      <div className="container-custom py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold font-heading">By Pilates</h3>
            <p className="text-white/70 leading-relaxed">
              Expert Pilates training for core strength, posture correction, 
              and mindful movement. Transform your body, one session at a time.
            </p>
            {/* Social Links */}
            <div className="flex gap-4 pt-4">
              <a 
                href="#" 
                className="w-10 h-10 bg-white/10 hover:bg-[#8B9E7D] rounded-lg flex items-center justify-center transition-colors duration-200 cursor-pointer"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-white/10 hover:bg-[#8B9E7D] rounded-lg flex items-center justify-center transition-colors duration-200 cursor-pointer"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-white/10 hover:bg-[#8B9E7D] rounded-lg flex items-center justify-center transition-colors duration-200 cursor-pointer"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Liên kết</h4>
            <ul className="space-y-3">
              {[
                { name: 'Về chúng tôi', href: '/about' },
                { name: 'Chương trình', href: '/programs' },
                { name: 'Bảng giá', href: '/pricing' },
                { name: 'Lịch tập', href: '/schedule' },
                { name: 'Blog', href: '/blog' },
                { name: 'Liên hệ', href: '/contact' }
              ].map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className="text-white/70 hover:text-[#c4aa8e] transition-colors duration-200 cursor-pointer"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Dịch vụ</h4>
            <ul className="space-y-3">
              {[
                { name: 'Chương trình Cơ bản', href: '/programs#foundation' },
                { name: 'Sức mạnh Cốt lõi', href: '/programs#core' },
                { name: 'Phục hồi & Trị liệu', href: '/programs#rehab' },
                { name: 'Mẹ bầu & Sau sinh', href: '/programs#prenatal' },
                { name: 'Private 1-1', href: '/pricing' },
                { name: 'Lớp nhóm', href: '/schedule' }
              ].map((service) => (
                <li key={service.name}>
                  <a 
                    href={service.href} 
                    className="text-white/70 hover:text-[#c4aa8e] transition-colors duration-200 cursor-pointer"
                  >
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Get In Touch</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-[#c4aa8e] flex-shrink-0 mt-1" />
                <div>
                  <div className="text-white/70">Phone</div>
                  <a href="tel:+1234567890" className="hover:text-[#c4aa8e] transition-colors cursor-pointer">
                    +1 (234) 567-890
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-[#c4aa8e] flex-shrink-0 mt-1" />
                <div>
                  <div className="text-white/70">Email</div>
                  <a href="mailto:hello@bypilates.com" className="hover:text-[#c4aa8e] transition-colors cursor-pointer">
                    hello@bypilates.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#c4aa8e] flex-shrink-0 mt-1" />
                <div>
                  <div className="text-white/70">Studio</div>
                  <div>123 Wellness Street<br />City, State 12345</div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/70">
            <div>
              © {new Date().getFullYear()} By Pilates. All rights reserved.
            </div>
            <div className="flex gap-6">
              <a href="#" className="hover:text-[#c4aa8e] transition-colors cursor-pointer">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-[#c4aa8e] transition-colors cursor-pointer">
                Terms of Service
              </a>
              <a href="#" className="hover:text-[#c4aa8e] transition-colors cursor-pointer">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
