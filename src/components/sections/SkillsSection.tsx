import { useLanguage } from '../../hooks/useLanguage';
import { SectionTitle } from '../ui/SectionTitle';
import { ScrollReveal } from '../effects/ScrollReveal';
import { SkillBar } from '../ui/SkillBar';
import { skills } from '../../data/skills';

export function SkillsSection() {
  const { t } = useLanguage();
  const accents = ['bg-[#d8b66d]/10', 'bg-[#8fae9f]/10', 'bg-[#d28a5c]/10', 'bg-[#9db5a8]/10'];

  return (
    <section
      id="skills"
      className="flex items-center px-6 py-20 lg:min-h-screen"
    >
      <div className="max-w-7xl mx-auto w-full">
        <SectionTitle
          number="02."
          title={{ zh: '能力栈', en: 'Capability Stack' }}
        />

        <div className="mb-8 max-w-3xl font-editorial text-xl leading-8 text-cyber-dim">
          {t({
            zh: '能力围绕四个方向组织：理解业务、分析数据、交付自动化方案，以及支持稳定执行的基础资质。',
            en: 'My capabilities are organized around four areas: understanding operations, analyzing data, shipping automation and maintaining reliable execution.',
          })}
        </div>

        <div className="grid gap-4 md:grid-cols-4">
          {skills.map((category, ci) => (
            <ScrollReveal
              key={category.id}
              direction="up"
              delay={ci * 0.1}
              duration={0.5}
            >
              <div className="glass group relative h-full overflow-hidden rounded-[1.5rem] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-cyber-cyan/35">
                <div className={`absolute right-0 top-0 h-16 w-16 rounded-bl-full ${accents[ci % accents.length]} transition-transform duration-500 group-hover:scale-125`} />
                <span className="font-mono text-[10px] text-cyber-purple/90">
                  0{ci + 1}
                </span>
                <h3 className="mb-4 mt-2 font-display text-2xl leading-none text-cyber-text">
                  {t(category.categoryName)}
                </h3>
                <div className="space-y-3">
                  {category.items.map((item, i) => (
                    <SkillBar key={i} item={item} index={i} />
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
