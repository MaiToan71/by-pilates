import Header from '@/components/Header'
import Footer from '@/components/sections/Footer'
import { Award, Heart, Target, Users, BookOpen, Clock } from 'lucide-react'
import Image from 'next/image'

export const metadata = {
  title: 'Về By Pilates | Câu chuyện và Sứ mệnh',
  description: 'Tìm hiểu về By Pilates - Studio Pilates chuyên nghiệp với hơn 10 năm kinh nghiệm trong việc giúp phụ nữ cải thiện sức khỏe và tư thế.',
}

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-20">
        {/* Hero Section */}
        <section className="section-padding bg-gradient-to-b from-[#FAFAF8] to-[#F5F1E8]">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Về <span className="text-[#c4aa8e]">By Pilates</span>
              </h1>
              <p className="text-xl text-[#6B7280] leading-relaxed">
                Chúng tôi tin rằng mỗi người phụ nữ đều xứng đáng có một cơ thể khỏe mạnh, 
                linh hoạt và tràn đầy năng lượng. Pilates không chỉ là bài tập - 
                đó là hành trình khám phá và yêu thương bản thân.
              </p>
            </div>

            {/* Story Grid */}
            <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
              <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl">
                <div className="w-full h-full bg-gradient-to-br from-[#c4aa8e]/20 to-[#c4aa8e]/5 flex items-center justify-center">
                  <div className="text-center text-[#6B7280]">
                    <p className="text-sm font-medium">Studio Photo</p>
                    <p className="text-xs mt-1">Không gian studio</p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold">
                  Câu chuyện của chúng tôi
                </h2>
                <p className="text-[#6B7280] leading-relaxed">
                  By Pilates được thành lập vào năm 2014 với một sứ mệnh đơn giản nhưng mạnh mẽ: 
                  mang đến phương pháp tập luyện an toàn, hiệu quả và bền vững cho phụ nữ Việt Nam.
                </p>
                <p className="text-[#6B7280] leading-relaxed">
                  Sau hơn 10 năm hoạt động, chúng tôi tự hào đã đồng hành cùng hơn 500 học viên 
                  trong hành trình cải thiện sức khỏe, phục hồi chấn thương và tìm lại sự cân bằng 
                  cho cơ thể.
                </p>
                <p className="text-[#6B7280] leading-relaxed">
                  Đội ngũ huấn luyện viên của chúng tôi được đào tạo bài bản với chứng chỉ quốc tế, 
                  kết hợp phương pháp Pilates cổ điển với kỹ thuật phục hồi chức năng hiện đại.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="section-padding bg-[#FAFAF8]">
          <div className="container-custom">
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg">
                <Target className="w-12 h-12 text-[#c4aa8e] mb-6" />
                <h3 className="text-2xl font-bold mb-4">Sứ mệnh</h3>
                <p className="text-[#6B7280] leading-relaxed">
                  Giúp mỗi người phụ nữ xây dựng nền tảng sức khỏe vững chắc thông qua 
                  Pilates, từ đó tự tin sống trọn vẹn từng khoảnh khắc của cuộc đời.
                </p>
              </div>

              <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg">
                <Heart className="w-12 h-12 text-[#c4aa8e] mb-6" />
                <h3 className="text-2xl font-bold mb-4">Tầm nhìn</h3>
                <p className="text-[#6B7280] leading-relaxed">
                  Trở thành studio Pilates hàng đầu tại Việt Nam, được tin tựa bởi 
                  chất lượng dịch vụ chuyên nghiệp và sự tận tâm với từng học viên.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="section-padding bg-gradient-to-b from-[#F5F1E8] to-[#FAFAF8]">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Giá trị cốt lõi
              </h2>
              <p className="text-lg text-[#6B7280]">
                Những nguyên tắc định hình mọi hoạt động tại By Pilates
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div className="text-center">
                <div className="w-16 h-16 bg-[#c4aa8e]/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Award className="w-8 h-8 text-[#c4aa8e]" />
                </div>
                <h3 className="text-xl font-bold mb-3">Chuyên nghiệp</h3>
                <p className="text-[#6B7280]">
                  Đội ngũ huấn luyện viên được chứng nhận quốc tế, 
                  liên tục cập nhật kiến thức mới nhất
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-[#c4aa8e]/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Users className="w-8 h-8 text-[#c4aa8e]" />
                </div>
                <h3 className="text-xl font-bold mb-3">Cá nhân hóa</h3>
                <p className="text-[#6B7280]">
                  Mỗi học viên có nhu cầu riêng. Chúng tôi thiết kế 
                  chương trình phù hợp với từng cá nhân
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-[#c4aa8e]/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Heart className="w-8 h-8 text-[#c4aa8e]" />
                </div>
                <h3 className="text-xl font-bold mb-3">Tận tâm</h3>
                <p className="text-[#6B7280]">
                  Chúng tôi quan tâm đến sự tiến bộ của bạn như chính 
                  sự nghiệp của mình
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="section-padding bg-[#c4aa8e] text-white">
          <div className="container-custom">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold mb-2">10+</div>
                <div className="text-white/80">Năm kinh nghiệm</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold mb-2">500+</div>
                <div className="text-white/80">Học viên</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold mb-2">5</div>
                <div className="text-white/80">Huấn luyện viên</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold mb-2">95%</div>
                <div className="text-white/80">Hài lòng</div>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="section-padding bg-[#FAFAF8]">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Đội ngũ huấn luyện viên
              </h2>
              <p className="text-lg text-[#6B7280]">
                Những chuyên gia tận tâm, luôn sẵn sàng đồng hành cùng bạn
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {[1, 2, 3].map((i) => (
                <div key={i} className="bg-white rounded-2xl overflow-hidden shadow-lg">
                  <div className="aspect-[4/5] bg-gradient-to-br from-[#c4aa8e]/20 to-[#c4aa8e]/5 flex items-center justify-center">
                    <p className="text-sm text-[#6B7280]">Instructor {i}</p>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">HLV [Tên]</h3>
                    <p className="text-[#c4aa8e] text-sm font-medium mb-3">
                      Chứng chỉ Pilates Quốc tế
                    </p>
                    <p className="text-[#6B7280] text-sm">
                      Chuyên về phục hồi chức năng và tư thế
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding bg-gradient-to-b from-[#F5F1E8] to-[#FAFAF8]">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Sẵn sàng bắt đầu hành trình của bạn?
              </h2>
              <p className="text-lg text-[#6B7280] mb-8">
                Đặt lịch tư vấn miễn phí để tìm hiểu thêm về phương pháp của chúng tôi
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/contact" className="btn-primary inline-flex items-center justify-center">
                  Đặt lịch tư vấn
                </a>
                <a href="/programs" className="btn-secondary">
                  Xem chương trình
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
