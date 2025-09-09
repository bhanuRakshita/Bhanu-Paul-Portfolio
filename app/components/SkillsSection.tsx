export default function SkillsSection() {
  const securitySkills = [
    "Cloud Security",
    "Authentication & Access Control",
    "Encryption & Cryptography",
    "Log Analysis & Monitoring",
    "Threat Detection & Incident Response",
    "SIEM (Splunk, ELK)",
    "Network Analysis (Wireshark, Nmap)",
    "Web Application Security (Burp Suite, OWASP)",
    "IDS/IPS & SOC Monitoring",
    "Penetration Testing & Vulnerability Assessment",
    "Secure Coding Practices",
	"Malware Analysis"
  ];
  const langskills = [
    "Python",
    "Java",
    "C",
    "Javascript",
    "SQL",
    "Bash",
    "Powershell",
    "HTML/CSS",
    "React.js",
    "React Native",
    "Next.js",
    "Node.js",
  ];

  const toolsAndPlatforms = [
  'Linux', 
  'Docker', 
  'Power BI', 
  'Splunk', 
  'Amazon Web Services (AWS)', 
  'Microsoft Azure & Azure DevOps', 
  'Jenkins', 
  'GitHub', 
  'Hadoop', 
  'Microsoft Office Suite (Word, Excel, PowerPoint)', 
  'VS Code / IDEs', 
  'Command Line Tools'
];


  return (
    <section className="bg-gray-800 py-12 sm:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-xl sm:text-2xl font-bold text-white mb-6 sm:mb-8 text-center">
          Cybersecurity & IT Systems
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
          {securitySkills.map((skill) => (
            <div
              key={skill}
              className="bg-gray-700 p-4 sm:p-6 rounded-lg shadow-sm text-center hover:shadow-md transition-shadow hover:shadow-gray-500 text-sm sm:text-base text-gray-200"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
      <br />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-xl sm:text-2xl font-bold text-white mb-6 sm:mb-8 text-center">
          Languages & Frameworks
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
          {langskills.map((skill) => (
            <div
              key={skill}
              className="bg-gray-700 p-4 sm:p-6 rounded-lg shadow-sm text-center hover:shadow-md transition-shadow hover:shadow-gray-500 text-sm sm:text-base text-gray-200"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
	  <br />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-xl sm:text-2xl font-bold text-white mb-6 sm:mb-8 text-center">
          Tools and Platforms
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
          {toolsAndPlatforms.map((skill) => (
            <div
              key={skill}
              className="bg-gray-700 p-4 sm:p-6 rounded-lg shadow-sm text-center hover:shadow-md transition-shadow hover:shadow-gray-500 text-sm sm:text-base text-gray-200"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
