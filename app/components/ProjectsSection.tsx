import Image from 'next/image';

const projects = [
  {
    id: 1,
    title: 'Secure File Sharing Web App',
    description: 'A secure file-sharing web app with AES encryption to protect user data during upload, storage, and download.',
    image: '/secFileSharing.webp',
    technologies: ['E2EE', 'AES', 'AWS', 'React', 'Web Crupto API'],
    link: 'https://github.com/bhanuRakshita/secure-file-sharing-web-app'
  },
  {
    id: 2,
    title: 'Linux Log File Analyzer',
    description: 'A Bash script to analyze auth.log, detecting suspicious SSH login attempts and IP addresses.',
    image: '/log.jpg',
    technologies: ['Python', 'Linux', 'Scripting', 'Log Monitoring'],
    link: 'https://github.com/bhanuRakshita/log-analyzer'
  },
  {
    id: 3,
    title: 'SIGNIFY: Alexa for deaf and mute',
    description: 'an award-winning gesture-controlled smart assistant at Seneca Hackathon, implementing a two-part model for hand landmark detection and gesture classification',
    image: '/signify.png',
    technologies: ['React.js',' Tailwind CSS', 'Python Flask', 'OpenCV', 'Docker', 'MediaPipe', 'TensorFlow'],
    link: 'https://github.com/AryanK1511/Signify'
  },
  {
    id: 4,
    title: 'AlgoLizer',
    description: 'A sort Algorithm Visualizer, created using HTML, CSS, JavaScript.',
    image: '/algo.png',
    technologies: ['CSS', 'Javascript', 'HTML', 'Sorting Algorithms'],
    link: 'https://github.com/bhanuRakshita/algoLizer'
  }
];

export default function ProjectsSection() {
  return (
    <section className="py-12 sm:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-xl sm:text-2xl font-bold text-white mb-6 sm:mb-8 text-center">
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="aspect-video bg-gray-700 relative">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4 sm:p-6">
                <h3 className="text-base sm:text-lg font-semibold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-300 mb-2">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="text-xs sm:text-sm bg-gray-700 text-gray-200 px-2 py-1 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div>
                  <a
                    href={project.link}
                    className="text-blue-400 hover:text-blue-300 font-medium text-sm sm:text-base"
                  >
                    View Project →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
