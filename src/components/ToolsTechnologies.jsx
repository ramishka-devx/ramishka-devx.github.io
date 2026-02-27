import { 
  FaReact, FaHtml5, FaCss3Alt, FaJsSquare, FaNodeJs, 
  FaDocker, FaGit, FaGithub, FaPython, FaAws 
} from 'react-icons/fa';
import { 
  SiTailwindcss, SiTypescript, SiVite, SiExpress, SiNestjs, 
  SiSpringboot, SiNginx, SiJenkins, SiAnsible, SiTerraform, 
  SiMqtt, SiFastapi, SiTensorflow, SiPytorch, SiScikitlearn,
  SiJira, SiPostman, SiEslint, SiPrettier, SiDiscord
} from 'react-icons/si';

export default function ToolsTechnologies() {
  const technologies = [
    {
      category: "Frontend",
      icon: "frontend",
      tools: [
        { name: "React", icon: FaReact },
        { name: "HTML", icon: FaHtml5 },
        { name: "CSS", icon: FaCss3Alt },
        { name: "JavaScript", icon: FaJsSquare },
        { name: "TypeScript", icon: SiTypescript },
        { name: "Tailwind CSS", icon: SiTailwindcss },
        { name: "Vite", icon: SiVite },
      ]
    },
    {
      category: "Backend",
      icon: "backend",
      tools: [
        { name: "Node.js", icon: FaNodeJs },
        { name: "Express.js", icon: SiExpress },
        { name: "NestJS", icon: SiNestjs },
        { name: "Springboot", icon: SiSpringboot },
      ]
    },
    {
      category: "DevOps & Infrastructure",
      icon: "devops",
      tools: [
        { name: "Docker", icon: FaDocker },
        { name: "Nginx", icon: SiNginx },
        { name: "Jenkins", icon: SiJenkins },
        { name: "Ansible", icon: SiAnsible },
        { name: "AWS", icon: FaAws },
        { name: "Terraform", icon: SiTerraform },
      ]
    },
    {
      category: "AI & Data Science",
      icon: "ai",
      tools: [
        { name: "Python", icon: FaPython },
        { name: "TensorFlow", icon: SiTensorflow },
        { name: "PyTorch", icon: SiPytorch },
        { name: "Scikit-learn", icon: SiScikitlearn },
        { name: "FastAPI", icon: SiFastapi },
      ]
    },
    {
      category: "Tools & Collaboration",
      icon: "tools",
      tools: [
        { name: "Git", icon: FaGit },
        { name: "GitHub", icon: FaGithub },
        { name: "Jira", icon: SiJira },
        { name: "Postman", icon: SiPostman },
        { name: "ESLint", icon: SiEslint },
        { name: "Prettier", icon: SiPrettier },
      ]
    },
    {
      category: "Drones & UAV",
      icon: "drones",
      tools: [
        { name: "ArduPilot", icon: FaGit },
        { name: "LibrePilot", icon: FaGit },
      ]
    },
  ];

  return (
    <div id="tools" className="w-full px-[12%] py-10 scroll-mt-20">
      <div className="mt-20">
        <div className="mb-16">
          <h2 className="text-5xl font-Ovo text-center mb-4">Tools & Technologies</h2>
          <p className="text-center text-lg text-slate-600 dark:text-slate-400 font-Ovo max-w-2xl mx-auto">
            Modern technologies and tools I use to build scalable solutions
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {technologies.map((tech, index) => (
            <div 
              key={index} 
              className="bg-white dark:bg-gray-800 rounded-lg p-8 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow duration-300"
            >
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
                {tech.category}
              </h3>
              
              <div className="grid grid-cols-3 sm:grid-cols-4 gap-4">
                {tech.tools.map((tool, toolIndex) => {
                  const Icon = tool.icon;
                  return (
                    <div 
                      key={toolIndex}
                      className="flex flex-col items-center justify-center p-4 rounded-lg bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors duration-200"
                    >
                      <Icon className="text-3xl text-gray-700 dark:text-gray-300 mb-2" />
                      <p className="text-xs text-center font-medium text-gray-700 dark:text-gray-300 line-clamp-2">
                        {tool.name}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
