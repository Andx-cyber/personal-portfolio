// This file contains all the constant data used throughout the website

export const navLinks = [
  { title: 'Home', id: 'home' },
  { title: 'About', id: 'about' },
  { title: 'Projects', id: 'projects' },
  { title: 'Services', id: 'services' },
  { title: 'Testimonials', id: 'testimonials' },
  { title: 'Contact', id: 'contact' },
];

export const skills = [
  { name: 'HTML5', icon: 'FaHtml5', category: 'frontend' },
  { name: 'CSS3', icon: 'FaCss3Alt', category: 'frontend' },
  { name: 'JavaScript', icon: 'DiJavascript1', category: 'frontend' },
  { name: 'React', icon: 'FaReact', category: 'frontend' },
  { name: 'TypeScript', icon: 'SiTypescript', category: 'frontend' },
  { name: 'TailwindCSS', icon: 'SiTailwindcss', category: 'frontend' },
  { name: 'Node.js', icon: 'FaNodeJs', category: 'backend' },
  { name: 'Express', icon: 'SiExpress', category: 'backend' },
  { name: 'MongoDB', icon: 'SiMongodb', category: 'backend' },
  { name: 'PostgreSQL', icon: 'SiPostgresql', category: 'backend' },
  { name: 'Docker', icon: 'FaDocker', category: 'devops' },
  { name: 'Git', icon: 'FaGitAlt', category: 'devops' },
  { name: 'Figma', icon: 'FaFigma', category: 'design' },
  { name: 'Adobe XD', icon: 'SiAdobexd', category: 'design' },
];

export const projects = [
  {
    id: 1,
    title: 'Modern E-commerce Platform',
    description: 'A full-stack e-commerce solution with React, Node.js, and MongoDB.',
    image: '/assets/images/project1.jpg',
    category: 'Web Development',
    technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
    githubUrl: 'https://github.com/username/project1',
    liveUrl: 'https://project1-demo.com',
    detailDescription: 'This e-commerce platform includes user authentication, product management, shopping cart, payment processing, and order tracking. The frontend is built with React and styled with TailwindCSS, while the backend uses Node.js with Express and MongoDB.'
  },
  {
    id: 2,
    title: 'Task Management Dashboard',
    description: 'Responsive task manager with drag-and-drop functionality.',
    image: '/assets/images/project2.jpg',
    category: 'Web App',
    technologies: ['Vue.js', 'Firebase', 'TailwindCSS'],
    githubUrl: 'https://github.com/username/project2',
    liveUrl: 'https://project2-demo.com',
    detailDescription: 'A feature-rich task management dashboard that allows users to organize tasks using drag-and-drop functionality. It includes user authentication, real-time updates, task filtering and sorting, due date reminders, and team collaboration features.'
  },
  {
    id: 3,
    title: 'AI-powered Fitness App',
    description: 'Mobile app with personalized workout recommendations.',
    image: '/assets/images/project3.jpg',
    category: 'Mobile Development',
    technologies: ['React Native', 'Python', 'TensorFlow'],
    githubUrl: 'https://github.com/username/project3',
    liveUrl: 'https://project3-demo.com',
    detailDescription: 'This fitness application uses AI to provide personalized workout recommendations based on user goals, preferences, and progress. The app includes video tutorials, progress tracking, social features, and nutrition advice.'
  },
  {
    id: 4,
    title: 'Interactive Data Visualization',
    description: 'Dynamic charts and graphs for analyzing complex datasets.',
    image: '/assets/images/project4.jpg',
    category: 'Data Visualization',
    technologies: ['D3.js', 'React', 'Python', 'PostgreSQL'],
    githubUrl: 'https://github.com/username/project4',
    liveUrl: 'https://project4-demo.com',
    detailDescription: 'An interactive data visualization platform that transforms complex datasets into intuitive, interactive charts and graphs. Users can filter data, adjust parameters, and export visualizations in various formats.'
  },
  {
    id: 5,
    title: 'Smart Home Control System',
    description: 'IoT solution for managing home devices with voice commands.',
    image: '/assets/images/project5.jpg',
    category: 'IoT',
    technologies: ['React', 'Node.js', 'MQTT', 'Raspberry Pi'],
    githubUrl: 'https://github.com/username/project5',
    liveUrl: 'https://project5-demo.com',
    detailDescription: 'A smart home system that connects and controls various IoT devices through a single interface. Features include voice commands, automated routines, energy usage monitoring, and remote access via mobile app.'
  },
  {
    id: 6,
    title: 'Crypto Portfolio Tracker',
    description: 'Real-time cryptocurrency monitoring and analytics.',
    image: '/assets/images/project6.jpg',
    category: 'Finance',
    technologies: ['React', 'Redux', 'Node.js', 'WebSockets'],
    githubUrl: 'https://github.com/username/project6',
    liveUrl: 'https://project6-demo.com',
    detailDescription: 'A comprehensive cryptocurrency portfolio tracker that provides real-time price updates, historical data analysis, portfolio performance metrics, and automated trading suggestions based on predefined strategies.'
  },
];

