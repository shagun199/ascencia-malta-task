export const programCategories = [
  { id: 'all', label: 'All Programmes' },
  { id: 'doctorate', label: 'Doctorate (DBA)' },
  { id: 'masters', label: 'MBA & Masters' },
  { id: 'bachelor', label: 'Bachelor Degrees' },
  { id: 'diploma', label: 'Diplomas & Certificates' },
];

export const programs = [
  {
    id: 'dba',
    title: 'Doctorate of Business Administration (DBA)',
    category: 'doctorate',
    level: 'MQF / EQF Level 8',
    duration: '3 Years',
    credits: '180 ECTS',
    mode: 'Executive / On-Campus',
    image: '/assets/dba.webp',
    tag: 'Executive Level 8',
    description: 'Designed for experienced leaders, corporate directors, and consultants looking to contribute original applied research and master executive business governance.',
    highlights: ['Executive thesis mentorship', 'Flexible cohort seminars', 'Global networking']
  },
  {
    id: 'mba',
    title: 'Master of Business Administration (MBA)',
    category: 'masters',
    level: 'MQF / EQF Level 7',
    duration: '1 Year Full-Time',
    credits: '90 ECTS',
    mode: 'On-Campus (Floriana)',
    image: '/assets/mba.webp',
    tag: 'Flagship Degree',
    description: 'A transformative MBA program focusing on strategic leadership, entrepreneurial growth, corporate finance, and disruptive European market innovation.',
    highlights: ['Strategic management focus', 'Corporate internship link', 'Interactive case studies']
  },
  {
    id: 'msc-finance',
    title: 'MSc in International Finance & FinTech',
    category: 'masters',
    level: 'MQF / EQF Level 7',
    duration: '1 - 2 Years',
    credits: '90 ECTS',
    mode: 'On-Campus',
    image: '/assets/masters.webp',
    tag: 'High Demand',
    description: 'Equipping future financial officers with skills in algorithmic finance, blockchain technologies, European regulatory frameworks, and risk strategy.',
    highlights: ['FinTech laboratory access', 'Regulatory compliance focus', 'Industry-led workshops']
  },
  {
    id: 'bachelor-business',
    title: 'Bachelor in Business Administration (BBA Hons)',
    category: 'bachelor',
    level: 'MQF / EQF Level 6',
    duration: '3 Years',
    credits: '180 ECTS',
    mode: 'Full-Time',
    image: '/assets/bachelor.webp',
    tag: 'Undergraduate',
    description: 'Comprehensive undergraduate degree providing foundational mastery of global commerce, digital marketing, supply chain, and organizational leadership.',
    highlights: ['20 hrs/week student work rights', 'Practical projects', 'Diverse student community']
  },
  {
    id: 'bachelor-marketing',
    title: 'Bachelor in Digital Marketing & Communications',
    category: 'bachelor',
    level: 'MQF / EQF Level 6',
    duration: '3 Years',
    credits: '180 ECTS',
    mode: 'Full-Time',
    image: '/assets/bachelor.webp',
    tag: 'Digital Career Track',
    description: 'Hands-on marketing training covering SEO, content strategy, brand building, omnichannel marketing, and modern business consumer analytics.',
    highlights: ['Portfolio-building live briefs', 'SEO & Analytics certs', 'Creative labs']
  },
  {
    id: 'postgrad-diploma',
    title: 'ATHE Level 7 Postgraduate Diploma in Strategic Management',
    category: 'diploma',
    level: 'MQF / EQF Level 7',
    duration: '1 Year',
    credits: '120 UK Credits / 60 ECTS',
    mode: 'Blended / On-Campus',
    image: '/assets/postgraduate.webp',
    tag: 'Direct University Pathway',
    description: 'An advanced qualification with direct top-up pathways to an MBA or Master of Science dissertation, regulated by Ofqual UK and recognised in Malta.',
    highlights: ['Direct top-up progression', 'Industry relevant modules', 'Fast-track duration']
  },
  {
    id: 'diploma-level5',
    title: 'Diploma in Business & Management (MQF Level 5)',
    category: 'diploma',
    level: 'MQF / EQF Level 5',
    duration: '1 Year',
    credits: '60 ECTS',
    mode: 'Full-Time',
    image: '/assets/diploma.webp',
    tag: 'Foundation Track',
    description: 'The ideal foundation for high school graduates and career changers entering university-level European business education.',
    highlights: ['Year 1 University equivalent', 'Intensive academic English', 'Small cohort sizes']
  }
];
