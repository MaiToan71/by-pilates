import Header from '@/components/Header'
import Footer from '@/components/sections/Footer'
import { Clock, Users, MapPin, Calendar as CalendarIcon } from 'lucide-react'

export const metadata = {
  title: 'Lịch Tập & Đặt Chỗ | By Pilates',
  description: 'Xem lịch tập Pilates và đặt chỗ trực tuyến. Lớp học hàng ngày từ 6h sáng đến 9h tối.',
}

interface Session {
  time: string;
  class: string;
  level: string;
  instructor: string;
  spots: number;
  booked: number;
  full?: boolean;
}

const schedule: Record<string, Session[]> = {
  monday: [
    { time: '06:00 - 07:00', class: 'Foundation Mat', level: 'Beginner', instructor: 'HLV Minh', spots: 8, booked: 5 },
    { time: '08:00 - 09:00', class: 'Core Strength', level: 'Intermediate', instructor: 'HLV Lan', spots: 6, booked: 6, full: true },
    { time: '10:00 - 11:00', class: 'Reformer Basic', level: 'Beginner', instructor: 'HLV Minh', spots: 4, booked: 2 },
    { time: '17:30 - 18:30', class: 'Evening Flow', level: 'All Levels', instructor: 'HLV Hương', spots: 8, booked: 6 },
    { time: '19:00 - 20:00', class: 'Core Strength', level: 'Intermediate', instructor: 'HLV Lan', spots: 6, booked: 4 },
  ],
  tuesday: [
    { time: '06:00 - 07:00', class: 'Morning Stretch', level: 'All Levels', instructor: 'HLV Hương', spots: 8, booked: 3 },
    { time: '09:00 - 10:00', class: 'Prenatal Pilates', level: 'Specialized', instructor: 'HLV Lan', spots: 4, booked: 3 },
    { time: '10:30 - 11:30', class: 'Reformer Advanced', level: 'Advanced', instructor: 'HLV Minh', spots: 4, booked: 4, full: true },
    { time: '18:00 - 19:00', class: 'Foundation Mat', level: 'Beginner', instructor: 'HLV Hương', spots: 8, booked: 5 },
    { time: '19:30 - 20:30', class: 'Core & Balance', level: 'Intermediate', instructor: 'HLV Minh', spots: 6, booked: 2 },
  ],
  wednesday: [
    { time: '06:00 - 07:00', class: 'Foundation Mat', level: 'Beginner', instructor: 'HLV Minh', spots: 8, booked: 6 },
    { time: '08:00 - 09:00', class: 'Core Strength', level: 'Intermediate', instructor: 'HLV Lan', spots: 6, booked: 5 },
    { time: '10:00 - 11:00', class: 'Postnatal Recovery', level: 'Specialized', instructor: 'HLV Hương', spots: 4, booked: 2 },
    { time: '17:30 - 18:30', class: 'Evening Flow', level: 'All Levels', instructor: 'HLV Lan', spots: 8, booked: 7 },
    { time: '19:00 - 20:00', class: 'Reformer Intermediate', level: 'Intermediate', instructor: 'HLV Minh', spots: 4, booked: 3 },
  ],
  thursday: [
    { time: '06:00 - 07:00', class: 'Morning Energizer', level: 'All Levels', instructor: 'HLV Hương', spots: 8, booked: 4 },
    { time: '09:00 - 10:00', class: 'Gentle Flow', level: 'Beginner', instructor: 'HLV Lan', spots: 6, booked: 4 },
    { time: '10:30 - 11:30', class: 'Core Power', level: 'Advanced', instructor: 'HLV Minh', spots: 6, booked: 5 },
    { time: '18:00 - 19:00', class: 'Foundation Mat', level: 'Beginner', instructor: 'HLV Hương', spots: 8, booked: 6 },
    { time: '19:30 - 20:30', class: 'Full Body Flow', level: 'Intermediate', instructor: 'HLV Lan', spots: 6, booked: 3 },
  ],
  friday: [
    { time: '06:00 - 07:00', class: 'Foundation Mat', level: 'Beginner', instructor: 'HLV Minh', spots: 8, booked: 7 },
    { time: '08:00 - 09:00', class: 'Reformer Basic', level: 'Beginner', instructor: 'HLV Lan', spots: 4, booked: 3 },
    { time: '10:00 - 11:00', class: 'Core Strength', level: 'Intermediate', instructor: 'HLV Hương', spots: 6, booked: 4 },
    { time: '17:30 - 18:30', class: 'Weekend Prep', level: 'All Levels', instructor: 'HLV Lan', spots: 8, booked: 6 },
    { time: '19:00 - 20:00', class: 'Stretch & Release', level: 'All Levels', instructor: 'HLV Minh', spots: 6, booked: 2 },
  ],
  saturday: [
    { time: '08:00 - 09:00', class: 'Weekend Foundation', level: 'Beginner', instructor: 'HLV Lan', spots: 8, booked: 7 },
    { time: '09:30 - 10:30', class: 'Core & Flexibility', level: 'Intermediate', instructor: 'HLV Minh', spots: 6, booked: 5 },
    { time: '11:00 - 12:00', class: 'Reformer All Levels', level: 'All Levels', instructor: 'HLV Hương', spots: 4, booked: 3 },
    { time: '14:00 - 15:00', class: 'Gentle Recovery', level: 'Beginner', instructor: 'HLV Lan', spots: 6, booked: 2 },
  ],
  sunday: [
    { time: '08:00 - 09:00', class: 'Sunday Stretch', level: 'All Levels', instructor: 'HLV Hương', spots: 8, booked: 5 },
    { time: '09:30 - 10:30', class: 'Foundation Flow', level: 'Beginner', instructor: 'HLV Minh', spots: 8, booked: 6 },
    { time: '11:00 - 12:00', class: 'Core Power', level: 'Intermediate', instructor: 'HLV Lan', spots: 6, booked: 4 },
  ],
}

