# Red Team Skill Tree

> **الهدف:** خريطة مهارات منظمة من الأساسيات إلى مستوى Red Teamer قادر على التخطيط لعمليات محاكاة الخصوم وتنفيذها وتقييم نتائجها وكتابة تقاريرها.
>
> **طريقة استخدام الملف:** اعتبر كل `CORE` عقدة رئيسية، وكل عنصر تحته عقدة فرعية. يمكن تحويل العناوين والقوائم مباشرة إلى شجرة أو Mind Map داخل موقع ويب.

---

## دليل التقييم

### تقييم أهمية المهارة — Priority

هذا التقييم يوضح أهمية المهارة في بناء Red Teamer متكامل، وليس صعوبتها.

| التقييم | المعنى |
|---|---|
| A | أساسية جداً؛ لا يمكن الاستغناء عنها في المسار العام |
| B | عالية الأهمية وتظهر في عدد كبير من العمليات |
| C | مهمة، لكنها مرتبطة بعمليات أو بيئات محددة نسبياً |
| D | تخصصية أو متقدمة وليست مطلوبة في كل العمليات |
| E | تخصص عميق وضيق الاستخدام |
| F | تخصص نادر أو بحثي للغاية |

### تقدير الوقت — Learning & Mastery

- **Learning:** ساعات دراسة المفاهيم والتدريب الموجّه وبناء الأساس العملي.
- **Mastery Practice:** ساعات إضافية من التطبيق المستقل، وحل سيناريوهات متنوعة، وتصحيح الأخطاء، وكتابة التقارير.
- **Total to Strong Practical Proficiency:** مجموع Learning وMastery Practice.
- الساعات المقصودة **ساعات تركيز فعلية**، وليست مدة تقويمية أو ساعات تشغيل فيديوهات.
- التقديرات لشخص يبدأ من أساس محدود، ويتعلم بالتطبيق داخل مختبرات مصرح بها. الخبرة السابقة تقلل الوقت، وضعف الأساسيات أو قلة التطبيق يزيدانه.
- المهارات متداخلة؛ لذلك لا تجمع كل الساعات للحصول على مدة نهائية للمسار. التدريب في Networking مثلاً يخدم AD وC2 وCloud أيضاً.
- كلمة Mastery هنا تعني **كفاءة عملية مستقلة وقوية في نطاق المهارة**، وليست ادعاءً بأن المجال أصبح منتهياً أو أن الشخص صار خبيراً بحثياً فيه. الإتقان العميق يستمر مع الخبرة المهنية.

---

# PART I — CORE SKILLS TREE

## CORE 01 — Networking & Network Security

- **الأهمية:** A — Critical
- **Learning:** 70–100 ساعة
- **Mastery Practice:** 180–280 ساعة إضافية
- **الإجمالي التقديري:** 250–380 ساعة
- **النتيجة المطلوبة:** فهم الشبكات من مستوى الحزم إلى تصميم الشبكة، وتحليل حركة المرور، وتحديد نقاط الدخول، وفهم مسارات الاتصال وحدود الثقة.

### المهارات الفرعية

1. OSI & TCP/IP Models — **A**
2. TCP/UDP & 3-Way Handshake — **A**
3. IP Addressing & Subnetting — **A**
4. Routing & Switching — **A**
5. ARP & MAC Addressing — **A**
6. DNS Architecture — **A**
7. DHCP — **B**
8. HTTP/HTTPS — **A**
9. TLS/SSL — **B**
10. Common Network Protocols — **A**
11. VLANs & Trunking — **B**
12. ACLs & Network Segmentation — **A**
13. Firewalls & NAT — **A**
14. VPN Technologies — **B**
15. Proxy & Reverse Proxy — **B**
16. Network Traffic Analysis — **A**
17. Packet Crafting — **B**
18. IDS/IPS Concepts — **B**
19. IPv6 Security — **C**
20. Wireless Networking — **C**
21. Network Tunneling — **B**
22. Network Architecture & Trust Boundaries — **A**

