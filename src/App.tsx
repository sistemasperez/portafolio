import React, { useState, useEffect } from 'react';
import { 
  Moon, 
  Sun, 
  Code, 
  Gamepad2, 
  Smartphone, 
  Brain,
  BarChart,
  Mail, 
  Github, 
  Linkedin, 
  Twitter,
  ExternalLink,
  ArrowRight,
  ChevronDown,
  Play,
  Eye,
  Calendar
} from 'lucide-react';

function App() {
  const [isDark, setIsDark] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'projects', 'services', 'about', 'contact'];
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

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const projects = [
    {
      title: '📘  Sistema de Monitoreo de Proyectos Educativos',
      category: 'Enterprise Platfform',
      description: 'Plataforma integral para la gestión y seguimiento de proyectos educativos a nivel nacional. Permite administrar Distritos, Redes Educativas, Centros, Docentes y Directivos. Incluye herramientas de levantamiento de información mediante encuestas de acompañamiento pedagógico y evaluación docente.',
      image: 'https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg?auto=compress&cs=tinysrgb&w=800',
      tech: ['Net Core', 'C#'],
      year: '2014',
      type: 'game'
    },
    {
      title: 'Videojuego Educativo "Sumix"',
      category: 'Game Development',
      description: 'Videojuego interactivo desarrollado en Flash para el aprendizaje de la suma y resta de números enteros. Diseñado para reforzar habilidades matemáticas de forma divertida y efectiva.',
      image: 'https://res.cloudinary.com/dhwugyz9h/image/upload/v1751310956/Sumix_oup7to.png',
      tech: ['Unity', 'C#'],
      year: '2016',
      type: 'game'
    },
    {
      title: 'Videojuego "La Rana Numérica"',
      category: 'game Development',
      description: 'Juego didáctico que utiliza un personaje animado (una rana) para enseñar operaciones básicas. El jugador debe realizar saltos estratégicos y capturar moscas en el orden correcto para alcanzar el número objetivo. Ideal para niños de primaria.',
      image: 'https://res.cloudinary.com/dhwugyz9h/image/upload/v1751310283/IMG-20250119-WA0009_pkxyyo.jpg',
      tech: ['Construct 3'],
      year: '2016',
      type: 'web'
    },
    
    {
      title: 'Sistema de Gestión de Evaluaciones de Planes de Estudio',
      category: 'Web Development',
      description: 'Aplicación especializada para la evaluación de planes curriculares según criterios normativos y estándares de calidad educativa. Permite revisar, comparar y aprobar planes de estudio con base en parámetros definidos.',
      image: 'https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=800',
      tech: ['Angular Js', 'Socket io', 'GitHub API', 'Azure', 'MongoDb', 'NodeJs'],
      year: '2018',
      type: 'web'
    },
    {
      title: 'Plataforma Web y Videojuegos – Proyecto “Matemática Lúdica Digital”',
      category: 'Web Development',
      description: 'An immersive RPG with branching storylines, custom character progression, and multiplayer dungeons.',
      image: 'https://res.cloudinary.com/dhwugyz9h/image/upload/v1751309861/MLD_cxicwh.png',
      tech: ['C#', 'Angular 2x', 'Multiplayer'],
      year: '2019',
      type: 'game'
    },
    {
      title: 'Sistema de Evaluación Docente Universitaria',
      category: 'Web Development',
      description: 'Herramienta digital para la evaluación y retroalimentación continua de la práctica docente. Facilita la recolección de evidencias, análisis de desempeño y generación de informes personalizados.',
      image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800',
      tech: ['Angular 15', 'C#', 'Net Core', "SQL Server", "Azure"],
      year: '2021',
      type: 'web'
    },
    {
      title: 'Videojuego “Regresa Firu” – Organización de Estados Iberoamericanos',
      category: 'Game Desing Development',
      description: 'Juego educativo desarrollado para la Organización de Estados Iberoamericanos (OEI), orientado a mejorar la comprensión lectora en niños. Combina narrativa interactiva, estrategias de lectura y contenidos audiovisuales para lograr una experiencia inmersiva.',
      image: 'https://res.cloudinary.com/dhwugyz9h/image/upload/v1751310880/regresaFiru_fsu2hf.png',
      tech: ['Angular Js', 'Socket io', 'GitHub API', 'Azure', 'MongoDb', 'NodeJS'],
      year: '2022',
      type: 'web'
    },

    {
      title: 'Sistema de Gestión de Rifas y Pagos – COEHMS',
      category: 'Web Development',
      description: 'Aplicación diseñada para automatizar rifas institucionales, registro de participantes y control de pagos. Aporta transparencia, eficiencia y trazabilidad a los procesos administrativos de captación de fondos.',
      image: 'https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=800',
      tech: ['Angular Js', 'Socket io', 'GitHub API', 'Azure', 'MongoDb', 'NodeJs'],
      year: '2022',
      type: 'web'
    },
    

    {
      title: 'Sistema de Gestión de Retiros COEHMS',
      category: 'Web Development',
      description: 'Plataforma para la organización de retiros y eventos, con funcionalidades para la gestión de habitaciones, reservas, pagos y análisis de participación. Incluye paneles de análisis (Analytics) para optimizar la toma de decisiones.',
      image: 'https://res.cloudinary.com/dhwugyz9h/image/upload/v1751310631/Retiros_Coehms_m16wlp.png',
      tech: ['Angular Js', 'Socket io', 'GitHub API', 'Azure', 'MongoDb', 'NodeJs'],
      year: '2022',
      type: 'web'
    },
    


    
    {
      title: 'Geo X Ray – Sistema de Monitoreo Geoespacial con Inteligencia Artificial',
      category: 'Web Development',
      description: ' Plataforma avanzada de monitoreo geoespacial que utiliza inteligencia artificial para analizar y visualizar datos en tiempo real. Permite la hacer preguntas en Lenguaje natural y obtener respuestas de la distribución geografica de Negocios o lugares.',
      image: 'https://res.cloudinary.com/dhwugyz9h/image/upload/v1751311209/geoXRay_vxsmwc.png',
      tech: ['Python', 'FastApi', 'OpenAi', 'Autogen', 'Azure', 'ArangoDb', 'NetworkX'],
      year: '2025',
      type: 'web'
    },

    
  ];

  const services = [
    {
      icon: Brain, // puedes usar un ícono de AI o Automatización
      title: 'Automatización Inteligente con Agentes AI',
      description:
        'Desarrollo de soluciones inteligentes que automatizan procesos complejos usando agentes con capacidad de decisión, aprendizaje y adaptación. Ideal para transformar operaciones rutinarias en sistemas autónomos.',
      skills: ['AI Agents', 'Workflow Automation', 'Python', 'RPA', 'OpenAI'],
      color: 'from-indigo-500 to-blue-600'
    },
    {
      icon: Code,
      title: 'Desarrollo Web y Apps Empresariales',
      description:
        'Creamos aplicaciones empresariales robustas y escalables que optimizan la eficiencia operativa. Desde sistemas de evaluación hasta plataformas administrativas, todo adaptado a tus procesos.',
      skills: ['Next.js', 'React', 'Node.js', 'Tailwind', 'PostgreSQL'],
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Smartphone,
      title: 'Aplicaciones Móviles',
      description:
        'Diseño y desarrollo de apps móviles nativas y multiplataforma con rendimiento fluido e interfaces intuitivas. Perfectas para llegar a tus usuarios donde sea que estén.',
      skills: ['Flutter', 'React Native', 'iOS', 'Android', 'Firebase'],
      color: 'from-cyan-500 to-blue-500'
    },
    {
      icon: Gamepad2,
      title: 'Videojuegos con Propósito',
      description:
        'Diseño y desarrollo de videojuegos educativos y temáticos que combinan entretenimiento e impacto pedagógico. Ideales para proyectos escolares, institucionales y sociales.',
      skills: ['Unity', 'Flash', 'Game Design', 'Narrativa Interactiva', 'Gamificación'],
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: BarChart,
      title: 'Sistemas de Análisis y Reportes',
      description:
        'Desarrollo de dashboards y herramientas de análisis personalizados que te ayudan a tomar decisiones basadas en datos reales en tiempo real.',
      skills: ['Data Analytics', 'Dashboards', 'Chart.js', 'Supabase', 'SQL'],
      color: 'from-green-500 to-emerald-500'
    }
  ];

  const getProjectIcon = (type: string) => {
    switch (type) {
      case 'game': return Gamepad2;
      case 'mobile': return Smartphone;
      case 'web': return Code;
      default: return Code;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-gray-900 dark:via-slate-900 dark:to-indigo-950 transition-all duration-500">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl border-b border-gray-200/50 dark:border-gray-700/50 transition-all duration-300 shadow-lg shadow-black/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex flex-col">
              <div className="text-xs font-medium text-purple-600 dark:text-purple-400 tracking-wider uppercase">
                @CodeCraftJuan
              </div>
              <div className="font-bold text-lg text-gray-900 dark:text-white -mt-1">
                Juan Anibal Perez
              </div>
            </div>
            
            <div className="hidden md:flex space-x-8">
              {[
                { id: 'hero', label: 'Home' },
                { id: 'projects', label: 'Projects' },
                { id: 'services', label: 'Services' },
                { id: 'about', label: 'About' },
                { id: 'contact', label: 'Contact' }
              ].map(({ id, label }) => (
                <button
                  key={id}
                  onClick={() => scrollToSection(id)}
                  className={`text-sm font-medium transition-all duration-200 relative ${
                    activeSection === id
                      ? 'text-purple-600 dark:text-purple-400'
                      : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'
                  }`}
                >
                  {label}
                  {activeSection === id && (
                    <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-purple-600 dark:bg-purple-400 rounded-full"></div>
                  )}
                </button>
              ))}
            </div>

            <button
              onClick={() => setIsDark(!isDark)}
              className="p-2 rounded-xl bg-gray-100/80 dark:bg-gray-800/80 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-all duration-200 hover:scale-105"
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-50/50 via-transparent to-pink-50/50 dark:from-gray-900/50 dark:via-transparent dark:to-gray-800/50"></div>
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-purple-300/20 dark:bg-purple-600/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-300/20 dark:bg-pink-600/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <div className="animate-fade-in-up">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6">
              Juan Anibal <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 bg-clip-text text-transparent">Perez</span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
              Crafting digital experiences through web development, game design, and mobile applications
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                onClick={() => scrollToSection('projects')}
                className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-xl font-medium transition-all duration-200 flex items-center gap-2 group shadow-lg shadow-purple-500/25 hover:shadow-xl hover:shadow-purple-500/30 hover:scale-105"
              >
                View My Work
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-200" />
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="px-8 py-4 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:border-purple-600 hover:text-purple-600 dark:hover:border-purple-400 dark:hover:text-purple-400 rounded-xl font-medium transition-all duration-200 hover:scale-105 backdrop-blur-sm bg-white/50 dark:bg-gray-900/50"
              >
                Get In Touch
              </button>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown size={24} className="text-gray-400 dark:text-gray-600" />
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Featured Projects
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              A showcase of my latest work across web development, game design, and mobile applications
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => {
              const ProjectIcon = getProjectIcon(project.type);
              return (
                <div
                  key={index}
                  className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group border border-gray-200/50 dark:border-gray-700/50"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute top-4 right-4 bg-white/90 dark:bg-gray-900/90 rounded-full p-2 backdrop-blur-sm">
                      <ProjectIcon size={20} className="text-purple-600 dark:text-purple-400" />
                    </div>
                    <div className="absolute bottom-4 left-4 flex items-center gap-2 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Calendar size={16} />
                      <span className="text-sm font-medium">{project.year}</span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-purple-600 dark:text-purple-400">
                        {project.category}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                      {project.title}
                    </h3>
                    
                    <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-2 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-lg text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex gap-2">
                      <button className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-lg text-sm font-medium transition-all duration-200 hover:scale-105">
                        <Eye size={16} />
                        View Project
                      </button>
                      {project.type === 'game' && (
                        <button className="px-4 py-2 border border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white rounded-lg text-sm font-medium transition-all duration-200 flex items-center gap-2 hover:scale-105">
                          <Play size={16} />
                          Play
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gradient-to-br from-gray-50/80 to-blue-50/80 dark:from-gray-800/80 dark:to-slate-800/80 backdrop-blur-sm transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Que puedo hacer por ti?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Transformamos ideas en experiencias Digitales Increibles en múltiples plataformas y tecnologías
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="relative bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group border border-gray-200/50 dark:border-gray-700/50 overflow-hidden"
                >
                  {/* Background gradient effect */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                  
                  <div className="relative z-10">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                      <Icon size={32} className="text-white" />
                    </div>
                    
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                      {service.title}
                    </h3>
                    
                    <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2">
                      {service.skills.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="px-3 py-1 bg-gray-100/80 dark:bg-gray-800/80 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 hover:scale-105 transition-transform duration-200"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm transition-all duration-300">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Sobre mi
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
             Soy un desarrollador apasionado por crear soluciones digitales innovadoras
            </p>
          </div>

          <div className="relative">
            {/* Background decorative elements */}
            <div className="absolute -top-10 -left-10 w-32 h-32 bg-purple-300/20 dark:bg-purple-600/10 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-pink-300/20 dark:bg-pink-600/10 rounded-full blur-2xl"></div>
            
            <div className="relative bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl border border-gray-200/50 dark:border-gray-700/50">
              <div className="prose prose-lg max-w-none text-gray-600 dark:text-gray-300">
                <p className="text-lg leading-relaxed mb-6 first-letter:text-5xl first-letter:font-bold first-letter:text-purple-600 dark:first-letter:text-purple-400 first-letter:mr-2 first-letter:float-left first-letter:leading-none">
                A lo largo de los años, he tenido la oportunidad de participar en proyectos muy diversos, que abarcan desde el desarrollo web hasta el diseño de videojuegos y aplicaciones móviles. Mi camino comenzó con una curiosidad por entender cómo funcionan las cosas, y con el tiempo se transformó en una verdadera pasión por construir experiencias que generen impacto.
                </p>
                
                <div className="grid md:grid-cols-2 gap-8 my-8">
                  <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-2xl p-6 border border-purple-200/50 dark:border-purple-700/50">
                    <h4 className="font-bold text-gray-900 dark:text-white mb-3">Filosofía</h4>
                    <p className="text-gray-600 dark:text-gray-300">
                    Creo firmemente en el poder de un código limpio, un diseño bien pensado y un desarrollo centrado en el usuario. Para mí, cada proyecto representa una oportunidad para crear algo significativo y funcional.


                    </p>
                  </div>
                  
                  <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-2xl p-6 border border-blue-200/50 dark:border-blue-700/50">
                    <h4 className="font-bold text-gray-900 dark:text-white mb-3">Mi enfoque</h4>
                    <p className="text-gray-600 dark:text-gray-300">
                    Ya sea diseñando un sitio web, desarrollando un juego o creando una app móvil, afronto cada desafío con atención al detalle y un fuerte compromiso con la calidad.
                    </p>
                  </div>
                </div>
                
                <p className="text-lg leading-relaxed">
                Cuando no estoy programando, me gusta explorar nuevas tecnologías, contribuir a proyectos de código abierto y compartir conocimientos con la comunidad de desarrolladores. Siempre estoy en busca de nuevos retos y colaboraciones que me permitan seguir aprendiendo y llevar la innovación un paso más allá.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-gray-50/80 to-blue-50/80 dark:from-gray-800/80 dark:to-slate-800/80 backdrop-blur-sm transition-all duration-300">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Vamos a trabajar juntos!
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-12">
              ¿Listo para hacer realidad tus ideas? Me encantaría conocer tu proyecto.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <a
              href="mailto:juan.anibal.perez@example.com"
              className="flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-xl font-medium transition-all duration-200 group shadow-lg shadow-purple-500/25 hover:shadow-xl hover:shadow-purple-500/30 hover:scale-105"
            >
              <Mail size={20} />
              Enviame un email
              <ExternalLink size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-200" />
            </a>
          </div>

          <div className="flex justify-center space-x-6">
            {[
              { icon: Github, href: 'https://github.com/sistemasperez', label: 'GitHub' },
              { icon: Linkedin, href: 'https://www.linkedin.com/in/anibal-perez-guzman-3300b629/', label: 'LinkedIn' },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-xl text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-all duration-200 transform hover:-translate-y-1 hover:scale-105 border border-gray-200/50 dark:border-gray-700/50"
                aria-label={label}
              >
                <Icon size={24} />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-t border-gray-200/50 dark:border-gray-700/50 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-600 dark:text-gray-300">
            © 2025 Juan Anibal Perez. 
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;