const days = [
  { key: 'monday', name: 'Thứ Hai' },
  { key: 'tuesday', name: 'Thứ Ba' },
  { key: 'wednesday', name: 'Thứ Tư' },
  { key: 'thursday', name: 'Thứ Năm' },
  { key: 'friday', name: 'Thứ Sáu' },
  { key: 'saturday', name: 'Thứ Bảy' },
  { key: 'sunday', name: 'Chủ Nhật' },
]

const getLevelColor = (level: string) => {
  switch (level) {
    case 'Beginner': return 'bg-green-100 text-green-700'
    case 'Intermediate': return 'bg-blue-100 text-blue-700'
    case 'Advanced': return 'bg-purple-100 text-purple-700'
    case 'Specialized': return 'bg-pink-100 text-pink-700'
    default: return 'bg-gray-100 text-gray-700'
  }
}

export default function SchedulePage() {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-20">
        {/* Hero */}
        <section className="section-padding bg-gradient-to-b from-[#FAFAF8] to-[#F5F1E8]">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Lịch tập <span className="text-[#c4aa8e]">hàng tuần</span>
              </h1>
              <p className="text-xl text-[#6B7280] leading-relaxed mb-8">
                Đặt chỗ trực tuyến nhanh chóng. Lớp học từ 6h sáng đến 9h tối, 
                7 ngày trong tuần.
              </p>
              <div className="flex flex-wrap justify-center gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-[#c4aa8e]" />
                  <span>123 Wellness St, Quận 1</span>
                </div>
                <div className="flex items-center gap-2">
                  <CalendarIcon className="w-5 h-5 text-[#c4aa8e]" />
                  <span>Booking trước 24h</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Legend */}
        <section className="py-8 bg-white border-y border-[#E8E4DC]">
          <div className="container-custom">
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 bg-green-500 rounded-full"></span>
                <span>Beginner - Người mới</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 bg-blue-500 rounded-full"></span>
                <span>Intermediate - Trung cấp</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 bg-purple-500 rounded-full"></span>
                <span>Advanced - Nâng cao</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 bg-pink-500 rounded-full"></span>
                <span>Specialized - Chuyên biệt</span>
              </div>
            </div>
          </div>
        </section>

        {/* Schedule */}
        <section className="section-padding bg-[#FAFAF8]">
          <div className="container-custom">
            <div className="space-y-12 max-w-6xl mx-auto">
              {days.map((day) => (
                <div key={day.key}>
                  <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                    <CalendarIcon className="w-6 h-6 text-[#c4aa8e]" />
                    {day.name}
                  </h2>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {schedule[day.key as keyof typeof schedule].map((session, index) => (
                      <div 
                        key={index}
                        className={`bg-white rounded-xl p-6 shadow-sm border-2 transition-all duration-200 ${
                          session.full
                            ? 'border-gray-200 opacity-60' 
                            : 'border-[#E8E4DC] hover:border-[#c4aa8e] hover:shadow-md cursor-pointer'
                        }`}
                      >
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <div className="flex items-center gap-2 text-[#c4aa8e] font-medium mb-1">
                              <Clock className="w-4 h-4" />
                              {session.time}
                            </div>
                            <h3 className="font-bold text-lg">{session.class}</h3>
                          </div>
                          {session.full && (
                            <span className="bg-red-100 text-red-700 px-2 py-1 rounded text-xs font-semibold">
                              Đầy
                            </span>
                          )}
                        </div>

                        <div className="space-y-3">
                          <div className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${getLevelColor(session.level)}`}>
                            {session.level}
                          </div>

                          <div className="flex items-center gap-2 text-sm text-[#6B7280]">
                            <Users className="w-4 h-4" />
                            <span>{session.instructor}</span>
                          </div>

                          <div className="flex items-center justify-between pt-3 border-t border-[#E8E4DC]">
                            <div className="text-sm">
                              <span className="font-semibold text-[#2D3436]">{session.booked}/{session.spots}</span>
                              <span className="text-[#6B7280]"> chỗ</span>
                            </div>
                            {!session.full && (
                              <button className="bg-[#c4aa8e] text-white px-4 py-1.5 rounded-lg text-sm font-semibold hover:bg-[#b39a7e] transition-colors">
                                Đặt chỗ
                              </button>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Booking Info */}
        <section className="section-padding bg-gradient-to-b from-[#F5F1E8] to-[#FAFAF8]">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                Quy định đặt chỗ
              </h2>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h3 className="font-bold text-lg mb-3">✅ Đặt chỗ</h3>
                  <ul className="space-y-2 text-[#6B7280] text-sm">
                    <li>• Đặt trước tối thiểu 24 giờ</li>
                    <li>• Xác nhận qua SMS/Email</li>
                    <li>• Có mặt trước 10 phút</li>
                    <li>• Mang theo khăn & nước</li>
                  </ul>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h3 className="font-bold text-lg mb-3">❌ Hủy chỗ</h3>
                  <ul className="space-y-2 text-[#6B7280] text-sm">
                    <li>• Hủy trước 12 giờ: Miễn phí</li>
                    <li>• Hủy trong 12 giờ: Mất 1 buổi</li>
                    <li>• No-show: Mất 1 buổi</li>
                    <li>• Đến muộn >15 phút: Không vào lớp</li>
                  </ul>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h3 className="font-bold text-lg mb-3">🔄 Chuyển lịch</h3>
                  <ul className="space-y-2 text-[#6B7280] text-sm">
                    <li>• Chuyển lớp miễn phí (trước 12h)</li>
                    <li>• Tối đa 2 lần/tuần</li>
                    <li>• Cùng cấp độ hoặc thấp hơn</li>
                    <li>• Tùy theo chỗ trống</li>
                  </ul>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h3 className="font-bold text-lg mb-3">📱 Liên hệ</h3>
                  <ul className="space-y-2 text-[#6B7280] text-sm">
                    <li>• Hotline: 0901 234 567</li>
                    <li>• Email: booking@bypilates.vn</li>
                    <li>• Zalo/WhatsApp hỗ trợ</li>
                    <li>• Thứ 2 - CN: 6h - 21h</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding bg-[#c4aa8e] text-white">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Chưa có tài khoản?
              </h2>
              <p className="text-lg text-white/90 mb-8">
                Đăng ký ngay để được tư vấn gói tập phù hợp và nhận ưu đãi đặc biệt
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/contact" className="bg-white text-[#c4aa8e] px-8 py-4 rounded-lg font-semibold hover:bg-white/90 transition-all duration-200 shadow-lg cursor-pointer">
                  Đăng ký tư vấn
                </a>
                <a href="/pricing" className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-all duration-200 cursor-pointer">
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
