export interface SchoolOption {
  id: string;
  name: string;
  arabicName: string;
  type: 'Public Alternative (Islamic)' | 'Public (CBE)' | 'Separate Catholic (CCSD)' | 'Private Accredited';
  gradesServed: string;
  annualFeePerChildCAD: number;
  siblingFeePerChildCAD?: number;
  busingAvailable: boolean;
  busingFeePerChildCAD?: number;
  address: string;
  quadrant: string;
  website: string;
  curriculumHighlights: string[];
  arabicCurriculum: boolean;
  quranTahfeezStream: boolean;
  admissionsProcess: string;
  waitingListStatus: string;
  verifiedAt: string;
}

export const islamicSchoolsInCalgary: SchoolOption[] = [
  {
    id: 'cis-akram-jomaa',
    name: 'Calgary Islamic School — Akram Jomaa Campus',
    arabicName: 'المدرسة الإسلامية في كالغاري — فرع أكرم جمعة',
    type: 'Public Alternative (Islamic)',
    gradesServed: 'Kindergarten to Grade 12',
    annualFeePerChildCAD: 2450, // K-9 $2,450; Gr 10-12 $2,690
    siblingFeePerChildCAD: 2250, // $200 discount for 2nd/3rd sibling
    busingAvailable: true,
    busingFeePerChildCAD: 1350,
    address: '2612 – 37 Avenue NE, Calgary, AB T1Y 5L2',
    quadrant: 'NE',
    website: 'https://aj.myprps.com/',
    curriculumHighlights: [
      '100% Alberta Program of Studies (writes provincial PATs and Grade 12 Diplomas)',
      'Daily Arabic Language instruction (native and non-native tracks)',
      'Islamic Studies (Aqeedah, Fiqh, Seerah, Hadith)',
      'Daily congregational Dhuhr & Asr prayers and Friday Jumuah',
      'Specialized Tahfeez stream for full Quran memorization'
    ],
    arabicCurriculum: true,
    quranTahfeezStream: true,
    admissionsProcess: 'Online application opens annually mid-March. Priority to: 1) Returning students, 2) Siblings, 3) Academic and behavioral entrance assessment.',
    waitingListStatus: 'High demand. Applications should be submitted immediately upon window opening.',
    verifiedAt: '2026-09-03'
  },
  {
    id: 'cis-obk',
    name: 'Calgary Islamic School — Omar Bin Al-Khattab Campus',
    arabicName: 'المدرسة الإسلامية في كالغاري — فرع عمر بن الخطاب',
    type: 'Public Alternative (Islamic)',
    gradesServed: 'Kindergarten to Grade 9',
    annualFeePerChildCAD: 2450,
    siblingFeePerChildCAD: 2250,
    busingAvailable: true,
    busingFeePerChildCAD: 1350,
    address: '225 – 28 Street SE, Calgary, AB T2A 5K4',
    quadrant: 'SE / Mayland Heights',
    website: 'https://obk.myprps.com/',
    curriculumHighlights: [
      'Alberta Program of Studies with full Islamic character integration',
      'Arabic Language and Quranic recitation',
      'Junior high leadership and science fair enrichment'
    ],
    arabicCurriculum: true,
    quranTahfeezStream: true,
    admissionsProcess: 'Shared Prairie Rose Public Schools intake portal. Rolling waitlist.',
    waitingListStatus: 'Moderate-High. Prioritizes siblings and early registrations.',
    verifiedAt: '2026-09-03'
  },
  {
    id: 'al-amal-academy',
    name: 'Al-Amal Academy',
    arabicName: 'أكاديمية الأمل الإسلامية',
    type: 'Public Alternative (Islamic)',
    gradesServed: 'Kindergarten to Grade 9',
    annualFeePerChildCAD: 2200,
    siblingFeePerChildCAD: 2000,
    busingAvailable: true,
    busingFeePerChildCAD: 1250,
    address: '9 Royal Vista Drive NW, Calgary, AB T3R 0N2',
    quadrant: 'NW',
    website: 'https://al-amalacademy.com/',
    curriculumHighlights: [
      'Singapore Math for advanced mathematics foundations',
      'Project REACH social-emotional and mental wellbeing curriculum',
      'Structured Arabic and Quranic studies under accredited teachers'
    ],
    arabicCurriculum: true,
    quranTahfeezStream: true,
    admissionsProcess: 'Online application via School Cash Online and Prairie Land Public Schools.',
    waitingListStatus: 'Growing waitlist for NW communities (Evanston, Nolan Hill, Sage Hill).',
    verifiedAt: '2026-09-03'
  }
];

export interface ChildGradeCalculation {
  childIndex: number;
  age: number;
  albertaDivision: string;
  likelyGrade: string;
  schoolTypeOptions: {
    publicCbe: string;
    islamicSchool: string;
  };
  notes: string;
}

