import type { Project } from '../types';

export const projects: Project[] = [
  {
    id: 'proj-1',
    title: { zh: '抖音直播消费者行为研究', en: 'Douyin Live Consumer Behavior Research' },
    subtitle: { zh: '把一个好奇的问题做成可验证研究', en: 'Turning one question into testable research' },
    description: {
      zh: '从“观众为什么留下来”出发，基于开源项目搭建爬虫，采集 3,000 场直播并处理 1,000,000+ 二手数据；设计实验、完成 100 人预实验迭代、回收 1000+ 有效问卷，用数据验证 FBM 新 signal 对直播绩效的影响路径，论文投稿 SSCI Q2。',
      en: 'Started with the question of why viewers stay. Built a crawler, collected 3,000 live sessions and processed 1,000,000+ data points; designed experiments, iterated through a 100-person pilot, collected 1000+ valid questionnaires, and tested a new FBM signal for live performance. Submitted to SSCI Q2.',
    },
    technologies: { zh: ['Python', '网络爬虫', 'SPSS', 'Stata', 'FBM', 'SSCI'], en: ['Python', 'Crawler', 'SPSS', 'Stata', 'FBM', 'SSCI'] },
    links: [],
    featured: true,
  },
  {
    id: 'proj-2',
    title: { zh: 'AI 微产品实验室', en: 'AI Micro-product Lab' },
    subtitle: { zh: '把学习冲动做成每天会运行的系统', en: 'Making learning impulses run every day' },
    description: {
      zh: '独立开发 7 个自用微产品：每日学习推送、个人网站、抖音视频转知识库、AI 热点新闻推送与解读、RSS 综合热点、短线股票推送、Codex 额度监控。每个工具都来自一个真实问题，并被做成可复用 workflow。',
      en: 'Built 7 personal micro-products: daily learning digest, portfolio site, Douyin-to-knowledge-base pipeline, AI news briefing, RSS insight briefing, stock alert bot and Codex usage monitor. Each started from a real need and became a reusable workflow.',
    },
    technologies: { zh: ['Codex', 'Claude Code', 'Workflow', 'RSS', 'Agent', '自动化'], en: ['Codex', 'Claude Code', 'Workflow', 'RSS', 'Agent', 'Automation'] },
    links: [],
    featured: false,
  },
  {
    id: 'proj-3',
    title: { zh: '业务流程自动化改造', en: 'Operations Automation Redesign' },
    subtitle: { zh: '把重复动作变成可追踪、可复用的规则', en: 'Turning repetition into traceable rules' },
    description: {
      zh: '在懂车帝和科大讯飞的实习中，将车源状态判断、物流判断、违约金计算、盯盘通知等高频动作规则化，通过 Agent、RPA 与 workflow 减少人工判断成本，让流程从“人盯人跑”变成“系统稳定触发”。',
      en: 'Across Dcar and iFlytek internships, converted repetitive tasks such as vehicle status judgment, logistics routing, penalty calculation and monitoring alerts into rules, then used Agent, RPA and workflow to reduce manual judgment and make execution traceable.',
    },
    technologies: { zh: ['Agent', 'RPA', 'SOP', '飞书 Base', '规则引擎'], en: ['Agent', 'RPA', 'SOP', 'Lark Base', 'Rule Engine'] },
    links: [],
    featured: false,
  },
];
