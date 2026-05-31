import type { ProfileData } from '../types';

export const profile: ProfileData = {
  name: { zh: '孙鹏', en: 'Etan' },
  nameSub: { zh: 'Etan', en: '孙鹏' },
  titles: {
    zh: ['好奇心驱动的 AI 探索者', '数据分析与用户洞察', '自动化流程构建者'],
    en: ['Curiosity-driven AI Explorer', 'Data & User Insight', 'Automation Builder'],
  },
  tagline: {
    zh: 'BTW，AI is all you need.',
    en: 'BTW, AI is all you need.',
  },
  bio: {
    zh: [
      '我是一个文科背景出身的 AI 实践者。对我来说，好奇心不是“多试几个工具”，而是追问：这个场景里真正卡住人的问题是什么，AI 能不能把它变成更快、更稳、更可复用的流程。从“想知道”到“能做到”，好奇心是我跨越专业边界的最好老师。',
      '数据洞察：实习期间通过分析用户行为路径定位运营问题，短信 Push 上线后用户活跃提升 15%。在懂车帝用 Agent 与 RPA 把 4 小时流程压缩到 1 小时、覆盖约 3 人工作量；在科大讯飞搭建 workflow + Agent 覆盖高频盯盘、日均触发 50 次、显著释放人力；在高途用 JTBD 梳理 150+ 需求、实现曝光 200,000+、私域拉新 100+，每次实习都产出了可复用的 SOP。',
      '自我驱动：独立开发 7 个自用 AI 微产品——每日学习推送、个人网站、抖音视频转知识库、AI 热点新闻推送与解读、RSS 综合热点、短线股票推送、Codex 额度监控。它们不只是作品，而是我持续学习 AI、把兴趣变成可运行系统的方式。',
    ],
    en: [
      'I come from a liberal arts and business background, then taught myself AI by turning questions into working systems. To me, curiosity isn\'t about trying every tool — it\'s about finding the real bottleneck and asking whether AI can make it faster, more stable, and more reusable. From “I wonder” to “I built it,” curiosity has been the best teacher across disciplines.',
      'Data Insight: Analyzed user behavior paths during internships, identified operational issues, improved user activity by 15% via push campaigns. At Dcar, compressed a 4-hour workflow into 1 hour using Agent + RPA, covering the workload of ~3 people. At iFlytek, built workflow + Agent for high-frequency monitoring, triggering 50 times/day. At GOTU, used JTBD to analyze 150+ needs, achieved 200,000+ impressions and 100+ private-domain conversions. Every internship delivered reusable SOPs.',
      'Self-driven: Independently built 7 personal AI micro-products — daily learning digest, portfolio site, Douyin-to-knowledge-base pipeline, AI news briefing, RSS insight aggregation, stock alert bot, and Codex usage monitor. They are not just projects; they are how I keep learning and turn curiosity into running systems.',
    ],
  },
  socials: [
    { platform: 'Email', url: 'mailto:zixinzhuzhu@163.com', icon: 'email' },
  ],
  email: 'zixinzhuzhu@163.com',
  phone: '13548637160',
  location: { zh: '湖南长沙', en: 'Changsha, Hunan' },
  age: '23',
  mbti: 'INTJ',
};
