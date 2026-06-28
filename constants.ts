import { ContactInfo, Course, GalleryItem, NavItem, Instructor, Testimonial } from './types';

export const COMPANY_NAME = "Vio AutoClass";

export const NAV_ITEMS: NavItem[] = [
  { label: "Acasă", href: "#home" },
  { label: "Despre Noi", href: "#about" },
  { label: "Cursuri", href: "#courses" },
  { label: "Informații Utile", href: "#info" },
  { label: "Galerie Auto", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

export const CONTACT_INFO: ContactInfo = {
  phone: "0765 777 794",
  secondaryPhones: ["0737.275.883", "0767.466.530"],
  email: "bunea_mirel@yahoo.com",
  address: "Drumul Sarii nr. 115, Sector 6, București",
  // Approximate coordinates for Drumul Sarii 115
  mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2849.636653585097!2d26.048708!3d44.420138!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b201f057863b1b%3A0x6a2c2763260840c8!2sStrada%20Drumul%20S%C4%83rii%20115%2C%20Bucure%C8%99ti!5e0!3m2!1sen!2sro!4v1650000000000!5m2!1sen!2sro"
};

export const COURSES: Course[] = [
  {
    id: "cat-b-1",
    category: "",
    title: "BMW Seria 1 Cutie Automata",
    description: "Diesel",
    price: "3100 RON",
    duration: "Total sedinte (15). Durata sedinta (1 ora si 40 de min).",
    features: ["Pret sedinta suplimentara (250 RON)", "Orele de legislatie rutiera incluse in pret."],
    image: "/bmw_negru_fata_result.avif"
  },
  {
    id: "cat-b-2",
    category: "",
    title: "BMW Seria 1 Manual",
    description: "Diesel",
    price: "2850 RON",
    duration: "Total sedinte (15). Durata sedinta (1 ora si 40 de min).",
    features: ["Pret sedinta suplimentara (220 RON)", "Orele de legislatie rutiera incluse in pret."],
    image: "/bmw_alb2_fata_result.avif"
  },
  {
    id: "cat-b-2-bmw",
    category: "",
    title: "BMW Seria 1 Manual",
    description: "Diesel",
    price: "2850 RON",
    duration: "Total sedinte (15). Durata sedinta (1 ora si 40 de min).",
    features: ["Pret sedinta suplimentara (220 RON)", "Orele de legislatie rutiera incluse in pret."],
    image: "/bmw_alb_result.avif"
  },
  {
    id: "cat-b-3",
    category: "",
    title: "Mercedes Clasa C",
    description: "Benzina",
    price: "2850 RON",
    duration: "Total sedinte (15). Durata sedinta (1 ora si 40 de min).",
    features: ["Pret sedinta suplimentara (250 RON)", "Orele de legislatie rutiera incluse in pret."],
    image: "/image_4_result.avif"
  },
  {
    id: "cat-b-4",
    category: "",
    title: "Volkswagen Golf 7 Manual ",
    description: "Benzina",
    price: "2850 RON",
    duration: "Total sedinte (15). Durata sedinta (1 ora si 40 de min).",
    features: ["Pret sedinta suplimentara (220 RON)", "Orele de legislatie rutiera incluse in pret."],
    image: "/ww_alb_fata_result.avif"
  },
  {
    id: "cat-b-5",
    category: "",
    title: "Volkswagen Golf 7 Manual",
    description: "Diesel",
    price: "2850 RON",
    duration: "Total sedinte (15). Durata sedinta (1 ora si 40 de min).",
    features: ["Pret sedinta suplimentara (220 RON)", "Orele de legislatie rutiera incluse in pret."],
    image: "/ww_gri_fata_result.avif"
  },
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
  { service: "Taxă Închiriere Auto Examen", price: "300 RON" },
  { service: "Școlarizare Limba Engleză", price: "3100 RON" }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  // {
  //   id: "g1",
  //   src: "/bmw_negru_sofer_result.avif",
  //   alt: "",
  //   category: ""
  // },
  // {
  //   id: "g2",
  //   src: "/bmw_alb_sofer_result.avif",
  //   alt: "",
  //   category: ""
  // },
  // {
  //   id: "g3",
  //   src: "/ww_gri_sofer_result.avif",
  //   alt: "",
  //   category: ""
  // },
  //   {
  //   id: "g4-1",
  //   src: "/bmw2_instructor.avif",
  //   alt: "",
  //   category: ""
  // },
  //   {
  //   id: "g4-2",
  //   src: "/ww7_alb_instructor.avif",
  //   alt: "",
  //   category: ""
  // },
  {
    id: "g4",
    src: "/bmw_negru_spate_result.avif",
    alt: "",
    category: ""
  },
  {
    id: "g5",
    src: "/bmw_alb2_spate_result.avif",
    alt: "",
    category: ""
  },
  {
    id: "g6",
    src: "/ww_gri_fata_result.avif",
    alt: "",
    category: ""
  },
  {
    id: "g7",
    src: "/bmw_negru_fata_result.avif",
    alt: "",
    category: ""
  },
  {
    id: "g8",
    src: "/bmw_alb2_fata_result.avif",
    alt: "",
    category: ""
  },
  {
    id: "g9",
    src: "/ww_alb_fata_result.avif",
    alt: "",
    category: ""
  },
  {
    id: "g10",
    src: "/ww_alb_spate_result.avif",
    alt: "",
    category: ""
  },
  {
    id: "g11",
    src: "/ww_gri_spate_result.avif",
    alt: "",
    category: ""
  },
  {
    id: "g9",
    src: "/bmw_alb_spate_result.avif",
    alt: "",
    category: ""
  }
];

export const INSTRUCTORS: Instructor[] = [
  {
    id: '1',
    name: 'Lucretia Paun',
    role: 'Instructor categoria B',
    experience: '24 ani',
    image: '/bmw_alb_sofer_result.avif',
    reviews: [
      { id: '1r1', username: 'Eva Iordache', rating: 5, text: 'Împreună cu doamna Lucreția am reușit să iau traseul cu 0 punte de penalizare! Pe această cale aș vrea să îi mulțumesc pentru toată răbdarea, blândețea și îndrumarea❤️!Recomand cu sufletul deschis această școală de șoferi, fiecare persoana prezintă seriozitate și multă implicare! Mai ales o recomand pe doamna Lucreția, o foarte bună instructoare!  Va mulțumesc 🙏🏼!' },
      { id: '1r2', username: 'Alexandra Simion', rating: 5, text: 'O școală de șoferi cu un personal cald si primitor. Toată lumea este foarte înțelegătoare. Doamna Lucreția este un instructor calm, răbdător și crează o atmosferă relaxată. Explică totul clar și de câte ori este nevoie!Recomand cu încredere!' }
    ],
  },
  {
    id: '2',
    name: 'Bunea Viorel',
    role: 'Instructor categoria B',
    experience: '23 ani',
    image: '/bmw_negru_sofer_result.avif',
    reviews: [
      { id: '2r1', username: 'Tita-Siteavu Miruna-Praxiteea', rating: 5, text: 'Recomand tuturor aceasta scoala de soferi, in special pe domnul Viorel Bunea, care este foarte calm si are multa rabdare cu cursantii, dar in acelasi timp exigent si cu multa atentie la detalii! Am luat traseul din prima incercare datorita dumnealui si pot spune ca pregateste extrem de bine cursantii pentru a fi niste soferi foarte buni!' },
            { id: '2r2', username: 'Alia Husein', rating: 5, text: 'Ii sunt recunoscătoare  domnului Viorel Bunea pentru tot ce m-a învățat și pentru răbdarea pe care a avut-o cu mine ! Am luat permisul din prima mulțumită dansului ! Recomand cu încredere si succes tuturor ! 🙏🏼 '},
      { id: '2r3', username: 'Alexandra Sultana', rating: 5, text: 'După o experiență neplăcută cu un alt instructor de la o altă școală de șoferi, am avut norocul să-l întâlnesc pe domnul Viorel Bunea în luna ianuarie. Pentru mine, care sunt perfecționistă și pun mare preț pe respectarea programului, Viorel a fost instructorul perfect. A fost întotdeauna punctual, mi-a vorbit întotdeauna foarte frumos, ceea ce m-a ajutat să mă simt încrezătoare alături de el. Este un om glumeț, dar în același timp foarte exigent, iar acest echilibru m-a ajutat să progresez rapid și eficient. Datorită metodei sale de predare și a atenției acordate nevoilor mele individuale, am reușit să obțin permisul de conducere din prima încercare. Viorel m-a sprijinit întotdeauna cu programul și a avut răbdare să facem toate tipurile de manevre, de la parcări de diverse tipuri până la mersul înapoi și întoarceri în trei mișcări. În timpul ședințelor de conducere, Viorel merge mereu pe traseu, explicând fiecare loc, fiecare semn și fiecare situație în detaliu. Este un om deosebit și m-am simțit minunat alături de el! Recomand cu căldură serviciile lui Viorel Bunea tuturor celor care își doresc să învețe să conducă într-un mod profesional și plăcut.' }
    ],
  },
  {
    id: '3',
    name: 'Constantin Andrei-Ionuț',
    role: 'Instructor categoria B',
    experience: '12 ani',
    image: '/bmw2_instructor.avif',
    reviews: [
      { id: '3r1', username: 'Ruxandra Lupului', rating: 5, text: 'Recomand instructorul Ionut, seriozitate, punctualitea si mai ales tactica. Fata mea a luat traseul fara alte ore suplimentare.' },
      { id: '3r2', username: 'Andreea Aniculi', rating: 5, text: 'Multumiri instructorului auto, Ionut, pentru rabdare si increderea acordata in tot procesul de dobândire a acestei noi abilități, care era o necunoscuta totala pentru mine. Multumiri doamnei secretare Nica pentru sprijinul constant oferit si doamnei Luci pentru motivare.' },
      { id: '3r3', username: 'Sofia Isac', rating: 5, text: 'Ionut este un instructor extrem de bun, daca ii asculti sfaturile este imposibil sa nu iei permisul!! Te ghideaza pas cu pas si este intelegator, iti explica de cate ori este nevoie. Recomand 100%' },
    ],
  },
  {
    id: '4',
    name: 'Briceag Viorel',
    role: 'Instructor categoria B',
    experience: '20 ani',
    image: '/ww7_alb_instructor.avif',
    reviews: [
      { id: '4r1', username: 'Amalia Morariu', rating: 5, text: 'Recomand cu toată încrederea această școală, în special pe domnul instructor Viorel Briceag. Datorită dumnealui am reusit sa iau traseul din prima!La fiecare ședință am lucrat pe traseele de examen, primind explicații clare și sfaturi utile. Am repetat fiecare manevra la care aveam emotii ori de cate ori a fost nevoie si primeam explicatii clare si complete la orice intrebare. Am apreciat atmosfera relaxanta si increzatoare, care m-au ajutat să scap de emoții. Pe lângă vibe-ul bun, este un profesionist desăvârșit: punctual, serios și dedicat.Recomand cu încredere tuturor celor care vizează succesul din prima și o bază solidă de siguranță pentru momentul când vor fi singuri la volan.🚙' },
      { id: '4r2', username: 'Dalia Arapalea', rating: 5, text: 'Recomand cu cea mai mare încredere această școală de șoferi, cât și pe cel mai bun instructor, d-nul Viorel Briceag, un om de nota 1000 din toate punctele de vedere! Mi a dat multă încredere, curaj , dispoziție bună de fiecare dată și m a ajutat să devin șoferiță.Vă mulțumeeeesc mult!' },
      { id: '4r3', username: 'Mihaela Cristea', rating: 5, text: 'O școală de șoferi extraordinară, cu instructori profesioniști. Am avut ocazia de a lucra împreună cu domnul instructor Viorel Briceag, un om deosebit, calm și răbdător cu elevii. A fost ca un părinte pentru mine. Procesul de învățare a fost unul foarte plăcut, niciodată nu am simțit presiune din partea domnului instructor în raport cu greșelile pe care le făceam. Am primit susținere necondiționată pentru a mă întări și a obține permisul. Înscrierea la această școală de șoferi mi-a oferit o experiență foarte plăcută, o recomand din tot sufletul tuturor celor care își doresc să obțină permisul de conducere.' },
    ],
  },
  {
    id: '5',
    name: 'Vintila Valentin',
    role: 'Instructor categoria B',
    experience: '7 ani',
    image: '/ww_gri_sofer_result.avif',
    reviews: [
      { id: '5r1', username: 'Andrei Radanta', rating: 5, text: 'Pentru mine experienta cu scoala de soferi Vio Auto Class a fost una foarte buna, dupa o experienta neplacuta cu alta scoala. Intr-o singura luna sub indrumarea domnului instructor Valentin Vintila am reusit sa promovez examenul practic la prima incercare. De asemenea, multumiri intregului colectiv Vio Auto Class.' },
      { id: '5r2', username: 'Danut Manda', rating: 5, text: 'Fiica mea a luat permisul de conducere din prima încercare. Mulțumesc dn-lui instructor Valentin. Totul a mers bine, recomand cu căldură.' },
      { id: '5r3', username: 'Teodora Popescu', rating: 5, text: 'Recomand călduros școala de șoferi Vioautoclass pentru calitatea serviciilor oferite. Doresc să îi mulțumesc în mod special dlui. Valentin Vintilă pentru profesionalismul și răbdarea de care a dat dovadă pe parcursul lecțiilor de condus. Explicațiile clare și abordarea calmă m-au ajutat să învăț rapid, să îmi depășesc temerile și să promovez examenul din prima încercare.' }
    ],
  },


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
You are the AI assistant for Vio AutoClass, a top driving school in București (Drumul Sarii, Sector 6).
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
