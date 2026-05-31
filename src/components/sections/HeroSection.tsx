import { type MouseEvent } from 'react';
import { useLanguage } from '../../hooks/useLanguage';
import { GlitchText } from '../effects/GlitchText';
import { NeonText } from '../effects/NeonText';
import { ScrollReveal } from '../effects/ScrollReveal';
import { ScrollIndicator } from '../ui/ScrollIndicator';
import { profile } from '../../data/profile';

const capabilityTracks = [
  {
    title: { zh: '提出更好的问题', en: 'Ask Better Questions' },
    proof: {
      zh: '从学校访谈、教师反馈、客诉与业务异常里，找到真正值得解决的卡点。',
      en: 'Find the real bottleneck through interviews, feedback, complaints and operational exceptions.',
    },
    output: {
      zh: '把模糊需求拆成 RICE 优先级、迭代建议、业务规则与 SOP。',
      en: 'Turn ambiguity into RICE priorities, iteration proposals, business rules and SOP.',
    },
    label: { zh: '好奇心', en: 'Curiosity' },
  },
  {
    title: { zh: '让数据回答问题', en: 'Let Data Answer' },
    proof: {
      zh: '处理直播、电商、车源流转与用户行为数据，不止看报表，而是追问原因。',
      en: 'Analyze live commerce, e-commerce, vehicle flow and user behavior data beyond dashboards.',
    },
    output: {
      zh: '推动 Push 活跃提升 15%、100W+ 数据研究、内容选题与复盘机制落地。',
      en: 'Shipped 15% activity lift via push, 1M+ data research, content planning and review loops.',
    },
    label: { zh: '信号', en: 'Signal' },
  },
  {
    title: { zh: '把 AI 变成手边工具', en: 'Make AI Usable' },
    proof: {
      zh: '用 Codex、Cursor、Claude Code、Agent、RPA 与 workflow 拆解重复动作。',
      en: 'Use Codex, Cursor, Claude Code, Agent, RPA and workflow to decompose repetition.',
    },
    output: {
      zh: '把 4 小时流程压缩到 1 小时，并独立做出 7 个自用 AI 微产品。',
      en: 'Compressed a 4-hour process into 1 hour and built 7 personal AI micro-products.',
    },
    label: { zh: '落地', en: 'Shipping' },
  },
];

export function HeroSection() {
  const { t } = useLanguage();
  const mainName = t(profile.name);
  const subName = t(profile.nameSub);

  const handleBoardMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty('--board-x', `${((e.clientX - rect.left) / rect.width) * 100}%`);
    e.currentTarget.style.setProperty('--board-y', `${((e.clientY - rect.top) / rect.height) * 100}%`);
  };

  return (
    <section id="hero" className="relative min-h-screen overflow-hidden px-6 pb-32 pt-32 lg:pb-28">
      <div className="absolute left-1/2 top-28 h-72 w-72 -translate-x-1/2 rounded-full bg-cyber-cyan/10 blur-3xl" />
      <div className="mx-auto grid min-h-[calc(100vh-8rem)] w-full max-w-7xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <ScrollReveal direction="up" duration={0.8}>
            <div className="section-kicker text-xs text-cyber-cyan">
              {t({
                zh: `${mainName} / ${subName} | AI is all you need when curiosity needs to ship`,
                en: `${mainName} / ${subName} | AI is all you need when curiosity needs to ship`,
              })}
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.08} duration={0.8}>
            <h1 className="hero-manifesto mt-6 max-w-5xl font-display text-[4rem] font-black leading-[0.88] text-cyber-text md:text-[5.8rem] lg:text-[6.4rem] xl:text-[6.9rem] 2xl:text-[7.7rem]">
              <span className="block">Curiosity</span>
              <span className="block text-gradient">is all you need.</span>
            </h1>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.15} duration={0.6}>
            <p className="mt-6 max-w-2xl font-editorial text-2xl leading-tight text-cyber-text/90 md:text-4xl">
              {t(profile.tagline)}
            </p>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.18} duration={0.6}>
            <p className="mt-5 max-w-2xl text-sm leading-7 text-cyber-dim md:text-base">
              {t({
                zh: '我的聚焦点不是“会用很多 AI 工具”，而是持续追问：它们能不能解决真实业务里的具体问题，并留下可复用的系统。',
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
            <div
              className="capability-board glass scanline group relative overflow-hidden rounded-[2rem] p-6 md:p-8"
              onMouseMove={handleBoardMove}
            >
              <div className="flex items-start justify-between gap-6 border-b border-cyber-border/80 pb-6">
                <div>
                  <p className="font-mono text-xs uppercase tracking-[0.25em] text-cyber-cyan">
                    {t({ zh: '能力证据', en: 'Capability Evidence' })}
                  </p>
                  <h2 className="mt-3 max-w-md font-display text-4xl leading-none text-cyber-text md:text-6xl">
                    <GlitchText
                      text={mainName}
                      as="span"
                      className="mb-2 block text-cyber-cyan"
                    />
                    {t({
                      zh: '不是简历堆叠，而是一套好奇心工作流',
                      en: `${subName} turns curiosity into execution`,
                    })}
                  </h2>
                </div>
                <span className="shrink-0 rounded-full border border-cyber-cyan/30 px-3 py-1 font-mono text-xs text-cyber-cyan">
                  LOOP
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
                  zh: '完整链路：观察场景 -> 提出问题 -> 找到信号 -> 设计动作 -> 跑通系统 -> 用数据复盘。',
                  en: 'The loop: observe the scene -> ask the question -> find the signal -> design action -> ship the system -> review with data.',
                })}
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>

      <ScrollIndicator />
    </section>
  );
}
