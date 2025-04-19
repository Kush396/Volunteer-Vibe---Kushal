import Link from "next/link"
import { Button } from "@/components/ui/button"
import FeaturesSection from "@/components/features-section"
import JourneySection from "@/components/journey-section"
import StakeholdersSection from "@/components/stakeholders-section"
import ResonatesSection from "@/components/resonates-section"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navigation */}
      <header className="border-b bg-white">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <Link href="/" className="font-bold text-xl bg-black text-white px-4 py-1">
            VOLUNTEERVIBES
          </Link>

          <nav className="hidden md:flex items-center space-x-6">
            <Link href="#features" className="text-sm font-medium">
              Features
            </Link>
            <Link href="#forms" className="text-sm font-medium">
              Forms
            </Link>
            <Link href="#pricing" className="text-sm font-medium">
              Pricing
            </Link>
            <Link href="#monetization" className="text-sm font-medium">
              Monetization
            </Link>
            <Link href="#admin" className="text-sm font-medium">
              Admin
            </Link>
            <Link href="#dashboard" className="text-sm font-medium">
              AI Dashboard
            </Link>
          </nav>

          <div className="flex items-center space-x-2">
            <Button variant="outline" size="sm">
              Log in
            </Button>
            <Button size="sm">Sign up</Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-black text-white py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            FEEL THE VIBE, <span className="text-blue-500">MAKE A DIFFERENCE!</span>
          </h1>
          <p className="max-w-2xl mx-auto mb-8 text-lg">
            VOLUNTEERVIBES bridges the gap between those who want to help and the causes that need support, all while
            creating a vibrant community atmosphere.
          </p>
          <div className="flex justify-center space-x-4">
            <Button className="bg-white text-black hover:bg-gray-200">Get Started</Button>
            <Button className="bg-white text-black hover:bg-gray-200">Explore Features</Button>
          </div>
        </div>
      </section>

      {/* Brand Story */}
      <section className="py-16 md:py-24 pb-8 md:pb-12 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Our Brand Story</h2>
          <div className="max-w-3xl mx-auto space-y-6 text-lg">
            <p>
              VOLUNTEERVIBES began with a simple observation: volunteering shouldn't just be about duty—it should be
              energizing, connective, and meaningful.
            </p>
            <p>
              Founded by a group of passionate community advocates, we bridge the gap between those who want to help and
              the causes that need support, all while creating a vibrant community atmosphere.
            </p>
            <p className="font-bold">
              When you engage with VOLUNTEERVIBES, you'll find opportunities that energize rather than drain, connect
              rather than isolate, and create meaningful impact rather than just fill time.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <FeaturesSection />

      {/* Journey Section */}
      <JourneySection />

      {/* Stakeholders Section */}
      <StakeholdersSection />

      {/* Resonates Section */}
      <ResonatesSection />

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold text-lg mb-4">VOLUNTEERVIBES</h3>
              <p className="text-gray-400">Making volunteering meaningful and energizing.</p>
            </div>
            <div>
              <h4 className="font-medium mb-4">Platform</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    For Organizations
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-4">Resources</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Community
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Support
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-4">Connect</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Twitter
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Instagram
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>© 2023 VOLUNTEERVIBES. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
