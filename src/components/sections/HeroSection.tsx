import { useLanguage } from '../../hooks/useLanguage';
import { GlitchText } from '../effects/GlitchText';
import { NeonText } from '../effects/NeonText';
import { ScrollReveal } from '../effects/ScrollReveal';
import { ScrollIndicator } from '../ui/ScrollIndicator';
import { TiltCard } from '../ui/TiltCard';
import { profile } from '../../data/profile';

const capabilityTracks = [
  {
    title: { zh: '因为好奇，我走进了真实场景', en: 'Curiosity led me into real scenarios' },
    proof: {
      zh: '走访学校、访谈教师、拆解用户反馈与客诉，用 RICE 模型判断优先级。',
      en: 'Visited schools, interviewed teachers, analyzed feedback — driven by curiosity about real user needs.',
    },
    output: {
      zh: '产出需求评估、功能迭代建议与可执行的业务规则，推动 SOP 标准化落地。',
      en: 'Delivered requirement assessment, iteration proposals and executable business rules, pushed SOP standardization.',
    },
    label: { zh: '用户洞察', en: 'User Insight' },
  },
  {
    title: { zh: '因为好奇，我追问数据背后的原因', en: 'Curiosity made me dig into the data' },
    proof: {
      zh: '分析用户行为、漏斗表现和直播数据，不停追问"为什么这里掉了"。',
      en: 'Analyzed behavior, funnels and live data, constantly asking "why did it drop here?"',
    },
    output: {
      zh: '推动 Push 活跃提升 15%，处理 100W+ 数据研究，建立内容选题与复盘机制。',
      en: 'Drove 15% activity lift via push, processed 1M+ data points, established content planning and review loops.',
    },
    label: { zh: '数据驱动', en: 'Data-Driven' },
  },
  {
    title: { zh: '因为好奇，我自学 AI 并落地自动化', en: 'Curiosity drove me to learn AI & automate' },
    proof: {
      zh: '自学 Python、Claude Code、N8N、RPA，拆解高频流程并搭建 Agent。',
      en: 'Self-taught Python, Claude Code, N8N and RPA, then built Agents for repetitive workflows.',
    },
    output: {
      zh: '把 4 小时流程压缩到 1 小时，覆盖约 3 人工作量，并独立做出 7 个自用 AI 微产品。',
      en: 'Compressed a 4-hour process into 1 hour covering ~3 people\'s work, and built 7 personal AI micro-products.',
    },
    label: { zh: 'AI 落地', en: 'AI Delivery' },
  },
];

export function HeroSection() {
  const { t } = useLanguage();
  const mainName = t(profile.name);

  return (
    <section id="hero" className="relative min-h-screen overflow-hidden px-6 pb-32 pt-32 lg:pb-28">
      <div className="absolute left-1/2 top-28 h-72 w-72 -translate-x-1/2 rounded-full bg-cyber-cyan/10 blur-3xl" />
      <div className="mx-auto grid min-h-[calc(100vh-8rem)] w-full max-w-7xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <ScrollReveal direction="up" duration={0.8}>
            <div className="section-kicker text-xs text-cyber-cyan">
              {t({ zh: '好奇心驱动的 AI 实践', en: 'Curiosity-Driven AI Practice' })}
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.06} duration={0.8}>
            <GlitchText
              text={mainName}
              as="h1"
              className="mt-6 font-display text-[6.5rem] font-black leading-[0.82] tracking-tight text-cyber-text md:text-[10rem] lg:text-[13rem]"
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
                zh: '我的聚焦点不是“会用很多 AI 工具“，而是持续追问：它们能不能解决真实业务里的具体问题，并留下可复用的系统。',
                en: 'The point is not using many AI tools. The point is asking whether they can solve specific business problems and leave reusable systems behind.',
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
            <TiltCard className="glass scanline rounded-[2rem] p-6 md:p-8" glowOpacity={0.08} tiltIntensity={6}>
              <div className="flex items-start justify-between gap-6 border-b border-cyber-border/80 pb-6">
                <div>
                  <p className="font-mono text-xs uppercase tracking-[0.25em] text-cyber-cyan">
                    {t({ zh: '能力证据', en: 'Capability Evidence' })}
                  </p>
                  <h2 className="mt-3 max-w-md font-display text-4xl leading-none text-cyber-text md:text-6xl">
                    {t({
                      zh: `好奇心让我从"想知道"走到"能做到"`,
                      en: 'liberal arts student who learned AI through curiosity',
                    })}
                  </h2>
                </div>
                <span className="shrink-0 rounded-full border border-cyber-cyan/30 px-3 py-1 font-mono text-xs text-cyber-cyan">
                  CURIOSITY
                </span>
              </div>

              <div className="mt-6 grid gap-4">
                {capabilityTracks.map((track, i) => (
                  <div
                    key={t(track.title)}
                    className="group rounded-2xl border border-cyber-border/80 bg-cyber-bg/45 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-cyber-cyan/30 hover:bg-cyber-surface/80"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-cyber-purple">
                        0{i + 1}
                      </span>
                      <span className="rounded-full border border-cyber-cyan/20 bg-cyber-cyan/5 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.16em] text-cyber-cyan">
                        {t(track.label)}
                      </span>
                    </div>
                    <h3 className="mt-4 font-display text-3xl leading-none text-cyber-text md:text-4xl">
                      {t(track.title)}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-cyber-dim">
                      {t(track.proof)}
                    </p>
                    <p className="mt-3 border-l border-cyber-cyan/35 pl-3 text-sm leading-7 text-cyber-text/85">
                      {t(track.output)}
                    </p>
                  </div>
                ))}
              </div>

              <p className="mt-6 max-w-md text-sm leading-7 text-cyber-dim">
                {t({
                  zh: '不是技能堆砌，而是一条好奇心驱动的完整链路：走进场景 → 追问原因 → 动手落地 → 用数据验证。',
                  en: 'Not a skill checklist, but a curiosity-driven loop: explore the scenario → dig into the "why" → build it → validate with data.',
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
