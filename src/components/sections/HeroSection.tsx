import { useLanguage } from '../../hooks/useLanguage';
import { GlitchText } from '../effects/GlitchText';
import { NeonText } from '../effects/NeonText';
import { ScrollReveal } from '../effects/ScrollReveal';
import { ScrollIndicator } from '../ui/ScrollIndicator';
import { TiltCard } from '../ui/TiltCard';
import { profile } from '../../data/profile';

const operatingSteps = [
  {
    number: '01',
    title: { zh: '找到真正的问题', en: 'Find the real bottleneck' },
    detail: {
      zh: '走进业务现场，访谈用户，拆解流程与异常。',
      en: 'Enter the field, talk to users, map workflows and exceptions.',
    },
    label: { zh: '场景', en: 'SCENARIO' },
  },
  {
    number: '02',
    title: { zh: '把经验沉淀成规则', en: 'Turn experience into rules' },
    detail: {
      zh: '用字段、公式、优先级和 SOP 统一判断口径。',
      en: 'Use fields, formulas, priorities and SOPs to codify judgment.',
    },
    label: { zh: '规则', en: 'RULES' },
  },
  {
    number: '03',
    title: { zh: '把规则做成系统', en: 'Ship a reusable system' },
    detail: {
      zh: '用 Agent、lark-cli、RPA 与 workflow 自动执行。',
      en: 'Execute with Agent, lark-cli, RPA and workflow automation.',
    },
    label: { zh: '落地', en: 'DELIVERY' },
  },
];

const proofMetrics = [
  {
    value: '3-5h → 0.5-1h',
    label: { zh: '异常跟进耗时', en: 'FOLLOW-UP TIME' },
  },
  {
    value: '~80%',
    label: { zh: '状态核查规则化', en: 'RULE-BASED CHECKS' },
  },
  {
    value: '7',
    label: { zh: '自用 AI 微产品', en: 'AI MICRO-PRODUCTS' },
  },
];

