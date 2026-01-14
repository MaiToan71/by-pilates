import Header from '@/components/Header'
import Footer from '@/components/sections/Footer'
import { Calendar, Clock, ArrowRight, Tag } from 'lucide-react'

export const metadata = {
  title: 'Blog & Tin Tức Pilates | By Pilates',
  description: 'Khám phá kiến thức về Pilates, mẹo tập luyện, dinh dưỡng và câu chuyện truyền cảm hứng từ By Pilates.',
}

const posts = [
  {
    id: 1,
    title: '5 Lợi Ích Của Pilates Đối Với Dân Văn Phòng',
    excerpt: 'Ngồi nhiều gây đau lưng, vai gáy? Tìm hiểu cách Pilates giúp dân văn phòng cải thiện tư thế và giảm đau hiệu quả.',
    category: 'Sức khỏe',
    date: '10 Tháng 1, 2026',
    readTime: '5 phút đọc',
    image: '/blog/office-pilates.jpg',
    author: 'HLV Lan Anh',
    featured: true
  },
  {
    id: 2,
    title: 'Pilates Sau Sinh: Hành Trình Lấy Lại Vóc Dáng An Toàn',
    excerpt: 'Chia sẻ kinh nghiệm từ các mẹ bỉm sữa về cách phục hồi cơ thể sau sinh an toàn và bền vững với Pilates.',
    category: 'Mẹ & Bé',
    date: '8 Tháng 1, 2026',
    readTime: '7 phút đọc',
    image: '/blog/postnatal.jpg',
    author: 'HLV Minh Tú'
  },
  {
    id: 3,
    title: 'Sự Khác Biệt Giữa Mat Pilates Và Reformer Pilates',
    excerpt: 'Mat hay Reformer phù hợp hơn với bạn? Cùng phân tích ưu nhược điểm của từng loại hình để chọn đúng.',
    category: 'Kiến thức',
    date: '5 Tháng 1, 2026',
    readTime: '6 phút đọc',
    image: '/blog/mat-vs-reformer.jpg',
    author: 'HLV Hương Giang'
  },
  {
    id: 4,
    title: 'Dinh Dưỡng Hỗ Trợ Tập Pilates Hiệu Quả',
    excerpt: 'Ăn gì trước và sau khi tập Pilates? Chế độ dinh dưỡng giúp tối ưu hóa kết quả luyện tập của bạn.',
    category: 'Dinh dưỡng',
    date: '3 Tháng 1, 2026',
    readTime: '5 phút đọc',
    image: '/blog/nutrition.jpg',
    author: 'HLV Lan Anh'
  },
  {
    id: 5,
    title: 'Câu Chuyện Thành Công: Từ Đau Lưng Mãn Tính Đến Sống Khỏe',
    excerpt: 'Hành trình 6 tháng của chị Hoa (42 tuổi) chiến thắng đau lưng mãn tính nhờ Pilates. Cảm động và đầy cảm hứng.',
    category: 'Câu chuyện',
    date: '1 Tháng 1, 2026',
    readTime: '8 phút đọc',
    image: '/blog/success-story.jpg',
    author: 'By Pilates Team'
  },
  {
    id: 6,
    title: '10 Động Tác Pilates Cơ Bản Cho Người Mới Bắt Đầu',
    excerpt: 'Hướng dẫn chi tiết 10 động tác nền tảng giúp bạn tự tin bước vào lớp Pilates đầu tiên.',
    category: 'Hướng dẫn',
    date: '28 Tháng 12, 2025',
    readTime: '10 phút đọc',
    image: '/blog/basic-moves.jpg',
    author: 'HLV Minh Tú'
  },
  {
    id: 7,
    title: 'Pilates Cho Người Cao Tuổi: An Toàn Và Hiệu Quả',
    excerpt: 'Người trên 50 tuổi có nên tập Pilates? Tìm hiểu lợi ích và những lưu ý quan trọng cho độ tuổi này.',
    category: 'Sức khỏe',
    date: '25 Tháng 12, 2025',
    readTime: '6 phút đọc',
    image: '/blog/senior-pilates.jpg',
    author: 'HLV Hương Giang'
  },
  {
    id: 8,
    title: 'Thiết Bị Pilates Tại Nhà: Đáng Đầu Tư Hay Không?',
    excerpt: 'Review các thiết bị Pilates phổ biến: Magic Circle, Resistance Band, Pilates Ball. Nên mua gì?',
    category: 'Dụng cụ',
    date: '20 Tháng 12, 2025',
    readTime: '7 phút đọc',
    image: '/blog/equipment.jpg',
    author: 'By Pilates Team'
  },
  {
    id: 9,
    title: 'Tập Pilates Bao Lâu Thì Thấy Kết Quả?',
    excerpt: 'Timeline thực tế về kết quả Pilates: Tuần đầu, tháng đầu và sau 3 tháng bạn có thể kỳ vọng gì?',
    category: 'Kiến thức',
    date: '15 Tháng 12, 2025',
    readTime: '5 phút đọc',
    image: '/blog/results.jpg',
    author: 'HLV Lan Anh'
  }
]

