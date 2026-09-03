'use client';

import React from 'react';
import Link from 'next/link';
import { useApp } from '@/context/AppContext';
import { 
  Briefcase, 
  ShoppingBag, 
  Fuel, 
  Home, 
  Compass, 
  GraduationCap, 
  Moon, 
  Wallet, 
  Building2, 
  Wifi, 
  Car, 
  HeartPulse, 
  CheckSquare, 
  Globe2, 
  Video, 
  FileText, 
  ShieldCheck, 
  ArrowRight,
  Layers
} from 'lucide-react';

export function AllPagesPortal() {
  const { isRtl } = useApp();

  const hubs = [
    {
      href: '/career',
      title: isRtl ? 'مسرع التوظيف الكندي' : 'Career Accelerator',
      subtitle: isRtl ? 'تحويل الخبرة السعودية إلى وظائف في كالغاري' : 'From Saudi Experience to Canadian Opportunity',
      desc: isRtl ? 'مطابقة 5 وظائف، خريطة الشركات (ATB، AIMCo، Mawer)، سيرة ذاتية ATS بنظام العمود الواحد، CRM للمتابعة.' : 'Job matching (NOC 11101, 10010), employer intelligence, 1-column ATS resume studio & CRM.',
      badge: 'Primary Pillar',
      color: 'border-sky-500/30 text-sky-400 bg-sky-500/10',
      icon: Briefcase
    },
    {
      href: '/groceries',
      title: isRtl ? 'مركز التموين والغذاء العائلي' : 'Family Grocery Command',
      subtitle: isRtl ? 'تكلفة إطعام عائلة من 5 أفراد وحسابات كوستكو' : 'Food Price Report 2026 Age Model & Costco',
      desc: isRtl ? 'حسابات بالأعمار لكل فرد، 100% لحوم حلال، حاسبة جدوى عضوية كوستكو التنفيذية $130، وسلة مقارنة الأسعار.' : 'Age-based nutrition math for 5, 100% Halal meats, Costco $130 Executive value calculator & unit basket.',
      badge: 'Food Intelligence',
      color: 'border-amber-500/30 text-amber-400 bg-amber-500/10',
      icon: ShoppingBag
    },
    {
      href: '/fuel',
      title: isRtl ? 'استخبارات الوقود والتنقل' : 'Gas & Fuel Command',
      subtitle: isRtl ? 'أسعار البنزين الرسمية وحاسبة المشاوير' : 'StatsCan 18-10-0001 Benchmarks & Commute Engine',
      desc: isRtl ? 'أسعار البنزين في كالغاري 144.9¢/L، حاسبة استهلاك الوقود اليومي والشهري، وتوفير الهايبرد 5,510 دولار.' : 'Official Calgary pump prices, vehicle expenditure calculator, and 5-year hybrid vehicle comparison.',
      badge: 'Mobility & Energy',
      color: 'border-emerald-500/30 text-emerald-400 bg-emerald-500/10',
      icon: Fuel
    },
    {
      href: '/cost-of-living',
      title: isRtl ? 'الميزانية العائلية ومحاكي العمل' : 'Total Budget & Offer Simulator',
      subtitle: isRtl ? '20 بنداً تفصيلياً وصافي التدفق المالي' : '20-Category Family Living Budget',
      desc: isRtl ? 'ميزانية تفصيلية (بدء $5,310 / مريح $7,540 / راقٍ $11,440)، والراتب المطلوب، ومحاكي الضرائب وصافي الدخل.' : 'Itemized monthly living outlays across 3 presets, required salary target, and job offer life simulator.',
      badge: 'Financial Architecture',
      color: 'border-purple-500/30 text-purple-400 bg-purple-500/10',
      icon: Wallet
    },
    {
      href: '/housing',
      title: isRtl ? 'مركز استخبارات السكن' : 'Housing Command Center',
      subtitle: isRtl ? 'بيوت 3 و 4 غرف نوم' : '3 & 4 Bedroom Family Rentals',
      desc: isRtl ? 'الفصل الصارم بين متوسطات CMHC الإيجارية وأسعار السوق المفتوح Rentals.ca، وقوانين التأمين ووديعة الإيجار.' : 'CMHC occupied benchmarks vs Rentals.ca open-market asking rents, security deposit rules, and listings.',
      badge: 'Real Estate',
      color: 'border-sky-500/30 text-sky-400 bg-sky-500/10',
      icon: Home
    },
    {
      href: '/neighbourhoods',
      title: isRtl ? 'مستكشف الأحياء العائلية' : 'Neighbourhood Explorer',
      subtitle: isRtl ? 'مقارنة الشمال الشرقي والغربي والجنوب' : 'NE, NW, SW & SE Quadrant Intelligence',
      desc: isRtl ? 'سادل ريدج، إيفانستون، ويست سبرينغز، ماهوغاني مع مسافات المدارس والمساجد والداون تاون.' : 'Suburban communities compared: proximity to Akram Jomaa, CBE schools, commute times, and typical 4-bed rents.',
      badge: 'Community',
      color: 'border-slate-700 text-slate-300 bg-slate-800/40',
      icon: Compass
    },
    {
      href: '/schools',
      title: isRtl ? 'تعليم ومدارس الأبناء' : 'Schools Command Center',
      subtitle: isRtl ? 'تحويل صفوف الأبناء ومركز CBE' : 'Alberta K-12 & Islamic Schools',
      desc: isRtl ? 'تحويل صفوف الأبناء الثلاثة (أعمار 16، 11، 5)، رسوم مدارس كالغاري الإسلامية CIS، وإجراءات Welcome Centre.' : 'Grade placement for 3 kids (ages 16, 11, 5), CBE Newcomer Reception Centre protocol, and CIS/Al-Amal tuition.',
      badge: 'Education',
      color: 'border-slate-700 text-slate-300 bg-slate-800/40',
      icon: GraduationCap
    },
    {
      href: '/activities',
      title: isRtl ? 'أنشطة العطلات والدعم البلدي' : 'Family Weekend & Fair Entry',
      subtitle: isRtl ? 'رحلات بانف والأنشطة وبرنامج Fair Entry' : 'Kids Outings & City Subsidy',
      desc: isRtl ? '9 وجهات أسبوعية للأبناء (16، 11، 5 سنوات) وبرنامج الدخول العادل (Fair Entry) لتوفير 2,400 دولار سنوياً على المواصلات والمسابح.' : 'Weekend trips (Banff, Genesis, Zoo) tailored for ages 16, 11, 5, plus City of Calgary Fair Entry municipal fee subsidies.',
      badge: 'Recreation & Subsidy',
      color: 'border-emerald-500/30 text-emerald-400 bg-emerald-500/10',
      icon: Compass
    },
    {
      href: '/muslim-life',
      title: isRtl ? 'الحياة والمجتمع الإسلامي' : 'Muslim Life & Mosques',
      subtitle: isRtl ? 'المساجد والجمعة واللحوم الحلال' : 'Faith & Cultural Infrastructure',
      desc: isRtl ? 'مركز أكرم جمعة، مسجد الداون تاون، فترات صلاة الجمعة، برامج تحفيظ القرآن، ومواقع الملاحم الحلال.' : 'Calgary Islamic centres, Friday prayer shifts, Tahfeez weekend schools, and halal meat markets.',
      badge: 'Faith & Halal',
      color: 'border-emerald-500/30 text-emerald-400 bg-emerald-500/10',
      icon: Moon
    },
    {
      href: '/driving',
      title: isRtl ? 'رخصة القيادة وقوانين السيارات' : 'Driver\'s Licence & Rules',
      subtitle: isRtl ? 'استبدال رخصة السعودية وحظر الاستيراد' : 'Saudi Licence Exchange & 15-Year Rule',
      desc: isRtl ? 'خطوات استبدال الرخصة غير المتبادلة، اختبار المعرفة Class 7 والشارع، وتحذير حظر استيراد سيارات الخليج.' : 'Non-reciprocal Saudi licence exchange, SIU driving experience credit, and Transport Canada 15-year import ban.',
      badge: 'Legal & Transport',
      color: 'border-slate-700 text-slate-300 bg-slate-800/40',
      icon: Car
    },
    {
      href: '/cars',
      title: isRtl ? 'شراء سيارة العائلة والدفع الرباعي' : 'Family AWD Vehicles',
      subtitle: isRtl ? 'هايلاندر وسيينا وتوفير 0% PST' : 'Highlander, Sienna & Alberta 0% PST',
      desc: isRtl ? 'مقارنة سيارات الدفع الرباعي للعائلات المكونة من 5، توفير 4,000 دولار ضريبة في ألبرتا، وتأمين السيارات.' : 'Recommended 3-row AWD family vehicles, 0% PST tax savings vs ON/BC, and newcomer insurance broker strategy.',
      badge: 'Automotive',
      color: 'border-slate-700 text-slate-300 bg-slate-800/40',
      icon: Car
    },
    {
      href: '/banking',
      title: isRtl ? 'البنوك الكندية والائتمان' : 'Banking & Credit Blueprint',
      subtitle: isRtl ? 'حزم القادمين الجدد وبناء الائتمان' : 'Big 6 + ATB & Credit Building',
      desc: isRtl ? 'مقارنة بنك ألبرتا ATB والبنوك الخمسة الكبرى، وخطة الـ 12 شهراً لرفع النقاط الائتمانية فوق 700.' : 'Newcomer bank account comparison, cash bonuses vs fee waivers, and 12-month credit building blueprint.',
      badge: 'Banking',
      color: 'border-slate-700 text-slate-300 bg-slate-800/40',
      icon: Building2
    },
    {
      href: '/connectivity',
      title: isRtl ? 'الاتصالات المنزلية وفواتير البلدية' : 'Telecom & Utilities',
      subtitle: isRtl ? 'فايبر تيلوس وباقات الجوال وفواتير إنماكس' : 'PureFibre, Mobile & City Carts',
      desc: isRtl ? 'تيلوس PureFibre فائق السرعة، باقات الجوال، الاتصال بالسعودية، وفواتير بلدية كالغاري الإلزامية $139.72.' : 'TELUS symmetrical PureFibre, mobile plans, calling Saudi Arabia (+966), and City of Calgary Enmax utility rates.',
      badge: 'Broadband',
      color: 'border-slate-700 text-slate-300 bg-slate-800/40',
      icon: Wifi
    },
    {
      href: '/healthcare',
      title: isRtl ? 'التأمين الصحي AHCIP والمواصلات' : 'Healthcare & Transit',
      subtitle: isRtl ? 'تغطية فورية ومجانية مواصلات الأطفال' : 'Zero-Day Wait AHCIP & CTrain',
      desc: isRtl ? 'تغطية فورية من اليوم الأول لوصول القادمين الجدد، الخدمات المغطاة وغير المغطاة، ومجانية قطار الأطفال.' : 'Zero-day waiting period for Alberta arrivals, covered vs excluded services, 811 Health Link, and transit fares.',
      badge: 'Health & Transit',
      color: 'border-slate-700 text-slate-300 bg-slate-800/40',
      icon: HeartPulse
    },
    {
      href: '/settlement',
      title: isRtl ? 'خارطة طريق الاستقرار' : 'Settlement Roadmap',
      subtitle: isRtl ? 'خطوات نظامية من الرياض حتى عام كامل' : 'Pre-Arrival to Year 1 Milestones',
      desc: isRtl ? 'الجدول الزمني الإلزامي: ما قبل الوصول، الأيام الثلاثة الأولى، أول 30 يوماً، أول 90 يوماً، والسنة الأولى.' : 'Statutory newcomer sequence: SIN card, AHCIP registration, banking, school intake, and first-year tax filing.',
      badge: 'Action Roadmap',
      color: 'border-slate-700 text-slate-300 bg-slate-800/40',
      icon: CheckSquare
    },
    {
      href: '/city-compare',
      title: isRtl ? 'مؤشر القيمة ومقارنة المدن' : 'City Relocation Index',
      subtitle: isRtl ? 'مقارنة 9 مدن كندية ومقارنة الرياض' : 'Calgary vs 8 Canadian Metros',
      desc: isRtl ? 'مقارنة رياضية عبر 12 مؤشراً بين كالغاري وإدمونتون وتورونتو وفانكوفر ومونتريال وأوتاوا.' : 'Multi-attribute linear normalization scoring across 9 major Canadian cities plus Calgary vs Riyadh transition.',
      badge: 'Geographic Index',
      color: 'border-slate-700 text-slate-300 bg-slate-800/40',
      icon: Globe2
    },
    {
      href: '/videos',
      title: isRtl ? 'فيديوهات وتجارب كالغاري' : 'Videos & Winter Guide',
      subtitle: isRtl ? 'فيديوهات عائلية ودليل نجاة الشتاء' : 'Real Relocation Videos & Chinooks',
      desc: isRtl ? 'وثائقيات لتجارب عائلات عربية ومسلمة انتقلت إلى كالغاري، مع شرح رياح الشينوك والكسوة الشتوية.' : 'Curated video gallery of newcomer family experiences, Chinook weather phenomenon, and winter gear.',
      badge: 'Media & Weather',
      color: 'border-slate-700 text-slate-300 bg-slate-800/40',
      icon: Video
    },
    {
      href: '/plan',
      title: isRtl ? 'خطة الانتقال والملف التنفيذي' : 'My Move Plan & PDF Dossier',
      subtitle: isRtl ? 'قائمة مهام تفاعلية وطباعة الملف' : 'Interactive Checklist & Print Export',
      desc: isRtl ? 'متابعة مراحل الانتقال خطوة بخطوة مع حفظ تقدمك محلياً في المتصفح، وإمكانية تصدير الملف كـ PDF.' : 'Checklist with local browser persistence, milestone completion tracking, and comprehensive printable dossier.',
      badge: 'Execution',
      color: 'border-sky-500/30 text-sky-400 bg-sky-500/10',
      icon: FileText
    },
    {
      href: '/sources',
      title: isRtl ? 'سجل المصادر الحكومية (32)' : 'Source Governance Registry',
      subtitle: isRtl ? 'بيانات حكومية موثقة لعام 2026' : '32 Verified Primary Government Sources',
      desc: isRtl ? 'فهرس كامل بجميع المصادر الفيدرالية وحكومة ألبرتا وهيئة الإحصاء الكندية وبنك كندا ومجلس التعليم.' : 'Audit logs, provenance URLs, and refresh cadences for all 32 government and institutional datasets.',
      badge: 'Governance',
      color: 'border-emerald-500/30 text-emerald-400 bg-emerald-500/10',
      icon: ShieldCheck
    }
  ];

  return (
    <section className="py-12 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-400/20 text-xs font-mono text-sky-300 mb-2">
              <Layers className="w-3.5 h-3.5 text-sky-400" />
              <span>Modular System Architecture</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              {isRtl ? 'بوابة جميع أقسام وصفحات النظام (18 محوراً)' : 'Command Center Navigation Portal — 18 Specialized Hubs'}
            </h2>
            <p className="text-sm text-slate-400 mt-1 max-w-3xl">
              {isRtl 
                ? 'نظام متعدد الصفحات مصمم خصيصاً لتغطية كافة تفاصيل انتقال أسرة ياسر، انقر على أي قسم لفتح صفحته المخصصة'
                : 'A true multi-page architecture with dedicated subpages for every critical facet of your family relocation.'}
            </p>
          </div>
          <span className="text-xs font-mono text-slate-400">
            {hubs.length} Active Modules
          </span>
        </div>

        {/* 18 Hub Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {hubs.map((hub, idx) => {
            const Icon = hub.icon;
            return (
              <Link
                key={idx}
                href={hub.href}
                className="glass-panel p-5 rounded-2xl border border-slate-800 hover:border-sky-500/50 hover:bg-slate-900/80 transition-all flex flex-col justify-between group shadow-lg"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <div className={`w-10 h-10 rounded-xl border flex items-center justify-center ${hub.color}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900 text-slate-300 border border-slate-700/60">
                      {hub.badge}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-white group-hover:text-sky-300 transition-colors">
                    {hub.title}
                  </h3>
                  <h4 className="text-xs text-sky-400/90 font-medium mb-2">
                    {hub.subtitle}
                  </h4>
                  <p className="text-xs text-slate-400 leading-relaxed font-light">
                    {hub.desc}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400 group-hover:text-white">
                  <span className="font-mono text-[11px] text-slate-500">{hub.href}</span>
                  <span className="inline-flex items-center gap-1 text-sky-400 font-medium">
                    <span>{isRtl ? 'فتح الصفحة' : 'Open Hub'}</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
