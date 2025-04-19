import { Building, Building2, User } from "lucide-react"
import Link from "next/link"

export default function StakeholdersSection() {
  return (
    <section className="py-16 md:py-24 bg-white text-center">
      <div className="container mx-auto px-4">
        <div className="inline-block px-4 py-1 bg-black text-white rounded-full mb-4 text-sm">Who It's For</div>
        <h2 className="text-4xl md:text-5xl font-bold mb-4 uppercase tracking-wide">Community Powered Change</h2>
        <p className="text-gray-700 max-w-2xl mx-auto text-lg mb-16">
          VOLUNTEERVIBES serves diverse stakeholders with tailored experiences.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Volunteers Card */}
          <div className="border rounded-lg p-8 text-left">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
              <User className="h-8 w-8 text-blue-500" />
            </div>

            <h3 className="text-2xl font-bold mb-2">Volunteers</h3>
            <p className="text-gray-600 mb-4">
              Socially conscious individuals aged 18-45 who value community connection
            </p>

            <p className="text-gray-700 mb-8">
              Find opportunities that match your skills, track your impact, and build a volunteer portfolio that
              resonates with your personal values.
            </p>

            <Link
              href="#"
              className="block w-full bg-black text-white text-center py-3 rounded-md font-medium hover:bg-gray-800 transition-colors"
            >
              Sign Up as Volunteer
            </Link>
          </div>

          {/* Nonprofits Card */}
          <div className="border rounded-lg p-8 text-left">
            <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
              <Building className="h-8 w-8 text-yellow-500" />
            </div>

            <h3 className="text-2xl font-bold mb-2">Nonprofits</h3>
            <p className="text-gray-600 mb-4">Organizations looking to attract engaged, enthusiastic volunteers</p>

            <p className="text-gray-700 mb-8">
              Post opportunities, manage events, and connect with skilled volunteers who will bring positive energy to
              your causes.
            </p>

            <Link
              href="#"
              className="block w-full bg-black text-white text-center py-3 rounded-md font-medium hover:bg-gray-800 transition-colors"
            >
              Sign Up as Nonprofit
            </Link>
          </div>

          {/* Corporations Card */}
          <div className="border rounded-lg p-8 text-left">
            <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
              <Building2 className="h-8 w-8 text-purple-500" />
            </div>

            <h3 className="text-2xl font-bold mb-2">Corporations</h3>
            <p className="text-gray-600 mb-4">Companies seeking to implement meaningful CSR initiatives</p>

            <p className="text-gray-700 mb-8">
              Create employee volunteering programs, track CSR initiatives, and measure social impact with our
              comprehensive tools.
            </p>

            <Link
              href="#"
              className="block w-full bg-black text-white text-center py-3 rounded-md font-medium hover:bg-gray-800 transition-colors"
            >
              Sign Up as Corporate
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
