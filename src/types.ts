export interface Treatment {
  id: string;
  title: string;
  teluguTitle: string; // secondary English title
  description: string;
  benefits: string[];
  iconName: string;
  duration: string;
  suitability: string;
}

export interface Doctor {
  name: string;
  role: string;
  credentials: string;
  bio: string;
  languages: string[];
  education: string[];
  specialty: string;
}

export interface Testimonial {
  id: string;
  author: string;
  rating: number;
  date: string;
  text: string;
  location: string;
  treatmentReceived: string;
}

export interface SmileComparison {
  id: string;
  title: string;
  subtitle: string;
  beforeLabel?: string;
  afterLabel?: string;
  beforeImg: string;
  afterImg: string;
  details: string;
}

// Global Static Data to drive the modular, premium interface
export const CLINIC_SERVICES: Treatment[] = [
  {
    id: "implants",
    title: "Dental Implants",
    teluguTitle: "Biological Bio-Implants",
    description: "Permanently restore missing teeth with clinical-grade titanium implants that look, feel, and function exactly like natural teeth.",
    benefits: ["Life-long durability", "German-engineered biological materials", "Preserves natural jawbone structure", "Pain-free micro-surgical method"],
    iconName: "Shield",
    duration: "2-3 stages • 20 mins per implant",
    suitability: "Single, multiple, or full-arch tooth losses"
  },
  {
    id: "smile-design",
    title: "Smile Designing",
    teluguTitle: "Digital Aesthetics & Veneers",
    description: "A meticulously customized combination of porcelain veneers, laminates, and gingival sculpting to craft your perfect Awwwards-worthy smile.",
    benefits: ["Complete digital smile pre-visualization", "Ultra-thin custom porcelain veneers", "Corrects alignment instantly", "Resistant to stains & wear"],
    iconName: "Sparkles",
    duration: "2-3 sittings",
    suitability: "Discolored, chipped, gapped, or uneven teeth"
  },
  {
    id: "root-canal",
    title: "Root Canal Treatment",
    teluguTitle: "Microscope Root Canal",
    description: "Laser-assisted, modern single-sitting root canals designed to eliminate dental pain completely and salvage infected teeth.",
    benefits: ["Pain-free under computerized anesthesia", "Advanced dental microscopy", "99% success rate", "Finished in an hour"],
    iconName: "FlameKindling",
    duration: "Single sitting • 45-60 mins",
    suitability: "Deep tooth decays, pulpitis, acute severe toothaches"
  },
  {
    id: "cosmetic",
    title: "Cosmetic Dentistry",
    teluguTitle: "Smile Makeovers & Artistry",
    description: "Advanced aesthetic enhancements including composite bonding, gum recontouring, and micro-abrasion for balanced visual harmony.",
    benefits: ["Incredibly conservative tooth preparation", "Invisible tooth-colored aesthetic fillings", "Artistic gum contouring", "Immediate confidence boost"],
    iconName: "Crown",
    duration: "1-2 sittings",
    suitability: "Chipped teeth, minor gaps, gummy smiles"
  },
  {
    id: "whitening",
    title: "Teeth Whitening",
    teluguTitle: "In-Office Laser Whitening",
    description: "In-office Zoom Laser teeth whitening that elevates your smile up to 8 shades brighter safely within a single, luxurious hour.",
    benefits: ["Immediate high-impact results", "Safe for sensitive gums & enamel", "Advanced cold-blue light laser", "Long-lasting brilliant gloss"],
    iconName: "Sun",
    duration: "1 session • 45 mins",
    suitability: "Tea, coffee, tobacco, or aging stains"
  },
  {
    id: "preventive",
    title: "Preventive Dental Care",
    teluguTitle: "Hygiene & Ultrasonic Scaling",
    description: "Ultrasonic scaling, deep polish, and topical fluoride treatments to form a robust shield against decay and periodontal diseases.",
    benefits: ["State-of-the-art ultrasonic cleansing", "Early cavity detection with digital probes", "Deep plaque & tartar removal", "Fresher breath guaranteed"],
    iconName: "Stethoscope",
    duration: "1 session • 30 mins",
    suitability: "Recommended bi-annually for all age groups"
  },
  {
    id: "family-care",
    title: "Family Dental Care",
    teluguTitle: "Comprehensive Family Well-being",
    description: "Friendly, compassionate dental supervision for toddler teeth up to senior crowns, ensuring a fear-free clinical environment.",
    benefits: ["Pediatric-focused dentist rooms", "Caring dental counseling", "Minimal invasive orthodontic screens", "Comprehensive geriatric dental plans"],
    iconName: "Users",
    duration: "Flexible based on family size",
    suitability: "Toddlers, school kids, adults, and seniors"
  },
  {
    id: "emergency",
    title: "Emergency Dental Care",
    teluguTitle: "Urgent Pain & Fracture Support",
    description: "Prompt, immediate dental trauma support, excruciating wisdom pain reliefs, and broken tooth restorations within the same hour.",
    benefits: ["Priority walk-in booking slot", "Immediate pain relief therapy", "Same-day surgical extraction if required", "On-call emergency dentist access"],
    iconName: "Activity",
    duration: "Immediate dynamic triage",
    suitability: "Tooth fractures, direct dental hits, swollen jaws"
  }
];