export const services = [
  {
    title: 'Web Development',
    icon: 'FaLaptopCode',
    description: 'Creating responsive, performant websites and web applications tailored to your business needs.',
    features: [
      'Custom website design',
      'Full-stack development',
      'E-commerce solutions',
      'CMS integration',
      'API development'
    ]
  },
  {
    title: 'Mobile App Development',
    icon: 'FaMobileAlt',
    description: 'Building native and cross-platform mobile applications for iOS and Android devices.',
    features: [
      'Cross-platform development',
      'Native app development',
      'App store optimization',
      'Push notifications',
      'Offline functionality'
    ]
  },
  {
    title: 'UI/UX Design',
    icon: 'FaPencilRuler',
    description: 'Crafting intuitive user interfaces and engaging user experiences that convert visitors into customers.',
    features: [
      'User research',
      'Wireframing & prototyping',
      'Visual design',
      'Usability testing',
      'Design systems'
    ]
  },
  {
    title: 'Digital Strategy',
    icon: 'FaChartLine',
    description: 'Developing comprehensive digital strategies to grow your online presence and achieve business goals.',
    features: [
      'Market research',
      'Competitive analysis',
      'Performance optimization',
      'Conversion rate optimization',
      'Analytics & reporting'
    ]
  }
];

export const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'CEO, TechStart',
    image: '/assets/images/testimonial1.jpg',
    quote: 'Working with this developer was an absolute pleasure. They delivered our project on time and exceeded our expectations in terms of quality and attention to detail.'
  },
  {
    name: 'Michael Chen',
    role: 'Product Manager, InnovateX',
    image: '/assets/images/testimonial2.jpg',
    quote: 'I was impressed by the creativity and technical expertise demonstrated throughout our project. The developer was responsive, professional, and genuinely cared about the success of our product.'
  },
  {
    name: 'Emily Rodriguez',
    role: 'Marketing Director, GrowthLabs',
    image: '/assets/images/testimonial3.jpg',
    quote: 'Our website redesign transformed our online presence and dramatically improved user engagement. The developer was a true partner in the process, offering valuable insights and solutions.'
  }
];

export const socialLinks = [
  { name: 'GitHub', url: 'https://github.com/username', icon: 'FaGithub' },
  { name: 'LinkedIn', url: 'https://linkedin.com/in/username', icon: 'FaLinkedin' },
  { name: 'Dribbble', url: 'https://dribbble.com/username', icon: 'FaDribbble' },
  { name: 'Twitter', url: 'https://twitter.com/username', icon: 'FaTwitter' }
];

export const aboutMe = {
  name: "John Doe",
  title: "Creative Developer",
  image: "/assets/images/profile.jpg",
  bio: "I'm a passionate full-stack developer with over 5 years of experience creating modern web and mobile applications. I specialize in React, Node.js, and UI/UX design, focusing on building intuitive, high-performance digital experiences that solve real problems. When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or sharing my knowledge through technical writing and mentoring."
};