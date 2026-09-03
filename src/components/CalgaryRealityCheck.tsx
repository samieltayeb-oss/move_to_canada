'use client';

import React from 'react';
import { useApp } from '@/context/AppContext';
import { 
  CheckCircle2, 
  AlertTriangle, 
  ShieldCheck, 
  Home, 
  DollarSign, 
  Sun, 
  Mountain, 
  Snowflake, 
  Car, 
  HeartPulse, 
  CreditCard
} from 'lucide-react';

export function CalgaryRealityCheck() {
  const { t, isRtl } = useApp();

  const calgaryStrengths = [
    {
      title: 'Spacious Family Housing vs. Toronto/Vancouver',
      arabicTitle: 'مساحة السكن العائلي مقارنة بتورونتو وفانكوفر',
      description: 'A 4-bedroom detached home with private yard and double garage rents for $2,600–$3,200 in Calgary vs $4,500–$5,200 in Toronto and Vancouver.',
      arabicDescription: 'منزل مستقل من 4 غرف نوم وحديقة خاصة وكراج مزدوج يتراوح إيجاره بين 2600 و 3200 دولار في كالغاري مقابل أكثر من 4500 في تورونتو وفانكوفر.',
      icon: Home
    },
    {
      title: '0% Provincial Sales Tax (Alberta Advantage)',
      arabicTitle: '0% ضريبة مبيعات إقليمية (ميزة ألبرتا التنافسية)',
      description: 'Alberta is Canada’s only province without PST. You pay only the 5% federal GST, saving 5% to 10% on vehicles, electronics, furniture, and groceries.',
      arabicDescription: 'ألبرتا المقاطعة الوحيدة بدون ضريبة مبيعات إقليمية (فقط 5% ضريبة فدرالية)، مما يوفر 5% إلى 10% في كل المشتريات والسيارات والأثاث.',
      icon: DollarSign
    },
    {
      title: 'Canada’s Sunniest Major City & Warm Chinooks',
      arabicTitle: 'أكثر مدن كندا إشراقاً وظاهرة رياح الشينوك الدافئة',
      description: 'Over 2,400 hours of bright sunshine per year. Warm Chinook winds repeatedly raise winter temperatures by 15°C within hours, melting road snow.',
      arabicDescription: 'أكثر من 2400 ساعة شمس سنوياً؛ ورياح الشينوك الدافئة ترفع درجات الحرارة شتاءً بمقدار 15 درجة مئوية خلال ساعات وتذيب الثلوج.',
      icon: Sun
    },
    {
      title: 'Rocky Mountains 50 Minutes from Your Door',
      arabicTitle: 'جبال روكي وبانف على بعد 50 دقيقة فقط',
      description: 'Canmore is 50 mins and Banff National Park is 70 mins west. Unmatched weekend hiking, alpine lakes, skiing, and pristine mountain air.',
      arabicDescription: 'كانمور تبعد 50 دقيقة وبانف 70 دقيقة غرباً؛ استجمام عائلي استثنائي وبحيرات فيروزية وهواء جبلي نقي طوال العام.',
      icon: Mountain
    },
    {
      title: 'Established Muslim Community (105,000+ Muslims)',
      arabicTitle: 'مجتمع مسلم راسخ ومكتمل الخدمات (أكثر من 105 آلاف مسلم)',
      description: 'Over 105,000 Muslims, anchor centres like Akram Jomaa, full-time accredited Islamic schools (CIS), and mainstream supermarkets stocking certified halal meats.',
      arabicDescription: 'جالية إسلامية تزيد عن 105 آلاف مع مجمعات كبرى كمركز أكرم جمعة، ومدارس إسلامية معتمدة، وتوفر اللحوم الحلال في كبرى المتاجر.',
      icon: ShieldCheck
    }
  ];

  const calgaryChallenges = [
    {
      title: 'Severe Cold Snaps (-25°C to -35°C)',
      arabicTitle: 'موجات الصقيع الشديدة (-25 إلى -35 درجة مئوية)',
      description: 'While sunny and broken by Chinooks, January and February experience 1-2 week polar vortex freezes requiring heavy layering and winter car block heaters.',
      arabicDescription: 'رغم كثرة الشمس والشينوك، يشهد شهرا يناير وفبراير موجات قطبية تنخفض فيها الحرارة إلى -25 أو -35 مئوية وتتطلب تدفئة محرك السيارة وملابس خاصة.',
      icon: Snowflake
    },
    {
      title: 'Automobile Dependence in Suburban Quadrants',
      arabicTitle: 'الاعتماد الكبير على السيارة في الضواحي الخارجية',
      description: 'Outside the CTrain rail corridor, daily school runs, halal grocery trips, and winter commutes require a reliable family AWD vehicle.',
      arabicDescription: 'خارج مسارات القطار، تتطلب مشاوير المدارس والبقالة والتنقل شتاءً سيارة دفع رباعي عائلية ولا يمكن الاعتماد فقط على المشي.',
      icon: Car
    },
    {
      title: 'Newcomer Auto Insurance Costs ($220–$350/mo)',
      arabicTitle: 'تكلفة تأمين السيارات المرتفعة للقادمين الجدد',
      description: 'Without North American claims history, newcomer auto insurance is high. You must obtain a verified claims-free letter from your Saudi insurer.',
      arabicDescription: 'بدون سجل قيادة مسجل في أمريكا الشمالية، تكون أسعار التأمين مرتفعة (220-350 دولاراً شهرياً)؛ وإحضار شهادة خلو حوادث من السعودية ضروري.',
      icon: DollarSign
    },
    {
      title: 'Family Doctor Shortage & Primary Care Waitlists',
      arabicTitle: 'صعوبة العثور على طبيب أسرة دائم وقوائم الانتظار',
      description: 'While emergency and hospital care are covered immediately via AHCIP, finding an accepting family physician requires active searching via PCNs.',
      arabicDescription: 'التأمين الحكومي يغطي الطوارئ فوراً، لكن العثور على طبيب أسرة يقبل مرضى جدد يتطلب وقتاً وبحثاً عبر شبكات الرعاية الأولية.',
      icon: HeartPulse
    },
    {
      title: 'Canadian Credit History Reset & Experience Barriers',
      arabicTitle: 'تصفير السجل الائتماني وتحدي الخبرة الكندية',
      description: 'Newcomers arrive as an unscorable thin file. Leasing a home and financing requires liquid asset proofs and disciplined credit card usage.',
      arabicDescription: 'يبدأ القادم الجديد بدون تقييم ائتماني كندي، مما يتطلب إثبات سيولة نقدية لاستئجار المنازل والالتزام بخطة بناء الائتمان.',
      icon: CreditCard
    }
  ];

  return (
    <section id="reality-check" className="py-12 border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-700 text-xs font-mono text-amber-400 mb-2">
            <span>BALANCED EXECUTIVE ASSESSMENT</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            {t.realityCheck.title}
          </h2>
          <p className="mt-2 text-sm text-slate-400">
            {t.realityCheck.subtitle}
          </p>
        </div>

        {/* Side-by-Side Reality Matrix */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column: Strengths */}
          <div className="glass-panel rounded-2xl p-6 sm:p-8 border border-emerald-500/30">
            <div className="flex items-center gap-3 pb-5 mb-6 border-b border-slate-800">
              <div className="p-2 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">
                  {t.realityCheck.whyCalgary}
                </h3>
                <p className="text-xs text-emerald-400 font-medium">
                  {t.realityCheck.whyCalgaryDesc}
                </p>
              </div>
            </div>

            <div className="space-y-4">
              {calgaryStrengths.map((item, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/80 hover:border-emerald-500/40 transition-colors">
                  <div className="flex items-start gap-3">
                    <item.icon className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-semibold text-white">
                        {isRtl ? item.arabicTitle : item.title}
                      </h4>
                      <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                        {isRtl ? item.arabicDescription : item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Difficulties / Trade-offs */}
          <div className="glass-panel rounded-2xl p-6 sm:p-8 border border-amber-500/30">
            <div className="flex items-center gap-3 pb-5 mb-6 border-b border-slate-800">
              <div className="p-2 rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/20">
                <AlertTriangle className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">
                  {t.realityCheck.whatMayBeDifficult}
                </h3>
                <p className="text-xs text-amber-400 font-medium">
                  {t.realityCheck.whatMayBeDifficultDesc}
                </p>
              </div>
            </div>

            <div className="space-y-4">
              {calgaryChallenges.map((item, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/80 hover:border-amber-500/40 transition-colors">
                  <div className="flex items-start gap-3">
                    <item.icon className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-semibold text-white">
                        {isRtl ? item.arabicTitle : item.title}
                      </h4>
                      <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                        {isRtl ? item.arabicDescription : item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
