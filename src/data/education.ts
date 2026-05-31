import type { Education } from '../types';

export const education: Education[] = [
  {
    id: 'edu-1',
    institution: { zh: '长沙理工大学', en: 'Changsha University of Science & Technology' },
    degree: { zh: '工商管理 硕士', en: 'M.S. in Business Administration' },
    period: { zh: '2024.09 - 2027.06', en: '2024.09 - 2027.06' },
    logo: '/about-sp/school-csust.png',
    description: {
      zh: '所获荣誉：研究生一等奖学金、湘能楚天奖学金、财富杯国三、市调大赛省二  GPA: 3.6/4.0 | top 5 %',
      en: 'GPA: 3.60/4.0 | Top 5% | First-Class Graduate Scholarship, Xiangneng Chutian Scholarship, National 3rd Prize in Wealth Cup, Provincial 2nd Prize in Market Research Competition',
    },
  },
  {
    id: 'edu-2',
    institution: { zh: '湖南信息学院', en: 'Hunan Institute of Information Technology' },
    degree: { zh: '电子商务 本科', en: 'B.S. in E-Commerce' },
    period: { zh: '2020.09 - 2024.06', en: '2020.09 - 2024.06' },
    logo: '/about-sp/school-hnuit.png',
    description: {
      zh: '所获荣誉：英才奖学金、优秀毕业生、三创赛国三、湖南跨境电商大赛省二  GPA: 3.7/4.0 | top 3 %',
      en: 'GPA: 3.70/4.0 | Top 3% | Elite Scholarship, Outstanding Graduate, National 3rd Prize in Innovation & Entrepreneurship Competition, Provincial 2nd Prize in Hunan Cross-Border E-Commerce Competition',
    },
  },
];
