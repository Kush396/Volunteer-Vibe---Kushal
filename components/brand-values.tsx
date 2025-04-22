import { Heart, Zap, Users, Globe } from "lucide-react"

export function BrandValues() {
  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-block bg-black text-white px-3 py-1 rounded-full text-sm font-medium mb-4">
            Our Values
          </div>
          <h2 className="text-3xl font-bold mb-4">What Makes Us Different</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            VOLUNTEERVIBES is built on core values that guide everything we do
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
          <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center mb-4">
              <Zap className="h-6 w-6 text-secondary" />
            </div>
            <h3 className="text-xl font-bold mb-2">Energetic</h3>
            <p className="text-muted-foreground">
              We communicate with enthusiasm and a sense of possibility in everything we do.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-4">
              <Heart className="h-6 w-6 text-accent-foreground" />
            </div>
            <h3 className="text-xl font-bold mb-2">Authentic</h3>
            <p className="text-muted-foreground">
              We speak honestly about both challenges and victories in volunteer work.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-full bg-community/10 flex items-center justify-center mb-4">
              <Users className="h-6 w-6 text-community" />
            </div>
            <h3 className="text-xl font-bold mb-2">Inclusive</h3>
            <p className="text-muted-foreground">
              We welcome all skill levels and backgrounds to our volunteer community.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center mb-4">
              <Globe className="h-6 w-6 text-secondary" />
            </div>
            <h3 className="text-xl font-bold mb-2">Empowering</h3>
            <p className="text-muted-foreground">We inspire action and highlight impact to create meaningful change.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
