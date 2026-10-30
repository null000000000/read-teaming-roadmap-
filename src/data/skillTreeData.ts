export type PriorityLevel = 'A' | 'B' | 'C' | 'D' | 'E' | 'F';

export interface SubSkill {
  id: string;
  name: string;
  priority: PriorityLevel;
  category?: string;
}

export interface CoreSkill {
  id: string;
  number: string;
  titleEn: string;
  titleAr: string;
  priority: PriorityLevel;
  learningHours: string;
  masteryHours: string;
  totalHours: string;
  outcomeAr: string;
  subskills: SubSkill[];
  phaseSuggestion: string;
  colorScheme: {
    primary: string;
    border: string;
    bg: string;
  };
}

export interface Specialization {
  id: string;
  title: string;
  priority: PriorityLevel;
  subtopics: string[];
}

export interface RoadmapPhase {
  id: string;
  phaseNumber: number;
  titleEn: string;
  titleAr: string;
  duration: string;
  skills: string[];
  transitionGateAr: string;
}

export interface CompetencyChecklistItem {
  id: string;
  textAr: string;
  category: string;
}

export interface RedTeamerLevel {
  level: string;
  titleAr: string;
  expectedCapabilityAr: string;
}

export interface EngagementType {
  name: string;
  priority: PriorityLevel;
}

export const PRIORITY_MAP: Record<PriorityLevel, { labelAr: string; labelEn: string; color: string; badgeClass: string; descAr: string }> = {
  A: {
    labelAr: 'أساسية جداً (A)',
    labelEn: 'Critical',
    color: '#F43F5E',
    badgeClass: 'text-rose-400 bg-rose-500/10 border-rose-500/30',
    descAr: 'أساسية جداً؛ لا يمكن الاستغناء عنها في المسار العام للمحاكي.'
  },
  B: {
    labelAr: 'عالية الأهمية (B)',
    labelEn: 'High Importance',
    color: '#F59E0B',
    badgeClass: 'text-amber-400 bg-amber-500/10 border-amber-500/30',
    descAr: 'عالية الأهمية وتظهر في عدد كبير من العمليات والمشاريع.'
  },
  C: {
    labelAr: 'تخصصية نسبياً (C)',
    labelEn: 'Important / Contextual',
    color: '#0EA5E9',
    badgeClass: 'text-sky-400 bg-sky-500/10 border-sky-500/30',
    descAr: 'مهمة، لكنها مرتبطة بعمليات أو بيئات محددة نسبياً.'
  },
  D: {
    labelAr: 'متقدمة / دقيقة (D)',
    labelEn: 'Advanced Specialized',
    color: '#A855F7',
    badgeClass: 'text-purple-400 bg-purple-500/10 border-purple-500/30',
    descAr: 'تخصصية أو متقدمة وليست مطلوبة في كل العمليات اليومية.'
  },
  E: {
    labelAr: 'تخصص عميق (E)',
    labelEn: 'Deep Niche',
    color: '#EAB308',
    badgeClass: 'text-yellow-400 bg-yellow-500/10 border-yellow-500/30',
    descAr: 'تخصص عميق وضيق الاستخدام في قطاعات نادرة.'
  },
  F: {
    labelAr: 'نادر / بحثي (F)',
    labelEn: 'Research / Rare',
    color: '#64748B',
    badgeClass: 'text-slate-400 bg-slate-500/10 border-slate-500/30',
    descAr: 'تخصص نادر أو بحثي للغاية في مختبرات أبحاث التهديدات.'
  }
};

