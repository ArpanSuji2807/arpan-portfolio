import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail, Phone, MapPin, ExternalLink, Code, Database, Cpu, Briefcase, GraduationCap, Rocket } from 'lucide-react';

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      const sections = ['home', 'about', 'skills', 'experience', 'projects', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const skills = {
    languages: ['JavaScript (ES6+)', 'HTML5', 'CSS3', 'TypeScript'],
    frameworks: ['React.js', 'Angular (2+)', 'Node.js', 'Express.js', 'React Native'],
    databases: ['MongoDB', 'MySQL', 'PostgreSQL', 'Redis'],
    tools: ['RabbitMQ', 'Socket.io', 'Git', 'AWS', 'GraphQL', 'RESTful APIs', 'Webpack']
  };

  const experiences = [
    {
      company: 'StoreApps',
      role: 'Software Engineer',
      period: '2024 - Present',
      achievements: [
        'Developed real-time features using Socket.io, improving user engagement by 25%',
        'Built responsive React.js interfaces, reducing support queries by 18%',
        'Implemented Node.js with GraphQL backend handling thousands of daily sessions',
        'Integrated RabbitMQ and Redis caching, reducing data latency by 40%'
      ]
    },
    {
      company: 'Valuepitch E Technologies',
      role: 'Full Stack Developer',
      period: '2022 - 2024',
      achievements: [
        'Engineered MEAN and MERN stack applications, increasing client satisfaction by 20%',
        'Built RESTful APIs with caching, reducing response times by 30%',
        'Maintained optimal performance across multiple web applications'
      ]
    }
  ];

  const projects = [
    {
      name: 'Putler',
      description: 'Scalable analytics platform with real-time insights using Node.js, GraphQL, and React.js. Handles thousands of user sessions daily with WebSockets and Redis caching.',
      tech: ['React.js', 'Node.js', 'GraphQL', 'RabbitMQ', 'Redis', 'Socket.io'],
      metrics: '40% latency reduction, 20% conversion increase'
    },
    {
      name: 'CrimeScan',
      description: 'Web application for searching criminal activity cases by name and address. Built with Angular frontend and Node.js RESTful APIs.',
      tech: ['Angular', 'Node.js', 'RESTful APIs'],
      metrics: '35% search volume increase, 3x user engagement'
    },
    {
      name: 'Court Checker',
      description: 'React Native Android app for searching criminal cases with offline mode functionality, enabling users to save cases to their accounts.',
      tech: ['React Native', 'Node.js', 'Offline Storage'],
      metrics: '45% satisfaction increase, 2x engagement boost'
    },
    {
      name: 'Testing 24x7',
      description: 'Comprehensive testing application for web and Android platforms with concurrent flow management capabilities.',
      tech: ['React.js', 'Angular', 'Node.js'],
      metrics: '50% testing time reduction, 50% productivity boost'
    }
  ];

  return (
    <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-100 min-h-screen">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-gray-900/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              AS
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {['Home', 'About', 'Skills', 'Experience', 'Projects', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`transition-colors duration-300 hover:text-blue-400 ${
                    activeSection === item.toLowerCase() ? 'text-blue-400' : 'text-gray-300'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-gray-300 hover:text-blue-400"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-gray-900/95 backdrop-blur-sm">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {['Home', 'About', 'Skills', 'Experience', 'Projects', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="block w-full text-left px-3 py-2 text-gray-300 hover:text-blue-400 hover:bg-gray-800 rounded-md"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-16">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8 animate-fadeIn">
            <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Arpan Suji
            </h1>
            <h2 className="text-2xl md:text-3xl text-gray-300 mb-6">Software Engineer</h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-8">
              Software Engineer with 3+ years of experience delivering scalable, high-quality web applications. 
              Strong focus on performance, clean architecture, and seamless user experiences.
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <a href="mailto:arpantech28@gmail.com" className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg transition-colors duration-300">
              <Mail size={20} />
              Get In Touch
            </a>
            <button onClick={() => scrollToSection('projects')} className="flex items-center gap-2 bg-gray-700 hover:bg-gray-600 px-6 py-3 rounded-lg transition-colors duration-300">
              <Rocket size={20} />
              View Projects
            </button>
          </div>

          <div className="flex justify-center gap-6">
            <a href="https://www.linkedin.com/in/arpan-suji-6253671a6/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
              <Linkedin size={28} />
            </a>
            <a href="mailto:arpantech28@gmail.com" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
              <Mail size={28} />
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="bg-gray-800/50 rounded-xl p-8 backdrop-blur-sm">
            <div className="flex items-start gap-4 mb-6">
              <MapPin className="text-blue-400 mt-1" size={24} />
              <div>
                <h3 className="text-xl font-semibold mb-2">Location</h3>
                <p className="text-gray-400">Darjeeling, West Bengal, India</p>
              </div>
            </div>
            <div className="flex items-start gap-4 mb-6">
              <GraduationCap className="text-blue-400 mt-1" size={24} />
              <div>
                <h3 className="text-xl font-semibold mb-2">Education</h3>
                <p className="text-gray-400">Bachelor's Degree in Technology</p>
                <p className="text-gray-500 text-sm">Institute of Aeronautical Engineering (2017-2021)</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Briefcase className="text-blue-400 mt-1" size={24} />
              <div>
                <h3 className="text-xl font-semibold mb-2">Experience</h3>
                <p className="text-gray-400">
                  3+ years of professional experience building full-stack applications using modern technologies. 
                  Specialized in React.js, Node.js, and creating scalable architectures that deliver measurable business impact.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 bg-gray-800/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Skills & Technologies
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gray-800/50 rounded-xl p-6 backdrop-blur-sm hover:bg-gray-800/70 transition-all duration-300">
              <Code className="text-blue-400 mb-4" size={32} />
              <h3 className="text-xl font-semibold mb-4">Languages</h3>
              <div className="flex flex-wrap gap-2">
                {skills.languages.map((skill, idx) => (
                  <span key={idx} className="bg-blue-600/20 text-blue-300 px-3 py-1 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-gray-800/50 rounded-xl p-6 backdrop-blur-sm hover:bg-gray-800/70 transition-all duration-300">
              <Cpu className="text-purple-400 mb-4" size={32} />
              <h3 className="text-xl font-semibold mb-4">Frameworks</h3>
              <div className="flex flex-wrap gap-2">
                {skills.frameworks.map((skill, idx) => (
                  <span key={idx} className="bg-purple-600/20 text-purple-300 px-3 py-1 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-gray-800/50 rounded-xl p-6 backdrop-blur-sm hover:bg-gray-800/70 transition-all duration-300">
              <Database className="text-green-400 mb-4" size={32} />
              <h3 className="text-xl font-semibold mb-4">Databases</h3>
              <div className="flex flex-wrap gap-2">
                {skills.databases.map((skill, idx) => (
                  <span key={idx} className="bg-green-600/20 text-green-300 px-3 py-1 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-gray-800/50 rounded-xl p-6 backdrop-blur-sm hover:bg-gray-800/70 transition-all duration-300">
              <Briefcase className="text-pink-400 mb-4" size={32} />
              <h3 className="text-xl font-semibold mb-4">Tools</h3>
              <div className="flex flex-wrap gap-2">
                {skills.tools.map((skill, idx) => (
                  <span key={idx} className="bg-pink-600/20 text-pink-300 px-3 py-1 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Professional Experience
          </h2>
          <div className="space-y-8">
            {experiences.map((exp, idx) => (
              <div key={idx} className="bg-gray-800/50 rounded-xl p-8 backdrop-blur-sm hover:bg-gray-800/70 transition-all duration-300">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-blue-400">{exp.role}</h3>
                    <p className="text-xl text-gray-300">{exp.company}</p>
                  </div>
                  <span className="text-gray-400 mt-2 md:mt-0">{exp.period}</span>
                </div>
                <ul className="space-y-2">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="text-gray-400 flex items-start">
                      <span className="text-blue-400 mr-2">▹</span>
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 bg-gray-800/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, idx) => (
              <div key={idx} className="bg-gray-800/50 rounded-xl p-6 backdrop-blur-sm hover:bg-gray-800/70 transition-all duration-300 hover:transform hover:scale-105">
                <h3 className="text-2xl font-bold mb-3 text-blue-400">{project.name}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="border-t border-gray-700 pt-4">
                  <p className="text-sm text-green-400 font-semibold">📊 {project.metrics}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-400 mb-12">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <a href="mailto:arpantech28@gmail.com" className="bg-gray-800/50 rounded-xl p-6 hover:bg-gray-800/70 transition-all duration-300">
              <Mail className="mx-auto mb-4 text-blue-400" size={32} />
              <h3 className="font-semibold mb-2">Email</h3>
              <p className="text-gray-400 text-sm">arpantech28@gmail.com</p>
            </a>
            <a href="tel:+919182510712" className="bg-gray-800/50 rounded-xl p-6 hover:bg-gray-800/70 transition-all duration-300">
              <Phone className="mx-auto mb-4 text-blue-400" size={32} />
              <h3 className="font-semibold mb-2">Phone</h3>
              <p className="text-gray-400 text-sm">+91 9182510712</p>
            </a>
            <a href="https://www.linkedin.com/in/arpan-suji-6253671a6/"  target="_blank"  rel="noopener noreferrer" className="bg-gray-800/50 rounded-xl p-6 hover:bg-gray-800/70 transition-all duration-300">
              <Linkedin className="mx-auto mb-4 text-blue-400" size={32} />
              <h3 className="font-semibold mb-2">LinkedIn</h3>
              <p className="text-gray-400 text-sm">Connect with me</p>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-gray-800">
        <div className="max-w-4xl mx-auto text-center text-gray-400">
          <p>© 2025 Arpan Suji Portfolio</p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;