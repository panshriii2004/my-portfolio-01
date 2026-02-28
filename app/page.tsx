'use client'

import { motion } from 'framer-motion'
import { ArrowDown, Download, ExternalLink, Github, Linkedin, Mail, Phone, Twitter } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { useState } from 'react'

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

export default function Portfolio() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here (EmailJS integration would go here)
    console.log('Form submitted:', formData)
    alert('Thank you for your message! I\'ll get back to you soon.')
    setFormData({ name: '', email: '', message: '' })
  }

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-2xl font-bold text-slate-800"
            >
              Panshri
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="hidden md:flex space-x-8"
            >
              {['Home', 'About', 'Projects', 'Resume', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-slate-600 hover:text-slate-900 transition-colors"
                >
                  {item}
                </button>
              ))}
            </motion.div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <Avatar className="w-32 h-32 mx-auto mb-6">
              <AvatarImage src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/professional-headshot.png`} />
              <AvatarFallback>PS</AvatarFallback>
            </Avatar>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold text-slate-800 mb-6"
          >
            Hi, I'm <span className="text-blue-600">Panshri</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-xl md:text-2xl text-slate-600 mb-8 max-w-2xl mx-auto"
          >
            Full-Stack Developer & UI/UX Designer crafting beautiful digital experiences
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button 
              size="lg" 
              onClick={() => scrollToSection('projects')}
              className="bg-blue-600 hover:bg-blue-700"
            >
              View My Work
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              onClick={() => scrollToSection('contact')}
            >
              Get In Touch
            </Button>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="mt-16"
          >
            <button
              onClick={() => scrollToSection('about')}
              className="animate-bounce text-slate-400 hover:text-slate-600 transition-colors"
            >
              <ArrowDown size={32} />
            </button>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">About Me</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              I'm a passionate developer with expertise in modern web technologies, 
              dedicated to creating exceptional user experiences and robust applications.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-2xl font-bold text-slate-800 mb-4">My Journey</h3>
              <p className="text-slate-600 mb-6">
                With over 3 years of experience in web development, I specialize in creating 
                scalable applications using React, Next.js, and Node.js. I'm passionate about 
                clean code, user-centered design, and continuous learning.
              </p>
              <p className="text-slate-600 mb-6">
                When I'm not coding, you can find me exploring new technologies, contributing 
                to open-source projects, or sharing knowledge through technical writing.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-2xl font-bold text-slate-800 mb-6">Skills & Technologies</h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  'React', 'Next.js', 'TypeScript', 'Node.js',
                  'Python', 'PostgreSQL', 'MongoDB', 'AWS',
                  'Docker', 'Git', 'Figma', 'Tailwind CSS'
                ].map((skill) => (
                  <Badge key={skill} variant="secondary" className="justify-center py-2">
                    {skill}
                  </Badge>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">Featured Projects</h2>
            <p className="text-xl text-slate-600">
              Here are some of my recent projects that showcase my skills and creativity.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {[
              {
                title: 'PORTFOLIO-MAKER',
                description: 'Full-stack e-commerce solution with React, Node.js, and Stripe integration.',
                image: `${process.env.NEXT_PUBLIC_BASE_PATH || ''}/ecommerce-website-homepage.png`,
                 imageLink: 'https://panshriii2004.github.io/portfolio_maker/',
                tech: ['React', 'Node.js', 'MongoDB', 'Stripe' , 'Tailwind'],
                github: '#',
                live: '#'
              },
              {
                title: 'TASK TEAM PRAYASH',
                description: 'Collaborative task management tool with real-time updates and team features.',
                image: `${process.env.NEXT_PUBLIC_BASE_PATH || ''}/task-management-dashboard.png`,
                imageLink:'https://panshriii2004.github.io/PORTFOLIO/',
                tech: ['Next.js', 'TypeScript', 'PostgreSQL', 'Socket.io'],
                github: '#',
                live: '#'
              },
              {
                title: 'Weather Dashboard',
                description: 'Beautiful weather app with location-based forecasts and interactive maps.',
                image: `${process.env.NEXT_PUBLIC_BASE_PATH || ''}/weather-dashboard.png`,
                imageLink:'#',
                tech: ['React', 'API Integration', 'Chart.js', 'Tailwind'],
                github: '#',
                live: '#'
              }
            ].map((project, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                 <div className="aspect-video overflow-hidden">
  <a
    href={project.imageLink}
    target="_blank"
    rel="noopener noreferrer"
  >
    <img 
      src={project.image || "/placeholder.svg"} 
      alt={project.title}
      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300 cursor-pointer"
    />
  </a>
</div>
                  <CardHeader>
                    <CardTitle>{project.title}</CardTitle>
                    <CardDescription>{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech) => (
                        <Badge key={tech} variant="outline">{tech}</Badge>
                      ))}
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline" asChild>
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="w-4 h-4 mr-2" />
                          Code
                        </a>
                      </Button>
                      <Button size="sm" asChild>
                        <a href={project.live} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Live Demo
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Resume Section */}
      <section id="resume" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">Resume</h2>
            <p className="text-xl text-slate-600 mb-8">
              Download my resume to learn more about my experience and qualifications.
            </p>
             <a href={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/RESUME.pdf`} download>
  <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
    <Download className="w-5 h-5 mr-2" />
    Download Resume (PDF)
  </Button>
