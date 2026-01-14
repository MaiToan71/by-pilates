# Các Trang Mới Đã Tạo - By Pilates Website

## 📄 Danh sách trang

### 1. ✅ [Về chúng tôi](/about)
**Đường dẫn:** `/about`

**Nội dung:**
- Câu chuyện thành lập By Pilates
- Sứ mệnh & Tầm nhìn
- Giá trị cốt lõi (Chuyên nghiệp, Cá nhân hóa, Tận tâm)
- Số liệu thành tích (10+ năm, 500+ học viên)
- Đội ngũ huấn luyện viên
- CTA: Đặt lịch tư vấn

**File:** `app/about/page.tsx`

---

### 2. ✅ [Chương trình](/programs)
**Đường dẫn:** `/programs`

**Nội dung:**
- 4 chương trình chi tiết:
  - Nền tảng Cơ bản (Beginner)
  - Sức mạnh Cốt lõi (Intermediate) - Popular
  - Phục hồi & Trị liệu (All Levels)
  - Mẹ bầu & Sau sinh (Specialized)
- Thời gian, tần suất, sĩ số cho từng chương trình
- Nội dung & lợi ích chi tiết
- Bảng so sánh chương trình
- CTA: Tư vấn miễn phí

**File:** `app/programs/page.tsx`

---

### 3. ✅ [Bảng giá](/pricing)
**Đường dẫn:** `/pricing`

**Nội dung:**
- 4 gói tập:
  - Trải nghiệm (350.000đ/buổi)
  - Cơ bản (2.800.000đ/tháng) - Popular
  - Nâng cao (4.200.000đ/tháng)
  - VIP (Liên hệ)
- Dịch vụ bổ sung (Private, tư vấn dinh dưỡng...)
- FAQ về giá, chính sách hủy, hoàn tiền
- Cam kết hài lòng 100%
- CTA: Đặt lịch, Xem lịch tập

**File:** `app/pricing/page.tsx`

---

### 4. ✅ [Lịch tập](/schedule)
**Đường dẫn:** `/schedule`

**Nội dung:**
- Lịch tập đầy đủ 7 ngày/tuần
- Chi tiết từng buổi:
  - Thời gian
  - Tên lớp
  - Level (Beginner/Intermediate/Advanced/Specialized)
  - Huấn luyện viên
  - Số chỗ còn trống
  - Nút đặt chỗ
- Quy định đặt chỗ, hủy chỗ, chuyển lịch
- Thông tin liên hệ
- CTA: Đăng ký tư vấn

**File:** `app/schedule/page.tsx`

---

### 5. ✅ [Blog](/blog)
**Đường dẫn:** `/blog`

**Nội dung:**
- Bài viết nổi bật (Featured post)
- Grid 9 bài viết với:
  - Thumbnail
  - Category tag
  - Tiêu đề & excerpt
  - Thời gian đọc
  - Tác giả & ngày đăng
- Bộ lọc danh mục (Sức khỏe, Kiến thức, Hướng dẫn...)
- Newsletter đăng ký
- Chủ đề phổ biến (tags)
- CTA: Nút "Xem thêm"

**File:** `app/blog/page.tsx`

---

### 6. ✅ [Liên hệ](/contact)
**Đường dẫn:** `/contact`

**Nội dung:**
- Form liên hệ đầy đủ:
  - Họ tên, Email, SĐT
  - Dịch vụ quan tâm (dropdown)
  - Tin nhắn
- Thông tin liên hệ:
  - Điện thoại: 0901 234 567
  - Email: hello@bypilates.vn
  - Địa chỉ: 123 Wellness St, Q1
- Giờ mở cửa
- Kết nối nhanh (Zalo, FB Messenger, WhatsApp)
- Google Maps (placeholder)
- Hướng dẫn đi lại
- CTA: Đặt lịch trải nghiệm

**File:** `app/contact/page.tsx`

---

## 🔗 Cập nhật Navigation

### Header
**File:** `components/Header.tsx`

Đã cập nhật menu với 7 mục:
- Trang chủ → `/`
- Về chúng tôi → `/about`
- Chương trình → `/programs`
- Bảng giá → `/pricing`
- Lịch tập → `/schedule`
- Blog → `/blog`
- Liên hệ → `/contact`

### Footer
**File:** `components/sections/Footer.tsx`

Đã cập nhật 2 cột:
1. **Liên kết:** Links đến các trang chính
2. **Dịch vụ:** Links đến các chương trình cụ thể

---

## 🎨 Thiết kế nhất quán

Tất cả 6 trang đều:
- ✓ Sử dụng màu chủ đạo #c4aa8e
- ✓ Typography: Poppins (heading) + Inter (body)
- ✓ Layout responsive mobile-first
- ✓ Header cố định + Footer
- ✓ SEO metadata
- ✓ Smooth transitions & animations
- ✓ CTA buttons rõ ràng
- ✓ Spacing nhất quán

---

## 🚀 Hướng dẫn sử dụng

### Chạy development server
```bash
cd by-pilates
npm run dev
```

### Truy cập các trang
- Trang chủ: http://localhost:3000
- Về chúng tôi: http://localhost:3000/about
- Chương trình: http://localhost:3000/programs
- Bảng giá: http://localhost:3000/pricing
- Lịch tập: http://localhost:3000/schedule
- Blog: http://localhost:3000/blog
- Liên hệ: http://localhost:3000/contact

---

## 📝 Tùy chỉnh nội dung

### Thay thế placeholder images
Tất cả các trang có placeholder cho:
- Hero images
- Instructor photos
- Blog thumbnails
- Team photos

### Cập nhật thông tin
- **Contact info:** Cập nhật trong `app/contact/page.tsx` và `components/sections/Footer.tsx`
- **Schedule:** Cập nhật object `schedule` trong `app/schedule/page.tsx`
- **Pricing:** Cập nhật array `pricingPlans` trong `app/pricing/page.tsx`
- **Blog posts:** Cập nhật array `posts` trong `app/blog/page.tsx`

---

## ✨ Tính năng nổi bật

### About Page
- Grid layout chuyên nghiệp
- Mission & Vision cards
- Stats section với gradient background
- Team showcase

### Programs Page
- Alternating layout (zigzag)
- Sticky sidebar với CTA
- Comparison table
- Level badges với màu sắc

### Pricing Page
- 4-column pricing grid
- Popular badge & discount tag
- Feature comparison với icons
- Money-back guarantee section

### Schedule Page
- 7-day schedule view
- Level color coding
- Available spots counter
- Booking rules section

### Blog Page
- Featured post hero
- Category filter
- Newsletter signup
- Popular topics tags

### Contact Page
- Full contact form with validation
- Multiple contact methods
- Opening hours
- Map integration (placeholder)

---

## 🎯 Conversion Flow

1. **Landing** (Homepage) → CTA "Đặt lịch"
2. **About** → Build trust → CTA "Tư vấn"
3. **Programs** → Show offerings → CTA "Đăng ký"
4. **Pricing** → Remove price objection → CTA "Đặt lịch"
5. **Schedule** → Show availability → CTA "Đặt chỗ"
6. **Contact** → Easy booking → Form submit

---

## 🔧 Technical Stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** TailwindCSS
- **Icons:** Lucide React
- **Fonts:** Google Fonts (Poppins, Inter)
- **Language:** TypeScript

---

## 📱 Mobile-First Design

Tất cả trang đã được tối ưu cho:
- Mobile (375px+)
- Tablet (768px+)
- Desktop (1024px+)
- Large screens (1440px+)

---

**Tất cả đã sẵn sàng để launch! 🚀**