export const CORE_SKILLS: CoreSkill[] = [
  {
    id: 'core-01',
    number: 'CORE 01',
    titleEn: 'Networking & Network Security',
    titleAr: 'الشبكات وأمن الشبكات',
    priority: 'A',
    learningHours: '70–100 ساعة',
    masteryHours: '180–280 ساعة إضافية',
    totalHours: '250–380 ساعة',
    outcomeAr: 'فهم الشبكات من مستوى الحزم إلى تصميم الشبكة، وتحليل حركة المرور، وتحديد نقاط الدخول، وفهم مسارات الاتصال وحدود الثقة.',
    phaseSuggestion: 'Phase 0 (IT Foundations)',
    colorScheme: {
      primary: '#38BDF8',
      border: 'border-sky-500/30',
      bg: 'bg-sky-500/5'
    },
    subskills: [
      { id: 'c1-1', name: 'OSI & TCP/IP Models', priority: 'A' },
      { id: 'c1-2', name: 'TCP/UDP & 3-Way Handshake', priority: 'A' },
      { id: 'c1-3', name: 'IP Addressing & Subnetting', priority: 'A' },
      { id: 'c1-4', name: 'Routing & Switching', priority: 'A' },
      { id: 'c1-5', name: 'ARP & MAC Addressing', priority: 'A' },
      { id: 'c1-6', name: 'DNS Architecture', priority: 'A' },
      { id: 'c1-7', name: 'DHCP', priority: 'B' },
      { id: 'c1-8', name: 'HTTP/HTTPS', priority: 'A' },
      { id: 'c1-9', name: 'TLS/SSL', priority: 'B' },
      { id: 'c1-10', name: 'Common Network Protocols', priority: 'A' },
      { id: 'c1-11', name: 'VLANs & Trunking', priority: 'B' },
      { id: 'c1-12', name: 'ACLs & Network Segmentation', priority: 'A' },
      { id: 'c1-13', name: 'Firewalls & NAT', priority: 'A' },
      { id: 'c1-14', name: 'VPN Technologies', priority: 'B' },
      { id: 'c1-15', name: 'Proxy & Reverse Proxy', priority: 'B' },
      { id: 'c1-16', name: 'Network Traffic Analysis', priority: 'A' },
      { id: 'c1-17', name: 'Packet Crafting', priority: 'B' },
      { id: 'c1-18', name: 'IDS/IPS Concepts', priority: 'B' },
      { id: 'c1-19', name: 'IPv6 Security', priority: 'C' },
      { id: 'c1-20', name: 'Wireless Networking', priority: 'C' },
      { id: 'c1-21', name: 'Network Tunneling', priority: 'B' },
      { id: 'c1-22', name: 'Network Architecture & Trust Boundaries', priority: 'A' }
    ]
  },
  {
    id: 'core-02',
    number: 'CORE 02',
    titleEn: 'Linux Operating Systems',
    titleAr: 'أنظمة تشغيل لينكس',
    priority: 'A',
    learningHours: '60–90 ساعة',
    masteryHours: '180–260 ساعة إضافية',
    totalHours: '240–350 ساعة',
    outcomeAr: 'فهم Linux كنظام تشغيل، وليس مجرد استخدام توزيعة أمنية أو حفظ أوامر الأدوات.',
    phaseSuggestion: 'Phase 0 & 1 (Foundations & Escalation)',
    colorScheme: {
      primary: '#34D399',
      border: 'border-emerald-500/30',
      bg: 'bg-emerald-500/5'
    },
    subskills: [
      { id: 'c2-1', name: 'Linux Filesystem', priority: 'A' },
      { id: 'c2-2', name: 'Linux CLI & Shell Navigation', priority: 'A' },
      { id: 'c2-3', name: 'Users & Groups', priority: 'A' },
      { id: 'c2-4', name: 'Permissions & Ownership', priority: 'A' },
      { id: 'c2-5', name: 'Processes & Services', priority: 'A' },
      { id: 'c2-6', name: 'Systemd & Cron', priority: 'B' },
      { id: 'c2-7', name: 'Package Management', priority: 'B' },
      { id: 'c2-8', name: 'Linux Networking', priority: 'A' },
      { id: 'c2-9', name: 'SSH & Key Authentication', priority: 'A' },
      { id: 'c2-10', name: 'Logs & System Monitoring', priority: 'B' },
      { id: 'c2-11', name: 'Bash Scripting', priority: 'A' },
      { id: 'c2-12', name: 'Environment Variables', priority: 'B' },
      { id: 'c2-13', name: 'Kernel Fundamentals', priority: 'B' },
      { id: 'c2-14', name: 'Linux Privilege Escalation', priority: 'A' },
      { id: 'c2-15', name: 'SUID/SGID & Capabilities', priority: 'A' },
      { id: 'c2-16', name: 'Sudo Misconfigurations', priority: 'A' },
      { id: 'c2-17', name: 'Linux Persistence Concepts', priority: 'B' },
      { id: 'c2-18', name: 'Linux Internals', priority: 'B' },
      { id: 'c2-19', name: 'PAM & Authentication', priority: 'B' },
      { id: 'c2-20', name: 'Containers & Namespaces', priority: 'C' }
    ]
  },
  {
    id: 'core-03',
    number: 'CORE 03',
    titleEn: 'Windows Operating Systems',
    titleAr: 'أنظمة تشغيل ويندوز',
    priority: 'A',
    learningHours: '70–100 ساعة',
    masteryHours: '200–300 ساعة إضافية',
    totalHours: '270–400 ساعة',
    outcomeAr: 'فهم سلوك Windows والصلاحيات والعمليات والخدمات وآليات الحماية الداخلية.',
    phaseSuggestion: 'Phase 0, 1 & 2',
    colorScheme: {
      primary: '#60A5FA',
      border: 'border-blue-500/30',
      bg: 'bg-blue-500/5'
    },
    subskills: [
      { id: 'c3-1', name: 'Windows Architecture', priority: 'A' },
      { id: 'c3-2', name: 'Windows Filesystem', priority: 'A' },
      { id: 'c3-3', name: 'NTFS Permissions', priority: 'A' },
      { id: 'c3-4', name: 'Users & Groups', priority: 'A' },
      { id: 'c3-5', name: 'Windows Services', priority: 'A' },
      { id: 'c3-6', name: 'Registry', priority: 'B' },
      { id: 'c3-7', name: 'Windows Processes & Threads', priority: 'B' },
      { id: 'c3-8', name: 'Windows Command Line (CMD)', priority: 'A' },
      { id: 'c3-9', name: 'PowerShell', priority: 'A' },
      { id: 'c3-10', name: 'Windows Networking', priority: 'A' },
      { id: 'c3-11', name: 'Windows Authentication', priority: 'A' },
      { id: 'c3-12', name: 'Windows Security Model', priority: 'A' },
      { id: 'c3-13', name: 'Access Tokens & Integrity Levels', priority: 'B' },
      { id: 'c3-14', name: 'UAC', priority: 'B' },
      { id: 'c3-15', name: 'Windows Event Logs', priority: 'B' },
      { id: 'c3-16', name: 'Scheduled Tasks', priority: 'B' },
      { id: 'c3-17', name: 'Windows Privilege Escalation', priority: 'A' },
      { id: 'c3-18', name: 'Windows Internals', priority: 'B' },
      { id: 'c3-19', name: 'WMI & WinRM', priority: 'B' },
      { id: 'c3-20', name: 'Windows Persistence Concepts', priority: 'B' },
      { id: 'c3-21', name: 'DLL & Process Fundamentals', priority: 'B' },
      { id: 'c3-22', name: 'Windows Defender & Security Controls', priority: 'A' }
    ]
  },
  {
    id: 'core-04',
    number: 'CORE 04',
    titleEn: 'Programming & Scripting',
    titleAr: 'البرمجة والسكربتات والأتمتة',
    priority: 'A',
    learningHours: '100–150 ساعة',
    masteryHours: '250–400 ساعة إضافية',
    totalHours: '350–550 ساعة',
    outcomeAr: 'قراءة وكتابة وتعديل الكود، وبناء أدوات صغيرة، وأتمتة المهام، وفهم الأدوات بدلاً من الاعتماد الأعمى عليها.',
    phaseSuggestion: 'Phase 0 & 4 (Automation & Custom Tooling)',
    colorScheme: {
      primary: '#FBBF24',
      border: 'border-amber-500/30',
      bg: 'bg-amber-500/5'
    },
    subskills: [
      { id: 'c4-1', name: 'Programming Logic', priority: 'A' },
      { id: 'c4-2', name: 'Python Fundamentals', priority: 'A' },
      { id: 'c4-3', name: 'Python Automation', priority: 'A' },
      { id: 'c4-4', name: 'File & Network Operations with Python', priority: 'A' },
      { id: 'c4-5', name: 'HTTP Requests & APIs', priority: 'A' },
      { id: 'c4-6', name: 'Regex', priority: 'B' },
      { id: 'c4-7', name: 'JSON/XML/YAML', priority: 'B' },
      { id: 'c4-8', name: 'Bash Scripting', priority: 'A' },
      { id: 'c4-9', name: 'PowerShell Scripting', priority: 'A' },
      { id: 'c4-10', name: 'Windows Batch', priority: 'C' },
      { id: 'c4-11', name: 'Git & Version Control', priority: 'B' },
      { id: 'c4-12', name: 'Debugging', priority: 'A' },
      { id: 'c4-13', name: 'Error Handling', priority: 'B' },
      { id: 'c4-14', name: 'Reading Source Code', priority: 'A' },
      { id: 'c4-15', name: 'C Fundamentals', priority: 'B' },
      { id: 'c4-16', name: 'C++ Fundamentals', priority: 'C' },
      { id: 'c4-17', name: 'Memory Management', priority: 'B' },
      { id: 'c4-18', name: 'Assembly Fundamentals', priority: 'C' },
      { id: 'c4-19', name: 'JavaScript', priority: 'B' },
      { id: 'c4-20', name: 'SQL', priority: 'B' },
      { id: 'c4-21', name: 'Go', priority: 'C' },
      { id: 'c4-22', name: 'API Development', priority: 'C' },
      { id: 'c4-23', name: 'Malware Analysis Programming Concepts', priority: 'C' }
    ]
  },
  {
    id: 'core-05',
    number: 'CORE 05',
    titleEn: 'Web Application Security',
    titleAr: 'أمن تطبيقات الويب',
    priority: 'A',
    learningHours: '100–150 ساعة',
    masteryHours: '250–400 ساعة إضافية',
    totalHours: '350–550 ساعة',
    outcomeAr: 'فهم التطبيق من المتصفح إلى Backend إلى Database، واختباره يدوياً وفهم الأسباب الجذرية للثغرات.',
    phaseSuggestion: 'Phase 1 (Offensive Foundations)',
    colorScheme: {
      primary: '#F87171',
      border: 'border-red-500/30',
      bg: 'bg-red-500/5'
    },
    subskills: [
      { id: 'c5-1', name: 'HTTP Request/Response', priority: 'A' },
      { id: 'c5-2', name: 'HTTP Methods & Headers', priority: 'A' },
      { id: 'c5-3', name: 'Cookies & Sessions', priority: 'A' },
      { id: 'c5-4', name: 'Authentication & Authorization', priority: 'A' },
      { id: 'c5-5', name: 'HTML & CSS Fundamentals', priority: 'B' },
      { id: 'c5-6', name: 'JavaScript Fundamentals', priority: 'A' },
      { id: 'c5-7', name: 'DOM & Browser Architecture', priority: 'B' },
      { id: 'c5-8', name: 'SQL & Database Fundamentals', priority: 'A' },
      { id: 'c5-9', name: 'REST APIs', priority: 'A' },
      { id: 'c5-10', name: 'API Authentication', priority: 'A' },
      { id: 'c5-11', name: 'SQL Injection', priority: 'A' },
      { id: 'c5-12', name: 'Cross-Site Scripting (XSS)', priority: 'A' },
      { id: 'c5-13', name: 'CSRF', priority: 'B' },
      { id: 'c5-14', name: 'SSRF', priority: 'A' },
      { id: 'c5-15', name: 'IDOR / BOLA', priority: 'A' },
      { id: 'c5-16', name: 'File Upload Vulnerabilities', priority: 'A' },
      { id: 'c5-17', name: 'Path Traversal', priority: 'A' },
      { id: 'c5-18', name: 'Command Injection', priority: 'A' },
      { id: 'c5-19', name: 'SSTI', priority: 'B' },
      { id: 'c5-20', name: 'XXE', priority: 'B' },
      { id: 'c5-21', name: 'Authentication Bypass', priority: 'A' },
      { id: 'c5-22', name: 'Access Control Testing', priority: 'A' },
      { id: 'c5-23', name: 'Business Logic Vulnerabilities', priority: 'A' },
      { id: 'c5-24', name: 'JWT Security', priority: 'B' },
      { id: 'c5-25', name: 'OAuth / SSO Security', priority: 'B' },
      { id: 'c5-26', name: 'GraphQL Security', priority: 'C' },
      { id: 'c5-27', name: 'Web Cache Poisoning', priority: 'C' },
      { id: 'c5-28', name: 'Deserialization', priority: 'B' },
      { id: 'c5-29', name: 'WebSocket Security', priority: 'C' },
      { id: 'c5-30', name: 'Source Code Review', priority: 'B' }
    ]
  },
  {
    id: 'core-06',
    number: 'CORE 06',
    titleEn: 'Active Directory & Identity Security',
    titleAr: 'دليل أكتيف دايركتوري وأمن الهوية',
    priority: 'A',
    learningHours: '100–150 ساعة',
    masteryHours: '250–400 ساعة إضافية',
    totalHours: '350–550 ساعة',
    outcomeAr: 'فهم العلاقات بين المستخدمين والأجهزة والصلاحيات والثقة، وتحليل مسارات الوصول داخل بيئات المؤسسات.',
    phaseSuggestion: 'Phase 2 & 4 (Enterprise & Advanced AD)',
    colorScheme: {
      primary: '#818CF8',
      border: 'border-indigo-500/30',
      bg: 'bg-indigo-500/5'
    },
    subskills: [
      { id: 'c6-1', name: 'Active Directory Architecture', priority: 'A' },
      { id: 'c6-2', name: 'Domains, Forests & Trees', priority: 'A' },
      { id: 'c6-3', name: 'Domain Controllers', priority: 'A' },
      { id: 'c6-4', name: 'LDAP', priority: 'A' },
      { id: 'c6-5', name: 'DNS in Active Directory', priority: 'A' },
      { id: 'c6-6', name: 'Kerberos Authentication', priority: 'A' },
      { id: 'c6-7', name: 'NTLM Authentication', priority: 'A' },
      { id: 'c6-8', name: 'Group Policy (GPO)', priority: 'A' },
      { id: 'c6-9', name: 'Users, Groups & OUs', priority: 'A' },
      { id: 'c6-10', name: 'Domain Trusts', priority: 'A' },
      { id: 'c6-11', name: 'ACLs & Object Permissions', priority: 'A' },
      { id: 'c6-12', name: 'Delegation', priority: 'A' },
      { id: 'c6-13', name: 'Service Accounts', priority: 'A' },
      { id: 'c6-14', name: 'SPNs', priority: 'A' },
      { id: 'c6-15', name: 'AD Enumeration', priority: 'A' },
      { id: 'c6-16', name: 'BloodHound & Attack Path Analysis', priority: 'A' },
      { id: 'c6-17', name: 'Kerberos Security Assessment', priority: 'A' },
      { id: 'c6-18', name: 'NTLM Security Assessment', priority: 'A' },
      { id: 'c6-19', name: 'Credential Exposure Assessment', priority: 'A' },
      { id: 'c6-20', name: 'ADCS (Certificate Services)', priority: 'B' },
      { id: 'c6-21', name: 'Windows Domain Privilege Escalation', priority: 'A' },
      { id: 'c6-22', name: 'Domain Persistence Concepts', priority: 'B' },
      { id: 'c6-23', name: 'Entra ID / Azure AD', priority: 'B' },
      { id: 'c6-24', name: 'Hybrid Identity', priority: 'B' },
      { id: 'c6-25', name: 'Federation & SSO', priority: 'B' }
    ]
  },
  {
    id: 'core-07',
    number: 'CORE 07',
    titleEn: 'Vulnerability Research & Exploitation',
    titleAr: 'بحث الثغرات وتطوير الاستغلال',
    priority: 'A',
    learningHours: '80–120 ساعة',
    masteryHours: '250–450 ساعة إضافية',
    totalHours: '330–570 ساعة',
    outcomeAr: 'فهم الثغرات والتحقق من صلاحية استغلالها وتحديد أثرها، لا مجرد تشغيل Exploit منشور.',
    phaseSuggestion: 'Phase 1 & 4 (Exploitation & Research)',
    colorScheme: {
      primary: '#EC4899',
      border: 'border-pink-500/30',
      bg: 'bg-pink-500/5'
    },
    subskills: [
      { id: 'c7-1', name: 'Vulnerability Fundamentals', priority: 'A' },
      { id: 'c7-2', name: 'CVE & CVSS', priority: 'B' },
      { id: 'c7-3', name: 'Vulnerability Analysis', priority: 'A' },
      { id: 'c7-4', name: 'Root Cause Analysis', priority: 'A' },
      { id: 'c7-5', name: 'Security Misconfigurations', priority: 'A' },
      { id: 'c7-6', name: 'Exploit Research', priority: 'A' },
      { id: 'c7-7', name: 'Public Exploit Validation', priority: 'A' },
      { id: 'c7-8', name: 'Manual Exploitation', priority: 'A' },
      { id: 'c7-9', name: 'Proof of Concept Development', priority: 'B' },
      { id: 'c7-10', name: 'Fuzzing Fundamentals', priority: 'C' },
      { id: 'c7-11', name: 'Buffer Overflow Fundamentals', priority: 'C' },
      { id: 'c7-12', name: 'Memory Corruption', priority: 'C' },
      { id: 'c7-13', name: 'Stack & Heap', priority: 'C' },
      { id: 'c7-14', name: 'Reverse Engineering', priority: 'C' },
      { id: 'c7-15', name: 'Debugging with GDB/WinDbg', priority: 'C' },
      { id: 'c7-16', name: 'Assembly', priority: 'C' },
      { id: 'c7-17', name: 'Binary Exploitation', priority: 'D' },
      { id: 'c7-18', name: 'Kernel Exploitation', priority: 'D' },
      { id: 'c7-19', name: 'Custom Exploit Development', priority: 'C' },
      { id: 'c7-20', name: 'Patch Analysis', priority: 'C' }
    ]
  },
  {
    id: 'core-08',
    number: 'CORE 08',
    titleEn: 'Reconnaissance & Intelligence',
    titleAr: 'الاستطلاع وجمع المعلومات الاستخباراتية',
    priority: 'A',
    learningHours: '40–70 ساعة',
    masteryHours: '100–180 ساعة إضافية',
    totalHours: '140–250 ساعة',
    outcomeAr: 'جمع المعلومات وربطها وتحويلها إلى فرضيات ومسارات اختبار قابلة للتحقق.',
    phaseSuggestion: 'Phase 1 & 3 (OSINT & ATT&CK)',
    colorScheme: {
      primary: '#2DD4BF',
      border: 'border-teal-500/30',
      bg: 'bg-teal-500/5'
    },
    subskills: [
      { id: 'c8-1', name: 'OSINT Fundamentals', priority: 'A' },
      { id: 'c8-2', name: 'Passive Reconnaissance', priority: 'A' },
      { id: 'c8-3', name: 'Active Reconnaissance', priority: 'A' },
      { id: 'c8-4', name: 'Domain & DNS Enumeration', priority: 'A' },
      { id: 'c8-5', name: 'Subdomain Discovery', priority: 'A' },
      { id: 'c8-6', name: 'WHOIS & Certificate Transparency', priority: 'B' },
      { id: 'c8-7', name: 'Technology Fingerprinting', priority: 'A' },
      { id: 'c8-8', name: 'Port & Service Enumeration', priority: 'A' },
      { id: 'c8-9', name: 'Network Mapping', priority: 'A' },
      { id: 'c8-10', name: 'Asset Discovery', priority: 'A' },
      { id: 'c8-11', name: 'Email & Public Identity Research', priority: 'B' },
      { id: 'c8-12', name: 'Attack Surface Mapping', priority: 'A' },
      { id: 'c8-13', name: 'Cloud Asset Discovery', priority: 'B' },
      { id: 'c8-14', name: 'Threat Intelligence', priority: 'B' },
      { id: 'c8-15', name: 'IOC & TTP Analysis', priority: 'B' },
      { id: 'c8-16', name: 'MITRE ATT&CK Mapping', priority: 'A' },
      { id: 'c8-17', name: 'Threat Modeling', priority: 'A' },
      { id: 'c8-18', name: 'Intelligence Reporting', priority: 'B' }
    ]
  },
  {
    id: 'core-09',
    number: 'CORE 09',
    titleEn: 'Credential & Identity Attacks',
    titleAr: 'هجمات الهوية وبيانات الاعتماد',
    priority: 'A',
    learningHours: '50–80 ساعة',
    masteryHours: '150–250 ساعة إضافية',
    totalHours: '200–330 ساعة',
    outcomeAr: 'فهم الهوية ودورة حياة بيانات الاعتماد، وتقييم نقاط الضعف في المصادقة والجلسات وإدارة الأسرار.',
    phaseSuggestion: 'Phase 2 (Enterprise Offensive Security)',
    colorScheme: {
      primary: '#FB7185',
      border: 'border-rose-500/30',
      bg: 'bg-rose-500/5'
    },
    subskills: [
      { id: 'c9-1', name: 'Authentication Mechanisms', priority: 'A' },
      { id: 'c9-2', name: 'Password Security', priority: 'A' },
      { id: 'c9-3', name: 'Password Hashing', priority: 'A' },
      { id: 'c9-4', name: 'Hash Identification', priority: 'A' },
      { id: 'c9-5', name: 'Password Policy Analysis', priority: 'A' },
      { id: 'c9-6', name: 'Credential Exposure Analysis', priority: 'A' },
      { id: 'c9-7', name: 'Password Spraying Assessment', priority: 'B' },
      { id: 'c9-8', name: 'Brute Force Risk Assessment', priority: 'B' },
      { id: 'c9-9', name: 'Credential Reuse Assessment', priority: 'A' },
      { id: 'c9-10', name: 'MFA Security', priority: 'A' },
      { id: 'c9-11', name: 'Session & Token Security', priority: 'A' },
      { id: 'c9-12', name: 'Kerberos Ticket Concepts', priority: 'A' },
      { id: 'c9-13', name: 'NTLM Security', priority: 'A' },
      { id: 'c9-14', name: 'Secrets Management', priority: 'B' },
      { id: 'c9-15', name: 'Password Managers Security', priority: 'C' },
      { id: 'c9-16', name: 'Identity Federation', priority: 'B' },
      { id: 'c9-17', name: 'OAuth / SAML', priority: 'B' }
    ]
  },
  {
    id: 'core-10',
    number: 'CORE 10',
    titleEn: 'Endpoint Security & EDR',
    titleAr: 'أمن نقاط النهاية وأنظمة EDR',
    priority: 'A',
    learningHours: '70–110 ساعة',
    masteryHours: '220–350 ساعة إضافية',
    totalHours: '290–460 ساعة',
    outcomeAr: 'فهم ما يتم تسجيله ومراقبته على الأجهزة، وتقييم قدرة أدوات الدفاع على اكتشاف الأنشطة.',
    phaseSuggestion: 'Phase 3 & 4 (Tradecraft & Evasion)',
    colorScheme: {
      primary: '#A78BFA',
      border: 'border-violet-500/30',
      bg: 'bg-violet-500/5'
    },
    subskills: [
      { id: 'c10-1', name: 'Endpoint Security Architecture', priority: 'A' },
      { id: 'c10-2', name: 'Antivirus Concepts', priority: 'A' },
      { id: 'c10-3', name: 'EDR Architecture', priority: 'A' },
      { id: 'c10-4', name: 'Process Monitoring', priority: 'A' },
      { id: 'c10-5', name: 'Windows Event Logging', priority: 'A' },
      { id: 'c10-6', name: 'Sysmon', priority: 'A' },
      { id: 'c10-7', name: 'Telemetry & Event Analysis', priority: 'A' },
      { id: 'c10-8', name: 'Behavioral Detection', priority: 'A' },
      { id: 'c10-9', name: 'Attack Surface Reduction', priority: 'B' },
      { id: 'c10-10', name: 'Application Control', priority: 'B' },
      { id: 'c10-11', name: 'Windows Defender', priority: 'A' },
      { id: 'c10-12', name: 'Linux Endpoint Security', priority: 'B' },
      { id: 'c10-13', name: 'Detection Engineering Fundamentals', priority: 'A' },
      { id: 'c10-14', name: 'Sigma Rules', priority: 'B' },
      { id: 'c10-15', name: 'YARA Fundamentals', priority: 'B' },
      { id: 'c10-16', name: 'EDR Detection Validation', priority: 'A' },
      { id: 'c10-17', name: 'Defense Evasion Concepts', priority: 'A' },
      { id: 'c10-18', name: 'Security Control Assessment', priority: 'A' },
      { id: 'c10-19', name: 'Forensic Artifacts', priority: 'B' }
    ]
  },
  {
    id: 'core-11',
    number: 'CORE 11',
    titleEn: 'Command & Control (C2) and Adversary Infrastructure',
    titleAr: 'القيادة والسيطرة (C2) وبنية الخصوم',
    priority: 'A',
    learningHours: '50–80 ساعة',
    masteryHours: '180–300 ساعة إضافية',
    totalHours: '230–380 ساعة',
    outcomeAr: 'فهم تنظيم الاتصال بين أنظمة الاختبار والبنية التحتية الخاصة بالعملية وإدارتها وتوثيقها بأمان.',
    phaseSuggestion: 'Phase 3 (Red Team Tradecraft)',
    colorScheme: {
      primary: '#F472B6',
      border: 'border-fuchsia-500/30',
      bg: 'bg-fuchsia-500/5'
    },
    subskills: [
      { id: 'c11-1', name: 'C2 Architecture', priority: 'A' },
      { id: 'c11-2', name: 'Client/Server Communication', priority: 'A' },
      { id: 'c11-3', name: 'HTTP/S Communication Concepts', priority: 'A' },
      { id: 'c11-4', name: 'DNS Communication Concepts', priority: 'B' },
      { id: 'c11-5', name: 'Network Protocol Design', priority: 'B' },
      { id: 'c11-6', name: 'C2 Infrastructure Concepts', priority: 'A' },
      { id: 'c11-7', name: 'Redirectors & Proxies', priority: 'B' },
      { id: 'c11-8', name: 'Secure Infrastructure Management', priority: 'B' },
      { id: 'c11-9', name: 'Payload Architecture Concepts', priority: 'A' },
      { id: 'c11-10', name: 'Session Management', priority: 'B' },
      { id: 'c11-11', name: 'Operational Logging', priority: 'A' },
      { id: 'c11-12', name: 'Beaconing Detection Concepts', priority: 'A' },
      { id: 'c11-13', name: 'C2 Framework Familiarity', priority: 'A' },
      { id: 'c11-14', name: 'Safe Infrastructure Cleanup', priority: 'A' },
      { id: 'c11-15', name: 'Custom C2 Development', priority: 'D' }
    ]
  },
  {
    id: 'core-12',
    number: 'CORE 12',
    titleEn: 'Operational Security (OPSEC) & Evasion',
    titleAr: 'الأمن التشغيلي وتفادي الكشف (OPSEC)',
    priority: 'A',
    learningHours: '40–60 ساعة',
    masteryHours: '120–200 ساعة إضافية',
    totalHours: '160–260 ساعة',
    outcomeAr: 'تنفيذ الاختبارات ضمن النطاق المتفق عليه، وإدارة المخاطر والبصمة التشغيلية والأدلة والأنشطة بصورة منضبطة.',
    phaseSuggestion: 'Phase 3 & 4 (Tradecraft & RoE)',
    colorScheme: {
      primary: '#38BDF8',
      border: 'border-cyan-500/30',
      bg: 'bg-cyan-500/5'
    },
    subskills: [
      { id: 'c12-1', name: 'Rules of Engagement', priority: 'A' },
      { id: 'c12-2', name: 'Scope Management', priority: 'A' },
      { id: 'c12-3', name: 'Operational Risk Management', priority: 'A' },
      { id: 'c12-4', name: 'Attack Attribution Awareness', priority: 'B' },
      { id: 'c12-5', name: 'Infrastructure Separation', priority: 'B' },
      { id: 'c12-6', name: 'Logging & Audit Awareness', priority: 'A' },
      { id: 'c12-7', name: 'Artifact Management', priority: 'A' },
      { id: 'c12-8', name: 'Detection Surface Awareness', priority: 'A' },
      { id: 'c12-9', name: 'EDR/AV Behavior Understanding', priority: 'A' },
      { id: 'c12-10', name: 'Evasion Concepts', priority: 'A' },
      { id: 'c12-11', name: 'False Positive Management', priority: 'B' },
      { id: 'c12-12', name: 'Safe Testing Procedures', priority: 'A' },
      { id: 'c12-13', name: 'Operational Documentation', priority: 'A' },
      { id: 'c12-14', name: 'Deconfliction Procedures', priority: 'A' },
      { id: 'c12-15', name: 'Data Handling & Privacy', priority: 'A' }
    ]
  },
  {
    id: 'core-13',
    number: 'CORE 13',
    titleEn: 'Cloud & Container Security',
    titleAr: 'أمن السحابة والحاويات (Cloud & Containers)',
    priority: 'B',
    learningHours: '80–120 ساعة',
    masteryHours: '200–350 ساعة إضافية',
    totalHours: '280–470 ساعة',
    outcomeAr: 'تقييم الهوية والصلاحيات والشبكات والموارد السحابية والحاويات من منظور أمني هجومي.',
    phaseSuggestion: 'Phase 4 (Advanced Red Teaming)',
    colorScheme: {
      primary: '#4ADE80',
      border: 'border-green-500/30',
      bg: 'bg-green-500/5'
    },
    subskills: [
      { id: 'c13-1', name: 'Cloud Computing Fundamentals', priority: 'A' },
      { id: 'c13-2', name: 'AWS Architecture', priority: 'B' },
      { id: 'c13-3', name: 'Azure Architecture', priority: 'B' },
      { id: 'c13-4', name: 'GCP Fundamentals', priority: 'C' },
      { id: 'c13-5', name: 'IAM & Role Permissions', priority: 'A' },
      { id: 'c13-6', name: 'Cloud Networking', priority: 'A' },
      { id: 'c13-7', name: 'VPC & Security Groups', priority: 'B' },
      { id: 'c13-8', name: 'Storage Security', priority: 'B' },
      { id: 'c13-9', name: 'Cloud Logging & Monitoring', priority: 'B' },
      { id: 'c13-10', name: 'Cloud Identity Security', priority: 'A' },
      { id: 'c13-11', name: 'Metadata Service Security', priority: 'B' },
      { id: 'c13-12', name: 'Serverless Security', priority: 'C' },
      { id: 'c13-13', name: 'Docker Fundamentals', priority: 'B' },
      { id: 'c13-14', name: 'Container Security', priority: 'B' },
      { id: 'c13-15', name: 'Kubernetes Architecture', priority: 'C' },
      { id: 'c13-16', name: 'Kubernetes RBAC', priority: 'C' },
      { id: 'c13-17', name: 'Cloud Attack Surface Assessment', priority: 'B' },
      { id: 'c13-18', name: 'Hybrid Cloud Security', priority: 'C' }
    ]
  },
  {
    id: 'core-14',
    number: 'CORE 14',
    titleEn: 'Social Engineering & Human Security',
    titleAr: 'الهندسة الاجتماعية والأمن البشري',
    priority: 'B',
    learningHours: '40–60 ساعة',
    masteryHours: '100–180 ساعة إضافية',
    totalHours: '140–240 ساعة',
    outcomeAr: 'قياس تأثير العامل البشري على أمن المؤسسة ضمن موافقات واضحة، ومن دون تعريض الأشخاص أو بياناتهم للخطر.',
    phaseSuggestion: 'Phase 3 (Campaign Execution)',
    colorScheme: {
      primary: '#FBBF24',
      border: 'border-yellow-500/30',
      bg: 'bg-yellow-500/5'
    },
    subskills: [
      { id: 'c14-1', name: 'Human Psychology Fundamentals', priority: 'B' },
      { id: 'c14-2', name: 'Social Engineering Principles', priority: 'B' },
      { id: 'c14-3', name: 'Phishing Simulation Design', priority: 'B' },
      { id: 'c14-4', name: 'Email Security', priority: 'B' },
      { id: 'c14-5', name: 'SPF / DKIM / DMARC', priority: 'B' },
      { id: 'c14-6', name: 'Business Email Compromise Concepts', priority: 'C' },
      { id: 'c14-7', name: 'Pretexting', priority: 'C' },
      { id: 'c14-8', name: 'Security Awareness Assessment', priority: 'B' },
      { id: 'c14-9', name: 'Human Risk Assessment', priority: 'B' },
      { id: 'c14-10', name: 'Physical Access Testing', priority: 'C' },
      { id: 'c14-11', name: 'Campaign Measurement', priority: 'B' },
      { id: 'c14-12', name: 'Ethical & Legal Boundaries', priority: 'A' }
    ]
  },
  {
    id: 'core-15',
    number: 'CORE 15',
    titleEn: 'Reporting, Communication & Professional Operations',
    titleAr: 'التقارير والتواصل وإدارة العمليات المهنية',
    priority: 'A',
    learningHours: '30–50 ساعة',
    masteryHours: '100–160 ساعة إضافية',
    totalHours: '130–210 ساعة',
    outcomeAr: 'إثبات النتائج، وشرح أثرها التقني والتجاري، وتقديم توصيات عملية قابلة للتنفيذ.',
    phaseSuggestion: 'All Phases (Continuous Essential)',
    colorScheme: {
      primary: '#E2E8F0',
      border: 'border-slate-500/30',
      bg: 'bg-slate-500/5'
    },
    subskills: [
      { id: 'c15-1', name: 'Technical Documentation', priority: 'A' },
      { id: 'c15-2', name: 'Evidence Collection', priority: 'A' },
      { id: 'c15-3', name: 'Reproducibility', priority: 'A' },
      { id: 'c15-4', name: 'Attack Path Documentation', priority: 'A' },
      { id: 'c15-5', name: 'Risk Assessment', priority: 'A' },
      { id: 'c15-6', name: 'Business Impact Analysis', priority: 'A' },
      { id: 'c15-7', name: 'Executive Reporting', priority: 'A' },
      { id: 'c15-8', name: 'Technical Report Writing', priority: 'A' },
      { id: 'c15-9', name: 'Remediation Recommendations', priority: 'A' },
      { id: 'c15-10', name: 'MITRE ATT&CK Reporting', priority: 'A' },
      { id: 'c15-11', name: 'Client Communication', priority: 'A' },
      { id: 'c15-12', name: 'Presentation Skills', priority: 'B' },
      { id: 'c15-13', name: 'Team Collaboration', priority: 'A' },
      { id: 'c15-14', name: 'Time & Scope Management', priority: 'A' },
      { id: 'c15-15', name: 'Rules of Engagement Documentation', priority: 'A' },
      { id: 'c15-16', name: 'Purple Team Debrief', priority: 'B' }
    ]
  }
];