</a>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">Testimonials</h2>
            <p className="text-xl text-slate-600">
              What clients and colleagues say about working with me.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {[
              {
                name: 'Sarah Johnson',
                role: 'Product Manager',
                company: 'TechCorp',
                content: 'Panshri delivered exceptional work on our e-commerce platform. Her attention to detail and technical expertise made the project a huge success.',
              avatar: `${process.env.NEXT_PUBLIC_BASE_PATH || ''}/professional-woman-diverse.png`
              },
              {
                name: 'Mike Chen',
                role: 'CTO',
                company: 'StartupXYZ',
                content: 'Working with Panshri was a game-changer for our team. She brought fresh ideas and implemented them flawlessly.',
                avatar: `${process.env.NEXT_PUBLIC_BASE_PATH || ''}/professional-man.png`
              },
              {
                name: 'Emily Davis',
                role: 'Design Lead',
                company: 'Creative Agency',
                content: 'Panshri has an incredible ability to translate designs into pixel-perfect, responsive web applications. Highly recommended!',
                avatar: `${process.env.NEXT_PUBLIC_BASE_PATH || ''}/professional-woman-designer.png`
              }
            ].map((testimonial, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card>
                  <CardContent className="pt-6">
                    <p className="text-slate-600 mb-4 italic">"{testimonial.content}"</p>
                    <div className="flex items-center">
                      <Avatar className="w-12 h-12 mr-4">
                        <AvatarImage src={testimonial.avatar || "/placeholder.svg"} />
                        <AvatarFallback>{testimonial.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-semibold text-slate-800">{testimonial.name}</p>
                        <p className="text-sm text-slate-600">{testimonial.role} at {testimonial.company}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Blog Preview Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">Latest Blog Posts</h2>
            <p className="text-xl text-slate-600">
              Sharing insights, tutorials, and thoughts on web development.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {[
              {
                title: 'Building Scalable React Applications',
                excerpt: 'Learn best practices for structuring large React applications with proper state management and component architecture.',
                date: 'Dec 15, 2024',
                readTime: '5 min read',
                image: `${process.env.NEXT_PUBLIC_BASE_PATH || ''}/react-code-snippet.png`
              },
              {
                title: 'The Future of Web Development',
                excerpt: 'Exploring emerging trends and technologies that will shape the future of web development in 2025 and beyond.',
                date: 'Dec 10, 2024',
                readTime: '7 min read',
                image: `${process.env.NEXT_PUBLIC_BASE_PATH || ''}/futuristic-web-design.png`
              },
              {
                title: 'Optimizing Performance in Next.js',
                excerpt: 'Practical tips and techniques for improving the performance of your Next.js applications.',
                date: 'Dec 5, 2024',
                readTime: '6 min read',
                image: `${process.env.NEXT_PUBLIC_BASE_PATH || ''}/nextjs-performance.png`
              }
            ].map((post, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
                  <div className="aspect-video overflow-hidden">
                    <img 
                      src={post.image || "/placeholder.svg"} 
                      alt={post.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardHeader>
                    <div className="flex items-center text-sm text-slate-500 mb-2">
                      <span>{post.date}</span>
                      <span className="mx-2">•</span>
                      <span>{post.readTime}</span>
                    </div>
                    <CardTitle className="hover:text-blue-600 transition-colors">{post.title}</CardTitle>
                    <CardDescription>{post.excerpt}</CardDescription>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">Get In Touch</h2>
            <p className="text-xl text-slate-600">
              I'm always open to discussing new opportunities and interesting projects.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-2xl font-bold text-slate-800 mb-6">Let's Connect</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Mail className="w-5 h-5 text-blue-600 mr-3" />
                  <span className="text-slate-600">panshri2004@example.com</span>
                </div>
                <div className="flex items-center">
                  <Phone className="w-5 h-5 text-blue-600 mr-3" />
                  <span className="text-slate-600">+91 (971) 308-1659</span>
                </div>
              </div>

              <div className="mt-8">
                <h4 className="text-lg font-semibold text-slate-800 mb-4">Follow Me</h4>
                <div className="flex space-x-4">
                  <Button size="sm" variant="outline" asChild>
                    <a href="#" target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4" />
                    </a>
                  </Button>
                  <Button size="sm" variant="outline" asChild>
                    <a href="#" target="_blank" rel="noopener noreferrer">
                      <Linkedin className="w-4 h-4" />
                    </a>
                  </Button>
                  <Button size="sm" variant="outline" asChild>
                    <a href="#" target="_blank" rel="noopener noreferrer">
                      <Twitter className="w-4 h-4" />
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle>Send a Message</CardTitle>
                  <CardDescription>
                    Fill out the form below and I'll get back to you as soon as possible.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <Input
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                      />
                    </div>
                    <div>
                      <Input
                        type="email"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                      />
                    </div>
                    <div>
                      <Textarea
                        placeholder="Your Message"
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        required
                      />
                    </div>
                    <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 bg-slate-800 text-white">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-slate-300">
            © 2024 Panshri. All rights reserved. Built with Next.js and Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  )
}
