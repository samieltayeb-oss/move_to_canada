/**
 * ALBERTA MASTER PROVINCIAL DATA MODULE (2026)
 * 
 * Cities: Calgary, Edmonton
 */

import { calculateAlberta2026Tax, ALBERTA_2026_BRACKETS, ALBERTA_2026_BPA } from './taxes/2026';
import { calculateACFBForFamily } from '@/data/benefitsEngine';

export interface AlbertaCityData {
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

export const ALBERTA_CITIES: Record<string, AlbertaCityData> = {
  calgary: {
    id: 'calgary',
    name: 'Calgary',
    arabicName: 'كالغاري',
    threeBedRentRangeCAD: [2300, 2600],
    fourBedHouseRentRangeCAD: [2600, 3300],
    transitAgency: 'Calgary Transit (CTrain Red & Blue Lines)',
    transitAdultFareCAD: 4.00,
    transitPassMonthlyCAD: 126.00,
    majorEmployers: ['ATB Financial', 'Enbridge', 'TC Energy', 'Cenovus Energy', 'Mawer Investment Management', 'Benevity', 'AIMCo Calgary', 'Alberta Health Services'],
    publicSchoolBoards: ['Calgary Board of Education (CBE)', 'Calgary Catholic School District (CCSD)'],
    islamicSchools: ['Calgary Islamic School (CIS - Akram Jomaa Campus)', 'CIS Omar Bin Al-Khattab', 'Al-Amal Academy'],
    majorMosques: ['Akram Jomaa Islamic Centre', 'Downtown Calgary Mosque (IISC)', 'MAC Islamic Centre (Al-Salam)', 'Southwest Masjid (CIC)'],
    overviewEN: 'Corporate and energy capital of Western Canada. Lowest taxes in Canada (0% PST, highest BPA), affordable single-family houses, sunny winter skies with Chinooks, and 50 mins to Banff.',
    overviewAR: 'عاصمة الشركات والطاقة في غرب كندا. أقل ضرائب (0% ضريبة مبيعات محلية، أعلى إعفاء شخصي)، ومنازل واسعة، وشمس ساطعة مع رياح الشينوك، وقرب استثنائي من بانف.'
  },
  edmonton: {
    id: 'edmonton',
    name: 'Edmonton',
    arabicName: 'إدمونتون',
    threeBedRentRangeCAD: [1950, 2300],
    fourBedHouseRentRangeCAD: [2300, 2900],
    transitAgency: 'Edmonton Transit Service (ETS Capital & Valley LRT)',
    transitAdultFareCAD: 3.50,
    transitPassMonthlyCAD: 100.00,
    majorEmployers: ['Government of Alberta', 'University of Alberta', 'Alberta Investment Management (AIMCo HQ)', 'Stantec HQ', 'PCL Construction HQ', 'Enbridge Edmonton'],
    publicSchoolBoards: ['Edmonton Public Schools (EPSB)', 'Edmonton Catholic Schools (ECSD)'],
    islamicSchools: ['Edmonton Islamic Academy (EIA)'],
    majorMosques: ['Al-Rashid Mosque (Oldest in Canada)', 'Rahma Mosque (MAC)', 'Baitul Mukarram'],
    overviewEN: 'Provincial government and university capital. Exceptionally low rental and purchase costs in Alberta, home to Canada’s historic Al-Rashid Mosque, but has prolonged unbroken winter freezes.',
    overviewAR: 'عاصمة المقاطعة السياسية والجامعية. أقل تكلفة إيجار وشراء في ألبرتا، وتضم أقدم مسجد في كندا (مسجد الرشيد)، لكن شتاؤها أطول وأكثر برودة.'
  }
};

export { calculateAlberta2026Tax, calculateACFBForFamily, ALBERTA_2026_BRACKETS, ALBERTA_2026_BPA };
