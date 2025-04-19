import type React from "react"
import { ArrowRight, BarChart2, Briefcase, Calendar, FileText, Heart, User } from "lucide-react"
import Link from "next/link"

export default function FeaturesSection() {
  return (
    <section className="py-8 md:py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1 bg-blue-100 text-blue-700 rounded-full mb-4">Core Features</div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Find Your Volunteer Rhythm</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            VOLUNTEERVIBES creates "resonance opportunities"—places where your energy makes the biggest impact.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Smart Matching */}
          <FeatureCard
            icon={<User className="h-6 w-6 text-blue-500" />}
            iconBg="bg-blue-100"
            borderColor="border-t-blue-500"
            title="Smart Matching"
            subtitle="AI-powered opportunity matching based on your skills, interests, and location."
            description="Our vibe matching technology connects you with opportunities that align with your personal profile, creating what we call &quot;resonance opportunities.&quot;"
            learnMoreColor="text-blue-500"
          />

          {/* Event Management */}
          <FeatureCard
            icon={<Calendar className="h-6 w-6 text-yellow-500" />}
            iconBg="bg-yellow-100"
            borderColor="border-t-yellow-500"
            title="Event Management"
            subtitle="Comprehensive tools for creating, managing, and tracking volunteer events."
            description="Create energizing volunteer events that bring people together around shared values and meaningful causes."
            learnMoreColor="text-yellow-700"
          />

          {/* Job Board */}
          <FeatureCard
            icon={<Briefcase className="h-6 w-6 text-purple-500" />}
            iconBg="bg-purple-100"
            borderColor="border-t-purple-500"
            title="Job Board"
            subtitle="Specialized job postings for nonprofit roles with resume parsing and matching."
            description="Find career opportunities that align with your values and allow you to make a lasting impact in the nonprofit sector."
            learnMoreColor="text-purple-500"
          />

          {/* Corporate Programs */}
          <FeatureCard
            icon={<FileText className="h-6 w-6 text-blue-500" />}
            iconBg="bg-blue-100"
            borderColor="border-t-blue-500"
            title="Corporate Programs"
            subtitle="Tailored employee volunteering programs with CSR tracking and reporting."
            description="Energize your workforce with meaningful volunteer opportunities that align with your company values and CSR goals."
            learnMoreColor="text-blue-500"
          />

          {/* Impact Analytics */}
          <FeatureCard
            icon={<BarChart2 className="h-6 w-6 text-yellow-500" />}
            iconBg="bg-yellow-100"
            borderColor="border-t-yellow-500"
            title="Impact Analytics"
            subtitle="Measure and visualize your social impact with comprehensive analytics."
            description="See the tangible difference your contributions make with our powerful impact measurement tools."
            learnMoreColor="text-yellow-700"
          />

          {/* Personalized Profiles */}
          <FeatureCard
            icon={<Heart className="h-6 w-6 text-purple-500" />}
            iconBg="bg-purple-100"
            borderColor="border-t-purple-500"
            title="Personalized Profiles"
            subtitle="Advanced profiles with intelligent data validation for all user types."
            description="Create a profile that showcases your unique skills, interests, and volunteer journey to find opportunities that resonate with you."
            learnMoreColor="text-purple-500"
          />
        </div>
      </div>
    </section>
  )
}

interface FeatureCardProps {
  icon: React.ReactNode
  iconBg: string
  borderColor: string
  title: string
  subtitle: string
  description: string
  learnMoreColor: string
}

function FeatureCard({ icon, iconBg, borderColor, title, subtitle, description, learnMoreColor }: FeatureCardProps) {
  return (
    <div className="flex justify-center">
      <div
        className={`bg-white rounded-lg shadow-md border border-gray-200 border-t-4 ${borderColor} flex flex-col h-full max-w-sm`}
      >
        <div className="p-4 pt-5 pb-6 flex flex-col h-full">
          <div className={`${iconBg} w-10 h-10 rounded-full flex items-center justify-center mb-3`}>{icon}</div>

          <h3 className="text-lg font-bold mb-1">{title}</h3>
          <p className="text-gray-600 text-sm mb-3">{subtitle}</p>

          <p className="text-gray-700 text-sm mb-4 flex-grow">{description}</p>

          <Link
            href="#"
            className={`group inline-flex items-center ${learnMoreColor} text-sm font-medium transition-colors hover:underline`}
          >
            Learn more{" "}
            <ArrowRight className="ml-1 h-4 w-4 transition-transform duration-300 ease-in-out group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </div>
  )
}
