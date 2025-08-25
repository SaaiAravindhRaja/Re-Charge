import Link from 'next/link'
import { Github, Linkedin, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">DreamShop Singapore</h3>
            <p className="text-gray-300 text-sm">
              PMI Singapore Chapter 2025 Student Competition Entry - 
              Revolutionizing retail through AI-powered experiences.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="text-gray-300 hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/project" className="text-gray-300 hover:text-white transition-colors">Our Project</Link></li>
              <li><Link href="/demo" className="text-gray-300 hover:text-white transition-colors">Live Demo</Link></li>
              <li><Link href="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              <a href="mailto:team@dreamshop-sg.com" className="text-gray-300 hover:text-white transition-colors">
                <Mail className="h-5 w-5" />
              </a>
              <a href="https://linkedin.com/company/dreamshop-sg" className="text-gray-300 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="https://github.com/dreamshop-sg" className="text-gray-300 hover:text-white transition-colors">
                <Github className="h-5 w-5" />
              </a>
            </div>
            <p className="text-gray-300 text-sm mt-4">
              📍 Singapore
            </p>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-300">
          <p>&copy; 2025 DreamShop Singapore. All rights reserved.</p>
          <p className="mt-2">
            Licensed under <Link href="/license" className="hover:text-white transition-colors">MIT License</Link> | 
            <Link href="/privacy" className="hover:text-white transition-colors ml-2">Privacy Policy</Link>
          </p>
        </div>
      </div>
    </footer>
  )
}