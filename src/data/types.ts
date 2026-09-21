export interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  type: 'Full-time' | 'Part-time' | 'Contract' | 'Remote' | 'Internship';
  salary: string;
  description: string;
  requirements: string[];
  benefits: string[];
  postedDate: string;
  category: string;
  logo: string;
  urgent: boolean;
}

export interface Person {
  id: string;
  name: string;
  title: string;
  company: string;
  location: string;
  avatar: string;
  skills: string[];
  experience: number;
  bio: string;
  education: string;
  openToWork: boolean;
  connections: number;
  endorsements: number;
}
