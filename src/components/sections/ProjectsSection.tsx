import { SectionTitle } from '../ui/SectionTitle';
import { ProjectCard } from '../ui/ProjectCard';
import { projects } from '../../data/projects';
import { useLanguage } from '../../hooks/useLanguage';

export function ProjectsSection() {
  const { t } = useLanguage();
  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <section
      id="projects"
      className="flex items-center px-6 py-20 lg:min-h-screen"
    >
      <div className="max-w-7xl mx-auto w-full">
        <SectionTitle
          number="04."
          title={{ zh: '好奇心实验室', en: 'Curiosity Lab' }}
        />

        <div className="mb-8 max-w-3xl font-editorial text-xl leading-8 text-cyber-dim">
          {t({
            zh: '这里不是作品堆叠，而是三个问题：观众为什么留下来？重复工作能否自动跑？学习兴趣能否变成每天运行的系统？',
            en: 'This is not a pile of projects. It is three questions: why do viewers stay, can repetitive work run itself, and can learning interest become a daily system?',
          })}
        </div>

        <div className="flex flex-col gap-6">
          {featured.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
          <div className="grid gap-6 md:grid-cols-2">
            {rest.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i + 1} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
