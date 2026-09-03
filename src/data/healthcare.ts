export interface HealthcareServiceItem {
  name: string;
  arabicName: string;
  isCoveredByAHCIP: boolean;
  notes: string;
  arabicNotes: string;
}

export const ahcipCoverageMatrix: HealthcareServiceItem[] = [
  {
    name: 'Family Physician & Specialist Visits',
    arabicName: 'زيارات طبيب الأسرة والأطباء الأخصائيين',
    isCoveredByAHCIP: true,
    notes: '100% covered for all medically necessary visits with valid Alberta Personal Health Card.',
    arabicNotes: 'مغطاة بالكامل 100% لجميع الزيارات الطبية الضرورية ببطاقة صحة ألبرتا.'
  },
  {
    name: 'Hospital Stays & Emergency Rooms (ER)',
    arabicName: 'الإقامة بالمستشفيات وغرف الطوارئ',
    isCoveredByAHCIP: true,
    notes: '100% covered: standard ward rooms, in-hospital surgery, nursing, and meals.',
    arabicNotes: 'مغطاة 100% شاملة العمليات الجراحية والإقامة التمريضية والأدوية داخل المستشفى.'
  },
  {
    name: 'Annual Eye Exams for Children (0–18)',
    arabicName: 'فحص النظر السنوي للأطفال (0 - 18 سنة)',
    isCoveredByAHCIP: true,
    notes: 'AHCIP covers one complete eye exam per year for children under 19.',
    arabicNotes: 'تغطي المقاطعة فحصاً شاملاً للنظر سنوياً مجاناً للأطفال دون سن 19 عاماً.'
  },
  {
    name: 'Routine Adult Dental Cleanings & Fillings',
    arabicName: 'علاج وتنظيف الأسنان الروتيني للبالغين',
    isCoveredByAHCIP: false,
    notes: 'Out-of-pocket or covered by employer supplementary dental insurance.',
    arabicNotes: 'غير مغطى في النظام الحكومي؛ يُدفع نقداً أو يغطى عبر تأمين العمل الخاص.'
  },
  {
    name: 'Outpatient Prescription Drugs (Pharmacies)',
    arabicName: 'الأدوية الموصوفة من الصيدليات الخارجية',
    isCoveredByAHCIP: false,
    notes: 'Prescriptions filled at community pharmacies require private insurance or Alberta Blue Cross Non-Group coverage.',
    arabicNotes: 'الأدوية التي تصرفها الصيدليات غير مغطاة وتتطلب تأميناً خاصاً من جهة العمل.'
  },
  {
    name: 'Adult Routine Vision & Eyeglasses (19–64)',
    arabicName: 'فحص النظر والنظارات الطبية للبالغين',
    isCoveredByAHCIP: false,
    notes: 'Adult eye exams and prescription lenses/frames are not covered by AHCIP.',
    arabicNotes: 'فحوصات النظر والنظارات للبالغين غير مغطاة حكومياً.'
  },
  {
    name: 'Emergency Ground Ambulance Transport',
    arabicName: 'خدمات سيارات الإسعاف الطارئة',
    isCoveredByAHCIP: false,
    notes: 'Standard patient co-pay of $250–$385 applies per ambulance transport unless covered by private insurance.',
    arabicNotes: 'يتحمل المريض رسوم نقل تتراوح بين 250 و 385 دولاراً ما لم يكن مشمولاً بتأمين وظيفي.'
  }
];

export const healthcareNavigation = {
  healthLink811: {
    title: 'Health Link (Dial 811)',
    arabicTitle: 'خدمة الاستشارات الصحية هيلث لينك (اتصل بـ 811)',
    description: 'Free, 24/7 confidential health advice line operated by Alberta Health Services (AHS). Registered nurses triage symptoms, guide you to clinics or the ER, and arrange interpretation in 240+ languages (including Arabic).',
    arabicDescription: 'خط هاتفي حكومي مجاني على مدار الساعة يقدم استشارات تمريضية فورية وتوجيهاً طبياً مع مترجمين بأكثر من 240 لغة منها العربية.'
  },
  findADoctor: {
    title: 'Primary Care Networks (Find a Family Doctor)',
    arabicTitle: 'البحث عن طبيب أسرة عبر شبكات الرعاية الأولية',
    portalUrl: 'https://albertafindadoctor.ca',
    description: 'Centralized Alberta portal to search for doctors accepting new patients by quadrant and language.',
    arabicDescription: 'الموقع الرسمي للبحث عن أطباء أسرة يقبلون مرضى جدد في أحياء كالغاري مع إمكانية تحديد لغة الطبيب.'
  },
  privateBenefits: {
    title: 'Employer & Supplementary Benefits',
    arabicTitle: 'التأمين الطبي الخاص والمزايا الوظيفية',
    description: 'Corporate professional positions in Calgary typically provide supplementary group health benefits (Sun Life, Manulife, Canada Life, Alberta Blue Cross) covering 80%–100% of dental, prescription drugs, glasses, physiotherapy, and massage.',
    arabicDescription: 'الوظائف المالية والمهنية في كالغاري توفر عادة تأميناً جماعياً خاصاً يغطي 80% إلى 100% من نفقات الأسنان والأدوية والنظارات.'
  }
};
