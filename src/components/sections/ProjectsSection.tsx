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
          title={{ zh: '项目实践', en: 'Projects' }}
        />

        <div className="mb-8 max-w-3xl font-editorial text-xl leading-8 text-cyber-dim">
          {t({
            zh: '三个项目分别对应研究能力、自动化动手能力和业务落地能力：从提出问题，到验证路径，再到交付可运行的系统。',
            en: 'Three projects show research, automation and business delivery: from framing the problem and validating the path to shipping a working system.',
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