---

## CORE 02 — Linux Operating Systems

- **الأهمية:** A — Critical
- **Learning:** 60–90 ساعة
- **Mastery Practice:** 180–260 ساعة إضافية
- **الإجمالي التقديري:** 240–350 ساعة
- **النتيجة المطلوبة:** فهم Linux كنظام تشغيل، وليس مجرد استخدام توزيعة أمنية أو حفظ أوامر الأدوات.

### المهارات الفرعية

1. Linux Filesystem — **A**
2. Linux CLI & Shell Navigation — **A**
3. Users & Groups — **A**
4. Permissions & Ownership — **A**
5. Processes & Services — **A**
6. Systemd & Cron — **B**
7. Package Management — **B**
8. Linux Networking — **A**
9. SSH & Key Authentication — **A**
10. Logs & System Monitoring — **B**
11. Bash Scripting — **A**
12. Environment Variables — **B**
13. Kernel Fundamentals — **B**
14. Linux Privilege Escalation — **A**
15. SUID/SGID & Capabilities — **A**
16. Sudo Misconfigurations — **A**
17. Linux Persistence Concepts — **B**
18. Linux Internals — **B**
19. PAM & Authentication — **B**
20. Containers & Namespaces — **C**

---

## CORE 03 — Windows Operating Systems

- **الأهمية:** A — Critical
- **Learning:** 70–100 ساعة
- **Mastery Practice:** 200–300 ساعة إضافية
- **الإجمالي التقديري:** 270–400 ساعة
- **النتيجة المطلوبة:** فهم سلوك Windows والصلاحيات والعمليات والخدمات وآليات الحماية الداخلية.

### المهارات الفرعية

1. Windows Architecture — **A**
2. Windows Filesystem — **A**
3. NTFS Permissions — **A**
4. Users & Groups — **A**
5. Windows Services — **A**
6. Registry — **B**
7. Windows Processes & Threads — **B**
8. Windows Command Line (CMD) — **A**
9. PowerShell — **A**
10. Windows Networking — **A**
11. Windows Authentication — **A**
12. Windows Security Model — **A**
13. Access Tokens & Integrity Levels — **B**
14. UAC — **B**
15. Windows Event Logs — **B**
16. Scheduled Tasks — **B**
17. Windows Privilege Escalation — **A**
18. Windows Internals — **B**
19. WMI & WinRM — **B**
20. Windows Persistence Concepts — **B**
21. DLL & Process Fundamentals — **B**
22. Windows Defender & Security Controls — **A**

---

## CORE 04 — Programming & Scripting

- **الأهمية:** A — Critical
- **Learning:** 100–150 ساعة
- **Mastery Practice:** 250–400 ساعة إضافية
- **الإجمالي التقديري:** 350–550 ساعة
- **النتيجة المطلوبة:** قراءة وكتابة وتعديل الكود، وبناء أدوات صغيرة، وأتمتة المهام، وفهم الأدوات بدلاً من الاعتماد الأعمى عليها.

### المهارات الفرعية

1. Programming Logic — **A**
2. Python Fundamentals — **A**
3. Python Automation — **A**
4. File & Network Operations with Python — **A**
5. HTTP Requests & APIs — **A**
6. Regex — **B**
7. JSON/XML/YAML — **B**
8. Bash Scripting — **A**
9. PowerShell Scripting — **A**
10. Windows Batch — **C**
11. Git & Version Control — **B**
12. Debugging — **A**
13. Error Handling — **B**
14. Reading Source Code — **A**
15. C Fundamentals — **B**
16. C++ Fundamentals — **C**
17. Memory Management — **B**
18. Assembly Fundamentals — **C**
19. JavaScript — **B**
20. SQL — **B**
21. Go — **C**
22. API Development — **C**
23. Malware Analysis Programming Concepts — **C**

