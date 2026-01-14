import Header from '@/components/Header'
import Footer from '@/components/sections/Footer'
import { Check, X, Star, TrendingUp } from 'lucide-react'

export const metadata = {
  title: 'Bảng Giá & Gói Tập | By Pilates',
  description: 'Khám phá các gói tập Pilates linh hoạt với mức giá hợp lý. Ưu đãi đặc biệt cho khách hàng mới.',
}

const pricingPlans = [
  {
    name: 'Trải nghiệm',
    subtitle: 'Dùng thử Pilates',
    price: '350.000đ',
    priceDetail: '1 buổi',
    description: 'Hoàn hảo để trải nghiệm Pilates lần đầu',
    features: [
      { text: '1 buổi tập 60 phút', included: true },
      { text: 'Đánh giá tư thế miễn phí', included: true },
      { text: 'Tư vấn lộ trình cá nhân', included: true },
      { text: 'Lớp nhóm (6-8 người)', included: true },
      { text: 'Không cam kết dài hạn', included: true },
      { text: 'Private 1-1', included: false },
      { text: 'Thiết bị chuyên dụng', included: false }
    ],
    popular: false,
    cta: 'Đặt lịch ngay'
  },
  {
    name: 'Cơ bản',
    subtitle: 'Dành cho người mới',
    price: '2.800.000đ',
    priceDetail: '8 buổi/tháng',
    originalPrice: '3.200.000đ',
    description: 'Gói phổ biến nhất cho người bắt đầu',
    features: [
      { text: '8 buổi/tháng (2 buổi/tuần)', included: true },
      { text: 'Lớp nhóm 6-8 người', included: true },
      { text: 'Đánh giá tiến độ hàng tháng', included: true },
      { text: 'Hỗ trợ dinh dưỡng cơ bản', included: true },
      { text: 'Booking linh hoạt', included: true },
      { text: 'Private 1-1', included: false },
      { text: 'Reformer nâng cao', included: false }
    ],
    popular: true,
    discount: '12% OFF',
    cta: 'Đăng ký ngay'
  },
  {
    name: 'Nâng cao',
    subtitle: 'Cam kết tiến bộ',
    price: '4.200.000đ',
    priceDetail: '12 buổi/tháng',
    originalPrice: '4.800.000đ',
    description: 'Cho người muốn kết quả nhanh và bền vững',
    features: [
      { text: '12 buổi/tháng (3 buổi/tuần)', included: true },
      { text: 'Lớp nhóm nhỏ 4-6 người', included: true },
      { text: 'Sử dụng Reformer & thiết bị', included: true },
      { text: 'Đánh giá chuyên sâu 2 tuần/lần', included: true },
      { text: 'Tư vấn dinh dưỡng & lối sống', included: true },
      { text: '2 buổi Private 1-1/tháng', included: true },
      { text: 'Ưu tiên đặt lịch', included: true }
    ],
    popular: false,
    discount: '12% OFF',
    cta: 'Đăng ký ngay'
  },
  {
    name: 'VIP',
    subtitle: 'Cá nhân hóa hoàn toàn',
    price: 'Liên hệ',
    priceDetail: 'Tùy chỉnh',
    description: 'Chương trình được thiết kế riêng cho bạn',
    features: [
      { text: 'Số buổi không giới hạn', included: true },
      { text: '100% Private 1-1', included: true },
      { text: 'Lộ trình cá nhân hóa hoàn toàn', included: true },
      { text: 'Huấn luyện viên riêng', included: true },
      { text: 'Tư vấn dinh dưỡng chuyên sâu', included: true },
      { text: 'Đánh giá tiến độ hàng tuần', included: true },
      { text: 'Hỗ trợ 24/7', included: true }
    ],
    popular: false,
    cta: 'Liên hệ tư vấn'
  }
]

const addons = [
  { name: 'Buổi Private 1-1 thêm', price: '650.000đ/buổi' },
  { name: 'Đánh giá tư thế chuyên sâu', price: '500.000đ' },
  { name: 'Tư vấn dinh dưỡng cá nhân', price: '800.000đ/tháng' },
  { name: 'Freeze tài khoản', price: 'Miễn phí (tối đa 2 tuần/tháng)' }
]

