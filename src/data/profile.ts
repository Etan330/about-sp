import type { ProfileData } from '../types';

export const profile: ProfileData = {
  name: { zh: '孙鹏', en: 'Etan Musk' },
  nameSub: { zh: 'Etan Musk', en: '孙鹏' },
  titles: {
    zh: ['AI 与自动化实践', '数据分析与用户洞察', '业务流程优化'],
    en: ['AI & Automation', 'Data & User Insight', 'Workflow Optimization'],
  },
  tagline: {
    zh: 'BTW，AI is all you need, too.',
    en: 'BTW, AI is all you need, too.',
  },
  bio: {
    zh: [
      '我是一个文科背景出身的 AI 实践者。我习惯先理解真实业务场景，找到反复消耗人力的判断与动作，再用规则、数据和自动化工具把流程做得更快、更稳、更可复用。',
      '数据洞察：实习期间通过分析用户行为路径定位运营问题，短信 Push 上线后用户活跃提升 15%。在懂车帝用公式、Agent、lark-cli 与 RPA 把异常跟进从 3-5 小时压缩到 0.5-1 小时，约 80% 状态核查由人工判断转为规则识别；在科大讯飞搭建 workflow + Agent 覆盖高频盯盘、日均触发 50 次；在高途用 JTBD 梳理 150+ 需求、实现曝光 200,000+、私域拉新 100+。',
      '自我驱动：独立开发 7 个自用 AI 微产品——每日学习推送、个人网站、抖音视频转知识库、AI 热点新闻推送与解读、RSS 综合热点、短线股票推送、Codex 额度监控。它们不只是作品，而是我持续学习 AI、把兴趣变成可运行系统的方式。',
    ],
    en: [
      'I come from a liberal arts and business background, then taught myself AI by turning questions into working systems. I start from the real business scenario, find repeated judgments and actions that consume time, then use rules, data and automation to make the workflow faster, steadier and reusable.',
      'Data Insight: Analyzed user behavior paths during internships and improved user activity by 15% via push campaigns. At Dcar, used formulas, Agent, lark-cli and RPA to reduce exception follow-up from 3-5 hours to 0.5-1 hour, shifting about 80% of status checks from manual review to rule-based recognition. At iFlytek, built workflow + Agent monitoring triggered 50 times/day. At GOTU, used JTBD to analyze 150+ needs, achieving 200,000+ impressions and 100+ private-domain conversions.',
      'Self-driven: Independently built 7 personal AI micro-products — daily learning digest, portfolio site, Douyin-to-knowledge-base pipeline, AI news briefing, RSS insight aggregation, stock alert bot, and Codex usage monitor. They are not just projects; they are how I keep learning and turn interests into running systems.',
    ],
  },
  socials: [
    { platform: 'Email', url: 'mailto:zixinzhuzhu@163.com', icon: 'email' },
  ],
  email: 'zixinzhuzhu@163.com',
  phone: '135 4863 7160',
  location: { zh: '湖南长沙', en: 'Changsha, Hunan' },
  age: '23',
  mbti: 'INTJ',
};
