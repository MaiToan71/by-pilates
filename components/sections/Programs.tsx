import { Check } from 'lucide-react'

const programs = [
  {
    level: 'Beginner',
    title: 'Foundation Program',
    description: 'Perfect for those new to Pilates. Learn proper form, breathing techniques, and basic movements.',
    duration: '4-6 weeks',
    sessions: '2x per week',
    features: [
      'Introduction to Pilates principles',
      'Basic mat exercises',
      'Breathing and alignment focus',
      'Personalized progression plan'
    ],
    recommended: false
  },
  {
    level: 'Intermediate',
    title: 'Core Strength Program',
    description: 'Deepen your practice with advanced techniques. Build strength, flexibility, and body control.',
    duration: '8-12 weeks',
    sessions: '3x per week',
    features: [
      'Advanced mat sequences',
      'Reformer and equipment work',
      'Posture correction focus',
      'Injury prevention strategies'
    ],
    recommended: true
  },
  {
    level: 'Advanced',
    title: 'Rehabilitation & Wellness',
    description: 'Specialized program for injury recovery, chronic pain management, and specific body concerns.',
    duration: 'Customized',
    sessions: 'Flexible',
    features: [
      'One-on-one personalized sessions',
      'Targeted rehabilitation exercises',
      'Pre/postnatal Pilates options',
      'Ongoing assessment and adjustments'
    ],
    recommended: false
  }
]

export default function Programs() {
  return (
    <section id="programs" className="section-padding bg-gradient-to-b from-[#FAFAF8] to-[#F5F1E8]">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center content-narrow mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Programs & Levels
          </h2>
          <p className="text-lg text-[#6B7280]">
            Choose the program that matches your experience and goals. 
            All programs are tailored to your individual needs.
          </p>
        </div>

        {/* Programs Grid */}
        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {programs.map((program, index) => (
            <div 
              key={index}
              className={`bg-white rounded-2xl p-8 shadow-lg card-hover border-2 cursor-pointer relative ${
                program.recommended 
                  ? 'border-[#c4aa8e] ring-4 ring-[#c4aa8e]/10' 
                  : 'border-[#E8E4DC]'
              }`}
            >
              {/* Recommended Badge */}
              {program.recommended && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#c4aa8e] text-white px-4 py-1 rounded-full text-sm font-semibold">
                  Most Popular
                </div>
              )}

              {/* Level Tag */}
              <div className="inline-block bg-[#c4aa8e]/10 text-[#c4aa8e] px-4 py-1 rounded-full text-sm font-medium mb-4">
                {program.level}
              </div>

              <h3 className="text-2xl font-bold mb-3">
                {program.title}
              </h3>

              <p className="text-[#6B7280] mb-6">
                {program.description}
              </p>

              {/* Duration & Sessions */}
              <div className="flex gap-4 mb-6 text-sm">
                <div>
                  <div className="text-[#6B7280]">Duration</div>
                  <div className="font-semibold text-[#2D3436]">{program.duration}</div>
                </div>
                <div className="border-l border-[#E8E4DC] pl-4">
                  <div className="text-[#6B7280]">Sessions</div>
                  <div className="font-semibold text-[#2D3436]">{program.sessions}</div>
                </div>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {program.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#c4aa8e] flex-shrink-0 mt-0.5" />
                    <span className="text-[#6B7280] text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <button 
                className={`w-full py-3 rounded-lg font-semibold transition-all duration-200 ${
                  program.recommended
                    ? 'bg-[#c4aa8e] text-white hover:bg-[#b39a7e]'
                    : 'bg-[#F5F1E8] text-[#c4aa8e] hover:bg-[#E8E4DC]'
                }`}
              >
                Get Started
              </button>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center max-w-2xl mx-auto">
          <p className="text-[#6B7280]">
            Not sure which program is right for you? 
            <button className="text-[#c4aa8e] font-semibold ml-2 hover:underline cursor-pointer">
              Book a free consultation
            </button>
          </p>
        </div>
      </div>
    </section>
  )
}
