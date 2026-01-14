import { Target, Heart, TrendingUp, Sparkles } from 'lucide-react'

const benefits = [
  {
    icon: Target,
    title: 'Core Strength',
    description: 'Build deep core stability that supports your entire body, improving balance and reducing injury risk.'
  },
  {
    icon: Heart,
    title: 'Better Posture',
    description: 'Correct postural imbalances from desk work and daily life. Stand taller, move with confidence.'
  },
  {
    icon: TrendingUp,
    title: 'Functional Movement',
    description: 'Improve how you move in everyday life. From lifting to walking, feel the difference in every movement.'
  },
  {
    icon: Sparkles,
    title: 'Body Awareness',
    description: 'Develop a deeper connection with your body. Understand your movement patterns and breathing.'
  }
]

export default function Benefits() {
  return (
    <section className="section-padding bg-[#FAFAF8]">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center content-narrow mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Why Pilates Works
          </h2>
          <p className="text-lg text-[#6B7280]">
            Pilates is more than exercise—it's a mindful practice that transforms 
            how you move, feel, and connect with your body.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-8 shadow-sm card-hover border border-[#E8E4DC] cursor-pointer"
            >
              <div className="w-14 h-14 bg-[#c4aa8e]/10 rounded-xl flex items-center justify-center mb-6">
                <benefit.icon className="w-7 h-7 text-[#c4aa8e]" />
              </div>
              <h3 className="text-xl font-semibold mb-3">
                {benefit.title}
              </h3>
              <p className="text-[#6B7280] leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        {/* Additional Benefits */}
        <div className="mt-16 bg-[#F5F1E8] rounded-3xl p-8 md:p-12">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-[#c4aa8e] mb-2">Low Impact</div>
              <p className="text-[#6B7280]">Gentle on joints, suitable for all fitness levels</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-[#c4aa8e] mb-2">Rehabilitation</div>
              <p className="text-[#6B7280]">Safe recovery from injuries with expert guidance</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-[#c4aa8e] mb-2">Stress Relief</div>
              <p className="text-[#6B7280]">Breathing-focused practice calms mind and body</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
