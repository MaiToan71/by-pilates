import { Award, BookOpen, Users } from 'lucide-react'

export default function Instructor() {
  return (
    <section id="studio" className="section-padding bg-[#FAFAF8]">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-6xl mx-auto">
          {/* Left: Image */}
          <div className="relative">
            <div className="absolute inset-0 bg-[#c4aa8e]/20 rounded-3xl blur-3xl"></div>
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
              {/* Replace with actual instructor photo */}
              <div className="w-full h-full bg-gradient-to-br from-[#c4aa8e]/20 to-[#c4aa8e]/5 flex items-center justify-center">
                <div className="text-center text-[#6B7280] p-8">
                  <p className="text-sm font-medium">Instructor Photo</p>
                  <p className="text-xs mt-1">Professional portrait</p>
                  <p className="text-xs mt-4">Replace with high-quality photo:<br/>
                  Warm, approachable, professional</p>
                </div>
              </div>
            </div>

            {/* Certification Badges */}
            <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-4 shadow-xl border border-[#E8E4DC]">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-[#c4aa8e]/10 rounded-xl flex items-center justify-center">
                  <Award className="w-6 h-6 text-[#c4aa8e]" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-[#2D3436]">Certified</div>
                  <div className="text-xs text-[#6B7280]">Since 2014</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Content */}
          <div className="space-y-8">
            <div>
              <div className="text-[#c4aa8e] font-semibold mb-2">Your Instructor</div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Meet [Instructor Name]
              </h2>
              <div className="space-y-4 text-[#6B7280] leading-relaxed">
                <p>
                  With over 10 years of experience in Pilates and movement therapy, 
                  I specialize in helping women rebuild core strength, correct posture, 
                  and recover from injuries through mindful, personalized training.
                </p>
                <p>
                  My approach combines classical Pilates principles with modern 
                  rehabilitation techniques, creating a safe and empowering space 
                  for every client—whether you're a complete beginner or returning 
                  after an injury.
                </p>
                <p>
                  I believe movement should be accessible, sustainable, and joyful. 
                  My mission is to help you move better today so you can live better tomorrow.
                </p>
              </div>
            </div>

            {/* Credentials */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-[#2D3436]">
                Certifications & Training
              </h3>
              <div className="grid gap-4">
                <div className="flex items-start gap-4 bg-[#F5F1E8] rounded-xl p-4">
                  <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center flex-shrink-0">
                    <Award className="w-5 h-5 text-[#c4aa8e]" />
                  </div>
                  <div>
                    <div className="font-semibold text-[#2D3436]">Certified Pilates Instructor</div>
                    <div className="text-sm text-[#6B7280]">Comprehensive Mat & Reformer Certification</div>
                  </div>
                </div>

                <div className="flex items-start gap-4 bg-[#F5F1E8] rounded-xl p-4">
                  <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center flex-shrink-0">
                    <BookOpen className="w-5 h-5 text-[#c4aa8e]" />
                  </div>
                  <div>
                    <div className="font-semibold text-[#2D3436]">Movement Therapy Specialist</div>
                    <div className="text-sm text-[#6B7280]">Injury Rehabilitation & Chronic Pain Management</div>
                  </div>
                </div>

                <div className="flex items-start gap-4 bg-[#F5F1E8] rounded-xl p-4">
                  <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center flex-shrink-0">
                    <Users className="w-5 h-5 text-[#c4aa8e]" />
                  </div>
                  <div>
                    <div className="font-semibold text-[#2D3436]">Pre & Postnatal Pilates</div>
                    <div className="text-sm text-[#6B7280]">Specialized Training for Women's Health</div>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="pt-4">
              <button className="btn-primary">
                Book a Consultation
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