export const SUPPORTING_SPECIALIZATIONS: Specialization[] = [
  {
    id: 'spec-1',
    title: 'Wireless Security',
    priority: 'C',
    subtopics: ['Wi-Fi Protocols', 'WPA2/WPA3', 'Wireless Assessment']
  },
  {
    id: 'spec-2',
    title: 'Mobile Security',
    priority: 'C',
    subtopics: ['Android Security', 'iOS Security', 'APK/IPA Analysis', 'Mobile APIs']
  },
  {
    id: 'spec-3',
    title: 'Reverse Engineering',
    priority: 'C',
    subtopics: ['Static Analysis', 'Dynamic Analysis', 'Ghidra', 'IDA']
  },
  {
    id: 'spec-4',
    title: 'Malware Analysis',
    priority: 'C',
    subtopics: ['Malware Behavior', 'Sandbox Analysis', 'YARA']
  },
  {
    id: 'spec-5',
    title: 'Exploit Development',
    priority: 'C',
    subtopics: ['Memory Corruption', 'Fuzzing', 'Debugging']
  },
  {
    id: 'spec-6',
    title: 'Hardware Security',
    priority: 'D',
    subtopics: ['Firmware', 'Embedded Systems', 'Hardware Interfaces']
  },
  {
    id: 'spec-7',
    title: 'IoT Security',
    priority: 'D',
    subtopics: ['Device Architecture', 'IoT Protocols', 'Firmware Assessment']
  },
  {
    id: 'spec-8',
    title: 'OT/ICS Security',
    priority: 'D',
    subtopics: ['Industrial Protocols', 'PLCs', 'SCADA', 'Safety Systems']
  },
  {
    id: 'spec-9',
    title: 'Mainframe Security',
    priority: 'E',
    subtopics: ['IBM z/OS', 'RACF', 'Mainframe Architecture']
  },
  {
    id: 'spec-10',
    title: 'AI/LLM Security',
    priority: 'C',
    subtopics: ['Prompt Injection', 'Model Security', 'AI Application Assessment']
  },
  {
    id: 'spec-11',
    title: 'Kubernetes Advanced Security',
    priority: 'C',
    subtopics: ['Cluster Attack Paths', 'Workloads', 'Control Plane']
  },
  {
    id: 'spec-12',
    title: 'Threat Intelligence',
    priority: 'B',
    subtopics: ['Adversary Profiling', 'Campaign Analysis', 'TTP Research']
  }
];

