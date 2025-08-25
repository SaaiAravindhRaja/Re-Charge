import { Metadata } from 'next'
import { Mail, Linkedin, Github } from 'lucide-react'
import { teamMembers } from '@/data/site'

export const metadata: Metadata = {
  title: 'About Us | DreamShop Singapore',
  description: 'Meet the passionate student team behind DreamShop Singapore - PMI Student Competition 2025',
}

export default function AboutPage() {
  return (
    <div className="bg-white">
      {/* Hero Banner */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">About Our Team</h1>
            <p className="mt-4 text-xl text-blue-100">
              Passionate students revolutionizing retail through innovation
            </p>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-8">Our Mission</h2>
            <div className="prose prose-lg mx-auto text-gray-600">
              <p className="mb-6">
                We are a diverse team of students from Singapore's leading universities, united by our passion for 
                retail innovation and sustainable technology. Our mission is to transform the traditional shopping 
                experience through AI-powered personalization while maintaining a strong focus on environmental 
                sustainability and customer satisfaction.
              </p>
              <p className="mb-6">
                As participants in the PMI Singapore Chapter 2025 Student Competition, we're committed to 
                demonstrating how emerging technologies can solve real-world retail challenges within the 
                constraints of a 10m x 10m space. Our interdisciplinary approach combines technical expertise, 
                business acumen, and user-centered design to create meaningful impact.
              </p>
              <p>
                We believe that the future of retail lies in creating seamless, personalized experiences that 
                benefit both customers and retailers while contributing to a more sustainable world.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Photo Placeholder */}
      <section className="py-8 bg-gray-50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-blue-100 to-purple-100 rounded-2xl p-12 text-center">
            <div className="text-6xl mb-4">📸</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Team Photo</h3>
            <p className="text-gray-600">Coming soon - Our official team photo from the competition kickoff event!</p>
          </div>
        </div>
      </section>

      {/* Team Members Grid */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">Meet the Team</h2>
            <p className="mt-4 text-lg text-gray-600">
              Four passionate students bringing diverse skills and perspectives
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {teamMembers.map((member) => (
              <div key={member.id} className="bg-white rounded-2xl shadow-lg border p-8">
                <div className="flex items-start space-x-6">
                  <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-2xl flex-shrink-0">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
                    <p className="text-blue-600 font-medium mb-3">{member.role}</p>
                    <p className="text-gray-600 mb-4">{member.bio}</p>
                    
                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Key Responsibilities:</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        {member.responsibilities.map((responsibility, index) => (
                          <li key={index}>• {responsibility}</li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="flex space-x-3">
                      {member.links.email && (
                        <a
                          href={`mailto:${member.links.email}`}
                          className="text-gray-400 hover:text-blue-600 transition-colors"
                        >
                          <Mail className="h-5 w-5" />
                        </a>
                      )}
                      {member.links.linkedin && (
                        <a
                          href={member.links.linkedin}
                          className="text-gray-400 hover:text-blue-600 transition-colors"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Linkedin className="h-5 w-5" />
                        </a>
                      )}
                      {member.links.github && (
                        <a
                          href={member.links.github}
                          className="text-gray-400 hover:text-blue-600 transition-colors"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github className="h-5 w-5" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Values */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">Our Values</h2>
            <p className="mt-4 text-lg text-gray-600">
              The principles that guide our approach to innovation
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 text-center shadow-sm border">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Customer-Centric</h3>
              <p className="text-gray-600">
                Every decision we make starts with understanding and addressing real customer needs. 
                We believe technology should enhance human experiences, not complicate them.
              </p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 text-center shadow-sm border">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">🌱</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Sustainable</h3>
              <p className="text-gray-600">
                We're committed to creating solutions that benefit both business and the environment. 
                Our innovations aim to reduce waste, optimize resources, and promote sustainable practices.
              </p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 text-center shadow-sm border">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">📊</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Data-Driven</h3>
              <p className="text-gray-600">
                We leverage data and analytics to make informed decisions, validate assumptions, 
                and continuously improve our solutions based on real-world insights and feedback.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}