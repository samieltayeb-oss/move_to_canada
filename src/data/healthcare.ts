export interface HealthcareServiceItem {
  name: string;
  arabicName: string;
  isCoveredByAHCIP: boolean;
  notes: string;
  arabicNotes: string;
  alternativeCoverage: string;
}

export const ahcipNewcomerPolicy = {
  coverageEffectiveDate: 'Date Alberta residency is established (Day 1 of physical arrival in Alberta)',
  registrationDeadline: 'Must apply within 3 months of establishing residency in Alberta to maintain retroactive Day 1 coverage',
  waitingPeriod: 'Zero (0) days in Alberta for newcomers arriving permanently from outside Canada (Unlike Ontario/BC which previously had 3-month waits)',
  applicationForm: 'Application for Alberta Health Care Insurance Plan Coverage (Form AHC0102)',
  requiredDocuments: [
    'Original Confirmation of Permanent Residence (COPR) or Canadian PR Card',
    'Valid Passports for all family members',
    'Proof of Alberta Physical Address (Residential lease agreement, utility bill, or mortgage statement)',
    'Government-issued photo identification'
  ],
  inPersonOfficesCalgary: [
    {
      name: 'The Genesis Centre Registry (Northeast Calgary)',
      address: '7555 Falconridge Blvd NE, Calgary, AB',
      notes: 'Closest registry for Saddleridge, Cornerstone, Savanna, and Taradale residents'
    },
    {
      name: 'Macleod Registry (South / Central)',
      address: '8835 Macleod Trail SW, Calgary, AB',
      notes: 'Full-service registry providing immediate in-person AHCIP intake processing'
    }
  ],
  officialApplyUrl: 'https://www.alberta.ca/ahcip-how-to-apply'
};