export const ROADMAP_PHASES: RoadmapPhase[] = [
  {
    id: 'phase-0',
    phaseNumber: 0,
    titleEn: 'IT Foundations',
    titleAr: 'أساسيات تقنية المعلومات',
    duration: '2–3 أشهر (حسب ساعات الدراسة الأسبوعية)',
    skills: [
      'Networking Fundamentals',
      'Linux Fundamentals',
      'Windows Fundamentals',
      'Programming Logic',
      'Python & Bash Basics'
    ],
    transitionGateAr: 'فهم أساسيات الشبكات والأنظمة، والقدرة على استخدام Terminal وقراءة كود بسيط.'
  },
  {
    id: 'phase-1',
    phaseNumber: 1,
    titleEn: 'Offensive Foundations',
    titleAr: 'الأساسيات الهجومية واكتشاف الثغرات',
    duration: '2–3 أشهر',
    skills: [
      'Reconnaissance',
      'Enumeration',
      'Vulnerability Assessment',
      'Exploitation Fundamentals',
      'Web Security',
      'Linux Privilege Escalation',
      'Windows Privilege Escalation'
    ],
    transitionGateAr: 'تنفيذ اختبارات مستقلة على أهداف تدريبية مصرح بها وكتابة تقارير واضحة.'
  },
  {
    id: 'phase-2',
    phaseNumber: 2,
    titleEn: 'Enterprise Offensive Security',
    titleAr: 'الأمن الهجومي لبيئات المؤسسات',
    duration: '3–5 أشهر',
    skills: [
      'Windows Administration',
      'Active Directory',
      'Kerberos & NTLM',
      'Identity & Credential Security',
      'Internal Network Assessment',
      'Lateral Movement',
      'Enterprise Attack Paths'
    ],
    transitionGateAr: 'فهم وتنفيذ مسارات اختبار Enterprise داخل مختبر Active Directory متكامل.'
  },
  {
    id: 'phase-3',
    phaseNumber: 3,
    titleEn: 'Red Team Tradecraft',
    titleAr: 'فنون وأساليب عمليات الفريق الأحمر',
    duration: '3–5 أشهر',
    skills: [
      'Adversary Emulation',
      'MITRE ATT&CK',
      'C2 Architecture',
      'EDR & Detection Fundamentals',
      'OPSEC',
      'Operational Planning',
      'Campaign Execution'
    ],
    transitionGateAr: 'تصميم وتنفيذ محاكاة خصم كاملة داخل بيئة مصرح بها، مع تقييم نتائج الكشف والاستجابة.'
  },
  {
    id: 'phase-4',
    phaseNumber: 4,
    titleEn: 'Advanced Red Teaming',
    titleAr: 'عمليات الفريق الأحمر المتقدمة',
    duration: '4–8 أشهر',
    skills: [
      'Advanced Active Directory',
      'Advanced Windows Internals',
      'Detection Engineering',
      'Advanced Evasion Assessment',
      'Cloud Red Teaming',
      'Custom Tooling',
      'Advanced Exploitation',
      'Purple Team Operations'
    ],
    transitionGateAr: 'تنفيذ عمليات معقدة بصورة مستقلة، واختيار التقنيات بناءً على الهدف والبيئة وقيود المهمة.'
  },
  {
    id: 'phase-5',
    phaseNumber: 5,
    titleEn: 'Specialist / Expert',
    titleAr: 'المستوى التخصصي والخبير المستمر',
    duration: 'مستمرة (تطور بحثي ومهني دائم)',
    skills: [
      'Advanced Exploit Development',
      'Malware & Reverse Engineering',
      'Custom C2 Research',
      'Cloud Adversary Emulation',
      'Advanced Threat Intelligence',
      'Specialized Environments'
    ],
    transitionGateAr: 'القدرة على إجراء بحث مستقل، وتطوير أساليب أو أدوات جديدة، والتعامل مع بيئات ومشكلات غير مألوفة.'
  }
];

