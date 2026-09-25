export type HeritageCategory = 
  | 'religioso' 
  | 'literario' 
  | 'natural' 
  | 'engenhos' 
  | 'imaterial' 
  | 'ferroviario';

export interface HeritageSite {
  id: string;
  catalogNumber: string;
  name: string;
  category: HeritageCategory;
  categoryLabel: string;
  century: string;
  yearEstablished?: string;
  summary: string;
  fullHistory: string;
  significance: string;
  tourismPotential: string;
  location: {
    district: string;
    coordinates: string;
    access: string;
  };
  visitingInfo: {
    hours: string;
    admission: string;
    recommendedTime: string;
    accessibility: string;
  };
  highlights: string[];
  conservationStatus: 'Preservado' | 'Em Restauração' | 'Tombado' | 'Protegido por APA';
  accentColor: string;
}

export interface TouristRoute {
  id: string;
  name: string;
  slug: string;
  tagline: string;
  duration: string;
  distance: string;
  difficulty: 'Fácil' | 'Moderado' | 'Leve';
  idealFor: string;
  stops: {
    order: number;
    title: string;
    siteId?: string;
    description: string;
    duration: string;
    tip: string;
  }[];
  description: string;
}

export interface LiteraryWork {
  title: string;
  year: number;
  city: string;
  genre: string;
  impact: string;
  excerpt: string;
}

export interface CulinaryTradition {
  name: string;
  origin: string;
  description: string;
  whereToFind: string;
  ingredients: string[];
}

export interface ArtisanTradition {
  craft: string;
  community: string;
  history: string;
  process: string;
  protection: string;
}