export function calculateAlbertaGrade(age: number, childIndex: number): ChildGradeCalculation {
  if (age < 5) {
    return {
      childIndex,
      age,
      albertaDivision: 'Early Childhood Services (Preschool)',
      likelyGrade: 'Preschool / Daycare (Eligible for Kindergarten next fall)',
      schoolTypeOptions: {
        publicCbe: 'Half-day CBE Kindergarten eligibility starts at age 5 by Dec 31',
        islamicSchool: 'MAC Islamic Preschool (NW) or Akram Jomaa Islamic Daycare'
      },
      notes: 'Alberta requires a child to turn 5 on or before December 31 of the school year to enter Kindergarten.'
    };
  } else if (age === 5) {
    return {
      childIndex,
      age,
      albertaDivision: 'Early Childhood Services (ECS)',
      likelyGrade: 'Kindergarten',
      schoolTypeOptions: {
        publicCbe: 'Designated neighborhood CBE elementary school (half-day or full-day alternating)',
        islamicSchool: 'CIS Akram Jomaa or Al-Amal Academy Kindergarten'
      },
      notes: 'No tuition for public CBE Kindergarten; society enhancement fee applies for CIS ($2,450).'
    };
  } else if (age <= 11) {
    const grade = age - 5; // e.g. age 6 = Gr 1, age 8 = Gr 3, age 11 = Gr 6
    return {
      childIndex,
      age,
      albertaDivision: 'Elementary School (Grades 1–6)',
      likelyGrade: `Grade ${grade}`,
      schoolTypeOptions: {
        publicCbe: 'Designated community elementary school with ELL support',
        islamicSchool: 'CIS Akram Jomaa, CIS OBK, or Al-Amal Academy'
      },
      notes: 'Child will write Alberta Provincial Achievement Tests (PATs) in Grade 6.'
    };
  } else if (age <= 14) {
    const grade = age - 5; // age 12 = Gr 7, 13 = Gr 8, 14 = Gr 9
    return {
      childIndex,
      age,
      albertaDivision: 'Junior High School (Grades 7–9)',
      likelyGrade: `Grade ${grade}`,
      schoolTypeOptions: {
        publicCbe: 'Designated community junior high school',
        islamicSchool: 'CIS Akram Jomaa (Gr 7-9) or CIS OBK (Gr 7-9)'
      },
      notes: 'Departmentalized subjects, CTF electives, and Grade 9 provincial PAT exams.'
    };
  } else {
    const grade = Math.min(12, age - 5);
    return {
      childIndex,
      age,
      albertaDivision: 'Senior High School (Grades 10–12)',
      likelyGrade: `Grade ${grade}`,
      schoolTypeOptions: {
        publicCbe: 'Designated community high school (e.g. Nelson Mandela or Ernest Manning)',
        islamicSchool: 'CIS Akram Jomaa High School Campus (Gr 10-12)'
      },
      notes: 'Credit-based diploma track requiring 100 credits + Grade 12 Alberta Diploma Examinations.'
    };
  }
}

export const schoolDocumentChecklist = [
  {
    id: 'doc-01',
    title: "Children's Passports & Legal Status",
    arabicTitle: 'جوازات سفر الأطفال وتأشيرات الإقامة',
    description: 'Original passports and validated Confirmation of Permanent Residence (COPR) or valid Study/Work permit.',
    arabicDescription: 'الجوازات الأصلية مع وثائق تأكيد الإقامة الدائمة (COPR) أو تصاريح الإقامة والعمل الرسمية.',
    mandatory: true,
    timing: 'Day 1 Intake'
  },
  {
    id: 'doc-02',
    title: 'Official Certified Birth Certificates',
    arabicTitle: 'شهادات الميلاد الرسمية المترجمة',
    description: "Original birth certificates listing both parents' legal names, accompanied by certified English translation.",
    arabicDescription: 'شهادات الميلاد الأصلية التي توضح أسماء الوالدين مع ترجمة إنجليزية معتمدة.',
    mandatory: true,
    timing: 'Day 1 Intake'
  },
  {
    id: 'doc-03',
    title: 'Proof of Calgary Residential Address',
    arabicTitle: 'إثبات العنوان السكني في كالغاري',
    description: 'Residential lease agreement, ENMAX utility bill, mortgage statement, or home insurance policy with parent name and address.',
    arabicDescription: 'عقد إيجار المنزل السكني أو فاتورة كهرباء إنماكس أو تأمين المستأجر موضحاً به الاسم والعنوان في كالغاري.',
    mandatory: true,
    timing: 'Prior to School Assignment'
  },
  {
    id: 'doc-04',
    title: 'Previous School Transcripts & Report Cards',
    arabicTitle: 'الشهادات الدراسية وكشوف الدرجات السابقة',
    description: 'Last 2 years of official report cards and transcripts from previous schools in Saudi Arabia (translated into English).',
    arabicDescription: 'كشوف درجات آخر سنتين دراسيتين من المدارس السابقة في السعودية مع الترجمة الإنجليزية.',
    mandatory: true,
    timing: 'Welcome Centre Assessment'
  },
  {
    id: 'doc-05',
    title: 'Immunization & Health Records',
    arabicTitle: 'سجل التطعيمات والملف الصحي',
    description: 'Yellow vaccination booklet or digital health record translated into English. CBE keeps on file for Alberta Health Services communicable outbreak protocols.',
    arabicDescription: 'دفتر التطعيمات الصحي للأطفال مترجماً للإنجليزية ليتم حفظه في ملف الصحة المدرسية.',
    mandatory: false,
    timing: 'First 30 Days'
  },
  {
    id: 'doc-06',
    title: 'Parent Photo Identification & Digital Selfie',
    arabicTitle: 'إثبات هوية الوالدين وصورة التحقق',
    description: 'Government photo ID. CBE online portal requires parent photo verification holding government ID.',
    arabicDescription: 'بطاقة هوية رسمية للوالد/الوالدة مع صورة شخصية للتحقق عبر نظام التسجيل الإلكتروني.',
    mandatory: true,
    timing: 'Online Registration (SchoolEngage)'
  }
];