export const COMPETENCY_CHECKLIST: CompetencyChecklistItem[] = [
  {
    id: 'chk-1',
    category: 'الشبكات والأنظمة',
    textAr: 'أفهم بنية الشبكات وأنظمة التشغيل وأستطيع تحليلها دون الاعتماد على أدوات جاهزة فقط.'
  },
  {
    id: 'chk-2',
    category: 'الاستطلاع والسطح الهجومي',
    textAr: 'أستطيع تنفيذ External Reconnaissance وAttack Surface Assessment بصورة مستقلة.'
  },
  {
    id: 'chk-3',
    category: 'تطبيقات الويب',
    textAr: 'أستطيع تقييم ثغرات Web Applications وفهم أسبابها واختبارها عملياً.'
  },
  {
    id: 'chk-4',
    category: 'لينكس وويندوز',
    textAr: 'أستطيع العمل على Linux وWindows وفهم آليات الصلاحيات الداخلية.'
  },
  {
    id: 'chk-5',
    category: 'Active Directory',
    textAr: 'أستطيع تحليل Active Directory وتحديد مسارات الوصول والصلاحيات.'
  },
  {
    id: 'chk-6',
    category: 'الأتمتة والبرمجة',
    textAr: 'أستطيع كتابة Python وBash وPowerShell لأتمتة المهام.'
  },
  {
    id: 'chk-7',
    category: 'الدفاع والـ EDR',
    textAr: 'أفهم EDR وWindows Telemetry وطرق تقييم قدرات الكشف.'
  },
  {
    id: 'chk-8',
    category: 'محاكاة الخصوم',
    textAr: 'أستطيع تخطيط Adversary Emulation باستخدام MITRE ATT&CK.'
  },
  {
    id: 'chk-9',
    category: 'إدارة العمليات',
    textAr: 'أستطيع إدارة Engagement من التخطيط إلى التنظيف والتقرير.'
  },
  {
    id: 'chk-10',
    category: 'التكيف وحل المشكلات',
    textAr: 'أستطيع التعامل مع بيئة جديدة ومشكلات غير موجودة في Walkthrough سابق.'
  }
];

