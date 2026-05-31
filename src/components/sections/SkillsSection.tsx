import { useLanguage } from '../../hooks/useLanguage';
import { SectionTitle } from '../ui/SectionTitle';
import { ScrollReveal } from '../effects/ScrollReveal';
import { SkillBar } from '../ui/SkillBar';
import { TiltCard } from '../ui/TiltCard';
import { skills } from '../../data/skills';

export function SkillsSection() {
  const { t } = useLanguage();
  const accents = ['bg-[#d8b66d]/10', 'bg-[#8fae9f]/10', 'bg-[#d28a5c]/10'];

  return (
    <section
      id="skills"
      className="flex items-center px-6 py-20 lg:min-h-screen"
    >
      <div className="max-w-7xl mx-auto w-full">
        <SectionTitle
          number="02."
          title={{ zh: '提问工具箱', en: 'Question Toolbox' }}
        />

        <div className="mb-8 max-w-3xl font-editorial text-xl leading-8 text-cyber-dim">
          {t({
            zh: '我把技能分成三类：先用产品运营理解场景，再用数据找到信号，最后用 AI 与自动化把答案落地。',
            en: 'My toolbox has three layers: product operations to understand the scene, data analysis to find the signal, and AI automation to ship the answer.',
          })}
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {skills.map((category, ci) => (
            <ScrollReveal
              key={category.id}
              direction="up"
              delay={ci * 0.15}
              duration={0.5}
            >
              <TiltCard className="glass relative h-full rounded-[1.75rem] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-cyber-cyan/35">
                <div className={`absolute right-0 top-0 h-24 w-24 rounded-bl-full ${accents[ci % accents.length]} transition-transform duration-500 group-hover:scale-125`} />
                <span className="font-mono text-xs text-cyber-purple/90">
                  0{ci + 1}
                </span>
                <h3 className="mb-6 mt-3 font-display text-3xl leading-none text-cyber-text">
                  {t(category.categoryName)}
                </h3>
                <div className="space-y-4">
                  {category.items.map((item, i) => (
                    <SkillBar key={i} item={item} index={i} />
                  ))}
                </div>
              </TiltCard>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