export const ahcipCoverageMatrix: HealthcareServiceItem[] = [
  {
    name: 'Family Physician & General Practitioner Visits',
    arabicName: 'زيارات طبيب الأسرة والعيادات العامة',
    isCoveredByAHCIP: true,
    notes: '100% covered for all medically necessary visits with valid Alberta Personal Health Card.',
    arabicNotes: 'مغطاة بالكامل 100% لجميع الفحوصات والزيارات الطبية ببطاقة صحة ألبرتا.',
    alternativeCoverage: 'Publicly Insured ($0 copay)'
  },
  {
    name: 'Medical Specialist Consultations (Cardiology, Surgery, etc.)',
    arabicName: 'استشارات الأطباء الأخصائيين والجراحين',
    isCoveredByAHCIP: true,
    notes: '100% covered when referred by a primary care family physician.',
    arabicNotes: 'مغطاة بالكامل 100% عند التحويل من طبيب الأسرة.',
    alternativeCoverage: 'Publicly Insured ($0 copay)'
  },
  {
    name: 'Hospital Wards, Surgeries & Emergency Rooms (ER)',
    arabicName: 'الإقامة بالمستشفيات والعمليات الجراحية وغرف الطوارئ',
    isCoveredByAHCIP: true,
    notes: '100% covered: standard ward rooms, in-hospital surgery, nursing, and medications administered inside hospital.',
    arabicNotes: 'مغطاة 100% شاملة العمليات الجراحية والإقامة والأدوية داخل المستشفى.',
    alternativeCoverage: 'Publicly Insured ($0 copay)'
  },
  {
    name: 'Diagnostic Testing (Blood Tests, X-Rays, Ultrasound, MRI)',
    arabicName: 'الفحوصات المخبرية والأشعة التشخيصية ورنين الرأس',
    isCoveredByAHCIP: true,
    notes: '100% covered when ordered by an Alberta licensed medical practitioner.',
    arabicNotes: 'مغطاة 100% للتحاليل والأشعة التشخيصية المحولة من طبيب.',
    alternativeCoverage: 'Publicly Insured ($0 copay)'
  },
  {
    name: 'Annual Routine Eye Exams for Children (Ages 0–18)',
    arabicName: 'فحص النظر السنوي للأطفال (0 - 18 سنة)',
    isCoveredByAHCIP: true,
    notes: 'AHCIP covers one complete optometrist eye exam per year for children under 19 (Applies to all 3 of Yassir’s kids: 16, 11, 5).',
    arabicNotes: 'تغطي المقاطعة فحصاً شاملاً للنظر سنوياً مجاناً للأطفال دون سن 19 عاماً.',
    alternativeCoverage: 'Publicly Insured ($0 copay for kids under 19)'
  },
  {
    name: 'Routine Adult Dental Cleanings, Checkups & Fillings',
    arabicName: 'علاج وتنظيف الأسنان الروتيني للبالغين',
    isCoveredByAHCIP: false,
    notes: 'Not covered under AHCIP. Requires employer dental insurance or Canadian Dental Care Plan (CDCP) if eligible.',
    arabicNotes: 'غير مغطى في النظام الحكومي؛ يتطلب تأميناً وظيفياً خاصاً أو خطة الأسنان الكندية CDCP.',
    alternativeCoverage: 'Employer Dental Plan, CDCP, or Direct Out-of-Pocket'
  },
  {
    name: 'Outpatient Prescription Drugs (Community Pharmacies)',
    arabicName: 'الأدوية الموصوفة من الصيدليات الخارجية',
    isCoveredByAHCIP: false,
    notes: 'Medications filled at community pharmacies (Rexall, Shoppers, Costco) are NOT paid by AHCIP.',
    arabicNotes: 'الأدوية الموصوفة التي تصرفها الصيدليات غير مغطاة وتتطلب تأميناً خاصاً أو تغطية بلو كروس.',
    alternativeCoverage: 'Employer Benefits, Alberta Blue Cross Non-Group ($118/mo), or ACHB'
  },
  {
    name: 'Adult Routine Vision Care & Prescription Eyeglasses (Ages 19–64)',
    arabicName: 'فحص النظر والنظارات الطبية للبالغين (19 - 64 سنة)',
    isCoveredByAHCIP: false,
    notes: 'Adult eye examinations, contact lenses, and prescription frames are paid out of pocket.',
    arabicNotes: 'فحوصات النظر والنظارات للبالغين غير مغطاة حكومياً.',
    alternativeCoverage: 'Employer Vision Benefit ($200–$400 every 24 months)'
  },
  {
    name: 'Emergency Ground Ambulance Transport',
    arabicName: 'خدمات سيارات الإسعاف الطارئة',
    isCoveredByAHCIP: false,
    notes: 'Patients are billed a provincial fee ($250 if not transported, $385 if transported to hospital).',
    arabicNotes: 'يتحمل المريض رسماً حكومياً يتراوح بين 250 و 385 دولاراً لخدمة الإسعاف ما لم يكن مشمولاً بتأمين.',
    alternativeCoverage: 'Employer Group Insurance, Blue Cross Non-Group, or Out-of-Pocket'
  },
  {
    name: 'Paramedical Therapies (Physiotherapy, Massage, Chiropractic, Psychology)',
    arabicName: 'العلاج الطبيعي والمساج العلاجي وتقويم العمود الفقري والطب النفسي',
    isCoveredByAHCIP: false,
    notes: 'Generally excluded from AHCIP unless provided as an in-hospital post-operative clinic.',
    arabicNotes: 'غير مغطاة حكومياً في العيادات الخارجية.',
    alternativeCoverage: 'Employer Health Spending Account (HSA) / Group Benefits ($500–$1,500/year)'
  }
];