---

## CORE 05 — Web Application Security

- **الأهمية:** A — Critical
- **Learning:** 100–150 ساعة
- **Mastery Practice:** 250–400 ساعة إضافية
- **الإجمالي التقديري:** 350–550 ساعة
- **النتيجة المطلوبة:** فهم التطبيق من المتصفح إلى Backend إلى Database، واختباره يدوياً وفهم الأسباب الجذرية للثغرات.

### المهارات الفرعية

1. HTTP Request/Response — **A**
2. HTTP Methods & Headers — **A**
3. Cookies & Sessions — **A**
4. Authentication & Authorization — **A**
5. HTML & CSS Fundamentals — **B**
6. JavaScript Fundamentals — **A**
7. DOM & Browser Architecture — **B**
8. SQL & Database Fundamentals — **A**
9. REST APIs — **A**
10. API Authentication — **A**
11. SQL Injection — **A**
12. Cross-Site Scripting (XSS) — **A**
13. CSRF — **B**
14. SSRF — **A**
15. IDOR / BOLA — **A**
16. File Upload Vulnerabilities — **A**
17. Path Traversal — **A**
18. Command Injection — **A**
19. SSTI — **B**
20. XXE — **B**
21. Authentication Bypass — **A**
22. Access Control Testing — **A**
23. Business Logic Vulnerabilities — **A**
24. JWT Security — **B**
25. OAuth / SSO Security — **B**
26. GraphQL Security — **C**
27. Web Cache Poisoning — **C**
28. Deserialization — **B**
29. WebSocket Security — **C**
30. Source Code Review — **B**

---

## CORE 06 — Active Directory & Identity Security

- **الأهمية:** A — Critical
- **Learning:** 100–150 ساعة
- **Mastery Practice:** 250–400 ساعة إضافية
- **الإجمالي التقديري:** 350–550 ساعة
- **النتيجة المطلوبة:** فهم العلاقات بين المستخدمين والأجهزة والصلاحيات والثقة، وتحليل مسارات الوصول داخل بيئات المؤسسات.

### المهارات الفرعية

1. Active Directory Architecture — **A**
2. Domains, Forests & Trees — **A**
3. Domain Controllers — **A**
4. LDAP — **A**
5. DNS in Active Directory — **A**
6. Kerberos Authentication — **A**
7. NTLM Authentication — **A**
8. Group Policy (GPO) — **A**
9. Users, Groups & OUs — **A**
10. Domain Trusts — **A**
11. ACLs & Object Permissions — **A**
12. Delegation — **A**
13. Service Accounts — **A**
14. SPNs — **A**
15. AD Enumeration — **A**
16. BloodHound & Attack Path Analysis — **A**
17. Kerberos Security Assessment — **A**
18. NTLM Security Assessment — **A**
19. Credential Exposure Assessment — **A**
20. ADCS (Certificate Services) — **B**
21. Windows Domain Privilege Escalation — **A**
22. Domain Persistence Concepts — **B**
23. Entra ID / Azure AD — **B**
24. Hybrid Identity — **B**
25. Federation & SSO — **B**

---

## CORE 07 — Vulnerability Research & Exploitation

- **الأهمية:** A — Critical
- **Learning:** 80–120 ساعة
- **Mastery Practice:** 250–450 ساعة إضافية
- **الإجمالي التقديري:** 330–570 ساعة
- **النتيجة المطلوبة:** فهم الثغرات والتحقق من صلاحية استغلالها وتحديد أثرها، لا مجرد تشغيل Exploit منشور.

### المهارات الفرعية