export function HeroSection() {
  const { t, lang } = useLanguage();
  const mainName = t(profile.name);

  return (
    <section id="hero" className="relative min-h-screen overflow-hidden px-6 pb-32 pt-32 lg:pb-28">
      <div className="absolute left-1/2 top-28 h-72 w-72 -translate-x-1/2 rounded-full bg-cyber-cyan/10 blur-3xl" />
      <div className="mx-auto grid min-h-[calc(100vh-8rem)] w-full max-w-7xl items-center gap-12 lg:grid-cols-[1.08fr_0.92fr]">
        <div>
          <ScrollReveal direction="up" duration={0.8}>
            <div className="section-kicker text-xs text-cyber-cyan">
              {t({ zh: '用好奇心发现问题，用 AI 做出答案', en: 'CURIOSITY FINDS THE QUESTION. AI SHIPS THE ANSWER.' })}
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.06} duration={0.8}>
            <GlitchText
              text={mainName}
              as="h1"
              className={`mt-6 font-display font-black leading-[0.82] tracking-tight text-cyber-text ${
                lang === 'en'
                  ? 'text-[5.4rem] md:text-[8rem] lg:text-[9.5rem]'
                  : 'text-[6.5rem] md:text-[10rem] lg:text-[13rem]'
              }`}
            />
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.12} duration={0.8}>
            <p className="hero-manifesto mt-6 max-w-5xl font-display text-[4rem] font-black leading-[0.88] text-cyber-text md:text-[5.8rem] lg:text-[6.4rem]">
              Curiosity
              <span className="block text-gradient">is all you need.</span>
            </p>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.15} duration={0.6}>
            <p className="mt-6 max-w-2xl font-editorial text-2xl leading-tight text-cyber-text/90 md:text-4xl">
              {t(profile.tagline)}
            </p>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.18} duration={0.6}>
            <p className="mt-5 max-w-2xl text-sm leading-7 text-cyber-dim md:text-base">
              {t({
                zh: '我把好奇心当作发现问题的方法，把 AI 当作解决问题的工具：先理解真实场景，再把高频判断沉淀成可复用的系统。',
                en: 'I use curiosity to discover the real problem and AI to solve it: understand the scenario first, then turn repeated judgment into a reusable system.',
              })}
            </p>
          </ScrollReveal>

          <div className="mt-8 flex flex-wrap gap-3">
            {t(profile.titles).map((title, i) => (
              <ScrollReveal
                key={title}
                direction="up"
                delay={0.2 + i * 0.1}
                duration={0.6}
              >
                <NeonText
                  text={title}
                  variant={i === 0 ? 'cyan' : i === 1 ? 'purple' : 'mixed'}
                  as="p"
                  className="rounded-full border border-cyber-border bg-cyber-surface/70 px-4 py-2 font-mono text-xs uppercase tracking-[0.18em]"
                />
              </ScrollReveal>
            ))}
          </div>
        </div>

        <ScrollReveal direction="left" delay={0.25} duration={0.7}>
          <div className="relative">
            <div className="absolute -inset-4 rounded-[2rem] border border-cyber-cyan/20" />
            <TiltCard className="glass scanline rounded-[2rem] p-6 md:p-7" glowOpacity={0.08} tiltIntensity={6}>
              <div className="flex items-start justify-between gap-5 border-b border-cyber-border/80 pb-5">
                <div>
                  <p className="font-mono text-xs uppercase tracking-[0.25em] text-cyber-cyan">
                    {t({ zh: '工作方式', en: 'OPERATING SYSTEM' })}
                  </p>
                  <h2 className="mt-3 font-display text-4xl leading-none text-cyber-text md:text-5xl">
                    {t({ zh: '从问题到系统', en: 'QUESTION → SYSTEM' })}
                  </h2>
                </div>
                <span className="shrink-0 rounded-full border border-cyber-cyan/30 px-3 py-1 font-mono text-[10px] tracking-[0.14em] text-cyber-cyan">
                  HOW I WORK
                </span>
              </div>

              <div className="mt-2">
                {operatingSteps.map((step) => (
                  <div
                    key={step.number}
                    className="group grid grid-cols-[2rem_1fr_auto] items-start gap-3 border-b border-cyber-border/70 py-4"
                  >
                    <span className="font-mono text-[10px] tracking-[0.18em] text-cyber-purple">
                      {step.number}
                    </span>
                    <div>
                      <h3 className="font-display text-2xl leading-none text-cyber-text md:text-3xl">
                        {t(step.title)}
                      </h3>
                      <p className="mt-2 text-sm leading-6 text-cyber-dim">
                        {t(step.detail)}
                      </p>
                    </div>
                    <span className="rounded-full border border-cyber-cyan/20 bg-cyber-cyan/5 px-2.5 py-1 font-mono text-[9px] tracking-[0.14em] text-cyber-cyan">
                      {t(step.label)}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-5 grid gap-px overflow-hidden rounded-2xl border border-cyber-border/80 bg-cyber-border/80 sm:grid-cols-3">
                {proofMetrics.map((metric) => (
                  <div key={metric.value} className="bg-cyber-bg/80 p-3">
                    <p className="whitespace-nowrap font-mono text-base font-semibold text-cyber-text">{metric.value}</p>
                    <p className="mt-2 font-mono text-[9px] tracking-[0.14em] text-cyber-dim">
                      {t(metric.label)}
                    </p>
                  </div>
                ))}
              </div>

              <p className="mt-4 text-sm leading-7 text-cyber-dim">
                {t({
                  zh: '好奇心负责提出问题，AI 负责放大执行力，结果负责检验答案。',
                  en: 'Curiosity frames the question. AI scales the execution. Outcomes validate the answer.',
                })}
              </p>
            </TiltCard>
          </div>
        </ScrollReveal>
      </div>

      <ScrollIndicator />
    </section>
  );
}