// CANADIAN DENTAL CARE PLAN (CDCP) SPECIFICATION
export const canadianDentalCarePlan = {
  programName: 'Canadian Dental Care Plan (CDCP)',
  governingBody: 'Health Canada / Sun Life Canada (Contracted Administrator)',
  keyEligibilityCriteria: [
    'Must have NO access to employer-sponsored or pension dental insurance (Even if you decline to participate in employer plan, you are disqualified)',
    'Adjusted Family Net Income (AFNI) must be under $90,000 CAD',
    'Must be a Canadian resident for tax purposes with previous year tax return filed with CRA'
  ],
  copaymentStructure: [
    { incomeBracket: 'Under $70,000 AFNI', copayPercentage: 0, govCoverage: 100, note: 'CDCP pays 100% of established fee schedule' },
    { incomeBracket: '$70,000 to $79,999 AFNI', copayPercentage: 40, govCoverage: 60, note: 'Patient pays 40% copay of established fee schedule' },
    { incomeBracket: '$80,000 to $89,999 AFNI', copayPercentage: 60, govCoverage: 40, note: 'Patient pays 60% copay of established fee schedule' },
    { incomeBracket: '$90,000 and above', copayPercentage: 100, govCoverage: 0, note: 'NOT ELIGIBLE (Exceeds maximum income ceiling)' }
  ],
  dentistBalanceBillingWarning: 'CRITICAL: CDCP fees are lower than the Alberta Dental Association fee guide. If your dentist charges standard Alberta rates, you must pay the price difference (balance billing) out-of-pocket even with 0% copay status. Always ask the dental clinic beforehand if they accept CDCP fee assignment without balance billing.',
  officialPortalUrl: 'https://www.canada.ca/en/services/benefits/dental/dental-care-plan.html'
};

// ALBERTA CHILD HEALTH BENEFIT (ACHB)
export const albertaChildHealthBenefit = {
  programName: 'Alberta Child Health Benefit (ACHB)',
  governingBody: 'Government of Alberta (Seniors, Community and Social Services)',
  description: 'Provides free dental, vision, prescription drugs, essential diabetic supplies, and emergency ambulance for children of lower-income families living in Alberta.',
  incomeThresholds2026: {
    coupleWith3ChildrenNetIncomeCAD: 41594,
    coupleWith4ChildrenNetIncomeCAD: 46562,
    singleParentWith3ChildrenNetIncomeCAD: 36720
  },
  coveredServicesForChildren: [
    'Dental: 100% of standard basic dental exams, cleanings, x-rays, fillings, and extractions',
    'Vision: One pair of prescription eyeglasses per year per child',
    'Prescriptions: 100% coverage for essential prescription medications on the Alberta Drug Benefit List',
    'Ambulance: 100% emergency ambulance transport within Alberta'
  ],
  applicationProcess: 'Apply directly through Alberta Supports using previous year Notice of Assessment or Canadian newcomer landing documentation.',
  officialUrl: 'https://www.alberta.ca/alberta-child-health-benefit'
};

// ALBERTA BLUE CROSS NON-GROUP COVERAGE
export const albertaBlueCrossNonGroup = {
  programName: 'Alberta Blue Cross Non-Group Coverage (Plan 118)',
  governingBody: 'Alberta Health (Subsidized Public-Private Bridge Insurance)',
  intendedAudience: 'Essential bridge insurance for newcomers before company employer benefits take effect or for independent contractors',
  monthlyPremiumsCAD: {
    familyStandardMonthlyCAD: 118.00,
    familySubsidizedMonthlyCAD: 82.60, // Subsidized for lower/middle-income families
    singleStandardMonthlyCAD: 63.50,
    singleSubsidizedMonthlyCAD: 44.45
  },
  prescriptionDrugCoverage: {
    copayPercentage: 30, // Patient pays 30%
    maximumCopayPerPrescriptionCAD: 35.00, // Patient never pays more than $35 per 100-day supply of eligible medication
    formulary: 'Covers over 5,000 prescription drugs listed on the Alberta Health Drug Benefit List'
  },
  ambulanceAndHospital: {
    hospitalAccommodation: 'Up to semi-private room accommodation coverage',
    ambulanceCopay: 'Covers standard provincial ambulance fee ($250–$385)'
  },
  officialUrl: 'https://www.ab.bluecross.ca/plans/individual/non-group-coverage.php'
};

