import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, CheckCircle, XCircle, Target, TrendingUp } from 'lucide-react'
import { projectInfo } from '@/data/site'

export const metadata: Metadata = {
  title: 'Our Project | DreamShop Singapore',
  description: 'Discover our AI-powered retail solution for the PMI Singapore 2025 Student Competition',
}

export default function ProjectPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              The 10m x 10m Shop of Your Dreams
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600 max-w-3xl mx-auto">
              Revolutionizing retail through AI-powered personalization and sustainable innovation
            </p>
          </div>
        </div>
      </section>

      {/* Problem → Insight → Solution */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="bg-red-50 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-red-900 mb-4">Problem</h2>
              <p className="text-red-800">{projectInfo.problem}</p>
            </div>
            
            <div className="bg-yellow-50 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-yellow-900 mb-4">Insight</h2>
              <p className="text-yellow-800">{projectInfo.insight}</p>
            </div>
            
            <div className="bg-green-50 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-green-900 mb-4">Solution</h2>
              <p className="text-green-800">{projectInfo.solution}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Unique Selling Propositions */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">What Makes Us Unique</h2>
            <p className="mt-4 text-lg text-gray-600">
              Five key differentiators that set DreamShop apart
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projectInfo.usp.map((point, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-sm border">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-0.5" />
                  <p className="text-gray-900">{point}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Target Users & Stakeholders */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-8">Target Users</h2>
              <div className="space-y-4">
                {projectInfo.targetUsers.map((user, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <Target className="h-5 w-5 text-blue-500 flex-shrink-0 mt-0.5" />
                    <p className="text-gray-700">{user}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-8">Key Stakeholders</h2>
              <div className="space-y-4">
                {projectInfo.stakeholders.map((stakeholder, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="h-5 w-5 bg-purple-500 rounded-full flex-shrink-0 mt-0.5"></div>
                    <p className="text-gray-700">{stakeholder}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Space Layout */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">10m x 10m Space Plan</h2>
            <p className="mt-4 text-lg text-gray-600">
              Optimized layout for maximum efficiency and customer experience
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Zone Descriptions</h3>
              <div className="space-y-4">
                {projectInfo.spaceLayout.zones.map((zone, index) => (
                  <div key={index} className="bg-white rounded-lg p-4 shadow-sm border">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-semibold text-gray-900">{zone.name}</h4>
                      <span className="text-sm text-blue-600 font-medium">{zone.size}</span>
                    </div>
                    <p className="text-gray-600 text-sm">{zone.description}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Layout Diagram</h3>
              <div className="bg-white rounded-lg p-6 shadow-sm border">
                <pre className="text-xs text-gray-700 font-mono whitespace-pre overflow-x-auto">
                  {projectInfo.spaceLayout.asciiDiagram}
                </pre>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Scope & Metrics */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Project Scope */}
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-8">Project Scope</h2>
              
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-green-900 mb-4 flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  In Scope
                </h3>
                <ul className="space-y-2">
                  {projectInfo.scope.inScope.map((item, index) => (
                    <li key={index} className="text-gray-700 text-sm flex items-start">
                      <span className="text-green-500 mr-2">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-red-900 mb-4 flex items-center">
                  <XCircle className="h-5 w-5 text-red-500 mr-2" />
                  Out of Scope
                </h3>
                <ul className="space-y-2">
                  {projectInfo.scope.outOfScope.map((item, index) => (
                    <li key={index} className="text-gray-700 text-sm flex items-start">
                      <span className="text-red-500 mr-2">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            {/* KPIs & Constraints */}
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-8">Success Metrics</h2>
              
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-blue-900 mb-4 flex items-center">
                  <TrendingUp className="h-5 w-5 text-blue-500 mr-2" />
                  Key Performance Indicators
                </h3>
                <ul className="space-y-2">
                  {projectInfo.kpis.map((kpi, index) => (
                    <li key={index} className="text-gray-700 text-sm flex items-start">
                      <span className="text-blue-500 mr-2">•</span>
                      {kpi}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Project Constraints</h3>
                <ul className="space-y-2">
                  {projectInfo.constraints.map((constraint, index) => (
                    <li key={index} className="text-gray-700 text-sm flex items-start">
                      <span className="text-gray-500 mr-2">•</span>
                      {constraint}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-4">
            Ready to See Our Progress?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Follow our development journey from concept to competition-ready prototype
          </p>
          <Link
            href="/journey"
            className="inline-flex items-center bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-500 transition-colors"
          >
            See the Journey <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}