export const RED_TEAMER_LEVELS: RedTeamerLevel[] = [
  {
    level: 'Junior',
    titleAr: 'مبتدئ / واعد',
    expectedCapabilityAr: 'تنفيذ Recon وEnumeration واختبارات ثغرات معروفة تحت إشراف وتوجيه قائد الفريق.'
  },
  {
    level: 'Intermediate',
    titleAr: 'متوسط الكفاءة',
    expectedCapabilityAr: 'تنفيذ اختبارات مستقلة على Web وLinux وWindows وActive Directory مع توثيق الأدلة.'
  },
  {
    level: 'Advanced',
    titleAr: 'متقدم / تشغيلي',
    expectedCapabilityAr: 'تخطيط وتنفيذ عمليات Enterprise Red Team مع فهم عميق لأنظمة EDR وOPSEC وتطوير C2.'
  },
  {
    level: 'Senior',
    titleAr: 'قائد عمليات / أول',
    expectedCapabilityAr: 'قيادة Engagements وتطوير أساليب الاختبار وتحليل مسارات الخصوم وتقييم فعالية الدفاع الشاملة.'
  },
  {
    level: 'Expert / Specialist',
    titleAr: 'خبير وباحث أمني',
    expectedCapabilityAr: 'إجراء أبحاث متقدمة وتطوير تقنيات وأدوات جديدة والتعامل مع بيئات معقدة وغير مألوفة.'
  }
];

