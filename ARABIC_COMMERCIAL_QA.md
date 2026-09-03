# NEXORA MOVE — ARABIC COMMERCIAL & RTL AUDIT
**Version:** 3.0.0  
**Scope:** Pricing, Checkout adjacent copy, GCC Landing Pages (`/ar/*`), Terms & Disclaimers  
**Language Direction:** RTL (`dir="rtl"`)  

---

## 1. Terminology & Localization Review

| English Term | Machine Translation (Avoided) | Native Relocation Term (Approved) | Context |
| :--- | :--- | :--- | :--- |
| **Explore** | يستكشف | **استكشاف** | الباقة الأساسية المجانية |
| **Move Pass** | تمريرة الانتقال | **تصريح الانتقال الشامل** | الباقة المعتمدة للعائلة (دفعة واحدة) |
| **Pro Monthly** | للمحترفين شهريا | **المحترف للوظائف والانتقال** | الباقة الوظيفية المتقدمة |
| **Family Concierge** | بواب العائلة | **المساعد العائلي الخاص** | الخدمة الاستشارية المخصصة |
| **One-time payment** | دفع مرة واحدة | **دفعة واحدة (وصول دائم بدون اشتراك)** | شفافية كاملة بعدم وجود رسوم دورية |
| **Cancel anytime** | إلغاء في أي وقت | **إلغاء في أي وقت بنقرة واحدة** | وضوح شروط الاشتراك الشهري |
| **Row-Level Security** | أمن على مستوى الصف | **عزل مشفر لبيانات العائلة (RLS)** | طمأنة المستخدم بخصوص الخصوصية |

---

## 2. GCC Regional Landing Pages Verified
*   `/ar/saudi-to-canada`: Dedicated guidance on Saudi Moroor licence abstract, SAR exchange (2.7204 SAR/CAD), Riyadh/Jeddah to Calgary/Toronto transition.
*   `/ar/uae-to-canada`: Dubai/Abu Dhabi driving history (RTA letter), private-to-public schooling, and Dirham budgeting.
*   `/ar/qatar-to-canada`: Metrash2 driving record verification, QAR budgeting, and climate transition.
*   `/ar/kuwait-to-canada`: Sahel app driving abstract, Kuwaiti Dinar purchasing power, and family health coverage.

---

## 3. RTL Layout & Mobile Responsiveness
*   All Arabic routes strictly use `dir="rtl"` with appropriate font hierarchy.
*   Flex containers and arrows correctly flip (`rtl:rotate-180` or `rtl:group-hover:-translate-x-1`).
*   Pricing tables and comparison matrices maintain full column alignment across viewport widths (375px, 390px, 430px, 768px, 1440px).