export default function PricingPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-20">
        {/* Hero */}
        <section className="section-padding bg-gradient-to-b from-[#FAFAF8] to-[#F5F1E8]">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Bảng giá <span className="text-[#c4aa8e]">minh bạch</span>
              </h1>
              <p className="text-xl text-[#6B7280] leading-relaxed mb-8">
                Lựa chọn gói tập phù hợp với mục tiêu và ngân sách của bạn. 
                Không phí ẩn, không ràng buộc dài hạn.
              </p>
              <div className="inline-flex items-center gap-2 bg-[#c4aa8e]/10 text-[#c4aa8e] px-6 py-3 rounded-full font-medium">
                <TrendingUp className="w-5 h-5" />
                Ưu đãi 20% cho khách hàng mới - Chỉ còn 5 suất
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="section-padding bg-[#FAFAF8]">
          <div className="container-custom">
            <div className="grid lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
              {pricingPlans.map((plan, index) => (
                <div 
                  key={index}
                  className={`bg-white rounded-2xl p-8 shadow-lg relative ${
                    plan.popular 
                      ? 'ring-2 ring-[#c4aa8e] lg:-mt-4 lg:mb-0 lg:py-12' 
                      : ''
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#c4aa8e] text-white px-6 py-1 rounded-full text-sm font-semibold">
                      Phổ biến nhất
                    </div>
                  )}

                  {plan.discount && (
                    <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                      {plan.discount}
                    </div>
                  )}

                  {/* Header */}
                  <div className="text-center mb-6 pb-6 border-b border-[#E8E4DC]">
                    <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                    <p className="text-sm text-[#6B7280] mb-4">{plan.subtitle}</p>
                    
                    <div className="mb-2">
                      {plan.originalPrice && (
                        <div className="text-sm text-[#6B7280] line-through">
                          {plan.originalPrice}
                        </div>
                      )}
                      <div className="text-4xl font-bold text-[#c4aa8e]">
                        {plan.price}
                      </div>
                      <div className="text-sm text-[#6B7280] mt-1">
                        {plan.priceDetail}
                      </div>
                    </div>
                    
                    <p className="text-sm text-[#6B7280] mt-3">
                      {plan.description}
                    </p>
                  </div>

                  {/* Features */}
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        {feature.included ? (
                          <Check className="w-5 h-5 text-[#c4aa8e] flex-shrink-0 mt-0.5" />
                        ) : (
                          <X className="w-5 h-5 text-gray-300 flex-shrink-0 mt-0.5" />
                        )}
                        <span className={`text-sm ${
                          feature.included ? 'text-[#2D3436]' : 'text-gray-400'
                        }`}>
                          {feature.text}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <button 
                    className={`w-full py-3 rounded-lg font-semibold transition-all duration-200 ${
                      plan.popular
                        ? 'bg-[#c4aa8e] text-white hover:bg-[#b39a7e]'
                        : 'bg-[#F5F1E8] text-[#c4aa8e] hover:bg-[#E8E4DC]'
                    }`}
                  >
                    {plan.cta}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Add-ons */}
        <section className="section-padding bg-gradient-to-b from-[#F5F1E8] to-[#FAFAF8]">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                Dịch vụ bổ sung
              </h2>
              
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="space-y-4">
                  {addons.map((addon, index) => (
                    <div 
                      key={index}
                      className="flex justify-between items-center py-4 border-b border-[#E8E4DC] last:border-0"
                    >
                      <span className="text-[#2D3436] font-medium">{addon.name}</span>
                      <span className="text-[#c4aa8e] font-bold">{addon.price}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Pricing */}
        <section className="section-padding bg-[#FAFAF8]">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                Câu hỏi thường gặp
              </h2>

              <div className="space-y-6">
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h3 className="font-bold text-lg mb-2">Tôi có thể hủy hoặc tạm dừng gói tập không?</h3>
                  <p className="text-[#6B7280]">
                    Có. Bạn có thể freeze tài khoản tối đa 2 tuần/tháng miễn phí. 
                    Để hủy gói, vui lòng thông báo trước 7 ngày.
                  </p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h3 className="font-bold text-lg mb-2">Tôi có thể chuyển đổi giữa các gói không?</h3>
                  <p className="text-[#6B7280]">
                    Có. Bạn có thể nâng cấp bất cứ lúc nào. Phần chênh lệch sẽ được tính theo tỷ lệ.
                  </p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h3 className="font-bold text-lg mb-2">Có chính sách hoàn tiền không?</h3>
                  <p className="text-[#6B7280]">
                    Chúng tôi hoàn 100% nếu bạn không hài lòng sau buổi đầu tiên. 
                    Sau đó, hoàn tiền theo số buổi chưa sử dụng (trừ 20% phí admin).
                  </p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h3 className="font-bold text-lg mb-2">Buổi tập có thời hạn sử dụng không?</h3>
                  <p className="text-[#6B7280]">
                    Buổi tập có hiệu lực 45 ngày kể từ ngày kích hoạt gói. 
                    Bạn có thể freeze để kéo dài thời hạn.
                  </p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h3 className="font-bold text-lg mb-2">Có ưu đãi cho nhóm không?</h3>
                  <p className="text-[#6B7280]">
                    Có! Đăng ký từ 3 người trở lên được giảm 15%. Liên hệ để biết thêm chi tiết.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Money Back Guarantee */}
        <section className="section-padding bg-gradient-to-b from-[#F5F1E8] to-[#FAFAF8]">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto bg-white rounded-3xl p-8 md:p-12 shadow-xl text-center">
              <div className="w-16 h-16 bg-[#c4aa8e]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Star className="w-8 h-8 text-[#c4aa8e] fill-[#c4aa8e]" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Cam kết hài lòng 100%
              </h3>
              <p className="text-[#6B7280] leading-relaxed mb-8">
                Nếu bạn không hài lòng sau buổi đầu tiên, chúng tôi sẽ hoàn lại 100% số tiền. 
                Không hỏi. Không rườm rà. Đó là lời hứa của By Pilates.
              </p>
              <div className="flex flex-wrap justify-center gap-8 text-sm text-[#6B7280]">
                <div className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-[#c4aa8e]" />
                  <span>Không ràng buộc dài hạn</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-[#c4aa8e]" />
                  <span>Freeze miễn phí</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-[#c4aa8e]" />
                  <span>Hoàn tiền dễ dàng</span>
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
                Sẵn sàng bắt đầu chưa?
              </h2>
              <p className="text-lg text-white/90 mb-8">
                Đặt lịch tư vấn miễn phí để nhận gói ưu đãi đặc biệt dành cho bạn
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/contact" className="bg-white text-[#c4aa8e] px-8 py-4 rounded-lg font-semibold hover:bg-white/90 transition-all duration-200 shadow-lg cursor-pointer">
                  Đặt lịch ngay
                </a>
                <a href="/schedule" className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-all duration-200 cursor-pointer">
                  Xem lịch tập
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