1. Vulnerability Fundamentals — **A**
2. CVE & CVSS — **B**
3. Vulnerability Analysis — **A**
4. Root Cause Analysis — **A**
5. Security Misconfigurations — **A**
6. Exploit Research — **A**
7. Public Exploit Validation — **A**
8. Manual Exploitation — **A**
9. Proof of Concept Development — **B**
10. Fuzzing Fundamentals — **C**
11. Buffer Overflow Fundamentals — **C**
12. Memory Corruption — **C**
13. Stack & Heap — **C**
14. Reverse Engineering — **C**
15. Debugging with GDB/WinDbg — **C**
16. Assembly — **C**
17. Binary Exploitation — **D**
18. Kernel Exploitation — **D**
19. Custom Exploit Development — **C**
20. Patch Analysis — **C**

---

## CORE 08 — Reconnaissance & Intelligence

- **الأهمية:** A — Critical
- **Learning:** 40–70 ساعة
- **Mastery Practice:** 100–180 ساعة إضافية
- **الإجمالي التقديري:** 140–250 ساعة
- **النتيجة المطلوبة:** جمع المعلومات وربطها وتحويلها إلى فرضيات ومسارات اختبار قابلة للتحقق.

### المهارات الفرعية

1. OSINT Fundamentals — **A**
2. Passive Reconnaissance — **A**
3. Active Reconnaissance — **A**
4. Domain & DNS Enumeration — **A**
5. Subdomain Discovery — **A**
6. WHOIS & Certificate Transparency — **B**
7. Technology Fingerprinting — **A**
8. Port & Service Enumeration — **A**
9. Network Mapping — **A**
10. Asset Discovery — **A**
11. Email & Public Identity Research — **B**
12. Attack Surface Mapping — **A**
13. Cloud Asset Discovery — **B**
14. Threat Intelligence — **B**
15. IOC & TTP Analysis — **B**
16. MITRE ATT&CK Mapping — **A**
17. Threat Modeling — **A**
18. Intelligence Reporting — **B**

---

## CORE 09 — Credential & Identity Attacks

- **الأهمية:** A — Critical
- **Learning:** 50–80 ساعة
- **Mastery Practice:** 150–250 ساعة إضافية
- **الإجمالي التقديري:** 200–330 ساعة
- **النتيجة المطلوبة:** فهم الهوية ودورة حياة بيانات الاعتماد، وتقييم نقاط الضعف في المصادقة والجلسات وإدارة الأسرار.

### المهارات الفرعية

1. Authentication Mechanisms — **A**
2. Password Security — **A**
3. Password Hashing — **A**
4. Hash Identification — **A**
5. Password Policy Analysis — **A**
6. Credential Exposure Analysis — **A**
7. Password Spraying Assessment — **B**
8. Brute Force Risk Assessment — **B**
9. Credential Reuse Assessment — **A**
10. MFA Security — **A**
11. Session & Token Security — **A**
12. Kerberos Ticket Concepts — **A**
13. NTLM Security — **A**
14. Secrets Management — **B**
15. Password Managers Security — **C**
16. Identity Federation — **B**
17. OAuth / SAML — **B**

---

## CORE 10 — Endpoint Security & EDR

- **الأهمية:** A — Critical
- **Learning:** 70–110 ساعة
- **Mastery Practice:** 220–350 ساعة إضافية
- **الإجمالي التقديري:** 290–460 ساعة
- **النتيجة المطلوبة:** فهم ما يتم تسجيله ومراقبته على الأجهزة، وتقييم قدرة أدوات الدفاع على اكتشاف الأنشطة.

### المهارات الفرعية

1. Endpoint Security Architecture — **A**
2. Antivirus Concepts — **A**
3. EDR Architecture — **A**
4. Process Monitoring — **A**
5. Windows Event Logging — **A**
6. Sysmon — **A**
7. Telemetry & Event Analysis — **A**
8. Behavioral Detection — **A**
9. Attack Surface Reduction — **B**
10. Application Control — **B**
11. Windows Defender — **A**
12. Linux Endpoint Security — **B**
13. Detection Engineering Fundamentals — **A**
14. Sigma Rules — **B**
15. YARA Fundamentals — **B**
16. EDR Detection Validation — **A**
17. Defense Evasion Concepts — **A**
18. Security Control Assessment — **A**
19. Forensic Artifacts — **B**

