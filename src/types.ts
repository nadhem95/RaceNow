
export type Series = 'GT3' | 'GT4' | 'Porsche Cup' | 'Ferrari Challenge' | 'Lambo Super Trofeo' | 'WEC';

export interface Team {
  id: string;
  name: string;
  series: Series[];
  logoUrl?: string;
  ownerId: string;
}

export interface Driver {
  id: string;
  name: string;
  licenseNumber: string;
  licenseExpiry: string;
  medicalExpiry: string;
  bloodType: string;
  emergencyContact: string;
  bio?: string;
  carNumber: string;
}

export interface RaceWeekend {
  id: string;
  eventName: string;
  track: string;
  startDate: string;
  endDate: string;
  status: 'upcoming' | 'ongoing' | 'completed';
  sessions: Session[];
}

export interface Session {
  id: string;
  type: 'Practice' | 'Qualifying' | 'Race';
  name: string;
  startTime: string;
  durationMinutes: number;
}

export interface Part {
  id: string;
  name: string;
  category: string;
  mileageKm: number;
  maxLifeKm: number;
  status: 'good' | 'warning' | 'replace';
}

export interface IncidentReport {
  id: string;
  weekendId: string;
  driverId: string;
  session: string;
  description: string;
  stewardsLetter?: string;
  createdAt: string;
}
