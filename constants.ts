import { ContactInfo, Course, GalleryItem, NavItem, Instructor, Testimonial } from './types';

export const COMPANY_NAME = "Vio Auto Class";

export const NAV_ITEMS: NavItem[] = [
  { label: "Acasă", href: "#home" },
  { label: "Despre Noi", href: "#about" },
  { label: "Cursuri", href: "#courses" },
  { label: "Tarife", href: "#pricing" },
  { label: "Informații Utile", href: "#info" },
  { label: "Galerie Auto", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

export const CONTACT_INFO: ContactInfo = {
  phone: "0765 777 794",
  secondaryPhones: ["0737.275.883", "0767.466.530"],
  email: "office@vioautoclass.ro",
  address: "Drumul Sarii nr. 115, Sector 6, București",
  // Approximate coordinates for Drumul Sarii 115
  mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2849.636653585097!2d26.048708!3d44.420138!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b201f057863b1b%3A0x6a2c2763260840c8!2sStrada%20Drumul%20S%C4%83rii%20115%2C%20Bucure%C8%99ti!5e0!3m2!1sen!2sro!4v1650000000000!5m2!1sen!2sro"
};

export const COURSES: Course[] = [
  {
    id: "cat-b",
    category: "B",
    title: "Categoria B",
    description: "Permis auto pentru autoturisme. Prețul variază în funcție de mașina aleasă.",
    price: "Vezi Tabel Tarife",
    duration: "30 Ore Conducere / 24 Ore Teorie",
    features: ["Alegere mașină (BMW, Mercedes, VW)", "Cutie Manuală sau Automată", "Plată în rate disponibile", "Pregătire dosar"],
    image: "/image_2.jpg"
  },
  {
    id: "cat-c",
    category: "C",
    title: "Categoria C",
    description: "Pentru transport de mărfuri. Necesită permis categoria B obținut anterior.",
    price: "2800 RON",
    duration: "40 Ore",
    features: ["Camioane moderne", "Instructori experimentați", "Include C+E la pachet promoțional"],
    image: "/image_1.jpg"
  },
  {
    id: "cat-ce",
    category: "CE",
    title: "Categoria CE",
    description: "Extensie pentru remorcă la categoria C. Ideal pentru șoferii profesioniști.",
    price: "1500 RON",
    duration: "10 Ore",
    features: ["Antrenament manevre speciale", "Reducere dacă se face cu Cat C"],
    image: "/image_1.jpg"
  }
];

export const CAR_FLEET_PRICING = [
  {
    model: "VW Polo",
    transmission: "Manuală",
    price: "2400 RON",
  },
  {
    model: "VW Golf 7 Diesel",
    transmission: "Manuală",
    price: "2650 RON",
  },
  {
    model: "VW Golf 7 Benzină",
    transmission: "Manuală",
    price: "2650 RON",
  },
  {
    model: "BMW Seria 1 Diesel",
    transmission: "Manuală",
    price: "2650 RON",
  },
  {
    model: "Mercedes Clasa C",
    transmission: "Automată",
    price: "2750 RON",
  },
  {
    model: "NOU: BMW Seria 1",
    transmission: "Automată",
    price: "3100 RON",
  }
];

export const EXTRA_FEES = [
  { service: "Ședință Suplimentară (Cutie Manuală)", price: "200 RON / ședință" },
  { service: "Ședință Suplimentară (Mercedes Clasa C)", price: "200 RON / ședință" },
  { service: "Ședință Suplimentară (BMW Seria 1 Automat)", price: "250 RON / ședință" },
  { service: "Taxă Închiriere Auto Examen", price: "300 RON" },
  { service: "Școlarizare Limba Engleză", price: "3100 RON" }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "g1",
    src: "/image_4.jpg",
    alt: "",
    category: "Parc Auto"
  },
  {
    id: "g2",
    src: "/image_2.jpg",
    alt: "",
    category: "Categoria B"
  },
  {
    id: "g3",
    src: "/image_5.jpg",
    alt: "",
    category: "Teorie"
  },
  {
    id: "g4",
    src: "/image_1.jpg",
    alt: "",
    category: "Categoria C/CE"
  },
  {
    id: "g5",
    src: "/image_3.jpg",
    alt: "",
    category: "Categoria B"
  },
  {
    id: "g6",
    src: "/image_4.jpg",
    alt: "",
    category: "Echipă"
  }
];

export const INSTRUCTORS: Instructor[] = [
  {
    id: "inst-1",
    name: "Marius Ionescu",
    role: "Instructor Auto Categoria B",
    experience: "15 ani experiență",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400&h=400"
  },
  {
    id: "inst-2",
    name: "Elena Popa",
    role: "Instructor Auto Categoria B/C",
    experience: "10 ani experiență",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400&h=400"
  },
  {
    id: "inst-3",
    name: "Cristian Radu",
    role: "Profesor Legislație Rutieră",
    experience: "20 ani experiență",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400&h=400"
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "t1",
    name: "Andrei M.",
    text: "O școală de nota 10! Am luat permisul din prima încercare datorită domnului Marius.",
    rating: 5
  },
  {
    id: "t2",
    name: "Maria S.",
    text: "Instructorii sunt foarte calmi și explică totul pe înțelesul tuturor. Recomand cu drag!",
    rating: 5
  },
  {
    id: "t3",
    name: "George V.",
    text: "Program flexibil și mașini noi. Experiența a fost mult mai plăcută decât mă așteptam.",
    rating: 4
  }
];

export const AI_SYSTEM_INSTRUCTION = `
You are the AI assistant for Vio Auto Class, a top driving school in București (Drumul Sarii, Sector 6).
Your goal is to help potential students with information about courses, pricing, car fleet, and requirements.

Use the following data to answer questions:

PRICING (TARIFE) - Category B depends on the car:
- BMW Seria 1 Automatic (NEW): 3100 RON
- BMW Seria 1 Diesel Manual: 2650 RON
- Mercedes C Class Automatic: 2750 RON
- VW Golf 7 Petrol Manual: 2650 RON
- VW Golf 7 Diesel Manual: 2650 RON
- VW Polo Manual: 2400 RON

OTHER CATEGORIES:
- Categoria C: 2800 RON.
- Categoria CE: 1500 RON.

EXTRA FEES:
- Extra session (Manual): 200 RON
- Extra session (Mercedes C): 200 RON
- Extra session (BMW Auto): 250 RON
- Exam car rental: 300 RON
- English schooling: 3100 RON

THEORY TRAINING (LEGISLATIE):
- Total 24 hours: 16h legislation, 4h preventive driving, 2h mechanics, 2h first aid.
- Modern classroom.

REQUIRED DOCUMENTS (ACTE NECESARE):
- ID Copy (Copie CI)
- Medical Record (Fisa Medicala)
- Psychological Test (Test Psihologic)
- Criminal Record for Auto Exam (Cazier Judiciar)

CONTACT:
- Phone Secretariat: ${CONTACT_INFO.phone}
- Other Phones: ${CONTACT_INFO.secondaryPhones?.join(', ')}
- Location: ${CONTACT_INFO.address}

Tone: Professional, encouraging, polite, and helpful. Use Romanian language primarily.
Keep answers concise (under 100 words).
`;
