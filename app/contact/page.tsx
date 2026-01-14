'use client'

import Header from '@/components/Header'
import Footer from '@/components/sections/Footer'
import { MapPin, Phone, Mail, Clock, Send, MessageCircle } from 'lucide-react'
import { useState } from 'react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formData)
  }

  return (
    <>
      <Header />
      <main className="min-h-screen pt-20">
        {/* Hero */}
        <section className="section-padding bg-gradient-to-b from-[#FAFAF8] to-[#F5F1E8]">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Liên hệ <span className="text-[#c4aa8e]">với chúng tôi</span>
              </h1>
              <p className="text-xl text-[#6B7280] leading-relaxed">
                Hãy để chúng tôi giúp bạn bắt đầu hành trình Pilates. 
                Đặt câu hỏi, đặt lịch tư vấn hoặc ghé thăm studio của chúng tôi.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Info Cards */}
        <section className="section-padding bg-[#FAFAF8]">
          <div className="container-custom">
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
              {/* Phone */}
              <div className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow cursor-pointer">
                <div className="w-16 h-16 bg-[#c4aa8e]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-8 h-8 text-[#c4aa8e]" />
                </div>
                <h3 className="font-bold text-lg mb-2">Điện thoại</h3>
                <p className="text-[#6B7280] text-sm mb-3">Thứ 2 - CN: 6h - 21h</p>
                <a href="tel:0901234567" className="text-[#c4aa8e] font-semibold hover:underline">
                  0901 234 567
                </a>
              </div>

              {/* Email */}
              <div className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow cursor-pointer">
                <div className="w-16 h-16 bg-[#c4aa8e]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-8 h-8 text-[#c4aa8e]" />
                </div>
                <h3 className="font-bold text-lg mb-2">Email</h3>
                <p className="text-[#6B7280] text-sm mb-3">Phản hồi trong 24h</p>
                <a href="mailto:hello@bypilates.vn" className="text-[#c4aa8e] font-semibold hover:underline">
                  hello@bypilates.vn
                </a>
              </div>

              {/* Address */}
              <div className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow cursor-pointer">
                <div className="w-16 h-16 bg-[#c4aa8e]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8 text-[#c4aa8e]" />
                </div>
                <h3 className="font-bold text-lg mb-2">Studio</h3>
                <p className="text-[#6B7280] text-sm mb-3">Ghé thăm chúng tôi</p>
                <p className="text-[#2D3436] font-medium">
                  123 Wellness Street<br />
                  Quận 1, TP.HCM
                </p>
              </div>
            </div>

            {/* Main Content Grid */}
            <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
              {/* Contact Form */}
              <div>
                <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl">
                  <h2 className="text-3xl font-bold mb-2">Gửi tin nhắn</h2>
                  <p className="text-[#6B7280] mb-8">
                    Điền thông tin bên dưới, chúng tôi sẽ liên hệ trong vòng 24 giờ
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Name */}
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-[#2D3436] mb-2">
                        Họ và tên *
                      </label>
                      <input
                        type="text"
                        id="name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 border border-[#E8E4DC] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#c4aa8e] transition-all"
                        placeholder="Nguyễn Văn A"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-[#2D3436] mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 border border-[#E8E4DC] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#c4aa8e] transition-all"
                        placeholder="email@example.com"
                      />
                    </div>

                    {/* Phone */}
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-[#2D3436] mb-2">
                        Số điện thoại *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 border border-[#E8E4DC] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#c4aa8e] transition-all"
                        placeholder="0901 234 567"
                      />
                    </div>

                    {/* Service */}
                    <div>
                      <label htmlFor="service" className="block text-sm font-medium text-[#2D3436] mb-2">
                        Dịch vụ quan tâm
                      </label>
                      <select
                        id="service"
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-4 py-3 border border-[#E8E4DC] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#c4aa8e] transition-all"
                      >
                        <option value="">-- Chọn dịch vụ --</option>
                        <option value="foundation">Chương trình Cơ bản</option>
                        <option value="core">Sức mạnh Cốt lõi</option>
                        <option value="rehab">Phục hồi & Trị liệu</option>
                        <option value="prenatal">Mẹ bầu & Sau sinh</option>
                        <option value="private">Private 1-1</option>
                        <option value="other">Khác</option>
                      </select>
                    </div>

                    {/* Message */}
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-[#2D3436] mb-2">
                        Tin nhắn
                      </label>
                      <textarea
                        id="message"
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-4 py-3 border border-[#E8E4DC] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#c4aa8e] transition-all resize-none"
                        placeholder="Chia sẻ thêm về mục tiêu hoặc thắc mắc của bạn..."
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      className="w-full bg-[#c4aa8e] text-white py-4 rounded-lg font-semibold hover:bg-[#b39a7e] transition-all duration-200 flex items-center justify-center gap-2"
                    >
                      <Send className="w-5 h-5" />
                      Gửi tin nhắn
                    </button>

                    <p className="text-sm text-[#6B7280] text-center">
                      Bằng cách gửi form, bạn đồng ý với{' '}
                      <a href="#" className="text-[#c4aa8e] hover:underline">
                        Chính sách bảo mật
                      </a>
                    </p>
                  </form>
                </div>
              </div>

              {/* Additional Info */}
              <div className="space-y-8">
                {/* Opening Hours */}
                <div className="bg-white rounded-2xl p-8 shadow-lg">
                  <div className="flex items-center gap-3 mb-6">
                    <Clock className="w-6 h-6 text-[#c4aa8e]" />
                    <h3 className="text-2xl font-bold">Giờ mở cửa</h3>
                  </div>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center pb-4 border-b border-[#E8E4DC]">
                      <span className="font-medium">Thứ 2 - Thứ 6</span>
                      <span className="text-[#c4aa8e] font-semibold">6:00 - 21:00</span>
                    </div>
                    <div className="flex justify-between items-center pb-4 border-b border-[#E8E4DC]">
                      <span className="font-medium">Thứ 7</span>
                      <span className="text-[#c4aa8e] font-semibold">8:00 - 18:00</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-medium">Chủ Nhật</span>
                      <span className="text-[#c4aa8e] font-semibold">8:00 - 15:00</span>
                    </div>
                  </div>
                </div>

                {/* Quick Links */}
                <div className="bg-gradient-to-br from-[#c4aa8e] to-[#b39a7e] rounded-2xl p-8 text-white shadow-lg">
                  <h3 className="text-2xl font-bold mb-4">Kết nối nhanh</h3>
                  <p className="text-white/90 mb-6">
                    Chat trực tiếp với chúng tôi qua các kênh sau
                  </p>
                  <div className="space-y-3">
                    <a 
                      href="#" 
                      className="flex items-center gap-3 bg-white/10 hover:bg-white/20 p-4 rounded-lg transition-all cursor-pointer"
                    >
                      <MessageCircle className="w-5 h-5" />
                      <span>Zalo: 0901 234 567</span>
                    </a>
                    <a 
                      href="#" 
                      className="flex items-center gap-3 bg-white/10 hover:bg-white/20 p-4 rounded-lg transition-all cursor-pointer"
                    >
                      <MessageCircle className="w-5 h-5" />
                      <span>Facebook Messenger</span>
                    </a>
                    <a 
                      href="#" 
                      className="flex items-center gap-3 bg-white/10 hover:bg-white/20 p-4 rounded-lg transition-all cursor-pointer"
                    >
                      <Phone className="w-5 h-5" />
                      <span>WhatsApp: +84 901 234 567</span>
                    </a>
                  </div>
                </div>

                {/* FAQ Link */}
                <div className="bg-[#F5F1E8] rounded-2xl p-8">
                  <h3 className="text-xl font-bold mb-3">Câu hỏi thường gặp?</h3>
                  <p className="text-[#6B7280] mb-4">
                    Có thể bạn tìm thấy câu trả lời trong mục FAQ của chúng tôi
                  </p>
                  <a href="#" className="text-[#c4aa8e] font-semibold hover:underline inline-flex items-center gap-2">
                    Xem FAQ
                    <Send className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="section-padding bg-gradient-to-b from-[#F5F1E8] to-[#FAFAF8]">
          <div className="container-custom">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                Tìm đường đến studio
              </h2>
              
              <div className="bg-white rounded-3xl overflow-hidden shadow-xl">
                {/* Map Placeholder */}
                <div className="aspect-[16/9] bg-gradient-to-br from-[#c4aa8e]/20 to-[#c4aa8e]/5 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-12 h-12 text-[#c4aa8e] mx-auto mb-4" />
                    <p className="text-[#6B7280] font-medium">Google Maps Integration</p>
                    <p className="text-sm text-[#6B7280] mt-2">123 Wellness Street, Quận 1, TP.HCM</p>
                  </div>
                </div>

                {/* Directions */}
                <div className="p-8 border-t border-[#E8E4DC]">
                  <h3 className="font-bold text-lg mb-4">Hướng dẫn đi lại</h3>
                  <div className="grid md:grid-cols-2 gap-6 text-sm text-[#6B7280]">
                    <div>
                      <p className="font-semibold text-[#2D3436] mb-2">🚗 Ô tô / Xe máy:</p>
                      <p>Bãi đỗ xe miễn phí tại tầng hầm tòa nhà. Vào từ đường Wellness Street.</p>
                    </div>
                    <div>
                      <p className="font-semibold text-[#2D3436] mb-2">🚌 Xe buýt:</p>
                      <p>Tuyến 01, 05, 18 - Xuống trạm Wellness Plaza (50m đến studio)</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding bg-[#FAFAF8]">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto bg-white rounded-3xl p-8 md:p-12 shadow-xl text-center">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Bạn muốn ghé thăm studio trước?
              </h3>
              <p className="text-[#6B7280] leading-relaxed mb-8">
                Chúng tôi luôn chào đón bạn đến tham quan không gian, gặp gỡ đội ngũ 
                và trải nghiệm buổi tập thử miễn phí. Không cần đăng ký trước!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/schedule" className="btn-primary">
                  Đặt lịch trải nghiệm
                </a>
                <a href="/pricing" className="btn-secondary">
                  Xem bảng giá
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
