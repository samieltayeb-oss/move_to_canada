/**
 * BRITISH COLUMBIA MASTER PROVINCIAL DATA MODULE (2026)
 * 
 * Cities: Vancouver, Burnaby, Surrey, Richmond, Coquitlam, Victoria
 */

import { calculateBc2026Tax, BC_2026_BRACKETS, BC_2026_BPA } from './taxes/2026';
import { calculateBcBenefits } from './benefits/engine';

export interface BcCityData {
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

export const BC_CITIES: Record<string, BcCityData> = {
  vancouver: {
    id: 'vancouver',
    name: 'Vancouver',
    arabicName: 'فانكوفر',
    threeBedRentRangeCAD: [3900, 4800],
    fourBedHouseRentRangeCAD: [4600, 6500],
    transitAgency: 'TransLink (SkyTrain & SeaBus Zone 1)',
    transitAdultFareCAD: 2.85,
    transitPassMonthlyCAD: 117.20,
    majorEmployers: ['Amazon Vancouver Tech Hub', 'Microsoft Canada', 'Lululemon Global HQ', 'Teck Resources', 'University of British Columbia (UBC)', 'Vancouver Coastal Health'],
    publicSchoolBoards: ['Vancouver School Board (VSB - SD39)'],
    islamicSchools: ['Moberly Welcome Centre Area Programs'],
    majorMosques: ['Al-Jamia Masjid (West 8th - Oldest Mosque in BC)', 'MAC Vancouver Centre', 'Masjid Omar Al-Farooq'],
    overviewEN: 'Pacific coastal gateway with Canada’s mildest winter temperatures, stunning ocean and North Shore mountain vistas, but the country’s highest housing barrier.',
    overviewAR: 'بوابة المحيط الهادئ الخلابة بأدفأ شتاء في كندا وطبيعة تجمع الجبال بالبحر، لكنها تعاني من أعلى تكلفة سكنية في كندا.'
  },
  burnaby: {
    id: 'burnaby',
    name: 'Burnaby',
    arabicName: 'بيرنابي',
    threeBedRentRangeCAD: [3400, 4000],
    fourBedHouseRentRangeCAD: [4000, 5200],
    transitAgency: 'TransLink (Expo & Millennium SkyTrain Zone 2)',
    transitAdultFareCAD: 4.20,
    transitPassMonthlyCAD: 156.70,
    majorEmployers: ['Electronic Arts (EA Canada Studio)', 'Simon Fraser University (SFU)', 'Ballard Power Systems', 'Telus Mobility Campus', 'Metropolis at Metrotown'],
    publicSchoolBoards: ['Burnaby School District (SD41)'],
    islamicSchools: ['District Welcome Learning Network'],
    majorMosques: ['Burnaby Mountain Mosque', 'Masjid Al-Salam & Education Centre', 'Burris Street Musalla'],
    overviewEN: 'Central Metro Vancouver hub. Houses SFU, vibrant Metrotown amenities, rapid SkyTrain connectivity in all directions, and active community mosques.',
    overviewAR: 'قلب مترو فانكوفر الجغرافي. تحتضن جامعة سايمون فريزر ومركز متروتاون، مع ربط قطار سكاي ترين السريع ومساجد مجتمعية نشطة.'
  },
  surrey: {
    id: 'surrey',
    name: 'Surrey',
    arabicName: 'سري',
    threeBedRentRangeCAD: [2800, 3300],
    fourBedHouseRentRangeCAD: [3300, 4200],
    transitAgency: 'TransLink (SkyTrain Expo Line Extension Zone 3 & Flat Bus)',
    transitAdultFareCAD: 2.85,
    transitPassMonthlyCAD: 211.65,
    majorEmployers: ['Surrey Memorial Hospital / Fraser Health', 'City of Surrey', 'Kwantlen Polytechnic University', 'Prospera Credit Union', 'Coast Capital Savings HQ'],
    publicSchoolBoards: ['Surrey Schools (SD36 - Largest in British Columbia)'],
    islamicSchools: ['Surrey Muslim School (BCMA - Group 1 Funded)', 'Iqra Islamic School'],
    majorMosques: ['Surrey Jamea Masjid (BCMA - 124th St)', 'Guildford Islamic Cultural Centre', 'Fleetwood Musalla', 'Newton Islamic Centre'],
    overviewEN: 'The family and Muslim community heartland of Metro Vancouver. Lower rent than Vancouver, largest public school district, Group 1 subsidized Islamic schools, and major halal markets.',
    overviewAR: 'المركز العائلي والإسلامي الأول في مقاطعة بريتيش كولومبيا. تكلفة سكنية أفضل، وأكبر منطقة تعليمية، ومدارس إسلامية مدعومة من المقاطعة، ووفرة كبيرة في المساجد والأسواق الحلال.'
  },
  richmond: {
    id: 'richmond',
    name: 'Richmond',
    arabicName: 'ريتشموند',
    threeBedRentRangeCAD: [3200, 3800],
    fourBedHouseRentRangeCAD: [3800, 4800],
    transitAgency: 'TransLink (Canada Line SkyTrain Zone 2)',
    transitAdultFareCAD: 4.20,
    transitPassMonthlyCAD: 156.70,
    majorEmployers: ['Vancouver International Airport (YVR)', 'Sierra Wireless', 'MDA Space', 'Richmond Hospital', 'Great Canadian Entertainment'],
    publicSchoolBoards: ['Richmond School District (SD38)'],
    islamicSchools: ['Az-Zahraa Islamic Academy (Group 1 Accredited)'],
    majorMosques: ['Richmond Jamea Masjid (BCMA)', 'Az-Zahraa Islamic Centre (No. 5 Road)', 'Richmond Musalla'],
    overviewEN: 'Dynamic island city hosting YVR international airport and the Canada Line rapid transit. Home to the famous No. 5 Road religious hub and Az-Zahraa Islamic Academy.',
    overviewAR: 'مدينة عصرية تحتضن مطار فانكوفر الدولي ومحطات قطار كندا لاين. تضم شارع رقم 5 الشهير بمؤسساته الدينية وأكاديمية الزهراء الإسلامية.'
  },
  coquitlam: {
    id: 'coquitlam',
    name: 'Coquitlam',
    arabicName: 'كوكيتلام',
    threeBedRentRangeCAD: [3100, 3600],
    fourBedHouseRentRangeCAD: [3600, 4500],
    transitAgency: 'TransLink (Millennium SkyTrain Evergreen Extension Zone 3)',
    transitAdultFareCAD: 2.85,
    transitPassMonthlyCAD: 211.65,
    majorEmployers: ['School District 43', 'Eagle Ridge Hospital', 'City of Coquitlam', 'Hard Rock Casino Vancouver', 'Tri-Cities Commercial Corridors'],
    publicSchoolBoards: ['School District 43 Coquitlam (SD43 - Tri-Cities)'],
    islamicSchools: ['Tri-Cities Muslim Youth Educational Programs'],
    majorMosques: ['Masjid Al-Hidayah (Port Coquitlam / Coquitlam)', 'Tri-City Islamic Centre'],
    overviewEN: 'Scenic suburban community nestled against Westwood Plateau and Burke Mountain. Excellent schools (SD43), modern Evergreen SkyTrain access, and outdoor lifestyle.',
    overviewAR: 'مدينة جبلية خلابة عند هضبة ويستوود. مدارس متميزة، وقطار إيفرجرين السريع، وبيئة مثالية لمحبي الطبيعة العائلية الهادئة.'
  },
  victoria: {
    id: 'victoria',
    name: 'Victoria',
    arabicName: 'فيكتوريا',
    threeBedRentRangeCAD: [2800, 3300],
    fourBedHouseRentRangeCAD: [3400, 4400],
    transitAgency: 'BC Transit (Victoria Regional System w/ Umo Capping)',
    transitAdultFareCAD: 3.00,
    transitPassMonthlyCAD: 85.00,
    majorEmployers: ['Government of British Columbia / Provincial Ministries', 'University of Victoria (UVic)', 'Department of National Defence (CFB Esquimalt)', 'Island Health', 'BC Ferries'],
    publicSchoolBoards: ['Greater Victoria School District (SD61)'],
    islamicSchools: ['Victoria Muslim Community Weekend School'],
    majorMosques: ['Masjid Al-Iman (Quadra St - Victoria Islamic Centre)'],
    overviewEN: 'B.C.’s historic island provincial capital. Mild year-round maritime climate, stable public service employment, lower crime index, but requires ferry/air links to the mainland.',
    overviewAR: 'عاصمة المقاطعة التاريخية على جزيرة فانكوفر. طقس بحري معتدل على مدار العام، وأمان عالٍ، ووظائف حكومية مستقرة، وتتطلب ركوب العبارة للوصول للمدن الكبرى.'
  }
};

export { calculateBc2026Tax, calculateBcBenefits, BC_2026_BRACKETS, BC_2026_BPA };
