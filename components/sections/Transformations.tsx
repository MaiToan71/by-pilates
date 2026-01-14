import { Star, Quote } from 'lucide-react'

const testimonials = [
  {
    name: 'Sarah M.',
    age: 34,
    result: 'No more back pain',
    quote: 'After 3 months of working with [Instructor Name], my chronic lower back pain is completely gone. I can finally play with my kids without discomfort!',
    rating: 5,
    image: null // Replace with actual client photo
  },
  {
    name: 'Jennifer L.',
    age: 42,
    result: 'Stronger core & better posture',
    quote: 'I spend 8 hours a day at a desk. Pilates has transformed my posture and given me the core strength I never knew I needed. I stand taller and feel more confident.',
    rating: 5,
    image: null
  },
  {
    name: 'Maria K.',
    age: 29,
    result: 'Postpartum recovery',
    quote: 'The postnatal program helped me safely rebuild my strength after pregnancy. The personalized approach made all the difference in my recovery journey.',
    rating: 5,
    image: null
  }
]

export default function Transformations() {
  return (
    <section className="section-padding bg-[#F5F1E8]">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center content-narrow mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Client Transformations
          </h2>
          <p className="text-lg text-[#6B7280]">
            Real stories from women who transformed their relationship with movement and found strength they didn't know they had.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg card-hover cursor-pointer"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[#c4aa8e] text-[#c4aa8e]" />
                ))}
              </div>

              {/* Quote */}
              <Quote className="w-8 h-8 text-[#c4aa8e]/20 mb-4" />
              <p className="text-[#6B7280] leading-relaxed mb-6">
                "{testimonial.quote}"
              </p>

              {/* Client Info */}
              <div className="pt-4 border-t border-[#E8E4DC]">
                <div className="flex items-center gap-4">
                  {/* Avatar Placeholder */}
                  <div className="w-12 h-12 bg-[#c4aa8e]/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-[#c4aa8e] font-semibold">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <div className="font-semibold text-[#2D3436]">{testimonial.name}</div>
                    <div className="text-sm text-[#6B7280]">{testimonial.result}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Before/After Section */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg">
            <h3 className="text-2xl md:text-3xl font-bold text-center mb-8">
              Visible Results in 8-12 Weeks
            </h3>

            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-[#c4aa8e] mb-2">85%</div>
                <p className="text-[#6B7280]">Report improved posture within first month</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-[#c4aa8e] mb-2">92%</div>
                <p className="text-[#6B7280]">Experience reduced back or neck pain</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-[#c4aa8e] mb-2">96%</div>
                <p className="text-[#6B7280]">Feel more connected to their body</p>
              </div>
            </div>

            <div className="mt-8 text-center">
              <p className="text-sm text-[#6B7280]">
                * Based on client feedback from 500+ training sessions
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
