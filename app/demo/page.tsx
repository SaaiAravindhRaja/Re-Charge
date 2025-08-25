import { Metadata } from 'next'
import { ExternalLink, Image as ImageIcon, Calendar, Download } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Live Demo | DreamShop Singapore',
  description: 'Experience our AI-powered retail solution in action',
}

export default function DemoPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 to-blue-100 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Experience DreamShop Live
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600 max-w-3xl mx-auto">
              Try our AI-powered retail solution and see the future of personalized shopping in action
            </p>
          </div>
        </div>
      </section>

      {/* Live Demo Section */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-center text-white">
            <h2 className="text-3xl font-bold mb-6">Interactive Demo</h2>
            <p className="text-blue-100 mb-8 text-lg">
              Step into our virtual 10m x 10m smart retail space and experience personalized shopping powered by AI
            </p>
            
            <div className="bg-white/10 rounded-xl p-8 mb-8">
              <div className="text-6xl mb-4">🚀</div>
              <h3 className="text-xl font-semibold mb-4">Demo Coming Soon</h3>
              <p className="text-blue-100 mb-6">
                Our interactive demo is currently in development. It will feature:
              </p>
              <ul className="text-left text-blue-100 space-y-2 max-w-md mx-auto">
                <li>• Virtual walkthrough of our smart retail space</li>
                <li>• AI-powered product recommendations in real-time</li>
                <li>• Simulated computer vision checkout experience</li>
                <li>• Interactive dashboard showing analytics</li>
              </ul>
            </div>
            
            <a
              href="https://demo.dreamshop-sg.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Launch Demo <ExternalLink className="ml-2 h-5 w-5" />
            </a>
            
            <p className="text-blue-200 text-sm mt-4">
              * Demo will be available by Month 4 of our development timeline
            </p>
          </div>
        </div>
      </section>

      {/* Screenshots Gallery */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">Preview Gallery</h2>
            <p className="mt-4 text-lg text-gray-600">
              Sneak peek at our user interface and key features
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "AI Recommendation Engine",
                description: "Personalized product suggestions based on customer behavior and preferences"
              },
              {
                title: "Computer Vision Checkout",
                description: "Seamless payment processing using advanced computer vision technology"
              },
              {
                title: "Interactive Product Display",
                description: "Smart shelves with digital displays that adapt to customer interests"
              },
              {
                title: "Analytics Dashboard",
                description: "Real-time insights into customer behavior and inventory optimization"
              },
              {
                title: "Mobile App Integration",
                description: "Companion app for enhanced personalized shopping experience"
              },
              {
                title: "Sustainability Metrics",
                description: "Energy consumption tracking and environmental impact monitoring"
              }
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg border overflow-hidden">
                <div className="bg-gradient-to-br from-blue-100 to-purple-100 p-12 text-center">
                  <ImageIcon className="mx-auto h-12 w-12 text-gray-400 mb-4" />
                  <p className="text-gray-500 text-sm">Screenshot Coming Soon</p>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Release Notes */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">Release Notes</h2>
            <p className="mt-4 text-lg text-gray-600">
              Track our progress with regular updates and feature releases
            </p>
          </div>
          
          <div className="space-y-6">
            <div className="bg-white rounded-2xl shadow-lg border p-8">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold text-gray-900">Version 0.2.0 - Alpha</h3>
                <div className="flex items-center space-x-4">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                    Current
                  </span>
                  <span className="text-gray-500 text-sm">February 2025</span>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">✨ New Features</h4>
                  <ul className="space-y-1 text-sm text-gray-600">
                    <li>• AI recommendation engine prototype</li>
                    <li>• Basic computer vision checkout system</li>
                    <li>• Customer behavior analytics foundation</li>
                    <li>• Initial mobile app wireframes</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">🔧 Improvements</h4>
                  <ul className="space-y-1 text-sm text-gray-600">
                    <li>• Enhanced model accuracy to 85%</li>
                    <li>• Optimized processing speed</li>
                    <li>• Improved user interface design</li>
                    <li>• Better error handling</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-2xl p-8">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold text-gray-900">Version 0.1.0 - Prototype</h3>
                <span className="text-gray-500 text-sm">January 2025</span>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">🎯 Initial Release</h4>
                  <ul className="space-y-1 text-sm text-gray-600">
                    <li>• Project architecture setup</li>
                    <li>• Basic AI model framework</li>
                    <li>• Initial UI/UX designs</li>
                    <li>• Team collaboration tools</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">📋 Planning</h4>
                  <ul className="space-y-1 text-sm text-gray-600">
                    <li>• Market research completion</li>
                    <li>• Technical requirements definition</li>
                    <li>• Development timeline creation</li>
                    <li>• Resource allocation planning</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-8">
            <button className="inline-flex items-center text-blue-600 hover:text-blue-500 font-medium">
              <Download className="mr-2 h-4 w-4" />
              Download Full Release History
            </button>
          </div>
        </div>
      </section>

      {/* Coming Soon */}
      <section className="py-16 bg-blue-50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <Calendar className="mx-auto h-12 w-12 text-blue-600 mb-6" />
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-4">
            What's Coming Next?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Stay tuned for exciting updates in our upcoming releases
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
            <div className="bg-white rounded-lg p-6 shadow-sm border">
              <h3 className="font-semibold text-gray-900 mb-2">Version 0.3.0 - Beta (March 2025)</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Full hardware integration</li>
                <li>• Advanced analytics dashboard</li>
                <li>• Mobile app beta release</li>
                <li>• User testing implementation</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-sm border">
              <h3 className="font-semibold text-gray-900 mb-2">Version 1.0.0 - Production (June 2025)</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Competition-ready demo</li>
                <li>• Full feature implementation</li>
                <li>• Performance optimization</li>
                <li>• Final presentation materials</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}