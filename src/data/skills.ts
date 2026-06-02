import type { SkillCategory } from '../types';

export const skills: SkillCategory[] = [
  {
    id: 'operations',
    categoryName: { zh: '运营能力', en: 'Operations' },
    items: [
      { name: { zh: '业务流程拆解', en: 'Workflow Diagnosis' }, percentage: 94, color: '#d8b66d' },
      { name: { zh: '用户需求洞察', en: 'User Insight' }, percentage: 92, color: '#b9c38d' },
      { name: { zh: '业务规则设计', en: 'Business Rule Design' }, percentage: 90, color: '#d28a5c' },
      { name: { zh: 'RICE 优先级', en: 'RICE Prioritization' }, percentage: 88, color: '#8fae9f' },
      { name: { zh: 'SOP 沉淀复用', en: 'SOP Systemization' }, percentage: 86, color: '#c9a66b' },
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
      { name: { zh: 'Codex', en: 'Codex' }, percentage: 98, color: '#d8b66d' },
      { name: { zh: 'Claude Code', en: 'Claude Code' }, percentage: 98, color: '#b9c38d' },
      { name: { zh: '飞书 Base', en: 'Lark Base' }, percentage: 98, color: '#8fae9f' },
      { name: { zh: 'N8N', en: 'N8N' }, percentage: 98, color: '#c9a66b' },
      { name: { zh: '影刀 RPA', en: 'ShadowBot RPA' }, percentage: 90, color: '#9db5a8' },
    ],
  },
  {
    id: 'certificates',
    categoryName: { zh: '证书与资质', en: 'Certificates' },
    items: [
      { name: { zh: '计算机二级（MS Office）', en: 'Computer Level 2 (MS Office)' }, percentage: 98, color: '#d8b66d' },
      { name: { zh: 'CET-6', en: 'CET-6' }, percentage: 85, color: '#b9c38d' },
      { name: { zh: '中级电子商务师', en: 'E-Commerce Specialist' }, percentage: 85, color: '#d28a5c' },
      { name: { zh: '驾驶证（C1）', en: 'Driver License (C1)' }, percentage: 80, color: '#8fae9f' },
    ],
  },
];