---

## CORE 11 — Command & Control (C2) and Adversary Infrastructure

- **الأهمية:** A — Critical
- **Learning:** 50–80 ساعة
- **Mastery Practice:** 180–300 ساعة إضافية
- **الإجمالي التقديري:** 230–380 ساعة
- **النتيجة المطلوبة:** فهم تنظيم الاتصال بين أنظمة الاختبار والبنية التحتية الخاصة بالعملية وإدارتها وتوثيقها بأمان.

### المهارات الفرعية

1. C2 Architecture — **A**
2. Client/Server Communication — **A**
3. HTTP/S Communication Concepts — **A**
4. DNS Communication Concepts — **B**
5. Network Protocol Design — **B**
6. C2 Infrastructure Concepts — **A**
7. Redirectors & Proxies — **B**
8. Secure Infrastructure Management — **B**
9. Payload Architecture Concepts — **A**
10. Session Management — **B**
11. Operational Logging — **A**
12. Beaconing Detection Concepts — **A**
13. C2 Framework Familiarity — **A**
14. Safe Infrastructure Cleanup — **A**
15. Custom C2 Development — **D**

---

## CORE 12 — Operational Security (OPSEC) & Evasion

- **الأهمية:** A — Critical
- **Learning:** 40–60 ساعة
- **Mastery Practice:** 120–200 ساعة إضافية
- **الإجمالي التقديري:** 160–260 ساعة
- **النتيجة المطلوبة:** تنفيذ الاختبارات ضمن النطاق المتفق عليه، وإدارة المخاطر والبصمة التشغيلية والأدلة والأنشطة بصورة منضبطة.

### المهارات الفرعية

1. Rules of Engagement — **A**
2. Scope Management — **A**
3. Operational Risk Management — **A**
4. Attack Attribution Awareness — **B**
5. Infrastructure Separation — **B**
6. Logging & Audit Awareness — **A**
7. Artifact Management — **A**
8. Detection Surface Awareness — **A**
9. EDR/AV Behavior Understanding — **A**
10. Evasion Concepts — **A**
11. False Positive Management — **B**
12. Safe Testing Procedures — **A**
13. Operational Documentation — **A**
14. Deconfliction Procedures — **A**
15. Data Handling & Privacy — **A**

---

## CORE 13 — Cloud & Container Security

- **الأهمية:** B — High
- **Learning:** 80–120 ساعة
- **Mastery Practice:** 200–350 ساعة إضافية
- **الإجمالي التقديري:** 280–470 ساعة
- **النتيجة المطلوبة:** تقييم الهوية والصلاحيات والشبكات والموارد السحابية والحاويات من منظور أمني هجومي.

### المهارات الفرعية

1. Cloud Computing Fundamentals — **A**
2. AWS Architecture — **B**
3. Azure Architecture — **B**
4. GCP Fundamentals — **C**
5. IAM & Role Permissions — **A**
6. Cloud Networking — **A**
7. VPC & Security Groups — **B**
8. Storage Security — **B**
9. Cloud Logging & Monitoring — **B**
10. Cloud Identity Security — **A**
11. Metadata Service Security — **B**
12. Serverless Security — **C**
13. Docker Fundamentals — **B**
14. Container Security — **B**
15. Kubernetes Architecture — **C**
16. Kubernetes RBAC — **C**
17. Cloud Attack Surface Assessment — **B**
18. Hybrid Cloud Security — **C**

---

## CORE 14 — Social Engineering & Human Security

