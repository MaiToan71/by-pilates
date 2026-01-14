import { Metadata } from 'next';
import Link from 'next/link';
import { 
  Check, 
  Clock, 
  Users, 
  Calendar, 
  Star,
  TrendingUp,
  Target,
  Dumbbell,
  Heart,
  Zap,
  Shield,
  Award,
  ArrowRight,
  CheckCircle2,
  X
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Sức mạnh Cốt lõi - Chương trình Pilates Trung cấp | By Pilates',
  description: 'Chương trình Pilates trung cấp giúp xây dựng sức mạnh cốt lõi, cải thiện tư thế và tăng cường sự linh hoạt. Phù hợp cho người đã có nền tảng cơ bản.',
  keywords: 'pilates trung cấp, sức mạnh cốt lõi, core strength, pilates intermediate, tập pilates nâng cao',
};

export default function CoreStrengthPage() {
  const programFeatures = [
    {
      icon: Target,
      title: 'Xây dựng Core mạnh mẽ',
      description: 'Tập trung phát triển sức mạnh vùng lõi (core) - nền tảng cho mọi chuyển động'
    },
    {
      icon: Dumbbell,
      title: 'Tăng sức bền',
      description: 'Phát triển sức bền cơ bắp và khả năng kiểm soát cơ thể trong thời gian dài'
    },
    {
      icon: TrendingUp,
      title: 'Nâng cao kỹ thuật',
      description: 'Thực hiện các bài tập phức tạp hơn với độ chính xác cao'
    },
    {
      icon: Zap,
      title: 'Năng lượng dồi dào',
      description: 'Cải thiện tuần hoàn máu, tăng cường năng lượng cho cả ngày'
    }
  ];

  const benefits = [
    'Tăng 40% sức mạnh cốt lõi sau 8 tuần',
    'Giảm đau lưng và cải thiện tư thế đáng kể',
    'Vóc dáng săn chắc, cơ bụng rõ nét',
    'Tăng cường sự linh hoạt và phạm vi chuyển động',
    'Cải thiện khả năng cân bằng và phối hợp',
    'Tăng mật độ xương, phòng ngừa loãng xương',
    'Giảm căng thẳng, cải thiện giấc ngủ',
    'Nâng cao hiệu suất trong các môn thể thao khác'
  ];

  const curriculum = [
    {
      week: 'Tuần 1-2',
      title: 'Làm quen với Intermediate',
      topics: [
        'Ôn tập và hoàn thiện các động tác cơ bản',
        'Giới thiệu các biến thể nâng cao',
        'Phát triển nhận thức cơ thể sâu hơn',
        'Tăng cường kết nối Mind-Body'
      ]
    },
    {
      week: 'Tuần 3-4',
      title: 'Xây dựng nền tảng Core',
      topics: [
        'Series Hundred biến thể nâng cao',
        'Roll Up & Roll Over với kháng lực',
        'Single/Double Leg Stretch chuẩn hóa',
        'Spine Stretch & Saw với độ sâu tăng'
      ]
    },
    {
      week: 'Tuần 5-6',
      title: 'Sức mạnh & Kiểm soát',
      topics: [
        'Teaser variations - đỉnh cao của core strength',
        'Swan Dive & Swimming nâng cao',
        'Side Kicks Series - tăng cường obliques',
        'Reformer intermediate exercises'
      ]
    },
    {
      week: 'Tuần 7-8',
      title: 'Tổng hợp & Nâng cao',
      topics: [
        'Flow sequences kết hợp nhiều động tác',
        'Advanced transitions và choreography',
        'Challenge classes với props',
        'Đánh giá tiến độ và định hướng tiếp theo'
      ]
    }
  ];

  const classStructure = [
    { phase: 'Warm-up & Breathwork', duration: '10 phút', description: 'Khởi động nhẹ nhàng, breathing patterns nâng cao' },
    { phase: 'Core Activation', duration: '15 phút', description: 'Series bài tập tập trung vào cốt lõi' },
    { phase: 'Full Body Strength', duration: '20 phút', description: 'Tích hợp toàn thân, sử dụng props và thiết bị' },
    { phase: 'Flexibility & Balance', duration: '10 phút', description: 'Stretch sâu, cân bằng và kiểm soát' },
    { phase: 'Cool-down', duration: '5 phút', description: 'Thư giãn, breathing và meditation' }
  ];

  const scheduleOptions = [
    {
      type: 'Mat Class',
      days: 'Thứ 2, 4, 6',
      time: '6:00 - 7:00 hoặc 18:00 - 19:00',
      capacity: '12 người',
      equipment: 'Mat, Ring, Band, Ball'
    },
    {
      type: 'Reformer Class',
      days: 'Thứ 3, 5, 7',
      time: '6:30 - 7:30 hoặc 18:30 - 19:30',
      capacity: '8 người',
      equipment: 'Reformer, Cadillac'
    },
    {
      type: 'Mixed Equipment',
      days: 'Cuối tuần',
      time: '8:00 - 9:00 hoặc 16:00 - 17:00',
      capacity: '10 người',
      equipment: 'Tất cả thiết bị'
    }
  ];

  const testimonials = [
    {
      name: 'Lan Anh',
      age: 34,
      occupation: 'Marketing Director',
      image: '/testimonials/lan-anh.jpg',
      rating: 5,
      text: 'Sau 2 tháng tập Core Strength, tôi không còn đau lưng nữa! Công việc văn phòng không còn là nỗi ám ảnh. Cơ bụng săn chắc, tự tin hơn hẳn.',
      result: 'Giảm 5cm vòng bụng, tăng 45% core strength'
    },
    {
      name: 'Minh Tuấn',
      age: 29,
      occupation: 'Software Engineer',
      image: '/testimonials/minh-tuan.jpg',
      rating: 5,
      text: 'Là một developer, tôi ngồi máy tính 8-10 tiếng/ngày. Chương trình này đã thay đổi tư thế của tôi hoàn toàn. Năng lượng tốt hơn nhiều!',
      result: 'Cải thiện tư thế 80%, tăng năng suất làm việc'
    },
    {
      name: 'Thu Hà',
      age: 42,
      occupation: 'Yoga Instructor',
      image: '/testimonials/thu-ha.jpg',
      rating: 5,
      text: 'Dù đã dạy yoga 10 năm, Pilates Core Strength vẫn mang đến challenges mới. Sự kết hợp hoàn hảo cho practice của tôi!',
      result: 'Nâng cao teaching skills, tích hợp vào yoga classes'
    }
  ];

  const pricingOptions = [
    {
      name: 'Gói 1 tháng',
      price: '3.200.000đ',
      originalPrice: '3.600.000đ',
      sessions: '12 buổi',
      perSession: '~267.000đ/buổi',
      savings: 'Tiết kiệm 400.000đ',
      features: [
        '12 buổi tập trong tháng',
        'Chọn Mat hoặc Reformer class',
        'Tư vấn dinh dưỡng cơ bản',
        'Theo dõi tiến độ hàng tuần',
        'Private Facebook group'
      ],
      popular: false
    },
    {
      name: 'Gói 3 tháng',
      price: '8.400.000đ',
      originalPrice: '10.800.000đ',
      sessions: '36 buổi',
      perSession: '~233.000đ/buổi',
      savings: 'Tiết kiệm 2.400.000đ',
      features: [
        '36 buổi (3 buổi/tuần)',
        'Linh hoạt Mat + Reformer',
        'Kế hoạch dinh dưỡng chi tiết',
        '2 buổi Private coaching miễn phí',
        'Body composition analysis',
        'Workshops & events miễn phí'
      ],
      popular: true
    },
    {
      name: 'Gói 6 tháng',
      price: '15.600.000đ',
      originalPrice: '21.600.000đ',
      sessions: '72 buổi',
      perSession: '~217.000đ/buổi',
      savings: 'Tiết kiệm 6.000.000đ',
      features: [
        '72 buổi (3 buổi/tuần)',
        'Không giới hạn Mat/Reformer',
        'Chương trình dinh dưỡng toàn diện',
        '4 buổi Private coaching miễn phí',
        'Ưu tiên đăng ký lịch',
        'Miễn phí tất cả workshops',
        'Guest passes cho bạn bè'
      ],
      popular: false
    }
  ];

  const faqs = [
    {
      question: 'Tôi cần có nền tảng gì để tham gia chương trình này?',
      answer: 'Bạn nên đã hoàn thành chương trình Foundation hoặc có ít nhất 2-3 tháng kinh nghiệm tập Pilates. Nếu chưa chắc chắn, hãy đăng ký buổi đánh giá miễn phí để huấn luyện viên tư vấn.'
    },
    {
      question: 'Khác biệt giữa Mat và Reformer class?',
      answer: 'Mat class tập trung vào sức mạnh cơ thể tự nhiên, phát triển khả năng kiểm soát. Reformer class sử dụng thiết bị với lò xo kháng lực, cho phép điều chỉnh độ khó và hỗ trợ chính xác hơn. Cả hai đều hiệu quả, bạn có thể kết hợp.'
    },
    {
      question: 'Bao lâu để thấy kết quả?',
      answer: 'Hầu hết học viên thấy cải thiện rõ rệt về sức mạnh core và tư thế sau 4-6 tuần (12-18 buổi). Thay đổi về vóc dáng thường xuất hiện sau 8-12 tuần khi kết hợp với chế độ ăn hợp lý.'
    },
    {
      question: 'Tôi có thể tập khi đang bị đau lưng không?',
      answer: 'Pilates rất tốt cho người đau lưng, nhưng bạn nên trao đổi cụ thể với huấn luyện viên trước. Chúng tôi có thể điều chỉnh các động tác phù hợp. Nếu đau nặng, nên tham khảo bác sĩ trước.'
    },
    {
      question: 'Tôi có thể miss class được không?',
      answer: 'Có, bạn có thể báo nghỉ trước 12 giờ để không mất buổi. Buổi tập sẽ được bảo lưu và bạn có thể đăng ký vào lớp khác trong tháng. Gói 3-6 tháng có thời gian bảo lưu lâu hơn.'
    },
    {
      question: 'Có cần mang gì đến lớp?',
      answer: 'Bạn chỉ cần mang quần áo tập thoải mái, khăn và nước uống. Studio cung cấp mat, thiết bị và tất chống trượt miễn phí. Tủ khóa và phòng thay đồ đầy đủ tiện nghi.'
    }
  ];

  const whyChooseUs = [
    {
      title: 'Huấn luyện viên chuyên nghiệp',
      description: 'Đội ngũ được chứng nhận quốc tế, kinh nghiệm 7+ năm',
      icon: Award
    },
    {
      title: 'Lớp nhỏ, chú ý cá nhân',
      description: 'Tối đa 8-12 người/lớp, đảm bảo theo dõi kỹ từng học viên',
      icon: Users
    },
    {
      title: 'Thiết bị hiện đại',
      description: 'Reformer, Cadillac, Chair cao cấp của Balanced Body',
      icon: Dumbbell
    },
    {
      title: 'Linh hoạt lịch tập',
      description: 'Nhiều khung giờ sáng/tối, cuối tuần. Đặt lịch dễ dàng qua app',
      icon: Calendar
    }
  ];

  return (
    <div className="min-h-screen bg-[#FDFBF7]">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#c4aa8e] via-[#b89978] to-[#a88968] text-white py-20">
        <div className="container-custom">
          <div className="max-w-4xl">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-sm mb-6 text-white/80">
              <Link href="/" className="hover:text-white transition-colors">Trang chủ</Link>
              <span>/</span>
              <Link href="/programs" className="hover:text-white transition-colors">Chương trình</Link>
              <span>/</span>
              <span className="text-white">Sức mạnh Cốt lõi</span>
            </div>

            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <Star className="w-4 h-4 fill-yellow-300 text-yellow-300" />
              <span className="text-sm font-medium">Chương trình phổ biến nhất</span>
            </div>

            <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl mb-6">
              Sức mạnh Cốt lõi
            </h1>
            
            <p className="text-xl md:text-2xl mb-8 text-white/90 leading-relaxed">
              Chương trình Pilates trung cấp giúp xây dựng sức mạnh core vững chắc, 
              cải thiện tư thế và nâng cao khả năng kiểm soát cơ thể.
            </p>

            {/* Quick Info */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                <div className="flex items-center gap-2 mb-2">
                  <TrendingUp className="w-5 h-5" />
                  <span className="text-sm text-white/80">Cấp độ</span>
                </div>
                <p className="font-semibold text-lg">Trung cấp</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Clock className="w-5 h-5" />
                  <span className="text-sm text-white/80">Thời lượng</span>
                </div>
                <p className="font-semibold text-lg">8-12 tuần</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Calendar className="w-5 h-5" />
                  <span className="text-sm text-white/80">Tần suất</span>
                </div>
                <p className="font-semibold text-lg">3 buổi/tuần</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Users className="w-5 h-5" />
                  <span className="text-sm text-white/80">Sĩ số</span>
                </div>
                <p className="font-semibold text-lg">8-12 người</p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="/contact" 
                className="btn-primary bg-white text-[#c4aa8e] hover:bg-white/90 inline-flex items-center justify-center gap-2"
              >
                Đăng ký ngay
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link 
                href="/schedule" 
                className="btn-secondary border-white text-white hover:bg-white/10 inline-flex items-center justify-center gap-2"
              >
                <Calendar className="w-5 h-5" />
                Xem lịch tập
              </Link>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-1/3 h-full opacity-10">
          <div className="absolute top-10 right-10 w-64 h-64 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-32 w-48 h-48 bg-white rounded-full blur-3xl"></div>
        </div>
      </section>

      {/* Program Features */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-gray-900 mb-4">
              Điểm nổi bật của chương trình
            </h2>
            <p className="text-lg text-gray-600">
              Chương trình được thiết kế khoa học, tập trung vào việc phát triển toàn diện sức mạnh cốt lõi
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {programFeatures.map((feature, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-[#c4aa8e] to-[#b89978] rounded-xl flex items-center justify-center mb-4">
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-heading font-semibold text-xl mb-3 text-gray-900">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-padding bg-gradient-to-br from-[#F5F1E8] to-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-gray-900 mb-6">
                Lợi ích bạn nhận được
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Chương trình Sức mạnh Cốt lõi mang lại nhiều lợi ích vượt trội cho sức khỏe 
                và vóc dáng của bạn, được chứng minh qua hàng trăm học viên thành công.
              </p>
              
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-[#c4aa8e] rounded-full flex items-center justify-center mt-0.5">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <p className="text-gray-700 leading-relaxed">{benefit}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-6 bg-white rounded-2xl border-2 border-[#c4aa8e]/30">
                <div className="flex items-start gap-4">
                  <Shield className="w-8 h-8 text-[#c4aa8e] flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-lg mb-2 text-gray-900">Cam kết kết quả</h4>
                    <p className="text-gray-600">
                      Nếu sau 8 tuần không thấy cải thiện rõ rệt, chúng tôi sẽ hoàn tiền 100% 
                      hoặc tặng thêm 4 tuần miễn phí.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-[4/5] bg-gradient-to-br from-[#c4aa8e]/20 to-[#b89978]/20 rounded-3xl overflow-hidden">
                <img 
                  src="/images/core-strength-benefits.jpg" 
                  alt="Core strength training"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Stats Overlay */}
              <div className="absolute bottom-8 left-8 right-8 bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-xl">
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center">
                    <p className="text-3xl font-bold text-[#c4aa8e]">+40%</p>
                    <p className="text-sm text-gray-600 mt-1">Sức mạnh core</p>
                  </div>
                  <div className="text-center border-x border-gray-200">
                    <p className="text-3xl font-bold text-[#c4aa8e]">-5cm</p>
                    <p className="text-sm text-gray-600 mt-1">Vòng bụng TB</p>
                  </div>
                  <div className="text-center">
                    <p className="text-3xl font-bold text-[#c4aa8e]">95%</p>
                    <p className="text-sm text-gray-600 mt-1">Hài lòng</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-gray-900 mb-4">
              Nội dung chương trình 8 tuần
            </h2>
            <p className="text-lg text-gray-600">
              Lộ trình chi tiết từ cơ bản đến nâng cao, giúp bạn phát triển sức mạnh một cách khoa học
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {curriculum.map((phase, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100"
              >
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#c4aa8e] to-[#b89978] rounded-xl flex items-center justify-center">
                      <span className="text-2xl font-bold text-white">{index + 1}</span>
                    </div>
                  </div>
                  
                  <div className="flex-grow">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-sm font-medium text-[#c4aa8e] bg-[#c4aa8e]/10 px-3 py-1 rounded-full">
                        {phase.week}
                      </span>
                      <h3 className="font-heading font-bold text-xl text-gray-900">
                        {phase.title}
                      </h3>
                    </div>
                    
                    <ul className="space-y-2">
                      {phase.topics.map((topic, topicIndex) => (
                        <li key={topicIndex} className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-[#c4aa8e] flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">{topic}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Class Structure */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-gray-900 mb-4">
              Cấu trúc buổi tập
            </h2>
            <p className="text-lg text-gray-600">
              Mỗi buổi tập kéo dài 60 phút, được thiết kế khoa học để tối ưu hiệu quả
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#c4aa8e] to-[#b89978]"></div>

              <div className="space-y-6">
                {classStructure.map((phase, index) => (
                  <div key={index} className="relative pl-20">
                    {/* Timeline dot */}
                    <div className="absolute left-6 top-6 w-5 h-5 bg-[#c4aa8e] rounded-full border-4 border-white shadow-md"></div>
                    
                    <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                      <div className="flex items-start justify-between mb-3">
                        <h3 className="font-heading font-bold text-lg text-gray-900">
                          {phase.phase}
                        </h3>
                        <span className="text-sm font-semibold text-[#c4aa8e] bg-[#c4aa8e]/10 px-3 py-1 rounded-full">
                          {phase.duration}
                        </span>
                      </div>
                      <p className="text-gray-600">{phase.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 text-center">
              <p className="text-lg font-semibold text-gray-900 mb-2">
                Tổng thời gian: 60 phút
              </p>
              <p className="text-gray-600">
                Đảm bảo cân bằng giữa cường độ, kỹ thuật và thư giãn
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Schedule Options */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-gray-900 mb-4">
              Lịch tập linh hoạt
            </h2>
            <p className="text-lg text-gray-600">
              Chọn loại lớp phù hợp với mục tiêu và lịch trình của bạn
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {scheduleOptions.map((option, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border-2 border-gray-100 hover:border-[#c4aa8e]"
              >
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#c4aa8e] to-[#b89978] rounded-full flex items-center justify-center mx-auto mb-4">
                    <Dumbbell className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-heading font-bold text-2xl text-gray-900 mb-2">
                    {option.type}
                  </h3>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-3 pb-3 border-b border-gray-100">
                    <Calendar className="w-5 h-5 text-[#c4aa8e]" />
                    <div>
                      <p className="text-sm text-gray-500">Lịch tập</p>
                      <p className="font-semibold text-gray-900">{option.days}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 pb-3 border-b border-gray-100">
                    <Clock className="w-5 h-5 text-[#c4aa8e]" />
                    <div>
                      <p className="text-sm text-gray-500">Khung giờ</p>
                      <p className="font-semibold text-gray-900">{option.time}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 pb-3 border-b border-gray-100">
                    <Users className="w-5 h-5 text-[#c4aa8e]" />
                    <div>
                      <p className="text-sm text-gray-500">Sĩ số</p>
                      <p className="font-semibold text-gray-900">{option.capacity}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Dumbbell className="w-5 h-5 text-[#c4aa8e]" />
                    <div>
                      <p className="text-sm text-gray-500">Thiết bị</p>
                      <p className="font-semibold text-gray-900">{option.equipment}</p>
                    </div>
                  </div>
                </div>

                <Link 
                  href="/schedule"
                  className="btn-primary w-full mt-6 inline-flex items-center justify-center gap-2"
                >
                  Xem lịch chi tiết
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-4">
              Không tìm thấy khung giờ phù hợp? Chúng tôi có thể sắp xếp lớp riêng cho bạn.
            </p>
            <Link href="/contact" className="text-[#c4aa8e] font-semibold hover:underline">
              Liên hệ ngay →
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-gradient-to-br from-[#F5F1E8] to-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-gray-900 mb-4">
              Câu chuyện thành công
            </h2>
            <p className="text-lg text-gray-600">
              Hàng trăm học viên đã thay đổi cuộc sống với chương trình Sức mạnh Cốt lõi
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow"
              >
                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Testimonial */}
                <p className="text-gray-700 leading-relaxed mb-6 italic">
                  "{testimonial.text}"
                </p>

                {/* Result */}
                <div className="bg-[#c4aa8e]/10 rounded-xl p-4 mb-6">
                  <p className="text-sm font-semibold text-[#c4aa8e] mb-1">Kết quả đạt được:</p>
                  <p className="text-sm text-gray-700">{testimonial.result}</p>
                </div>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-[#c4aa8e] to-[#b89978] rounded-full overflow-hidden">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.name}, {testimonial.age}</p>
                    <p className="text-sm text-gray-600">{testimonial.occupation}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link 
              href="/blog"
              className="inline-flex items-center gap-2 text-[#c4aa8e] font-semibold hover:gap-3 transition-all"
            >
              Xem thêm câu chuyện truyền cảm hứng
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-gray-900 mb-4">
              Gói tập phù hợp với bạn
            </h2>
            <p className="text-lg text-gray-600">
              Cam kết giá tốt nhất, không phí ẩn. Đăng ký dài hạn được ưu đãi hơn.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingOptions.map((plan, index) => (
              <div 
                key={index}
                className={`relative bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 ${
                  plan.popular ? 'border-2 border-[#c4aa8e] scale-105' : 'border border-gray-200'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="bg-gradient-to-r from-[#c4aa8e] to-[#b89978] text-white text-sm font-semibold px-4 py-2 rounded-full shadow-lg">
                      Phổ biến nhất
                    </span>
                  </div>
                )}

                <div className="text-center mb-6 pt-2">
                  <h3 className="font-heading font-bold text-2xl text-gray-900 mb-2">
                    {plan.name}
                  </h3>
                  <div className="mb-2">
                    <span className="text-4xl font-bold text-[#c4aa8e]">{plan.price}</span>
                  </div>
                  <p className="text-sm text-gray-500 line-through mb-1">{plan.originalPrice}</p>
                  <p className="text-sm font-medium text-green-600">{plan.savings}</p>
                  <p className="text-sm text-gray-600 mt-2">{plan.perSession}</p>
                </div>

                <div className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-[#c4aa8e] flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                <Link 
                  href="/contact"
                  className={`w-full inline-flex items-center justify-center gap-2 ${
                    plan.popular ? 'btn-primary' : 'btn-secondary'
                  }`}
                >
                  Đăng ký ngay
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center max-w-2xl mx-auto">
            <div className="bg-gradient-to-r from-[#c4aa8e]/10 to-[#b89978]/10 rounded-2xl p-6">
              <Heart className="w-8 h-8 text-[#c4aa8e] mx-auto mb-3" />
              <h4 className="font-semibold text-lg mb-2 text-gray-900">Ưu đãi đặc biệt</h4>
              <p className="text-gray-600 mb-4">
                Đăng ký trước ngày 31/01 nhận thêm <strong>2 buổi Private miễn phí</strong> trị giá 2.000.000đ
              </p>
              <Link href="/contact" className="text-[#c4aa8e] font-semibold hover:underline">
                Đăng ký ngay để không bỏ lỡ →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-gray-900 mb-4">
              Tại sao chọn By Pilates?
            </h2>
            <p className="text-lg text-gray-600">
              Chúng tôi cam kết mang đến trải nghiệm tập luyện tốt nhất với đội ngũ chuyên nghiệp
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((reason, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition-shadow"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-[#c4aa8e] to-[#b89978] rounded-full flex items-center justify-center mx-auto mb-4">
                  <reason.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-heading font-semibold text-lg mb-2 text-gray-900">
                  {reason.title}
                </h3>
                <p className="text-sm text-gray-600">
                  {reason.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-gray-900 mb-4">
              Câu hỏi thường gặp
            </h2>
            <p className="text-lg text-gray-600">
              Giải đáp những thắc mắc phổ biến về chương trình Sức mạnh Cốt lõi
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <details 
                key={index}
                className="group bg-white rounded-xl border border-gray-200 overflow-hidden hover:border-[#c4aa8e] transition-colors"
              >
                <summary className="cursor-pointer p-6 font-semibold text-gray-900 flex items-center justify-between">
                  <span>{faq.question}</span>
                  <ArrowRight className="w-5 h-5 text-[#c4aa8e] group-open:rotate-90 transition-transform" />
                </summary>
                <div className="px-6 pb-6 text-gray-600 leading-relaxed">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-4">
              Còn thắc mắc khác? Đội ngũ tư vấn của chúng tôi sẵn sàng hỗ trợ bạn.
            </p>
            <Link 
              href="/contact"
              className="inline-flex items-center gap-2 text-[#c4aa8e] font-semibold hover:gap-3 transition-all"
            >
              Liên hệ tư vấn miễn phí
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding bg-gradient-to-br from-[#c4aa8e] via-[#b89978] to-[#a88968] text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl mb-6">
              Sẵn sàng thay đổi?
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Hãy để chúng tôi đồng hành cùng bạn trên hành trình xây dựng sức mạnh cốt lõi 
              và một phiên bản khỏe mạnh, tự tin hơn của chính mình.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Link 
                href="/contact"
                className="btn-primary bg-white text-[#c4aa8e] hover:bg-white/90 inline-flex items-center justify-center gap-2"
              >
                Đặt lịch trải nghiệm miễn phí
                <Calendar className="w-5 h-5" />
              </Link>
              <Link 
                href="/schedule"
                className="btn-secondary border-white text-white hover:bg-white/10 inline-flex items-center justify-center gap-2"
              >
                Xem lịch tập chi tiết
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>

            <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto pt-8 border-t border-white/20">
              <div>
                <p className="text-3xl font-bold mb-1">500+</p>
                <p className="text-sm text-white/80">Học viên thành công</p>
              </div>
              <div>
                <p className="text-3xl font-bold mb-1">10+</p>
                <p className="text-sm text-white/80">Năm kinh nghiệm</p>
              </div>
              <div>
                <p className="text-3xl font-bold mb-1">95%</p>
                <p className="text-sm text-white/80">Hài lòng</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