const categories = ['Tất cả', 'Sức khỏe', 'Kiến thức', 'Hướng dẫn', 'Mẹ & Bé', 'Dinh dưỡng', 'Câu chuyện']

export default function BlogPage() {
  const featuredPost = posts.find(p => p.featured)
  const regularPosts = posts.filter(p => !p.featured)

  return (
    <>
      <Header />
      <main className="min-h-screen pt-20">
        {/* Hero */}
        <section className="section-padding bg-gradient-to-b from-[#FAFAF8] to-[#F5F1E8]">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Blog & <span className="text-[#c4aa8e]">Tin tức</span>
              </h1>
              <p className="text-xl text-[#6B7280] leading-relaxed">
                Kiến thức Pilates, mẹo tập luyện, dinh dưỡng và câu chuyện truyền cảm hứng 
                từ cộng đồng By Pilates.
              </p>
            </div>
          </div>
        </section>

        {/* Categories Filter */}
        <section className="py-8 bg-white border-y border-[#E8E4DC] sticky top-20 z-40">
          <div className="container-custom">
            <div className="flex overflow-x-auto gap-3 pb-2 scrollbar-hide">
              {categories.map((cat) => (
                <button
                  key={cat}
                  className={`px-6 py-2 rounded-full font-medium whitespace-nowrap transition-all ${
                    cat === 'Tất cả'
                      ? 'bg-[#c4aa8e] text-white'
                      : 'bg-[#F5F1E8] text-[#6B7280] hover:bg-[#E8E4DC]'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Post */}
        {featuredPost && (
          <section className="section-padding bg-[#FAFAF8]">
            <div className="container-custom">
              <div className="max-w-6xl mx-auto">
                <div className="bg-white rounded-3xl overflow-hidden shadow-2xl cursor-pointer hover:shadow-3xl transition-shadow duration-300">
                  <div className="grid lg:grid-cols-2">
                    {/* Image */}
                    <div className="aspect-[4/3] lg:aspect-auto bg-gradient-to-br from-[#c4aa8e]/20 to-[#c4aa8e]/5 flex items-center justify-center">
                      <div className="text-center text-[#6B7280]">
                        <p className="text-sm font-medium">Featured Image</p>
                        <p className="text-xs mt-1">{featuredPost.title}</p>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-8 lg:p-12 flex flex-col justify-center">
                      <div className="inline-block bg-[#c4aa8e] text-white px-4 py-1 rounded-full text-sm font-semibold mb-4 w-fit">
                        Bài viết nổi bật
                      </div>

                      <div className="flex items-center gap-4 text-sm text-[#6B7280] mb-4">
                        <span className="flex items-center gap-1">
                          <Tag className="w-4 h-4" />
                          {featuredPost.category}
                        </span>
                        <span className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {featuredPost.date}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {featuredPost.readTime}
                        </span>
                      </div>

                      <h2 className="text-3xl md:text-4xl font-bold mb-4 hover:text-[#c4aa8e] transition-colors">
                        {featuredPost.title}
                      </h2>

                      <p className="text-[#6B7280] leading-relaxed mb-6">
                        {featuredPost.excerpt}
                      </p>

                      <div className="flex items-center justify-between pt-4 border-t border-[#E8E4DC]">
                        <span className="text-sm text-[#6B7280]">
                          Bởi <span className="font-semibold text-[#2D3436]">{featuredPost.author}</span>
                        </span>
                        <button className="text-[#c4aa8e] font-semibold flex items-center gap-2 hover:gap-3 transition-all">
                          Đọc tiếp
                          <ArrowRight className="w-5 h-5" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Blog Grid */}
        <section className="section-padding bg-[#FAFAF8]">
          <div className="container-custom">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {regularPosts.map((post) => (
                <article 
                  key={post.id}
                  className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer group"
                >
                  {/* Image */}
                  <div className="aspect-[16/10] bg-gradient-to-br from-[#c4aa8e]/20 to-[#c4aa8e]/5 flex items-center justify-center overflow-hidden">
                    <div className="text-center text-[#6B7280] group-hover:scale-105 transition-transform duration-300">
                      <p className="text-xs">Blog Image</p>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    {/* Meta */}
                    <div className="flex items-center gap-3 text-xs text-[#6B7280] mb-3">
                      <span className="bg-[#c4aa8e]/10 text-[#c4aa8e] px-3 py-1 rounded-full font-medium">
                        {post.category}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {post.readTime}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold mb-3 group-hover:text-[#c4aa8e] transition-colors line-clamp-2">
                      {post.title}
                    </h3>

                    {/* Excerpt */}
                    <p className="text-[#6B7280] text-sm leading-relaxed mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>

                    {/* Footer */}
                    <div className="flex items-center justify-between pt-4 border-t border-[#E8E4DC]">
                      <div className="text-xs text-[#6B7280]">
                        <div className="font-semibold text-[#2D3436]">{post.author}</div>
                        <div>{post.date}</div>
                      </div>
                      <ArrowRight className="w-5 h-5 text-[#c4aa8e] group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* Load More */}
            <div className="text-center mt-12">
              <button className="btn-secondary">
                Xem thêm bài viết
              </button>
            </div>
          </div>
        </section>

        {/* Newsletter */}
        <section className="section-padding bg-gradient-to-br from-[#c4aa8e] to-[#b39a7e] text-white">
          <div className="container-custom">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Đăng ký nhận tin
              </h2>
              <p className="text-lg text-white/90 mb-8">
                Nhận mẹo Pilates, kiến thức sức khỏe và ưu đãi đặc biệt qua email hàng tuần
              </p>

              <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Email của bạn"
                  className="flex-1 px-6 py-4 rounded-lg text-[#2D3436] focus:outline-none focus:ring-2 focus:ring-white"
                />
                <button className="bg-white text-[#c4aa8e] px-8 py-4 rounded-lg font-semibold hover:bg-white/90 transition-all duration-200 shadow-lg">
                  Đăng ký
                </button>
              </form>

              <p className="text-sm text-white/70 mt-4">
                Chúng tôi tôn trọng quyền riêng tư của bạn. Hủy đăng ký bất cứ lúc nào.
              </p>
            </div>
          </div>
        </section>

        {/* Popular Topics */}
        <section className="section-padding bg-[#FAFAF8]">
          <div className="container-custom">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                Chủ đề phổ biến
              </h2>

              <div className="flex flex-wrap justify-center gap-4">
                {[
                  'Đau lưng',
                  'Tư thế đúng',
                  'Giảm cân',
                  'Sau sinh',
                  'Người mới',
                  'Reformer',
                  'Tại nhà',
                  'Dinh dưỡng',
                  'Yoga vs Pilates',
                  'Sức khỏe tinh thần'
                ].map((topic) => (
                  <button
                    key={topic}
                    className="px-6 py-3 bg-white hover:bg-[#c4aa8e] hover:text-white text-[#6B7280] rounded-full font-medium transition-all duration-200 shadow-sm hover:shadow-md cursor-pointer"
                  >
                    {topic}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
