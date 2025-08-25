import Link from 'next/link'
import { ArrowRight, Users, Target, Calendar, Lightbulb } from 'lucide-react'
import { siteConfig, teamMembers, milestones } from '@/data/site'

export default function Home() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="text-6xl mb-4">🏪✨</div>
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              {siteConfig.name}
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600 max-w-3xl mx-auto">
              {siteConfig.tagline}
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/demo"
                className="rounded-md bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-colors"
              >
                View Demo
              </Link>
              <Link
                href="/project"
                className="text-sm font-semibold leading-6 text-gray-900 hover:text-blue-600 transition-colors flex items-center gap-1"
              >
                Learn more <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About the Project */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">About the Project</h2>
            <p className="mt-4 text-lg text-gray-600">
              PMI Singapore Chapter 2025 Student Competition Entry
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">The Challenge</h3>
              <p className="text-gray-600 mb-6">
                Traditional retail stores struggle with inventory management, personalized customer experiences, 
                and space optimization. Our solution addresses these challenges through innovative AI technology.
              </p>
              <Link
                href="/project"
                className="inline-flex items-center text-blue-600 hover:text-blue-500 font-medium"
              >
                Explore our solution <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-3">Key Features</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• AI-powered personalized recommendations</li>
                <li>• Seamless computer vision checkout</li>
                <li>• Real-time inventory optimization</li>
                <li>• Interactive digital displays</li>
                <li>• 40% reduced energy consumption</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team at a Glance */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Users className="mx-auto h-12 w-12 text-blue-600 mb-4" />
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">Our Team at a Glance</h2>
            <p className="mt-4 text-lg text-gray-600">
              Meet the passionate students behind DreamShop Singapore
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member) => (
              <div key={member.id} className="bg-white rounded-lg p-6 shadow-sm border">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center text-white font-bold text-xl">
                  {member.name.split(' ').map(n => n[0]).join('')}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 text-center">{member.name}</h3>
                <p className="text-sm text-blue-600 text-center">{member.role}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              href="/about"
              className="inline-flex items-center text-blue-600 hover:text-blue-500 font-medium"
            >
              Meet the full team <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Key Milestones */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Calendar className="mx-auto h-12 w-12 text-blue-600 mb-4" />
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">Key Milestones</h2>
            <p className="mt-4 text-lg text-gray-600">
              Our 6-month journey from concept to competition
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {milestones.slice(0, 3).map((milestone) => (
              <div key={milestone.id} className="bg-gray-50 rounded-lg p-6">
                <div className="flex items-center mb-3">
                  <span className="bg-blue-600 text-white text-sm font-medium px-2 py-1 rounded">
                    Month {milestone.month}
                  </span>
                  <span className={`ml-2 text-xs px-2 py-1 rounded-full ${
                    milestone.status === 'Completed' ? 'bg-green-100 text-green-800' :
                    milestone.status === 'In Progress' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-gray-100 text-gray-800'
                  }`}>
                    {milestone.status}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{milestone.title}</h3>
                <p className="text-sm text-gray-600">{milestone.summary}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              href="/journey"
              className="inline-flex items-center text-blue-600 hover:text-blue-500 font-medium"
            >
              View full timeline <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why This Idea */}
      <section className="py-16 bg-blue-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Lightbulb className="mx-auto h-12 w-12 text-blue-600 mb-4" />
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">Why This Idea?</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <Target className="mx-auto h-8 w-8 text-blue-600 mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Customer-Centric</h3>
              <p className="text-gray-600">
                Putting customer experience at the heart of retail innovation with personalized, efficient shopping journeys.
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto h-8 w-8 text-blue-600 mb-4 flex items-center justify-center">
                🌱
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Sustainable</h3>
              <p className="text-gray-600">
                Reducing energy consumption by 40% while optimizing space utilization and minimizing waste.
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto h-8 w-8 text-blue-600 mb-4 flex items-center justify-center">
                📊
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Data-Driven</h3>
              <p className="text-gray-600">
                Leveraging AI and analytics to make informed decisions about inventory, layout, and customer preferences.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Updates */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white text-center">
            <h2 className="text-2xl font-bold mb-4">Latest Updates</h2>
            <p className="text-blue-100 mb-6">
              We're currently in Month 2 of development, focusing on AI model development and computer vision systems. 
              Follow our journey to see how we're bringing the future of retail to life!
            </p>
            <Link
              href="/journey"
              className="inline-flex items-center bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Follow Our Journey <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}