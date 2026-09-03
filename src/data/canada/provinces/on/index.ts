/**
 * ONTARIO MASTER PROVINCIAL DATA MODULE (2026)
 * 
 * Cities: Toronto, Ottawa, Mississauga, Brampton, Hamilton, Kitchener-Waterloo
 */

import { calculateOntario2026Tax, ONTARIO_2026_BRACKETS, ONTARIO_2026_BPA } from './taxes/2026';
import { calculateOntarioBenefits } from './benefits/engine';

export interface OntarioCityData {
  id: string;
  name: string;
  arabicName: string;
  threeBedRentRangeCAD: [number, number];
  fourBedHouseRentRangeCAD: [number, number];
  transitAgency: string;
  transitAdultFareCAD: number;
  transitPassMonthlyCAD: number;
  majorEmployers: string[];
  publicSchoolBoards: string[];
  islamicSchools: string[];
  majorMosques: string[];
  overviewEN: string;
  overviewAR: string;
}

export const ONTARIO_CITIES: Record<string, OntarioCityData> = {
  toronto: {
    id: 'toronto',
    name: 'Toronto',
    arabicName: 'تورونتو',
    threeBedRentRangeCAD: [3600, 4200],
    fourBedHouseRentRangeCAD: [4200, 5500],
    transitAgency: 'TTC (Toronto Transit Commission)',
    transitAdultFareCAD: 3.35,
    transitPassMonthlyCAD: 156.00,
    majorEmployers: ['RBC', 'TD Bank', 'Scotiabank', 'BMO', 'CIBC', 'Manulife', 'Sun Life', 'Shopify', 'University Health Network'],
    publicSchoolBoards: ['Toronto District School Board (TDSB)', 'Toronto Catholic District School Board (TCDSB)'],
    islamicSchools: ['As-Sadiq Islamic School (GTA)', 'Islamic Foundation School'],
    majorMosques: ['Islamic Foundation of Toronto', 'TARIC Islamic Centre', 'Madinah Masjid', 'Downtown Toronto Jamia'],
    overviewEN: 'Canada’s economic and financial capital. Unmatched capital markets depth, massive diverse Muslim population (640k+), but highest housing pressure and traffic congestion.',
    overviewAR: 'عاصمة كندا الاقتصادية والمالية الكبرى. عمق مالي عالمي، وجالية مسلمة ضخمة تتجاوز 640 ألفاً، مع تكاليف سكن مرتفعة وازدحام مروري.'
  },
  mississauga: {
    id: 'mississauga',
    name: 'Mississauga',
    arabicName: 'ميسيساغا',
    threeBedRentRangeCAD: [3100, 3600],
    fourBedHouseRentRangeCAD: [3600, 4500],
    transitAgency: 'MiWay (One Fare free transfers to TTC/GO)',
    transitAdultFareCAD: 3.40,
    transitPassMonthlyCAD: 141.00,
    majorEmployers: ['Citigroup', 'FedEx Canada', 'Microsoft Canada HQ', 'AstraZeneca', 'Maple Leaf Foods', 'Linde Canada'],
    publicSchoolBoards: ['Peel District School Board (PDSB)', 'Dufferin-Peel Catholic (DPCDSB)'],
    islamicSchools: ['ISNA High School & Elementary', 'Olive Grove School (MAC)', 'Al-Huda Institute'],
    majorMosques: ['ISNA Canada Islamic Centre', 'Sayeda Khadija Centre', 'Al-Falah Islamic Centre', 'Dar Al-Tawheed'],
    overviewEN: 'The suburban epicentre of Muslim family life in the GTA. Home to premier Islamic institutions (ISNA, Olive Grove), abundant halal grocers, and Fortune 500 corporate campuses.',
    overviewAR: 'المركز العائلي الإسلامي الأول في ضواحي تورونتو. موطن أكبر المؤسسات الإسلامية مثل إيسنا ومدرسة الزيتونة، مع وفرة هائلة في المتاجر الحلال ومقرات الشركات.'
  },
  brampton: {
    id: 'brampton',
    name: 'Brampton',
    arabicName: 'برامبتون',
    threeBedRentRangeCAD: [2900, 3400],
    fourBedHouseRentRangeCAD: [3200, 3900],
    transitAgency: 'Brampton Transit (Züm BRT & One Fare integration)',
    transitAdultFareCAD: 3.40,
    transitPassMonthlyCAD: 141.20,
    majorEmployers: ['Rogers Communications', 'Amazon Fulfillment', 'Stellantis Assembly', 'Loblaws National HQ', 'Brampton Civic Hospital'],
    publicSchoolBoards: ['Peel District School Board (PDSB)', 'Dufferin-Peel Catholic (DPCDSB)'],
    islamicSchools: ['Wali ul Asr Learning Institute', 'Brampton Islamic School'],
    majorMosques: ['Makki Masjid', 'Brampton Islamic Centre (BIC)', 'Jamiat-ul-Ansar', 'Al-Rahman Centre'],
    overviewEN: 'High-growth family community with competitive housing compared to Toronto, expansive detached homes, rapid transit connections, and growing Islamic educational hubs.',
    overviewAR: 'مدينة عائلية سريعة النمو توفر خيارات سكنية مستقلة أفضل من تورونتو، مع شبكة حافلات سريعة ومؤسسات إسلامية ومدارس متطورة.'
  },
  ottawa: {
    id: 'ottawa',
    name: 'Ottawa',
    arabicName: 'أوتاوا',
    threeBedRentRangeCAD: [2600, 3100],
    fourBedHouseRentRangeCAD: [3000, 3800],
    transitAgency: 'OC Transpo (O-Train Light Rail & Bus)',
    transitAdultFareCAD: 4.10,
    transitPassMonthlyCAD: 138.50,
    majorEmployers: ['Government of Canada / Federal Civil Service', 'Shopify', 'Ciena', 'Nokia Canada', 'Ottawa Hospital', 'Cognos / IBM'],
    publicSchoolBoards: ['Ottawa-Carleton District School Board (OCDSB)', 'Ottawa Catholic School Board (OCSB)'],
    islamicSchools: ['Abraar School Elementary & Secondary (MAC)'],
    majorMosques: ['Ottawa Islamic Centre (Assunnah)', 'South Nepean Muslim Community (SNMC)', 'Ottawa Mosque (Northwestern)', 'Islam Care Centre'],
    overviewEN: 'Canada’s exceptionally safe, bilingual federal capital. Outstanding public institutions, museums, high median incomes ($118k), and reputable Islamic schools.',
    overviewAR: 'عاصمة كندا الفيدرالية الآمنة والمتميزة بثنائية اللغة. دخل عائلي مرتفع (118 ألفاً)، ومؤسسات وطنية عريقة، ومدارس إسلامية متميزة مثل مدرسة الأبرار.'
  },
  hamilton: {
    id: 'hamilton',
    name: 'Hamilton',
    arabicName: 'هاميلتون',
    threeBedRentRangeCAD: [2500, 2900],
    fourBedHouseRentRangeCAD: [2800, 3500],
    transitAgency: 'HSR (Hamilton Street Railway)',
    transitAdultFareCAD: 2.85,
    transitPassMonthlyCAD: 118.80,
    majorEmployers: ['Hamilton Health Sciences', 'McMaster University & Medical Centre', 'ArcelorMittal Dofasco', 'Stelco', 'St. Joseph’s Healthcare'],
    publicSchoolBoards: ['Hamilton-Wentworth District School Board (HWDSB)', 'Hamilton-Wentworth Catholic (HWCDSB)'],
    islamicSchools: ['Hamilton Islamic School'],
    majorMosques: ['Hamilton Downtown Mosque (HMA)', 'Hamilton Mountain Mosque', 'Omar Al-Farooq Centre'],
    overviewEN: 'Regional healthcare and university powerhouse on Lake Ontario. Lower rental entry than Toronto, growing creative and tech sector, and scenic Niagara Escarpment.',
    overviewAR: 'مركز جامعي وصحي متقدم على بحيرة أونتاريو. تكلفة سكنية أكثر اعتدالاً من تورونتو، وقطاع طبي وتقني متنامٍ، وطبيعة شلالات خلابة.'
  },
  kitchener: {
    id: 'kitchener',
    name: 'Kitchener-Waterloo',
    arabicName: 'كيتشنر ووترلو',
    threeBedRentRangeCAD: [2400, 2800],
    fourBedHouseRentRangeCAD: [2800, 3400],
    transitAgency: 'Grand River Transit (ION Light Rail + Bus)',
    transitAdultFareCAD: 3.00,
    transitPassMonthlyCAD: 104.00,
    majorEmployers: ['Google Canada HQ (Waterloo)', 'OpenText', 'Sun Life Financial', 'Manulife Financial', 'University of Waterloo', 'Toyota Motor Mfg'],
    publicSchoolBoards: ['Waterloo Region District School Board (WRDSB)', 'Waterloo Catholic (WCDSB)'],
    islamicSchools: ['Kitchener Islamic Academy', 'Waterloo Islamic School'],
    majorMosques: ['Kitchener Masjid (MAC)', 'Waterloo Masjid (Waterloo Mosque)', 'Al-Huda Islamic Centre'],
    overviewEN: 'Canada’s Silicon Valley North. Epicentre of artificial intelligence, software engineering, and corporate insurance, paired with modern light rail transit.',
    overviewAR: 'وادي السيليكون الكندي. عاصمة هندسة البرمجيات والذكاء الاصطناعي والتأمين في كندا، مدعومة بقطار آيون الخفيف وتكاليف سكنية معقولة.'
  }
};

export { calculateOntario2026Tax, calculateOntarioBenefits, ONTARIO_2026_BRACKETS, ONTARIO_2026_BPA };
