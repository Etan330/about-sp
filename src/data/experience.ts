import type { WorkExperience } from '../types';

export const experiences: WorkExperience[] = [
  {
    id: 'exp-1',
    company: { zh: '字节跳动（北京）| 懂车帝', en: 'ByteDance (Beijing) | Dcar' },
    role: { zh: '产品运营实习（业务提效方向）', en: 'Product Operations Intern (Ops Efficiency)' },
    period: { zh: '2026.03 - 2026.06', en: '2026.03 - 2026.06' },
    description: {
      zh: [
        '承接车辆全链路异常与流转跟进，日均处理 500 台车辆状态，沉淀 10+ 异常口径并推动 SOP 标准化',
        '用内外部 Agent 与 RPA 重构业务流程，将 4 小时工作压缩至 1 小时，覆盖约 3 人工作量',
        '将物流判断、车源状态判断、违约金计算等机械动作规则化，让报告输出自动化并降低人工误差',
      ],
      en: [
        'Owned full-cycle vehicle exception tracking, processed 500 vehicle statuses daily, documented 10+ exception categories and pushed SOP standardization',
        'Rebuilt workflows with internal/external Agent and RPA tools, compressing a 4-hour process into 1 hour and covering about 3 people\'s workload',
        'Codified logistics routing, vehicle status judgment and penalty calculation, automating reports and reducing manual error',
      ],
    },
    technologies: { zh: ['Agent', 'RPA', 'SOP', '自动化', '工作流'], en: ['Agent', 'RPA', 'SOP', 'Automation', 'Workflow'] },
  },
  {
    id: 'exp-2',
    company: { zh: '科大讯飞（合肥）| 教育BG', en: 'iFlytek (Hefei) | Education BG' },
    role: { zh: 'AI产品运营实习', en: 'AI Product Operations Intern' },
    period: { zh: '2025.11 - 2026.03', en: '2025.11 - 2026.03' },
    description: {
      zh: [
        '走访 3 所学校、访谈 6 位教师，从反馈与客诉中提炼痛点，并用 RICE 完成需求评估',
        '参与业务逻辑优化，推动规则与特征相似度方案落地，批阅时长缩短 3 min，LLM 使用率降至 30%',
        '搭建 workflow 与 Agent 覆盖高频盯盘场景，日均触发 50 次，释放人力并持续优化 SOP',
      ],
      en: [
        'Visited 3 schools and interviewed 6 teachers, extracting pain points from feedback and complaints, then assessing needs with RICE',
        'Helped optimize business logic and ship rule + feature-similarity solutions, cutting grading time by 3 min and reducing LLM usage to 30%',
        'Built workflow + Agent coverage for high-frequency monitoring, triggering 50 times/day and continuously improving SOP',
      ],
    },
    technologies: { zh: ['RICE 模型', '工作流', 'Agent', 'LLM', 'SOP'], en: ['RICE Model', 'Workflow', 'Agent', 'LLM', 'SOP'] },
  },
  {
    id: 'exp-3',
    company: { zh: '高途教育（苏州）| 市场部', en: 'GOTU (Suzhou) | Marketing' },
    role: { zh: '用户增长实习', en: 'User Growth Intern' },
    period: { zh: '2025.06 - 2025.10', en: '2025.06 - 2025.10' },
    description: {
      zh: [
        '用 JTBD 多渠道梳理 150+ 原生需求，归纳 3 大核心痛点与目标画像，形成内容策略与选题库',
        '搭建运营框架、项目表、素材矩阵与裂变机制，经过多渠道测试后聚焦小红书高质量导流',
        '基于漏斗模型和 RICE 排序迭代，实现曝光 200,000+、私域拉新 100+，并产出可复用 SOP',
      ],
      en: [
        'Used JTBD to analyze 150+ original needs across channels, identifying 3 core pain points and target personas for content strategy',
        'Built operation framework, project plan, content matrix and viral mechanisms, then focused on Xiaohongshu after multi-channel tests',
        'Iterated with funnel analysis and RICE prioritization, achieving 200,000+ impressions, 100+ private-domain conversions and reusable SOP',
      ],
    },
    technologies: { zh: ['JTBD', '漏斗模型', 'RICE', '小红书', 'SOP'], en: ['JTBD', 'Funnel Model', 'RICE', 'Xiaohongshu', 'SOP'] },
  },
  {
    id: 'exp-4',
    company: { zh: '售汇传媒（杭州）| 直播带货部', en: 'Shouhui Media (Hangzhou) | Live Commerce' },
    role: { zh: '直播运营实习', en: 'Live Streaming Operations Intern' },
    period: { zh: '2023.07 - 2024.01', en: '2023.07 - 2024.01' },
    description: {
      zh: [
        '统筹 4 人团队完成账号定位与直播策划，助力账号最高在线 150 人，1 min 留存提升 5%',
        '用数据平台监测“五维四率”并复盘直播节奏，持续迭代策略，月 GMV 突破 30,000 元',
        '将直播流程细化为 SOP 并迁移到跨类目场景，获评“双优”并提升运营成功率',
      ],
      en: [
        'Led a 4-person team for account positioning and live planning, boosting peak viewers to 150 and improving 1-min retention by 5%',
        'Monitored "5 dimensions & 4 rates" through data platforms, reviewed live rhythm and iterated strategy, with monthly GMV exceeding RMB 30,000',
        'Refined live operation SOP for cross-category scenarios, received "Double Excellent" rating and improved execution success rate',
      ],
    },
    technologies: { zh: ['直播运营', 'GMV', '数据监控', '团队管理', 'SOP'], en: ['Live Streaming', 'GMV', 'Data Monitoring', 'Team Management', 'SOP'] },
  },
  {
    id: 'exp-5',
    company: { zh: '梓美电商（长沙）| 抖音运营部', en: 'Zimei E-commerce (Changsha) | Douyin Operations' },
    role: { zh: '电商运营实习', en: 'E-commerce Operations Intern' },
    period: { zh: '2021.10 - 2022.12', en: '2021.10 - 2022.12' },
    description: {
      zh: [
        '负责 30+ SKU 选品、主图与 Banner 设计、ERP 调配，店铺月流量达 20,000+ UV，月订单超 50 单',
        '通过精选联盟筛选尾部达人，累计带货 600+ 件，月 GMV 达 4,000+ 元，初步搭建达人矩阵',
        '用电商罗盘跟踪 UV、CTR、加购率和支付率，对低转化 SKU 做 A/B 测试，转化率提升 3.9%',
      ],
      en: [
        'Managed 30+ SKU selection, main image/banner design and ERP coordination, reaching 20,000+ monthly UV and 50+ orders/month',
        'Recruited micro-influencers via Jingxuan Alliance, driving 600+ cumulative sales and RMB 4,000+ monthly GMV',
        'Tracked UV, CTR, cart rate and payment rate via e-commerce compass, running A/B tests that improved conversion by 3.9%',
      ],
    },
    technologies: { zh: ['抖音', 'SKU', 'A/B 测试', 'ERP', '达人营销'], en: ['Douyin', 'SKU', 'A/B Testing', 'ERP', 'Influencer Marketing'] },
  },
];
