import Header from '@/components/Header'
import Footer from '@/components/sections/Footer'
import { Check, Star, Users, Clock, Calendar } from 'lucide-react'

export const metadata = {
  title: 'Chương trình Pilates | By Pilates',
  description: 'Khám phá các chương trình Pilates từ cơ bản đến nâng cao, phù hợp với mọi trình độ và mục tiêu của bạn.',
}

const programs = [
  {
    id: 'foundation',
    name: 'Nền Tảng Cơ Bản',
    level: 'Beginner',
    tagline: 'Bắt đầu hành trình Pilates của bạn',
    duration: '4-6 tuần',
    sessions: '2 buổi/tuần',
    classSize: '6-8 người',
    description: 'Chương trình hoàn hảo cho người mới bắt đầu. Học các động tác cơ bản, kỹ thuật thở và nguyên tắc Pilates.',
    features: [
      'Làm quen với thiết bị Pilates cơ bản',
      'Học kỹ thuật thở và định tâm',
      'Các động tác nền tảng an toàn',
      'Xây dựng sức mạnh cơ lõi',
      'Cải thiện độ linh hoạt',
      'Tư vấn 1-1 về tư thế cá nhân'
    ],
    benefits: [
      'Tăng nhận thức về cơ thể',
      'Giảm căng thẳng vùng vai gáy',
      'Cải thiện tư thế ngồi, đứng',
      'Nền tảng vững chắc cho các level cao hơn'
    ]
  },
  {
    id: 'core',
    name: 'Sức Mạnh Cốt Lõi',
    level: 'Intermediate',
    tagline: 'Nâng cao sức mạnh và kiểm soát',
    duration: '8-12 tuần',
    sessions: '3 buổi/tuần',
    classSize: '4-6 người',
    popular: true,
    description: 'Chương trình nâng cao tập trung vào sức mạnh cơ lõi, sự kiểm soát và độ chính xác của động tác.',
    features: [
      'Động tác nâng cao với thiết bị Reformer',
      'Tập trung vào cơ lõi sâu',
      'Cải thiện tư thế và cân bằng',
      'Phòng ngừa chấn thương',
      'Tăng độ linh hoạt cột sống',
      'Đánh giá tiến độ định kỳ'
    ],
    benefits: [
      'Lưng thẳng, bụng săn chắc',
      'Giảm đau lưng mãn tính',
      'Tăng hiệu suất vận động',
      'Cơ thể cân đối, săn chắc'
    ]
  },
  {
    id: 'rehab',
    name: 'Phục Hồi & Trị Liệu',
    level: 'All Levels',
    tagline: 'Chương trình chuyên sâu cá nhân hóa',
    duration: 'Tùy chỉnh',
    sessions: 'Linh hoạt',
    classSize: '1-2 người (Private)',
    description: 'Chương trình cá nhân hóa cao cho phục hồi chấn thương, đau mãn tính và các vấn đề cột sống.',
    features: [
      'Đánh giá chức năng vận động chi tiết',
      'Lộ trình điều trị cá nhân hóa 100%',
      'Kết hợp Pilates trị liệu',
      'Theo dõi tiến độ sát sao',
      'Hỗ trợ trước/sau sinh',
      'Phối hợp với bác sĩ/vật lý trị liệu'
    ],
    benefits: [
      'Phục hồi chấn thương an toàn',
      'Giảm đau mãn tính',
      'Cải thiện chức năng vận động',
      'Phòng ngừa tái phát'
    ]
  },
  {
    id: 'prenatal',
    name: 'Mẹ Bầu & Sau Sinh',
    level: 'Specialized',
    tagline: 'Đồng hành cùng mẹ và bé',
    duration: '12-24 tuần',
    sessions: '2-3 buổi/tuần',
    classSize: '3-4 người',
    description: 'Chương trình đặc biệt cho phụ nữ mang thai và sau sinh, an toàn và hiệu quả.',
    features: [
      'An toàn cho mẹ và bé',
      'Chuẩn bị cơ thể cho sinh nở',
      'Phục hồi sàn chậu sau sinh',
      'Giảm đau lưng thai kỳ',
      'Tăng cường sức khỏe tinh thần',
      'Cộng đồng mẹ bỉm sữa'
    ],
    benefits: [
      'Thai kỳ khỏe mạnh, thoải mái',
      'Phục hồi nhanh sau sinh',
      'Lấy lại vóc dáng an toàn',
      'Tăng năng lượng cho mẹ'
    ]
  }
]