// JOB OFFER TOTAL COMPENSATION BENEFIT VALUATION ENGINE
export interface JobOfferBenefitComparison {
  offerName: string;
  baseSalaryCAD: number;
  healthDentalBenefitTier: 'Comprehensive Enterprise' | 'Standard' | 'Basic / None';
  estimatedBenefitValueCAD: number;
  netFinancialHouseholdImpactCAD: number;
  pros: string[];
  cons: string[];
}

export const jobOfferBenefitsValueModel = {
  explainerTitle: 'Evaluating Job Offers: Base Salary vs. Total Compensation',
  scenarioComparison: [
    {
      offerName: 'Offer A: Corporate Financial / Energy Tech (e.g. ATB Financial / TC Energy)',
      baseSalaryCAD: 135000,
      dentalCoverage: '90% basic, 80% major dental up to $2,500/yr per family member (5 people = up to $12,500/yr value)',
      drugCoverage: '100% prescription drugs with direct pharmacy pay card',
      visionCoverage: '$350 per person every 24 months',
      paramedical: '$750/yr each for physio, massage, and psychological counseling',
      rrspMatching: '6% employer match on base salary ($8,100 CAD free annual investment)',
      estimatedAnnualBenefitValueCAD: 14200,
      totalCompensationCAD: 149200,
      verdict: 'Superior long-term family stability and ~$1,180/mo in shielded out-of-pocket health and retirement wealth.'
    },
    {
      offerName: 'Offer B: Higher Base Contractor / Small Firm with No Group Insurance',
      baseSalaryCAD: 145000,
      dentalCoverage: '$0 (Family must pay 100% out of pocket or buy expensive private plan)',
      drugCoverage: '$0 (100% out-of-pocket prescription risk)',
      visionCoverage: '$0 out-of-pocket',
      paramedical: '$0 out-of-pocket',
      rrspMatching: '$0 matching',
      estimatedAnnualBenefitValueCAD: 0,
      totalCompensationCAD: 145000,
      verdict: 'Higher nominal salary on paper, but family out-of-pocket dental, drugs, glasses, and lack of 6% RRSP match results in lower net wealth.'
    }
  ]
};

// FAMILY HEALTH SETUP CHECKLISTS
export const familyHealthSetupChecklist = {
  firstWeek: [
    { step: 'Submit AHCIP Registration at Genesis Centre Registry or online', priority: 'High', days: 'Day 1–3' },
    { step: 'Locate closest Walk-in Medical Clinic (e.g., Saddletowne Walk-in Clinic in NE Calgary)', priority: 'High', days: 'Day 3–5' },
    { step: 'Save 811 Health Link in all family smartphones for 24/7 free nurse triage', priority: 'Medium', days: 'Day 1' },
    { step: 'Locate nearest 24-Hour Emergency Hospital (Peter Lougheed Centre in NE Calgary)', priority: 'High', days: 'Day 1' },
    { step: 'Transfer essential maintenance prescriptions to local pharmacy (e.g., Costco East Hills / Saddletowne Rexall)', priority: 'Medium', days: 'Day 5–7' }
  ],
  firstMonth: [
    { step: 'Register on AlbertaFindADoctor.ca to join a primary care family physician waitlist', priority: 'High', days: 'Day 14–30' },
    { step: 'Schedule free annual routine optometrist eye exams for the 3 kids (Ages 16, 11, 5) using AHCIP card', priority: 'Medium', days: 'Day 20–30' },
    { step: 'Enroll in employer group benefits or enroll in Alberta Blue Cross Non-Group bridge coverage', priority: 'High', days: 'Day 15–30' },
    { step: 'Book family dental baseline checkups once employer benefits or CDCP coverage takes effect', priority: 'Medium', days: 'Day 30–60' }
  ]
};

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
