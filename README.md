# DreamShop Singapore - PMI Student Competition 2025

> AI-powered retail innovation for the 10m x 10m Shop of Your Dreams

[![Next.js](https://img.shields.io/badge/Next.js-14-black)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.0-38B2AC)](https://tailwindcss.com/)

## 🏆 Competition Entry

This website showcases our team's entry for the **PMI Singapore Chapter 2025 Student Competition**. We're revolutionizing retail through AI-powered personalization, computer vision checkout, and sustainable operations within a compact 10m x 10m footprint.

## 🚀 Live Demo

Visit our website: [https://dreamshop-sg.vercel.app](https://dreamshop-sg.vercel.app)

## 🛠️ Technology Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui + Lucide React icons
- **Animation**: Framer Motion
- **Deployment**: Vercel

## 📁 Project Structure

```
├── app/                    # Next.js App Router pages
│   ├── layout.tsx         # Root layout with navigation
│   ├── page.tsx           # Homepage
│   ├── about/             # About Us page
│   ├── project/           # Project details
│   ├── journey/           # Development timeline
│   ├── demo/              # Live demo showcase
│   └── contact/           # Contact form
├── components/            # Reusable UI components
├── data/                  # Content management
│   └── site.ts           # Single source of truth for content
├── lib/                   # Utility functions
└── public/               # Static assets
```

## 🏃‍♂️ Quick Start

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/dreamshop-sg/website.git
cd website
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## ✏️ Content Management

All website content is managed through a single file: `/data/site.ts`

### Updating Content

1. **Site Configuration**: Edit `siteConfig` object for basic site info
2. **Team Members**: Modify `teamMembers` array to update team information
3. **Project Details**: Update `projectInfo` object for project-specific content
4. **Timeline**: Edit `milestones` array to reflect current progress

### Example: Adding a Team Member

```typescript
// In /data/site.ts
export const teamMembers: TeamMember[] = [
  // ... existing members
  {
    id: "5",
    name: "New Member",
    role: "Role Title",
    bio: "Brief bio description",
    headshot: "/images/team/new-member.jpg",
    links: {
      linkedin: "https://linkedin.com/in/new-member",
      github: "https://github.com/newmember",
      email: "newmember@dreamshop-sg.com"
    },
    responsibilities: ["Responsibility 1", "Responsibility 2"]
  }
]
```

## 🎨 Customization

### Colors & Theming

The design system is built with Tailwind CSS and supports both light and dark modes. Customize colors in:

- `/app/globals.css` - CSS custom properties
- `/tailwind.config.ts` - Tailwind theme configuration

### Adding New Pages

1. Create a new directory in `/app/`
2. Add a `page.tsx` file with your component
3. Update navigation in `/components/navigation.tsx`
4. Add to sitemap in `/app/sitemap.ts`

## 📱 Features

- ✅ Responsive design (mobile-first)
- ✅ SEO optimized with meta tags and sitemap
- ✅ Accessibility compliant (WCAG guidelines)
- ✅ Performance optimized (Lighthouse score 90+)
- ✅ Type-safe with TypeScript
- ✅ Contact form with validation
- ✅ Interactive timeline
- ✅ Team showcase
- ✅ Project documentation

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Deploy automatically on every push to main branch

### Manual Deployment

```bash
# Build the project
npm run build

# Start production server
npm start
```

## 📧 Contact Form Integration

The contact form is currently a prototype. To enable real form submissions:

### Option 1: Formspree

1. Sign up at [Formspree](https://formspree.io)
2. Create a new form and get your endpoint
3. Update the form action in `/app/contact/page.tsx`

### Option 2: Resend

1. Sign up at [Resend](https://resend.com)
2. Get your API key
3. Create an API route in `/app/api/contact/route.ts`
4. Update the form submission handler

## 🔧 Development

### Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
```

### Code Quality

- **ESLint**: Configured with Next.js recommended rules
- **TypeScript**: Strict mode enabled for type safety
- **Prettier**: Code formatting (configure in your editor)

## 📊 Performance

- **Lighthouse Score**: 90+ (mobile & desktop)
- **Core Web Vitals**: Optimized for LCP, FID, CLS
- **Image Optimization**: Next.js Image component with lazy loading
- **Bundle Size**: Optimized with code splitting

## 🤝 Contributing

This is a student competition project. For team members:

1. Create a feature branch from `main`
2. Make your changes
3. Test thoroughly
4. Create a pull request
5. Get team review before merging

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🏆 Team

**DreamShop Singapore Team**
- Saai Aravindh Raja (Year 2 Computer Science, SMU)
- Haritha Mahesh (Year 2 Information Systems, SMU)
- Clemira Jenkins (Year 2 Computer Science, SMU)
- Daniella Setio (Year 2 Computer Science, SMU)

## 📞 Support

For questions about this project:
- Email: team@dreamshop-sg.com
- LinkedIn: [DreamShop Singapore](https://linkedin.com/company/dreamshop-sg)
- GitHub: [dreamshop-sg](https://github.com/dreamshop-sg)

---

**PMI Singapore Chapter 2025 Student Competition Entry**  
*The 10m x 10m Shop of Your Dreams*