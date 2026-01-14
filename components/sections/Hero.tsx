import { ArrowRight } from 'lucide-react'
import Image from 'next/image'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center section-padding bg-gradient-to-b from-[#FAFAF8] to-[#F5F1E8] pt-20">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Content */}
          <div className="space-y-8 fade-in">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold font-heading leading-tight">
                Strengthen Your
                <span className="block text-[#c4aa8e]">Core & Posture</span>
              </h1>
              <p className="text-lg md:text-xl text-[#6B7280] max-w-xl">
                Transform your body through expert Pilates training. Specialized in core strength, 
                posture correction, and rehabilitation for women seeking balanced, mindful movement.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="btn-primary inline-flex items-center justify-center gap-2">
                Book Your First Session
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="btn-secondary">
                Explore Programs
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="pt-8 border-t border-[#E8E4DC]">
              <div className="flex flex-wrap gap-8 text-sm text-[#6B7280]">
                <div>
                  <div className="text-2xl font-bold text-[#2D3436]">500+</div>
                  <div>Happy Clients</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-[#2D3436]">10+</div>
                  <div>Years Experience</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-[#2D3436]">100%</div>
                  <div>Certified Training</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Image */}
          <div className="relative lg:h-[600px] h-[400px] fade-in">
            <div className="absolute inset-0 bg-[#c4aa8e]/10 rounded-3xl blur-3xl"></div>
            <div className="relative h-full rounded-3xl overflow-hidden shadow-2xl">
              {/* Replace with actual image */}
              <div className="w-full h-full bg-gradient-to-br from-[#c4aa8e]/20 to-[#c4aa8e]/5 flex items-center justify-center">
                <div className="text-center text-[#6B7280]">
                  <p className="text-sm font-medium">Hero Image</p>
                  <p className="text-xs mt-1">Pilates training or posture focus</p>
                  <p className="text-xs mt-4 px-8">Replace with high-quality image showing:<br/>
                  Woman in Pilates pose, clean studio, natural lighting</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-[#c4aa8e] rounded-full flex justify-center">
          <div className="w-1 h-3 bg-[#c4aa8e] rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  )
}