export const OPERATIONAL_CYCLE_STAGES = [
  { step: 1, nameEn: 'Mission Planning & Intelligence Requirements', nameAr: 'تخطيط المهمة ومتطلبات الاستخبارات' },
  { step: 2, nameEn: 'Reconnaissance', nameAr: 'الاستطلاع وجمع المعلومات' },
  { step: 3, nameEn: 'Initial Access Simulation', nameAr: 'محاكاة الوصول الأولي' },
  { step: 4, nameEn: 'Execution', nameAr: 'التنفيذ وتشغيل الحمولات' },
  { step: 5, nameEn: 'Establishing Foothold', nameAr: 'تثبيت موطئ القدم وتأكيد السيطرة' },
  { step: 6, nameEn: 'Privilege Escalation', nameAr: 'تصعيد الصلاحيات محلياً وفي النطاق' },
  { step: 7, nameEn: 'Discovery & Internal Reconnaissance', nameAr: 'الاستكشاف الداخلي للشبكة والخدمات' },
  { step: 8, nameEn: 'Lateral Movement', nameAr: 'التحرك الجانبي عبر الأجهزة والسيرفرات' },
  { step: 9, nameEn: 'Defense Evasion & OPSEC Assessment', nameAr: 'تقييم تفادي الكشف والأمن التشغيلي' },
  { step: 10, nameEn: 'Persistence Simulation (Authorized)', nameAr: 'محاكاة الاستمرارية (بتفويض صريح)' },
  { step: 11, nameEn: 'Objective Achievement / Validation', nameAr: 'تحقيق أهداف المحاكاة والتحقق من الأثر' },
  { step: 12, nameEn: 'Cleanup, Reporting & Debrief', nameAr: 'تنظيف المخلفات، كتابة التقارير، وجلسة الإحاطة' }
];

