export type ServiceId = '2d-plan' | '3d-elevation' | '3d-exterior' | '3d-interior' | '3d-exterior-design' | '3d-interior-design';

export interface ServiceItem {
  id: ServiceId;
  number: string;
  title: string;
  tagline: string;
  description: string;
  image: string;
  deliverables: string[];
  idealFor: string;
}

export type ProjectCategory = 'all' | '3d-interiors' | '3d-exteriors' | 'elevations' | 'floor-plans' | 'residential' | 'commercial';

export interface ProjectItem {
  id: string;
  title: string;
  category: ProjectCategory;
  categoryLabel: string;
  type: 'Residential' | 'Commercial' | 'Mixed-Use';
  locationTag: string;
  image: string;
  description: string;
  specs: {
    serviceType: string;
    spaceType: string;
    dimensionScope?: string;
    softwareTech?: string;
  };
  highlights: string[];
}

export interface ProcessStep {
  step: string;
  title: string;
  tagline: string;
  description: string;
  output: string;
  duration?: string;
}

export interface PhilosophyPillar {
  title: string;
  description: string;
  image: string;
  quote: string;
}

export interface DesignStage {
  id: string;
  stepNumber: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  features: string[];
}

export interface InquiryFormData {
  name: string;
  phone: string;
  email?: string;
  serviceType: string;
  propertyType: string;
  areaSize: string;
  location: string;
  projectNotes: string;
}