export default function ProgramsPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-20">
        {/* Hero */}
        <section className="section-padding bg-gradient-to-b from-[#FAFAF8] to-[#F5F1E8]">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Chương trình <span className="text-[#c4aa8e]">Pilates</span>
              </h1>
              <p className="text-xl text-[#6B7280] leading-relaxed">
                Từ người mới bắt đầu đến nâng cao, từ phục hồi đến tăng cường sức mạnh - 
                chúng tôi có chương trình phù hợp cho mọi nhu cầu của bạn.
              </p>
            </div>
          </div>
        </section>

        {/* Programs Detail */}
        <section className="section-padding bg-[#FAFAF8]">
          <div className="container-custom">
            <div className="space-y-16 max-w-6xl mx-auto">
              {programs.map((program, index) => (
                <div 
                  key={program.id}
                  className={`grid lg:grid-cols-2 gap-12 items-start ${
                    index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                  }`}
                >
                  {/* Left: Info */}
                  <div className={`space-y-6 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                    <div>
                      {program.popular && (
                        <span className="inline-block bg-[#c4aa8e] text-white px-4 py-1 rounded-full text-sm font-semibold mb-4">
                          Phổ biến nhất
                        </span>
                      )}
                      <div className="inline-block bg-[#c4aa8e]/10 text-[#c4aa8e] px-4 py-1 rounded-full text-sm font-medium mb-4">
                        {program.level}
                      </div>
                      <h2 className="text-3xl md:text-4xl font-bold mb-3">
                        {program.name}
                      </h2>
                      <p className="text-lg text-[#c4aa8e] font-medium mb-4">
                        {program.tagline}
                      </p>
                      <p className="text-[#6B7280] leading-relaxed">
                        {program.description}
                      </p>
                    </div>

                    {/* Quick Info */}
                    <div className="grid grid-cols-3 gap-4 py-6 border-y border-[#E8E4DC]">
                      <div>
                        <Clock className="w-5 h-5 text-[#c4aa8e] mb-2" />
                        <div className="text-sm text-[#6B7280]">Thời gian</div>
                        <div className="font-semibold text-[#2D3436]">{program.duration}</div>
                      </div>
                      <div>
                        <Calendar className="w-5 h-5 text-[#c4aa8e] mb-2" />
                        <div className="text-sm text-[#6B7280]">Tần suất</div>
                        <div className="font-semibold text-[#2D3436]">{program.sessions}</div>
                      </div>
                      <div>
                        <Users className="w-5 h-5 text-[#c4aa8e] mb-2" />
                        <div className="text-sm text-[#6B7280]">Sĩ số</div>
                        <div className="font-semibold text-[#2D3436]">{program.classSize}</div>
                      </div>
                    </div>

                    {/* Benefits */}
                    <div>
                      <h3 className="text-xl font-bold mb-4">Lợi ích</h3>
                      <ul className="space-y-3">
                        {program.benefits.map((benefit, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <Star className="w-5 h-5 text-[#c4aa8e] fill-[#c4aa8e] flex-shrink-0 mt-0.5" />
                            <span className="text-[#6B7280]">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Right: Features */}
                  <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                    <div className="bg-white rounded-2xl p-8 shadow-lg sticky top-24">
                      <h3 className="text-xl font-bold mb-6">Nội dung chương trình</h3>
                      <ul className="space-y-4 mb-8">
                        {program.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <Check className="w-5 h-5 text-[#c4aa8e] flex-shrink-0 mt-0.5" />
                            <span className="text-[#6B7280]">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <button className="btn-primary w-full">
                        Đăng ký ngay
                      </button>
                      <button className="btn-secondary w-full mt-3">
                        Tư vấn miễn phí
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="section-padding bg-gradient-to-b from-[#F5F1E8] to-[#FAFAF8]">
          <div className="container-custom">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                So sánh chương trình
              </h2>
              
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-[#F5F1E8]">
                      <tr>
                        <th className="text-left p-4 font-semibold">Tiêu chí</th>
                        <th className="text-center p-4 font-semibold">Cơ bản</th>
                        <th className="text-center p-4 font-semibold">Trung cấp</th>
                        <th className="text-center p-4 font-semibold">Phục hồi</th>
                        <th className="text-center p-4 font-semibold">Mẹ bầu</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#E8E4DC]">
                      <tr>
                        <td className="p-4 text-[#6B7280]">Phù hợp</td>
                        <td className="p-4 text-center">Người mới</td>
                        <td className="p-4 text-center">Có nền tảng</td>
                        <td className="p-4 text-center">Mọi level</td>
                        <td className="p-4 text-center">Chuyên biệt</td>
                      </tr>
                      <tr>
                        <td className="p-4 text-[#6B7280]">Thời gian</td>
                        <td className="p-4 text-center">4-6 tuần</td>
                        <td className="p-4 text-center">8-12 tuần</td>
                        <td className="p-4 text-center">Tùy chỉnh</td>
                        <td className="p-4 text-center">12-24 tuần</td>
                      </tr>
                      <tr>
                        <td className="p-4 text-[#6B7280]">Sĩ số lớp</td>
                        <td className="p-4 text-center">6-8 người</td>
                        <td className="p-4 text-center">4-6 người</td>
                        <td className="p-4 text-center">1-2 người</td>
                        <td className="p-4 text-center">3-4 người</td>
                      </tr>
                    </tbody>
                  </table>
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
                Chưa chắc chương trình nào phù hợp?
              </h2>
              <p className="text-lg text-white/90 mb-8">
                Đặt lịch tư vấn miễn phí để chúng tôi giúp bạn chọn chương trình phù hợp nhất
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/contact" className="bg-white text-[#c4aa8e] px-8 py-4 rounded-lg font-semibold hover:bg-white/90 transition-all duration-200 shadow-lg cursor-pointer">
                  Tư vấn miễn phí
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