export const ENGAGEMENT_TYPES: EngagementType[] = [
  { name: 'External Attack Simulation', priority: 'A' },
  { name: 'Internal Network Compromise Simulation', priority: 'A' },
  { name: 'Active Directory Attack Simulation', priority: 'A' },
  { name: 'Web Application Attack Simulation', priority: 'A' },
  { name: 'Social Engineering', priority: 'B' },
  { name: 'Phishing Simulation', priority: 'B' },
  { name: 'Endpoint Compromise Simulation', priority: 'A' },
  { name: 'Credential Attack Simulation', priority: 'A' },
  { name: 'Lateral Movement', priority: 'A' },
  { name: 'Privilege Escalation', priority: 'A' },
  { name: 'Cloud Attack Simulation', priority: 'B' },
  { name: 'Wireless Attack Simulation', priority: 'C' },
  { name: 'Physical Security Testing', priority: 'C' },
  { name: 'Mobile Application Attack', priority: 'C' },
  { name: 'EDR/AV Evasion Assessment', priority: 'A' },
  { name: 'Command & Control Operations', priority: 'A' },
  { name: 'Data Access & Exfiltration Simulation', priority: 'A' },
  { name: 'Purple Team Collaboration', priority: 'A' }
];

export const GENERAL_GUIDE_INFO = {
  goal: 'خريطة مهارات منظمة من الأساسيات إلى مستوى Red Teamer قادر على التخطيط لعمليات محاكاة الخصوم وتنفيذها وتقييم نتائجها وكتابة تقاريرها.',
  usageGuide: 'اعتبر كل CORE عقدة رئيسية، وكل عنصر تحته عقدة فرعية. تتيح لك الخريطة الذهنية التفاعلية استعراض وتوسيع كل مهارة، تتبع التقدم، وحساب الساعات والجاهزية العملية.',
  learningHoursDesc: 'ساعات دراسة المفاهيم والتدريب الموجّه وبناء الأساس العملي.',
  masteryHoursDesc: 'ساعات إضافية من التطبيق المستقل، وحل سيناريوهات متنوعة، وتصحيح الأخطاء، وكتابة التقارير.',
  totalHoursDesc: 'مجموع Learning وMastery Practice. الساعات المقصودة ساعات تركيز فعلية داخل مختبرات مصرح بها.',
  nonAdditiveNote: 'المهارات متداخلة؛ لذلك لا تجمع كل الساعات للحصول على مدة نهائية للمسار. التدريب في Networking مثلاً يخدم AD وC2 وCloud أيضاً.',
  masteryDefinition: 'كلمة Mastery هنا تعني كفاءة عملية مستقلة وقوية في نطاق المهارة، وليست ادعاءً بأن المجال أصبح منتهياً. الإتقان العميق يستمر مع الخبرة المهنية المستمرة.',
  safetyWarning: 'كل الأنشطة العملية المذكورة تُنفذ فقط داخل مختبر تملكه أو بيئة لديك تصريح صريح لاختبارها، وبما يتوافق مع Rules of Engagement. يجب أن تكون محاكاة الوصول إلى البيانات أو الاستمرارية أو تجاوز أدوات الحماية محددة النطاق ومضبوطة المخاطر.'
};