export const CLINIC_DOCTORS: Doctor[] = [
  {
    name: "Dr. K. Mithra Prasad",
    role: "Chief Dental Surgeon & Implantologist",
    credentials: "BDS, MDS (Oral & Maxillofacial Implantology)",
    bio: "Dr. Mithra Prasad is a leading figure in advanced implant dentistry in Telangana, with over 12 years of clinical excellence. Specializing in computer-guided biological implants and painless bone graft therapies, he has successfully completed 2,500+ implants, transforming thousands of smiles.",
    languages: ["Telugu", "English", "Hindi"],
    education: [
      "MDS in Oral Implantology - Certified German Implant Academy",
      "BDS - Dr. NTR University of Health Sciences",
      "Senior Fellowship in Digital Dental Workflows (Sweden)"
    ],
    specialty: "Full-Mouth Dental Reconstruction, Advanced Implant Placements, Oral Maxillofacial Micro-Surgery"
  },
  {
    name: "Dr. S. Deepthi",
    role: "Co-Founder & Aesthetic Restorative Dentist",
    credentials: "BDS, Fellowship in Cosmetic Dentistry (FCD)",
    bio: "Dr. Deepthi is passion-driven about dental art. An expert in Cosmetic Restorations, Veneers, and Digital Smile Designing, she approaches every smile as a custom-tailored canvas, combining biological safety with elite global aesthetics.",
    languages: ["Telugu", "English"],
    education: [
      "Fellowship in Aesthetic Dentistry (FCD) - Smile USA Academy",
      "BDS - Army College of Dental Sciences",
      "Certified Provider for Invisalign & Clear Aligners"
    ],
    specialty: "Digital Veneer Applications, Hollywood Smile Design, Pediatric Preventive Dentistry"
  }
];

export const CLINIC_REVIEWS: Testimonial[] = [
  {
    id: "rev_1",
    author: "Mallesh Goud",
    rating: 5,
    date: "2 weeks ago",
    text: "Excellent treatment! Dr. Mithra Prasad completed my root canal and ceramic crown in just a single sitting. Absolutely zero pain. The clinic is very clean, premium, and uses advanced 3D scanning. Best dentist in Bhuvanagiri town.",
    location: "Bhuvanagiri",
    treatmentReceived: "Single Sitting Root Canal"
  },
  {
    id: "rev_2",
    author: "Anitha Reddy",
    rating: 5,
    date: "1 month ago",
    text: "I went to Mithra Dental Clinic for Smile Designing before my marriage. Dr. Deepthi did an amazing job with laminates. My relatives were surprised to see my bright, confident smile. I highly recommend their cosmetic services!",
    location: "Medikuntapally, Bhuvanagiri",
    treatmentReceived: "Digital Smile Designing"
  },
  {
    id: "rev_3",
    author: "Venkatesh K.",
    rating: 5,
    date: "2 months ago",
    text: "I was extremely afraid of dental surgery but needed dental implants. Dr. Mithra Prasad made me feel highly comfortable. The computerized implant placement was done in 25 minutes. Extremely professional care and affordable premium standards.",
    location: "Valigonda",
    treatmentReceived: "German Dental Implants"
  },
  {
    id: "rev_4",
    author: "Dr. Sandeep Vardhan",
    rating: 5,
    date: "3 months ago",
    text: "Aesthetically brilliant facility matching metro standards. They use world-class dental chairs, autoclaves, and low-radiation 3D OPG imaging scanners. The doctors are highly knowledgeable and communicate with clinical clarity.",
    location: "Bibi Nagar",
    treatmentReceived: "Comprehensive Scaling & Preventive Care"
  }
];

export const SMILE_COMPARISONS: SmileComparison[] = [
  {
    id: "align",
    title: "Aesthetic Veneer Restoration",
    subtitle: "Correction of severe yellowing & tooth spacing",
    beforeLabel: "Before Veneers",
    afterLabel: "Hollywood Smile",
    beforeImg: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=400", // Representative high-quality dental close-ups
    afterImg: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&q=80&w=400",
    details: "Ultra-thin custom porcelain laminates applied over 2 sittings to eliminate gaps and provide a biological, light-reflective natural shine."
  },
  {
    id: "implants_comp",
    title: "Computer-Guided Implant Placements",
    subtitle: "Full upper-arch biological reconstruction",
    beforeLabel: "Extracted State",
    afterLabel: "Implanted Crown",
    beforeImg: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&q=80&w=400",
    afterImg: "https://images.unsplash.com/photo-1579684389782-64d84b5e9053?auto=format&fit=crop&q=80&w=400",
    details: "Implantation of 4 premium German fixtures integrated with custom zirconia crowns for complete mastication restoral."
  }
];
