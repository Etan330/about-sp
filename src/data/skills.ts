import type { SkillCategory } from '../types';

export const skills: SkillCategory[] = [
  {
    id: 'ai-product-ops',
    categoryName: { zh: 'AI 产品运营', en: 'AI Product Ops' },
    items: [
      { name: { zh: '需求访谈', en: 'User Interview' }, percentage: 90, color: '#d8b66d' },
      { name: { zh: 'RICE 优先级', en: 'RICE Prioritization' }, percentage: 88, color: '#b9c38d' },
      { name: { zh: '业务规则化', en: 'Business Rule Design' }, percentage: 92, color: '#d28a5c' },
      { name: { zh: 'SOP 沉淀', en: 'SOP Systemization' }, percentage: 94, color: '#8fae9f' },
      { name: { zh: '产品迭代协同', en: 'Product Iteration' }, percentage: 86, color: '#c9a66b' },
    ],
  },
  {
    id: 'data-analysis',
    categoryName: { zh: '数据分析', en: 'Data Analysis' },
    items: [
      { name: { zh: 'Python', en: 'Python' }, percentage: 98, color: '#d8b66d' },
      { name: { zh: 'SQL', en: 'SQL' }, percentage: 82, color: '#b9c38d' },
      { name: { zh: 'Power BI', en: 'Power BI' }, percentage: 80, color: '#d28a5c' },
      { name: { zh: 'Stata', en: 'Stata' }, percentage: 78, color: '#8fae9f' },
      { name: { zh: 'SPSS', en: 'SPSS' }, percentage: 78, color: '#c9a66b' },
    ],
  },
  {
    id: 'automation-delivery',
    categoryName: { zh: '自动化落地', en: 'Automation Delivery' },
    items: [
      { name: { zh: 'Codex / Claude Code', en: 'Codex / Claude Code' }, percentage: 98, color: '#d8b66d' },
      { name: { zh: 'Cursor', en: 'Cursor' }, percentage: 98, color: '#b9c38d' },
      { name: { zh: 'Workflow / Agent', en: 'Workflow / Agent' }, percentage: 98, color: '#d28a5c' },
      { name: { zh: '飞书 Base', en: 'Lark Base' }, percentage: 98, color: '#8fae9f' },
      { name: { zh: 'N8N', en: 'N8N' }, percentage: 98, color: '#c9a66b' },
      { name: { zh: '影刀 RPA', en: 'ShadowBot RPA' }, percentage: 90, color: '#9db5a8' },
    ],
  },
  {
    id: 'certificates',
    categoryName: { zh: '证书与资质', en: 'Certificates' },
    items: [
      { name: { zh: 'CET-6', en: 'CET-6' }, percentage: 85, color: '#d8b66d' },
      { name: { zh: '计算机二级（MS Office）', en: 'Computer Level 2 (MS Office)' }, percentage: 98, color: '#b9c38d' },
      { name: { zh: '中级电子商务师', en: 'E-Commerce Specialist' }, percentage: 85, color: '#d28a5c' },
      { name: { zh: '驾驶证（C1）', en: 'Driver License (C1)' }, percentage: 80, color: '#8fae9f' },
    ],
  },
];
