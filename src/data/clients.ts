export interface Client {
  id: string;
  name: string;
  website: string;
  logo: string;
  sector: string;
}

export const clients: Client[] = [
  {
    id: 'la-magdalena',
    name: 'La Magdalena',
    website: 'https://www.lamagdalena.com.co',
    logo: '/assets/images/cases/logo-magdalena.png',
    sector: 'Impact Storytelling'
  },
  {
    id: 'true',
    name: 'TRUE',
    website: 'https://www.trueshop.co',
    logo: '/assets/images/cases/logo-true.png',
    sector: 'Fashion'
  },
  {
    id: 'hua-naturals',
    name: 'HUA Naturals',
    website: 'https://www.huanaturals.com',
    logo: '/assets/images/cases/logo-hua-naturals.png',
    sector: 'Reality-Hacking'
  },
  {
    id: 'EAFIT',
    name: 'EAFIT',
    website: 'https://www.eafit.edu.co',
    logo: '/assets/images/cases/logo-eafit.png',
    sector: 'Educación Superior'
  }
];