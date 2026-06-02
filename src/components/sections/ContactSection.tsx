import { useState } from 'react';
import { useLanguage } from '../../hooks/useLanguage';
import { SectionTitle } from '../ui/SectionTitle';
import { ScrollReveal } from '../effects/ScrollReveal';
import { profile } from '../../data/profile';

export function ContactSection() {
  const { t } = useLanguage();
  const [copied, setCopied] = useState<'email' | 'phone' | null>(null);
  const hasPhone = Boolean(profile.phone && profile.phone !== 'TODO_PHONE_NUMBER');

  const handleCopy = async (type: 'email' | 'phone', value: string) => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(type);
      setTimeout(() => setCopied(null), 2000);
    } catch {
      setCopied(null);
    }
  };

  return (
    <section
      id="contact"
      className="flex items-center px-6 py-20 lg:min-h-screen"
    >
      <div className="max-w-7xl mx-auto w-full">
        <SectionTitle
          number="06."
          title={{ zh: '保持联系', en: 'Contact' }}
        />

        <div className="max-w-4xl">
          <ScrollReveal direction="up" duration={0.5}>
            <p className="mb-8 max-w-2xl font-editorial text-2xl leading-9 text-cyber-dim">
              {t({
                zh: '如果你正在寻找一个能够理解业务、分析数据，并用 AI 工具推动方案落地的人，欢迎联系我进一步沟通。',
                en: "If you're looking for someone who understands operations, analyzes data and ships solutions with AI tools, feel free to reach out.",
              })}
            </p>
          </ScrollReveal>

          <div className="grid gap-6 md:grid-cols-2">
            <ScrollReveal direction="up" delay={0.1} duration={0.5}>
              <button
                onClick={() => handleCopy('email', profile.email)}
                className="metric-card group w-full rounded-[2rem] p-7 text-left transition-transform duration-300 hover:-translate-y-1"
              >
                <span className="font-mono text-xs uppercase tracking-[0.24em] text-cyber-cyan">
                  Email
                </span>
                <p className="mt-3 break-all font-mono text-sm text-cyber-text transition-colors group-hover:text-cyber-cyan">
                  {profile.email}
                </p>
                <span className="mt-4 block text-xs text-cyber-dim">
                  {copied === 'email'
                    ? t({ zh: '已复制!', en: 'Copied!' })
                    : t({ zh: '点击复制', en: 'Click to copy' })}
                </span>
              </button>
            </ScrollReveal>

            {hasPhone && (
              <ScrollReveal direction="up" delay={0.2} duration={0.5}>
                <button
                  onClick={() => handleCopy('phone', profile.phone as string)}
                  className="metric-card group w-full rounded-[2rem] p-7 text-left transition-transform duration-300 hover:-translate-y-1"
                >
                  <span className="font-mono text-xs uppercase tracking-[0.24em] text-cyber-cyan">
                    {t({ zh: '电话', en: 'Phone' })}
                  </span>
                  <p className="mt-3 font-mono text-sm text-cyber-text transition-colors group-hover:text-cyber-cyan">
                    {profile.phone}
                  </p>
                  <span className="mt-4 block text-xs text-cyber-dim">
                    {copied === 'phone'
                      ? t({ zh: '已复制!', en: 'Copied!' })
                      : t({ zh: '点击复制', en: 'Click to copy' })}
                  </span>
                </button>
              </ScrollReveal>
            )}

            {profile.socials.filter((social) => social.icon !== 'email').map((social, i) => (
              <ScrollReveal
                key={social.platform}
                direction="up"
                delay={(hasPhone ? 0.3 : 0.2) + i * 0.1}
                duration={0.5}
              >
                <a
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass group block rounded-[2rem] p-7 transition-transform duration-300 hover:-translate-y-1 hover:border-cyber-cyan/35"
                >
                  <span className="font-mono text-xs uppercase tracking-[0.24em] text-cyber-cyan">
                    {social.platform}
                  </span>
                  <p className="mt-3 break-all font-mono text-sm text-cyber-text transition-colors group-hover:text-cyber-cyan">
                    {social.url.replace('https://', '').replace('mailto:', '')}
                  </p>
                  <span className="mt-4 block text-xs text-cyber-dim">
                    {t({ zh: '打开链接 →', en: 'Open link →' })}
                  </span>
                </a>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
