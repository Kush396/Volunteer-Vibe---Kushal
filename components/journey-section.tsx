export default function JourneySection() {
  return (
    <section className="py-16 md:py-24 bg-gray-50 text-center">
      <div className="container mx-auto px-4">
        <div className="inline-block px-4 py-1 bg-black text-white rounded-full mb-4 text-sm">Your Journey</div>
        <h2 className="text-4xl md:text-5xl font-bold mb-4 uppercase tracking-wide">Energy Well Spent</h2>
        <p className="text-gray-700 max-w-2xl mx-auto text-lg mb-16">
          Experience the VOLUNTEERVIBES journey from discovery to impact
        </p>

        <div className="relative max-w-3xl mx-auto">
          {/* Vertical line connecting all steps */}
          <div
            className="absolute left-1/2 transform -translate-x-1/2 w-0.5 bg-gray-300"
            style={{
              top: "24px",
              height: "calc(100% - 120px)", // Subtract height to stop before the last block
            }}
          ></div>

          {/* Step 1: Discovery */}
          <div className="relative z-10 mb-16">
            <div className="flex items-center justify-center mb-4">
              <div className="w-12 h-12 rounded-full bg-black text-white flex items-center justify-center font-bold text-xl">
                1
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 text-left w-1/2 mx-auto">
              <h3 className="text-xl font-bold mb-2">Discovery</h3>
              <p className="text-gray-600">
                Potential volunteers discover VOLUNTEERVIBES through peer recommendations or cause-specific searches.
              </p>
            </div>
          </div>

          {/* Step 2: Alignment */}
          <div className="relative z-10 mb-16">
            <div className="flex items-center justify-center mb-4">
              <div className="w-12 h-12 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold text-xl">
                2
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 text-left w-1/2 mx-auto">
              <h3 className="text-xl font-bold mb-2">Alignment</h3>
              <p className="text-gray-600">
                Complete a "vibe matching" assessment to identify your skills, interests, and values.
              </p>
            </div>
          </div>

          {/* Step 3: Engagement */}
          <div className="relative z-10 mb-16">
            <div className="flex items-center justify-center mb-4">
              <div className="w-12 h-12 rounded-full bg-yellow-500 text-white flex items-center justify-center font-bold text-xl">
                3
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 text-left w-1/2 mx-auto">
              <h3 className="text-xl font-bold mb-2">Engagement</h3>
              <p className="text-gray-600">
                Join volunteer experiences aligned with your personal profile and interests.
              </p>
            </div>
          </div>

          {/* Step 4: Community */}
          <div className="relative z-10 mb-16">
            <div className="flex items-center justify-center mb-4">
              <div className="w-12 h-12 rounded-full bg-purple-500 text-white flex items-center justify-center font-bold text-xl">
                4
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 text-left w-1/2 mx-auto">
              <h3 className="text-xl font-bold mb-2">Community</h3>
              <p className="text-gray-600">
                Connect with like-minded volunteers, building relationships around shared values.
              </p>
            </div>
          </div>

          {/* Step 5: Impact */}
          <div className="relative z-10 mb-16">
            <div className="flex items-center justify-center mb-4">
              <div className="w-12 h-12 rounded-full bg-green-500 text-white flex items-center justify-center font-bold text-xl">
                5
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 text-left w-1/2 mx-auto">
              <h3 className="text-xl font-bold mb-2">Impact</h3>
              <p className="text-gray-600">
                See the tangible difference your contributions make through our impact analytics.
              </p>
            </div>
          </div>

          {/* Step 6: Advocacy */}
          <div className="relative z-10">
            <div className="flex items-center justify-center mb-4">
              <div className="w-12 h-12 rounded-full bg-white text-black border-2 border-gray-300 flex items-center justify-center font-bold text-xl">
                6
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 text-left w-1/2 mx-auto">
              <h3 className="text-xl font-bold mb-2">Advocacy</h3>
              <p className="text-gray-600">
                Become an ambassador, sharing your VOLUNTEERVIBES experiences with others.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
