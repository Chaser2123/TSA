export const RESOURCES = [
  // ── Health Services ──────────────────────────────────────────────────────
  {
    slug: "saratoga-springs-clinic",
    category: "Health Services",
    title: "Saratoga Springs Community Clinic",
    excerpt: "Free and low-cost medical care for all residents regardless of insurance status.",
    description: `The Saratoga Springs Community Clinic provides accessible healthcare to all residents of the area. Services include general practitioner visits, preventative care, basic diagnostics, and referrals to specialists.

No one is turned away due to inability to pay. A sliding scale fee structure is available for uninsured or underinsured residents.`,
    eligibility: "Open to all Saratoga Springs residents. Sliding scale fees available for low-income individuals and families. No insurance required.",
    hours: [
      { day: "Monday – Friday", time: "8:00 AM – 6:00 PM" },
      { day: "Saturday", time: "9:00 AM – 1:00 PM" },
      { day: "Sunday", time: "Closed" },
    ],
    contact: {
      name: "Clinic Reception",
      phone: "(801) 555-1001",
      email: "clinic@saratogasprings.com",
      address: "120 Health Way, Saratoga Springs, UT",
    },
  },
  {
    slug: "mental-health-services",
    category: "Health Services",
    title: "Free Mental Health Support",
    excerpt: "Free counselling and mental health support services available to all residents.",
    description: `Our mental health programme connects residents with licensed counsellors and therapists at no cost. Services include individual therapy, group sessions, crisis support, and referrals to specialised care.

Sessions are confidential and available in person or via telehealth for those unable to attend in person.`,
    eligibility: "Available to all residents aged 12 and over. Parental consent required for those under 18. Priority given to those without private health insurance.",
    hours: [
      { day: "Monday – Thursday", time: "9:00 AM – 7:00 PM" },
      { day: "Friday", time: "9:00 AM – 4:00 PM" },
      { day: "Saturday – Sunday", time: "Closed" },
    ],
    contact: {
      name: "Mental Health Office",
      phone: "(801) 555-1002",
      email: "mentalhealth@saratogasprings.com",
      address: "45 Wellness Drive, Saratoga Springs, UT",
    },
  },

  // ── Education ────────────────────────────────────────────────────────────
  {
    slug: "after-school-tutoring",
    category: "Education",
    title: "After-School Tutoring Programme",
    excerpt: "Free tutoring for K-12 students in core subjects including math, reading, and science.",
    description: `The After-School Tutoring Programme provides free academic support to students in grades K through 12. Volunteer tutors and certified teachers assist students with homework, exam preparation, and foundational skills.

Sessions are held at the public library and the youth center on alternating days.`,
    eligibility: "Open to all K-12 students residing in Saratoga Springs. Students must be enrolled in a local school. Registration required — contact the programme coordinator.",
    hours: [
      { day: "Monday, Wednesday, Friday", time: "3:30 PM – 6:00 PM" },
      { day: "Tuesday, Thursday", time: "3:30 PM – 5:30 PM" },
      { day: "Saturday – Sunday", time: "Closed" },
    ],
    contact: {
      name: "Programme Coordinator",
      phone: "(801) 555-2001",
      email: "tutoring@saratogasprings.com",
      address: "Saratoga Springs Public Library, 200 Library Lane, UT",
    },
  },
  {
    slug: "adult-literacy-program",
    category: "Education",
    title: "Adult Literacy and ESL Classes",
    excerpt: "Free literacy and English as a Second Language classes for adults in the community.",
    description: `Our Adult Literacy and ESL programme supports adults who want to improve their reading, writing, and English language skills. Classes are small, welcoming, and taught by qualified instructors.

Whether you are looking to improve your literacy for employment, daily life, or personal growth, this programme is here to help.`,
    eligibility: "Open to all adults aged 18 and over. No prior education level required. ESL classes available for non-native English speakers at all proficiency levels.",
    hours: [
      { day: "Tuesday and Thursday", time: "10:00 AM – 12:00 PM" },
      { day: "Saturday", time: "10:00 AM – 1:00 PM" },
      { day: "Other days", time: "Closed" },
    ],
    contact: {
      name: "Adult Education Office",
      phone: "(801) 555-2002",
      email: "adulted@saratogasprings.com",
      address: "City Community Centre, 300 Civic Plaza, Saratoga Springs, UT",
    },
  },

  // ── Housing Support ───────────────────────────────────────────────────────
  {
    slug: "rental-assistance",
    category: "Housing Support",
    title: "Emergency Rental Assistance",
    excerpt: "Financial assistance for residents at risk of eviction or housing instability.",
    description: `The Emergency Rental Assistance programme provides short-term financial support to residents facing eviction or significant housing instability. Funds can be used for overdue rent, utility bills, and security deposits.

Applications are reviewed on a rolling basis and decisions are typically made within 5 business days.`,
    eligibility: "Must be a Saratoga Springs resident. Household income must be at or below 80% of area median income. Must demonstrate risk of housing instability. Documentation of hardship required.",
    hours: [
      { day: "Monday – Friday", time: "9:00 AM – 5:00 PM" },
      { day: "Saturday – Sunday", time: "Closed" },
    ],
    contact: {
      name: "Housing Assistance Office",
      phone: "(801) 555-3001",
      email: "housing@saratogasprings.com",
      address: "City Hall, 1 Civic Center Drive, Saratoga Springs, UT",
    },
  },
  {
    slug: "homeowner-support",
    category: "Housing Support",
    title: "Homeowner Repair Programme",
    excerpt: "Free or subsidised home repairs for eligible low-income homeowners.",
    description: `The Homeowner Repair Programme assists low-income homeowners with essential repairs to maintain safe and habitable living conditions. Eligible repairs include roofing, plumbing, electrical work, and accessibility modifications.

Work is carried out by licensed contractors coordinated through the city.`,
    eligibility: "Must own and occupy the home as primary residence. Must meet income eligibility guidelines (at or below 60% of area median income). Home must be located within Saratoga Springs city limits.",
    hours: [
      { day: "Monday – Thursday", time: "8:00 AM – 4:30 PM" },
      { day: "Friday", time: "8:00 AM – 12:00 PM" },
      { day: "Saturday – Sunday", time: "Closed" },
    ],
    contact: {
      name: "Housing Programmes Team",
      phone: "(801) 555-3002",
      email: "repairs@saratogasprings.com",
      address: "City Hall, 1 Civic Center Drive, Saratoga Springs, UT",
    },
  },

  // ── Employment ────────────────────────────────────────────────────────────
  {
    slug: "job-placement-services",
    category: "Employment",
    title: "Job Placement Services",
    excerpt: "Free job matching, resume help, and interview coaching for local residents.",
    description: `Our Job Placement Services team connects residents with local employers and provides hands-on support throughout the job search process. Services include resume writing, interview preparation, skills assessments, and direct referrals to hiring employers.

We work with businesses across retail, healthcare, trades, and administration.`,
    eligibility: "Open to all Saratoga Springs residents aged 16 and over who are currently unemployed or seeking new employment. No restrictions on education level or work history.",
    hours: [
      { day: "Monday – Friday", time: "9:00 AM – 5:00 PM" },
      { day: "Saturday", time: "10:00 AM – 2:00 PM" },
      { day: "Sunday", time: "Closed" },
    ],
    contact: {
      name: "Employment Services",
      phone: "(801) 555-4001",
      email: "jobs@saratogasprings.com",
      address: "180 Commerce Street, Saratoga Springs, UT",
    },
  },
  {
    slug: "career-development-workshops",
    category: "Employment",
    title: "Career Development Workshops",
    excerpt: "Free workshops covering job skills, financial literacy, and career planning.",
    description: `Our Career Development Workshop series runs throughout the year and covers topics including workplace communication, financial literacy, small business basics, digital skills, and career planning.

Workshops are held in person and online, and are free to attend. Certificates of completion are provided for select courses.`,
    eligibility: "Open to all residents aged 18 and over. Some workshops have limited capacity — early registration is recommended. No prerequisites required for most sessions.",
    hours: [
      { day: "Workshops vary", time: "See schedule online" },
      { day: "Registration office", time: "Mon – Fri 9:00 AM – 4:00 PM" },
    ],
    contact: {
      name: "Workshops Coordinator",
      phone: "(801) 555-4002",
      email: "workshops@saratogasprings.com",
      address: "180 Commerce Street, Saratoga Springs, UT",
    },
  },

  // ── Transport ─────────────────────────────────────────────────────────────
  {
    slug: "community-bus-service",
    category: "Transport",
    title: "Community Bus Service",
    excerpt: "Free bus routes connecting key areas of Saratoga Springs for eligible residents.",
    description: `The Saratoga Springs Community Bus Service operates several routes connecting residential areas to the city center, medical facilities, schools, and shopping areas. The service is free for seniors, people with disabilities, and low-income cardholders.

Route maps and timetables are available at City Hall and the public library.`,
    eligibility: "Free for residents aged 65 and over, residents with a valid disability card, and low-income residents with a Community Transport Card. Standard fare applies to all other residents.",
    hours: [
      { day: "Monday – Friday", time: "6:30 AM – 8:00 PM" },
      { day: "Saturday", time: "8:00 AM – 6:00 PM" },
      { day: "Sunday", time: "9:00 AM – 3:00 PM" },
    ],
    contact: {
      name: "Transport Office",
      phone: "(801) 555-5001",
      email: "transport@saratogasprings.com",
      address: "City Transit Hub, 50 Station Road, Saratoga Springs, UT",
    },
  },
  {
    slug: "ride-share-programme",
    category: "Transport",
    title: "Volunteer Ride-Share Programme",
    excerpt: "Volunteer-driven rides for seniors and people with disabilities to medical appointments.",
    description: `Our Volunteer Ride-Share Programme connects residents who need transport to medical appointments, grocery stores, and essential services with trained volunteer drivers.

Rides must be booked at least 48 hours in advance. The service operates within a 20-mile radius of the city center.`,
    eligibility: "Available to residents aged 65 and over, or residents with a documented disability that prevents them from driving or using public transport. Proof of eligibility required at registration.",
    hours: [
      { day: "Monday – Friday", time: "8:00 AM – 5:00 PM" },
      { day: "Saturday", time: "9:00 AM – 1:00 PM" },
      { day: "Sunday", time: "Closed" },
    ],
    contact: {
      name: "Ride-Share Coordinator",
      phone: "(801) 555-5002",
      email: "rideshare@saratogasprings.com",
      address: "City Transit Hub, 50 Station Road, Saratoga Springs, UT",
    },
  },

  // ── Family Services ───────────────────────────────────────────────────────
  {
    slug: "childcare-assistance",
    category: "Family Services",
    title: "Childcare Assistance Programme",
    excerpt: "Subsidised childcare for working families who meet income eligibility requirements.",
    description: `The Childcare Assistance Programme helps working families access affordable, quality childcare. Subsidies are available for licensed childcare centres and registered home-based providers.

Families can choose their preferred provider from the approved list. Applications are processed on a first-come, first-served basis.`,
    eligibility: "Available to families with children aged 0 to 12. Parents or guardians must be working, studying, or seeking employment. Income must be at or below 85% of the state median income.",
    hours: [
      { day: "Monday – Friday", time: "8:30 AM – 4:30 PM" },
      { day: "Saturday – Sunday", time: "Closed" },
    ],
    contact: {
      name: "Family Services Office",
      phone: "(801) 555-6001",
      email: "childcare@saratogasprings.com",
      address: "220 Family Way, Saratoga Springs, UT",
    },
  },
  {
    slug: "family-counselling",
    category: "Family Services",
    title: "Family Counselling Services",
    excerpt: "Free family and parenting counselling sessions with qualified social workers.",
    description: `Our Family Counselling Services offer free sessions with qualified social workers and family therapists. Areas of support include parenting challenges, family conflict, domestic difficulties, and coping with major life changes.

Sessions are confidential and available for individuals, couples, and whole family groups.`,
    eligibility: "Open to all Saratoga Springs residents. No referral required. Priority given to families with children under 18 experiencing significant stress or difficulty.",
    hours: [
      { day: "Monday – Friday", time: "9:00 AM – 6:00 PM" },
      { day: "Saturday", time: "10:00 AM – 2:00 PM" },
      { day: "Sunday", time: "Closed" },
    ],
    contact: {
      name: "Family Counselling Team",
      phone: "(801) 555-6002",
      email: "familycounselling@saratogasprings.com",
      address: "220 Family Way, Saratoga Springs, UT",
    },
  },
];

export const CATEGORIES = [
  "Health Services",
  "Education",
  "Housing Support",
  "Employment",
  "Transport",
  "Family Services",
];