- **الأهمية:** B — High
- **Learning:** 40–60 ساعة
- **Mastery Practice:** 100–180 ساعة إضافية
- **الإجمالي التقديري:** 140–240 ساعة
- **النتيجة المطلوبة:** قياس تأثير العامل البشري على أمن المؤسسة ضمن موافقات واضحة، ومن دون تعريض الأشخاص أو بياناتهم للخطر.

### المهارات الفرعية

1. Human Psychology Fundamentals — **B**
2. Social Engineering Principles — **B**
3. Phishing Simulation Design — **B**
4. Email Security — **B**
5. SPF / DKIM / DMARC — **B**
6. Business Email Compromise Concepts — **C**
7. Pretexting — **C**
8. Security Awareness Assessment — **B**
9. Human Risk Assessment — **B**
10. Physical Access Testing — **C**
11. Campaign Measurement — **B**
12. Ethical & Legal Boundaries — **A**

---

## CORE 15 — Reporting, Communication & Professional Operations

- **الأهمية:** A — Critical
- **Learning:** 30–50 ساعة
- **Mastery Practice:** 100–160 ساعة إضافية
- **الإجمالي التقديري:** 130–210 ساعة
- **النتيجة المطلوبة:** إثبات النتائج، وشرح أثرها التقني والتجاري، وتقديم توصيات عملية قابلة للتنفيذ.

### المهارات الفرعية

1. Technical Documentation — **A**
2. Evidence Collection — **A**
3. Reproducibility — **A**
4. Attack Path Documentation — **A**
5. Risk Assessment — **A**
6. Business Impact Analysis — **A**
7. Executive Reporting — **A**
8. Technical Report Writing — **A**
9. Remediation Recommendations — **A**
10. MITRE ATT&CK Reporting — **A**
11. Client Communication — **A**
12. Presentation Skills — **B**
13. Team Collaboration — **A**
14. Time & Scope Management — **A**
15. Rules of Engagement Documentation — **A**
16. Purple Team Debrief — **B**

---

# PART II — SUPPORTING SPECIALIZATIONS

هذه تخصصات إضافية ترفع مستوى Red Teamer وتفتح مجالات عمليات أخرى. ليست كلها متطلبات أساسية لكل وظيفة Red Team، ويُختار منها بناءً على نوع المؤسسة والعمليات والمسار المهني.

1. **Wireless Security — C**
   - Wi-Fi Protocols
   - WPA2/WPA3
   - Wireless Assessment
2. **Mobile Security — C**
   - Android Security
   - iOS Security
   - APK/IPA Analysis
   - Mobile APIs
3. **Reverse Engineering — C**
   - Static Analysis
   - Dynamic Analysis
   - Ghidra
   - IDA
4. **Malware Analysis — C**
   - Malware Behavior
   - Sandbox Analysis
   - YARA
5. **Exploit Development — C**
   - Memory Corruption
   - Fuzzing
   - Debugging
6. **Hardware Security — D**
   - Firmware
   - Embedded Systems
   - Hardware Interfaces
7. **IoT Security — D**
   - Device Architecture
   - IoT Protocols
   - Firmware Assessment
8. **OT/ICS Security — D**
   - Industrial Protocols
   - PLCs
   - SCADA
   - Safety Systems
9. **Mainframe Security — E**
   - IBM z/OS
   - RACF
   - Mainframe Architecture
10. **AI/LLM Security — C**
    - Prompt Injection
    - Model Security
    - AI Application Assessment
11. **Kubernetes Advanced Security — C**
    - Cluster Attack Paths
    - Workloads
    - Control Plane
12. **Threat Intelligence — B**
    - Adversary Profiling
    - Campaign Analysis
    - TTP Research

---

# PART III — LEARNING ORDER / ROADMAP

هذا ترتيب مقترح للتعلم. يمكن دراسة بعض المهارات بالتوازي، لكن لا تنتقل إلى مرحلة متقدمة قبل امتلاك أساس عملي كافٍ في المرحلة السابقة.

## Phase 0 — IT Foundations

