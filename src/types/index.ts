export interface BudgetItem {
  type?: 'main_header' | 'header';
  code?: string;
  name: string;
  values?: Record<number, number>;
  notes?: string;
}

export interface Employee {
  id: string;
  name: string;
  gender: 'ชาย' | 'หญิง';
  startYear: number;
  level: string;
  status?: 'มีสิทธิ์' | 'หมดสิทธิ์';
  visitProvince: string;
  homeVisitBusFare: number;
  // Add custom travel rates for overriding master rates
  customTravelRates?: {
    hotel?: number;
    perDiem?: number;
    travel?: number;
    local?: number;
  };
}

export interface MasterRates {
  [level: string]: {
    position: string;
    rent: number;
    monthlyAssist: number;
    lumpSum: number;
    travel: number;
    local: number;
    perDiem: number;
    hotel: number;
  };
}

export interface TravelEmployee extends Employee {
  serviceYears: number;
  hotel: number;
  perDiem: number;
  travelRoundTrip: number;
  localRoundTrip: number;
  total: number;
  hotelNights: number;
  perDiemDays: number;
}

export interface SpecialAssistEmployee extends Employee {
  totalRent: number;
  totalMonthlyAssist: number;
  lumpSum: number;
  total: number;
  rentPerMonth: number;
  monthlyAssistPerMonth: number;
}

export interface FamilyVisitEmployee extends Employee {
  busFareTotal: number;
  total: number;
}

export interface CompanyTripEmployee extends Employee {
  busFare: number;
  accommodationCost: number;
  total: number;
  note: string;
}

export interface ManagerRotationEmployee extends Employee {
  perDiemCost: number;
  accommodationCost: number;
  totalTravel: number;
  total: number;
  busCost: number;
  flightCost: number;
  taxiCost: number;
  perDiemDay: number;
  hotelNight: number;
}

export interface SpecialAssistItem {
  item: string;
  timesPerYear: number;
  days: number;
  people: number;
  rate: number;
}

export interface SpecialAssistData {
  items: SpecialAssistItem[];
  notes: string;
}

export interface OvertimeItem {
  item: string;
  instances: number;
  days: number;
  hours: number;
  people: number;
  rate?: number;
}

export interface OvertimeData {
  salary: number;
  items: OvertimeItem[];
}

export interface Holiday {
  date: string;
  name: string;
}

export interface WorkDayCalculation {
  weekdays: number;
  holidaysOnWeekdays: number;
  totalWorkDays: number;
}

export interface TabConfig {
  id: string;
  label: string;
  icon: React.ReactNode;
}