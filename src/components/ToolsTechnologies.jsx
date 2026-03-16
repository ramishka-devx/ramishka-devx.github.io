import {
  FaAws,
  FaCode,
  FaDatabase,
  FaDocker,
  FaGit,
  FaGithub,
  FaHtml5,
  FaJsSquare,
  FaNodeJs,
  FaPython,
  FaReact,
  FaServer,
  FaTools,
} from 'react-icons/fa';
import {
  SiAnsible,
  SiApachekafka,
  SiEslint,
  SiExpress,
  SiFastapi,
  SiFirebase,
  SiJenkins,
  SiJira,
  SiMysql,
  SiNestjs,
  SiNginx,
  SiPostgresql,
  SiPostman,
  SiPrettier,
  SiPytorch,
  SiScikitlearn,
  SiSpringboot,
  SiTailwindcss,
  SiTerraform,
  SiTensorflow,
  SiTypescript,
  SiVite,
} from 'react-icons/si';

const technologies = [
  {
    category: 'Frontend',
    icon: FaCode,
    tools: ['React', 'HTML', 'CSS', 'JavaScript', 'TypeScript', 'Tailwind CSS', 'Vite'],
  },
  {
    category: 'Backend',
    icon: FaServer,
    tools: ['Node.js', 'Express.js', 'NestJS', 'Springboot', 'Kafka'],
  },
  {
    category: 'Databases',
    icon: FaDatabase,
    tools: ['MySQL', 'PostgreSQL', 'TimescaleDB', 'PostGIS', 'Firebase'],
  },
  {
    category: 'DevOps & Infrastructure',
    icon: FaTools,
    tools: ['Docker', 'Nginx', 'Jenkins', 'Ansible', 'AWS', 'Terraform'],
  },
  {
    category: 'AI & Data Science',
    icon: FaPython,
    tools: ['Python', 'TensorFlow', 'PyTorch', 'Scikit-learn', 'FastAPI'],
  },
  {
    category: 'Drones & UAV',
    icon: FaTools,
    tools: ['ArduPilot', 'LibrePilot'],
  },
];

const toolIconMap = {
  React: FaReact,
  HTML: FaHtml5,
  CSS: FaCode,
  JavaScript: FaJsSquare,
  TypeScript: SiTypescript,
  'Tailwind CSS': SiTailwindcss,
  Vite: SiVite,
  'Node.js': FaNodeJs,
  'Express.js': SiExpress,
  NestJS: SiNestjs,
  Springboot: SiSpringboot,
  Kafka: SiApachekafka,
  MySQL: SiMysql,
  PostgreSQL: SiPostgresql,
  TimescaleDB: FaDatabase,
  PostGIS: FaDatabase,
  Firebase: SiFirebase,
  Docker: FaDocker,
  Nginx: SiNginx,
  Jenkins: SiJenkins,
  Ansible: SiAnsible,
  AWS: FaAws,
  Terraform: SiTerraform,
  Python: FaPython,
  TensorFlow: SiTensorflow,
  PyTorch: SiPytorch,
  'Scikit-learn': SiScikitlearn,
  FastAPI: SiFastapi,
  Git: FaGit,
  GitHub: FaGithub,
  Jira: SiJira,
  Postman: SiPostman,
  ESLint: SiEslint,
  Prettier: SiPrettier,
};

export default function ToolsTechnologies() {
  return (
    <section id="tools" className="section-wrap">
      <p className="section-kicker">Stack</p>
      <h2 className="section-title">Tools & Technologies</h2>
      <p className="section-subtitle">
        Modern technologies and tools I use to build scalable solutions
      </p>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
        {technologies.map((group) => {
          const CategoryIcon = group.icon;

          return (
            <article
              key={group.category}
              className="glass-panel group relative overflow-hidden rounded-3xl p-6 md:p-7"
            >
              <div className="pointer-events-none absolute right-0 top-0 h-24 w-24 rounded-full bg-sky-300/20 blur-2xl dark:bg-sky-500/20" />

              <div className="mb-5 flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-900 text-white dark:bg-white dark:text-slate-900">
                    <CategoryIcon className="h-4 w-4" />
                  </div>
                  <h3 className="text-lg md:text-xl font-semibold text-slate-900 dark:text-slate-100">
                    {group.category}
                  </h3>
                </div>
                <span className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-500 dark:text-slate-400">
                  {group.tools.length} tools
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {group.tools.map((tool) => {
                  const ToolIcon = toolIconMap[tool] || FaTools;

                  return (
                    <div
                      key={tool}
                      className="flex items-center gap-2.5 rounded-xl border border-slate-200/90 dark:border-slate-700/70 bg-white/85 dark:bg-slate-900/55 px-3 py-2.5"
                    >
                      <ToolIcon className="h-4 w-4 text-slate-700 dark:text-slate-300" />
                      <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                        {tool}
                      </span>
                    </div>
                  );
                })}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