- **المدة الإرشادية:** 2–3 أشهر، حسب عدد ساعات الدراسة الأسبوعية.
- Networking
- Linux Fundamentals
- Windows Fundamentals
- Programming Logic
- Python & Bash Basics

**بوابة الانتقال:** فهم أساسيات الشبكات والأنظمة، والقدرة على استخدام Terminal وقراءة كود بسيط.

## Phase 1 — Offensive Foundations

- **المدة الإرشادية:** 2–3 أشهر.
- Reconnaissance
- Enumeration
- Vulnerability Assessment
- Exploitation Fundamentals
- Web Security
- Linux Privilege Escalation
- Windows Privilege Escalation

**بوابة الانتقال:** تنفيذ اختبارات مستقلة على أهداف تدريبية مصرح بها وكتابة تقارير واضحة.

## Phase 2 — Enterprise Offensive Security

- **المدة الإرشادية:** 3–5 أشهر.
- Windows Administration
- Active Directory
- Kerberos & NTLM
- Identity & Credential Security
- Internal Network Assessment
- Lateral Movement
- Enterprise Attack Paths

**بوابة الانتقال:** فهم وتنفيذ مسارات اختبار Enterprise داخل مختبر Active Directory متكامل.

## Phase 3 — Red Team Tradecraft

- **المدة الإرشادية:** 3–5 أشهر.
- Adversary Emulation
- MITRE ATT&CK
- C2 Architecture
- EDR & Detection Fundamentals
- OPSEC
- Operational Planning
- Campaign Execution

**بوابة الانتقال:** تصميم وتنفيذ محاكاة خصم كاملة داخل بيئة مصرح بها، مع تقييم نتائج الكشف والاستجابة.

## Phase 4 — Advanced Red Teaming

- **المدة الإرشادية:** 4–8 أشهر.
- Advanced AD
- Advanced Windows Internals
- Detection Engineering
- Advanced Evasion Assessment
- Cloud Red Teaming
- Custom Tooling
- Advanced Exploitation
- Purple Team Operations

**بوابة الانتقال:** تنفيذ عمليات معقدة بصورة مستقلة، واختيار التقنيات بناءً على الهدف والبيئة وقيود المهمة.

## Phase 5 — Specialist / Expert

- **المدة:** مستمرة؛ لا يوجد وقت نهائي ثابت.
- Advanced Exploit Development
- Malware & Reverse Engineering
- Custom C2 Research
- Cloud Adversary Emulation
- Advanced Threat Intelligence
- Specialized Environments

**بوابة التقدم:** القدرة على إجراء بحث مستقل، وتطوير أساليب أو أدوات، والتعامل مع بيئات ومشكلات غير مألوفة.

---

# PART IV — PROFESSIONAL COMPETENCY CHECKLIST

اعتبر نفسك تتقدم نحو مستوى Red Teamer متمكن عندما تستطيع إثبات القدرات التالية عملياً، وليس بمجرد إنهاء كورس أو مشاهدة محتوى.

- [ ] أفهم بنية الشبكات وأنظمة التشغيل وأستطيع تحليلها دون الاعتماد على أدوات جاهزة فقط.
- [ ] أستطيع تنفيذ External Reconnaissance وAttack Surface Assessment بصورة مستقلة.
- [ ] أستطيع تقييم ثغرات Web Applications وفهم أسبابها واختبارها عملياً.
- [ ] أستطيع العمل على Linux وWindows وفهم آليات الصلاحيات الداخلية.
- [ ] أستطيع تحليل Active Directory وتحديد مسارات الوصول والصلاحيات.
- [ ] أستطيع كتابة Python وBash وPowerShell لأتمتة المهام.
- [ ] أفهم EDR وWindows Telemetry وطرق تقييم قدرات الكشف.
- [ ] أستطيع تخطيط Adversary Emulation باستخدام MITRE ATT&CK.
- [ ] أستطيع إدارة Engagement من التخطيط إلى التنظيف والتقرير.
- [ ] أستطيع التعامل مع بيئة جديدة ومشكلات غير موجودة في Walkthrough سابق.

