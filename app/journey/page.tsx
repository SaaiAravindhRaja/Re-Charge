import { Metadata } from 'next'
import { Calendar, User, CheckCircle, Clock, AlertTriangle } from 'lucide-react'
import { milestones } from '@/data/site'

export const metadata: Metadata = {
  title: 'Our Journey | DreamShop Singapore',
  description: 'Follow our 6-month development journey from concept to competition',
}

export default function JourneyPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-50 to-blue-100 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Our Development Journey
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600 max-w-3xl mx-auto">
              Follow our exciting 6-month journey from initial concept to competition-ready AI prototype
            </p>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-200"></div>
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={milestone.id} className="relative flex items-start space-x-6">
                  {/* Timeline dot */}
                  <div className={`flex-shrink-0 w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-lg ${
                    milestone.status === 'Completed' ? 'bg-green-500' :
                    milestone.status === 'In Progress' ? 'bg-blue-500' :
                    'bg-gray-400'
                  }`}>
                    {milestone.month}
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 bg-white rounded-2xl shadow-lg border p-8">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-2xl font-bold text-gray-900">{milestone.title}</h3>
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                        milestone.status === 'Completed' ? 'bg-green-100 text-green-800' :
                        milestone.status === 'In Progress' ? 'bg-blue-100 text-blue-800' :
                        'bg-gray-100 text-gray-800'
                      }`}>
                        {milestone.status}
                      </span>
                    </div>
                    
                    <p className="text-gray-600 mb-6">{milestone.summary}</p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                          Deliverables
                        </h4>
                        <ul className="space-y-1 text-sm text-gray-600">
                          {milestone.deliverables.map((deliverable, idx) => (
                            <li key={idx}>• {deliverable}</li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        {milestone.risks.length > 0 && (
                          <>
                            <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                              <AlertTriangle className="h-4 w-4 text-yellow-500 mr-2" />
                              Key Risks
                            </h4>
                            <ul className="space-y-1 text-sm text-gray-600">
                              {milestone.risks.map((risk, idx) => (
                                <li key={idx}>• {risk}</li>
                              ))}
                            </ul>
                          </>
                        )}
                      </div>
                    </div>
                    
                    {milestone.nextSteps.length > 0 && (
                      <div className="mt-6 pt-6 border-t border-gray-200">
                        <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                          <Clock className="h-4 w-4 text-purple-500 mr-2" />
                          Next Steps
                        </h4>
                        <ul className="space-y-1 text-sm text-gray-600">
                          {milestone.nextSteps.map((step, idx) => (
                            <li key={idx}>• {step}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Gantt Chart Placeholder */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">Project Timeline Overview</h2>
            <p className="mt-4 text-lg text-gray-600">
              Visual representation of our development schedule
            </p>
          </div>
          
          <div className="bg-white rounded-2xl shadow-lg border p-12 text-center">
            <Calendar className="mx-auto h-16 w-16 text-gray-400 mb-6" />
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Interactive Gantt Chart</h3>
            <p className="text-gray-600 mb-6">
              Coming soon - An interactive Gantt chart showing detailed task dependencies, 
              resource allocation, and critical path analysis for our 6-month development cycle.
            </p>
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-500 transition-colors">
              View Detailed Timeline
            </button>
          </div>
        </div>
      </section>

      {/* Current Status */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white text-center">
            <h2 className="text-2xl font-bold mb-4">Current Status: August 2025</h2>
            <p className="text-blue-100 mb-6">
              We're currently focused on AI model development and computer vision systems. 
              Our recommendation engine prototype is showing promising results with 85% accuracy 
              in initial testing, and we're making great progress on the checkout system integration.
              <strong> Final submission deadline: September 26, 2025</strong>
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
              <div className="bg-white/10 rounded-lg p-4">
                <div className="text-2xl font-bold">85%</div>
                <div className="text-sm text-blue-100">AI Model Accuracy</div>
              </div>
              <div className="bg-white/10 rounded-lg p-4">
                <div className="text-2xl font-bold">2/7</div>
                <div className="text-sm text-blue-100">Milestones Complete</div>
              </div>
              <div className="bg-white/10 rounded-lg p-4">
                <div className="text-2xl font-bold">1</div>
                <div className="text-sm text-blue-100">Month Remaining</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}