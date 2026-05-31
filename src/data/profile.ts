import type { ProfileData } from '../types';

export const profile: ProfileData = {
  name: { zh: '孙鹏', en: 'Etan' },
  nameSub: { zh: 'Etan', en: '孙鹏' },
  titles: {
    zh: ['AI 产品运营', '数据分析', '自动化落地'],
    en: ['AI Product Ops', 'Data Analysis', 'Automation Delivery'],
  },
  tagline: {
    zh: 'Curiosity is all you need. AI is how I turn questions into shipped workflows.',
    en: 'Curiosity is all you need. AI is how I turn questions into shipped workflows.',
  },
  bio: {
    zh: [
      '我是一个文科背景出身的 AI 产品运营候选人。对我来说，好奇心不是“多试几个工具”，而是追问：这个场景里真正卡住人的问题是什么，AI 能不能把它变成更快、更稳、更可复用的流程。',
      '这份好奇心已经被放进真实业务里验证：在懂车帝把 4 小时流程压缩到 1 小时，在科大讯飞用 workflow 与 Agent 覆盖高频盯盘，在高途把用户需求、内容选题和增长复盘串成 SOP。',
      '我也会把兴趣做成可运行的小系统：每日学习推送、个人网站、抖音视频转知识库、AI 热点解读、RSS 综合热点、短线股票推送、Codex 额度监控。它们不只是作品，而是我持续学习 AI 的方式。',
    ],
    en: [
      'I come from a liberal arts and business background, then taught myself AI tools by turning questions into working systems. Curiosity, to me, means finding the real bottleneck in a scene and asking whether AI can make the process faster, stabler and reusable.',
      'That curiosity has been tested in real operations: compressing a 4-hour workflow into 1 hour at Dcar, covering high-frequency monitoring with workflow + Agent at iFlytek, and turning user needs, content planning and growth review into SOP at GOTU.',
      'I also build small systems for myself: a daily learning digest, this portfolio, a Douyin-to-knowledge-base pipeline, AI news interpretation, RSS briefings, stock alerts and a Codex usage monitor. They are not just projects; they are how I keep learning.',
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