---

# PART V — RED TEAMER LEVELS

| المستوى | القدرة المتوقعة |
|---|---|
| Junior | تنفيذ Recon وEnumeration واختبارات ثغرات معروفة تحت إشراف |
| Intermediate | تنفيذ اختبارات مستقلة على Web وLinux وWindows وActive Directory |
| Advanced | تخطيط وتنفيذ عمليات Enterprise Red Team مع فهم EDR وOPSEC وC2 |
| Senior | قيادة Engagements وتطوير أساليب الاختبار وتحليل مسارات الخصوم وتقييم فعالية الدفاع |
| Expert / Specialist | إجراء أبحاث متقدمة وتطوير تقنيات وأدوات والتعامل مع بيئات معقدة وغير مألوفة |

---

# PART VI — OPERATIONAL CONTEXT

المهارات السابقة تُستخدم بصورة متكاملة عبر دورة عمليات Red Team. الترتيب التالي يوضح السياق التشغيلي العام، وليس تسلسلاً إلزامياً لكل مهمة:

1. Mission Planning & Intelligence Requirements
2. Reconnaissance
3. Initial Access Simulation
4. Execution
5. Establishing Foothold
6. Privilege Escalation
7. Discovery & Internal Reconnaissance
8. Lateral Movement
9. Defense Evasion & Operational Security Assessment
10. Persistence Simulation, when explicitly authorized
11. Objective Achievement / Objective Validation
12. Cleanup, Reporting & Debrief

## أنواع العمليات التي قد يغطيها Red Team Engagement

| العملية | الأهمية الإرشادية |
|---|---|
| External Attack Simulation | A |
| Internal Network Compromise Simulation | A |
| Active Directory Attack Simulation | A |
| Web Application Attack Simulation | A |
| Social Engineering | B |
| Phishing Simulation | B |
| Endpoint Compromise Simulation | A |
| Credential Attack Simulation | A |
| Lateral Movement | A |
| Privilege Escalation | A |
| Cloud Attack Simulation | B |
| Wireless Attack Simulation | C |
| Physical Security Testing | C |
| Mobile Application Attack | C |
| EDR/AV Evasion Assessment | A |
| Command & Control Operations | A |
| Data Access & Exfiltration Simulation | A |
| Purple Team Collaboration | A |

> **حدود السلامة والتفويض:** كل الأنشطة العملية المذكورة تُنفذ فقط داخل مختبر تملكه أو بيئة لديك تصريح صريح لاختبارها، وبما يتوافق مع Rules of Engagement. يجب أن تكون محاكاة الوصول إلى البيانات أو الاستمرارية أو تجاوز أدوات الحماية محددة النطاق ومضبوطة المخاطر، مع استخدام بيانات اختبارية متى أمكن.

---

# ملاحظة أخيرة حول تحويل الملف إلى شجرة تفاعلية

للحصول على Mind Map واضحة في الموقع، استخدم البنية التالية:

- `PART` = مجموعة رئيسية.
- `CORE` = عقدة مهارة رئيسية.
- `المهارات الفرعية` = العقد التابعة للمهارة الرئيسية.
- `Priority` = أهمية المهارة (A–F).
- `Learning` = ساعات التعلم المبدئي.
- `Mastery Practice` = ساعات التطبيق الإضافية.
- `Total` = مجموع الساعات التقديري للوصول إلى كفاءة عملية مستقلة.
- `Phase` = ترتيب ظهور المهارة في الرحلة التعليمية.

لا تخلط بين **Priority** و**Difficulty/Time**: حرف A في أهمية المهارة يعني أنها أساسية جداً، ولا يعني بالضرورة أنها سهلة أو سريعة التعلم.
