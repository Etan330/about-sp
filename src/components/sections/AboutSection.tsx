import { useLanguage } from '../../hooks/useLanguage';
import { SectionTitle } from '../ui/SectionTitle';
import { ScrollReveal } from '../effects/ScrollReveal';
import { profile } from '../../data/profile';

const curiositySignals = [
  {
    value: { zh: '7', en: '7' },
    label: { zh: '自用 AI 微产品', en: 'AI micro-products' },
    detail: {
      zh: '把学习、资讯、知识库、股票提醒和额度监控做成自己的自动化系统。',
      en: 'Learning, news, knowledge base, stock alerts and quota monitoring turned into personal systems.',
    },
  },
  {
    value: { zh: '4h -> 1h', en: '4h -> 1h' },
    label: { zh: '流程压缩', en: 'Workflow compression' },
    detail: {
      zh: '在懂车帝用 Agent、RPA 与规则化方法重构高频业务流程。',
      en: 'Redesigned high-frequency operations at Dcar with Agent, RPA and rule-based workflows.',
    },
  },
  {
    value: { zh: '100W+', en: '1M+' },
    label: { zh: '数据处理', en: 'Data processed' },
    detail: {
      zh: '围绕抖音直播研究处理百万级二手数据，并用实验验证假设。',
      en: 'Processed million-level live commerce data and validated hypotheses through experiments.',
    },
  },
  {
    value: { zh: '文科 -> AI', en: 'Liberal Arts -> AI' },
    label: { zh: '跨界学习路径', en: 'Cross-domain path' },
    detail: {
      zh: '用商业、运营和人文问题意识，学习并落地 AI 工具。',
      en: 'Use business, operations and human questions as the entry point for AI delivery.',
    },
  },
];

export function AboutSection() {
  const { t } = useLanguage();

  return (
    <section
      id="about"
      className="flex items-center px-6 py-20 lg:min-h-screen"
    >
      <div className="max-w-7xl mx-auto w-full">
        <SectionTitle
          number="01."
          title={{ zh: '好奇心引擎', en: 'Curiosity Engine' }}
        />

        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div className="space-y-4">
            {t(profile.bio).map((p, i) => (
              <ScrollReveal
                key={i}
                direction="up"
                delay={i * 0.1}
                duration={0.5}
              >
                <p className="font-editorial text-lg leading-8 text-cyber-dim md:text-xl">
                  {p}
                </p>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal direction="left" delay={0.3} duration={0.6}>
            <div className="relative grid gap-4 sm:grid-cols-2">
              <div className="metric-card rounded-[1.75rem] p-7 sm:col-span-2">
                <span className="font-mono text-xs uppercase tracking-[0.24em] text-cyber-cyan">
                  {t({ zh: '核心定位', en: 'Positioning' })}
                </span>
                <p className="mt-4 font-display text-5xl leading-none text-cyber-text md:text-6xl">
                  Curious
                  <span className="text-cyber-cyan"> / </span>
                  Builder
                </p>
                <p className="mt-4 max-w-xl text-sm leading-7 text-cyber-dim">
                  {t({
                    zh: '我的优势不是单一岗位标签，而是能把好奇心拆成可执行的业务动作：问清楚、看数据、搭系统、交付结果。',
                    en: 'My edge is not one job label. It is the ability to convert curiosity into business action: ask clearly, read data, build systems and deliver results.',
                  })}
                </p>
              </div>

              {curiositySignals.map((signal) => (
                <div key={t(signal.label)} className="metric-card rounded-3xl p-6">
                  <InfoRow
                    label={t(signal.label)}
                    value={t(signal.value)}
                    detail={t(signal.detail)}
                  />
                </div>
              ))}

              <div className="metric-card rounded-3xl p-6 sm:col-span-2">
                <InfoRow
                  label={t({ zh: '基础信息', en: 'Profile' })}
                  value={`${t(profile.name)} / ${t(profile.location)} / ${profile.age ?? ''} / ${profile.mbti ?? ''}`}
                  detail={t({
                    zh: '长沙理工大学工商管理硕士在读，一周五天可实习半年。',
                    en: 'M.S. candidate in Business Administration at CSUST; available 5 days per week for a half-year internship.',
                  })}
                />
              </div>
              <div className="absolute -right-3 -top-3 h-7 w-7 rounded-full bg-cyber-cyan animate-pulse-glow" />
              <div className="absolute -bottom-3 -left-3 h-5 w-5 rounded-full bg-cyber-purple animate-pulse-glow" />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

function InfoRow({ label, value, detail }: { label: string; value: string; detail?: string }) {
  return (
    <div>
      <span className="font-mono text-xs uppercase tracking-[0.22em] text-cyber-cyan">
        {label}
      </span>
      <p className="mt-2 text-lg font-semibold text-cyber-text">{value}</p>
      {detail && <p className="mt-3 text-sm leading-6 text-cyber-dim">{detail}</p>}
    </div>
  );
}
