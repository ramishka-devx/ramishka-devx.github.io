export default function ToolsTechnologies() {
  const technologies = [
    {
      category: "Frontend",
      icon: "frontend",
      tools: [
        { name: "React", icon: "FaReact" },
        { name: "HTML", icon: "FaHtml5" },
        { name: "CSS", icon: "FaCss3Alt" },
        { name: "JavaScript", icon: "FaJsSquare" },
        { name: "TypeScript", icon: "SiTypescript" },
        { name: "Tailwind CSS", icon: "SiTailwindcss" },
        { name: "Vite", icon: "SiVite" },
      ]
    },
    {
      category: "Backend",
      icon: "backend",
      tools: [
        { name: "Node.js", icon: "FaNodeJs" },
        { name: "Express.js", icon: "SiExpress" },
        { name: "NestJS", icon: "SiNestjs" },
        { name: "Springboot", icon: "SiSpringboot" },
      ]
    },
    {
      category: "DevOps & Infrastructure",
      icon: "devops",
      tools: [
        { name: "Docker", icon: "FaDocker" },
        { name: "Nginx", icon: "SiNginx" },
        { name: "Jenkins", icon: "SiJenkins" },
        { name: "Ansible", icon: "SiAnsible" },
        { name: "AWS", icon: "FaAws" },
        { name: "Terraform", icon: "SiTerraform" },
      ]
    },
    {
      category: "AI & Data Science",
      icon: "ai",
      tools: [
        { name: "Python", icon: "FaPython" },
        { name: "TensorFlow", icon: "SiTensorflow" },
        { name: "PyTorch", icon: "SiPytorch" },
        { name: "Scikit-learn", icon: "SiScikitlearn" },
        { name: "FastAPI", icon: "SiFastapi" },
      ]
    },
    {
      category: "Tools & Collaboration",
      icon: "tools",
      tools: [
        { name: "Git", icon: "FaGit" },
        { name: "GitHub", icon: "FaGithub" },
        { name: "Jira", icon: "SiJira" },
        { name: "Postman", icon: "SiPostman" },
        { name: "ESLint", icon: "SiEslint" },
        { name: "Prettier", icon: "SiPrettier" },
      ]
    },
    {
      category: "Drones & UAV",
      icon: "drones",
      tools: [
        { name: "ArduPilot", icon: "FaGit" },
        { name: "LibrePilot", icon: "FaGit" },
      ]
    },
  ];

  return (
    <section id="tools" className="section-wrap">
      <p className="section-kicker">Stack</p>
      <h2 className="section-title">Tools & Technologies</h2>
      <p className="section-subtitle">
        Modern technologies and tools I use to build scalable solutions
      </p>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {technologies.map((tech) => (
          <article
            key={tech.category}
            className="glass-panel rounded-3xl p-6 md:p-7"
          >
            <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100 mb-5">
              {tech.category}
            </h3>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
              {tech.tools.map((tool) => (
                <div
                  key={tool.name}
                  className="rounded-xl border border-slate-200/80 dark:border-slate-700/70 bg-white/80 dark:bg-slate-900/45 px-3 py-3 text-center"
                >
                  <p className="text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-[0.08em]">
                    {tool.name}
                  </p>
                </div>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
