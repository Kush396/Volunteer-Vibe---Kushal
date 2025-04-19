import { Globe, Heart, CloudLightningIcon as Lightning, Users } from "lucide-react"

export default function ResonatesSection() {
  return (
    <section className="py-16 md:py-24 bg-black text-white text-center">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">Volunteering That Resonates</h2>
        <p className="text-gray-300 max-w-3xl mx-auto text-lg mb-16">
          VOLUNTEERVIBES is more than just a platform—it's a movement that transforms how people think about giving
          their time and energy to causes that matter.
        </p>

        <div className="flex flex-wrap justify-center gap-8">
          {/* Find your volunteer rhythm */}
          <div className="bg-gray-900 rounded-lg p-4 w-24 h-24 flex flex-col items-center justify-center">
            <Lightning className="h-10 w-10 text-blue-400 mb-2" />
            <span className="text-xs font-medium">Rhythm</span>
          </div>

          {/* Energy well spent */}
          <div className="bg-gray-900 rounded-lg p-4 w-24 h-24 flex flex-col items-center justify-center">
            <Heart className="h-10 w-10 text-yellow-400 mb-2" />
            <span className="text-xs font-medium">Energy</span>
          </div>

          {/* Community powered change */}
          <div className="bg-gray-900 rounded-lg p-4 w-24 h-24 flex flex-col items-center justify-center">
            <Users className="h-10 w-10 text-purple-400 mb-2" />
            <span className="text-xs font-medium">Community</span>
          </div>

          {/* Your skills, amplified */}
          <div className="bg-gray-900 rounded-lg p-4 w-24 h-24 flex flex-col items-center justify-center">
            <Globe className="h-10 w-10 text-blue-400 mb-2" />
            <span className="text-xs font-medium">Skills</span>
          </div>
        </div>
      </div>
    </section>
  )
}
