import { ArrowRight, Calendar } from 'lucide-react'

export default function CTA() {
  return (
    <section className="section-padding bg-gradient-to-br from-[#c4aa8e] to-[#b39a7e] text-white">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center">
          {/* Icon */}
          <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-8">
            <Calendar className="w-8 h-8" />
          </div>

          {/* Heading */}
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Transform Your Movement?
          </h2>
          
          <p className="text-lg md:text-xl text-white/90 mb-12 max-w-2xl mx-auto">
            Start your Pilates journey today. Book a free consultation to discuss your goals 
            and find the perfect program for your needs.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button className="bg-white text-[#c4aa8e] px-8 py-4 rounded-lg font-semibold hover:bg-white/90 transition-all duration-200 shadow-lg inline-flex items-center justify-center gap-2 cursor-pointer">
              Book Free Consultation
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-all duration-200 cursor-pointer">
              View Schedule & Pricing
            </button>
          </div>

          {/* Trust Signals */}
          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto pt-8 border-t border-white/20">
            <div>
              <div className="text-2xl font-bold mb-1">Flexible</div>
              <div className="text-sm text-white/80">Schedule options</div>
            </div>
            <div>
              <div className="text-2xl font-bold mb-1">Personal</div>
              <div className="text-sm text-white/80">Customized plans</div>
            </div>
            <div>
              <div className="text-2xl font-bold mb-1">Safe</div>
              <div className="text-sm text-white/80">All levels welcome</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
