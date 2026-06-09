import type {
  TarteelNavLink,
  TarteelCredential,
  TarteelCourse,
  TarteelStep,
  TarteelPlatform,
  TarteelPlan,
  TarteelTestimonial,
  TarteelFAQ,
  TarteelContactMethod,
} from "@/types/tarteel";

export const tarteelNavLinks: TarteelNavLink[] = [
  { label: "About", href: "#about" },
  { label: "Courses", href: "#courses" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Pricing", href: "#pricing" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export const tarteelCredentials: TarteelCredential[] = [
  { icon: "Award", text: "Certified in Hifz-Quran" },
  { icon: "BookOpen", text: "5+ Years Teaching Experience" },
  { icon: "Globe", text: "Students from multiple Countries" },
  { icon: "Heart", text: "Passionate & Patient Educator" },
];

export const tarteelCourses: TarteelCourse[] = [
  {
    emoji: "📖",
    arabic: "القراءة",
    title: "Quran Reading/(Nazra Program)",
    subtitle: "For Beginners",
    desc: "Complete Quran from start to end and Learn to read the Arabic script fluently from scratch. Master letter recognition, and basic pronunciation rules.",
    duration: "12-24 months",
    level: "Beginner",
    features: [
      "Arabic alphabet",
      "Basic recitation",
      "Letter joining rules",
      "Nazra",
    ],
    color: "#0a3d2e",
  },
  {
    emoji: "🎵",
    arabic: "التجويد",
    title: "Tajweed Rules",
    subtitle: "Proper Recitation",
    desc: "Perfect your Quran recitation with correct pronunciation, elongation rules, and the beautiful art of Tajweed.",
    duration: "1–2 months",
    level: "Intermediate",
    features: [
      "Makharij al-Huruf",
      "Noon & Meem rules",
      "Madd (elongation)",
      "Waqf & Ibtida",
    ],
    color: "#155c45",
    highlight: true,
  },
  {
    emoji: "🧠",
    arabic: "الحفظ",
    title: "Hifz Program",
    subtitle: "Memorization",
    desc: "A structured program to memorize the Quran with proven revision techniques and a personalized memorization plan.",
    duration: "Ongoing/2 to 3 Years",
    level: "All Levels",
    features: [
      "Daily lesson plans",
      "Systematic revision",
      "Memory techniques",
      "Progress tracking",
    ],
    color: "#1a5c3a",
  },
];

export const tarteelSteps: TarteelStep[] = [
  {
    num: "01",
    icon: "CalendarCheck",
    title: "Book a Free Trial",
    desc: "Fill out the contact form and schedule a free 30-minute trial class. No commitment required.",
  },
  {
    num: "02",
    icon: "Video",
    title: "Join via Zoom or Meet",
    desc: "Connect with your teacher through Zoom or Google Meet your choice. All you need is a device and internet.",
  },
  {
    num: "03",
    icon: "BookOpen",
    title: "Start Your Learning",
    desc: "Follow a personalized curriculum designed around your level, goals, and preferred schedule.",
  },
  {
    num: "04",
    icon: "TrendingUp",
    title: "Track Your Progress",
    desc: "Receive regular feedback, milestone reports, and practice materials to reinforce your learning.",
  },
];

export const tarteelPlatforms: TarteelPlatform[] = [
  {
    name: "Zoom",
    icon: "🎥",
    features: [
      "HD video & audio",
      "Screen sharing",
      "Recording option",
      "Waiting room",
    ],
  },
  {
    name: "Google Meet",
    icon: "📹",
    features: [
      "No download needed",
      "Works in browser",
      "Calendar integration",
      "Closed captions",
    ],
  },
];

export const tarteelPlans: TarteelPlan[] = [
  {
    name: "Nazra",
    arabic: "معتاد",
    pricing: {
      west: {
        price: "$50",
        currency: "USD",
        period: "/ month",
      },
      middleEast: {
        price: "100",
        currency: "SAR / AED / QAR",
        period: "/ month",
      },
    },
    desc: "Most popular — ideal for students who want to complete their Nazra with Tajweed Rules.",
    sessions: "20 sessions",
    duration: "30 min each",
    features: [
      "5 classes per week",
      "Tajweed & Recitation",
      "24/7 WhatsApp support",
      "Practice materials",
      "Monthly progress report",
      "Flexible scheduling",
    ],
    cta: "Start Learning Quran",
    highlight: false,
  },
  {
    name: "Hifz",
    arabic: "مكثف",
    pricing: {
      west: {
        price: "$100",
        currency: "USD",
        period: "/ month",
      },
      middleEast: {
        price: "200",
        currency: "SAR / AED / QAR",
        period: "/ month",
      },
    },
    desc: "For dedicated students aiming for Hifz-Quran.",
    sessions: "20 sessions",
    duration: "60 min each",
    features: [
      "5 classes per week",
      "Sabq (New Lesson)",
      "Sabqi (Revision/Repetition)",
      "Manzil (Old Revision/General Revision)",
      "Priority support",
      "Custom study materials",
      "Weekly progress report",
      "Hifz tracking",
    ],
    cta: "Begin My Hifz Journey",
    highlight: false,
  },
];

export const tarteelTestimonials: TarteelTestimonial[] = [
  {
    name: "Aimal Izzah",
    location: "Yanbu, Saudia Arabia",
    flag: "SA",
    text: "My daughter went from knowing nothing about Arabic to completing nazra in just 20 months. The teacher is incredibly patient with children.",
    course: "Nazra",
    stars: 5,
  },
  {
    name: "Muhammad Hassan",
    location: "Toronto, Canada",
    flag: "CA",
    text: "I had been struggling with my Tajweed for years. In 6 months of consistent lessons, I finally feel confident reciting in Taraweeh. JazakAllah Khair!",
    course: "Tajweed",
    stars: 5,
  },
  {
    name: "Faiq",
    location: "KSA",
    flag: "SA",
    text: "The Hifz program is exceptional. The structured approach and daily accountability have helped me memorize 10 Juz already. Highly recommend!",
    course: "Hifz Program",
    stars: 5,
  },
  {
    name: "Muhammad Anas",
    location: "Yanbu, Saudia Arabia",
    flag: "SA",
    text: "As a complete beginner, I was nervous. But the teacher made me feel comfortable immediately. The Google Meet sessions are convenient and professional.",
    course: "Nazra",
    stars: 5,
  },
  {
    name: "Shabana",
    location: "Madinah, KSA",
    flag: "SA",
    text: "I enrolled my all children. The kids are having their Nazra and Tajweed classes. The flexible scheduling works perfectly for us.",
    course: "Multiple Courses",
    stars: 5,
  },
  {
    name: "Iraj Ghaffar",
    location: "Qatar",
    flag: "QA",
    text: "The quality of teaching is on par with any in-person teacher I've had. The WhatsApp support between sessions is a wonderful added touch.",
    course: "Tajweed",
    stars: 5,
  },
];

export const tarteelFAQs: TarteelFAQ[] = [
  {
    q: "Do I need any prior knowledge of Arabic to start?",
    a: "Not at all! Our Quran Reading course/Nazra is designed for complete beginners. We start from the very basics recognising Arabic letters and progress at your own pace.",
  },
  {
    q: "How does the free trial class work?",
    a: "After you submit the booking form, we'll reach out within 24 hours to schedule a free 30-minute session. This gives you a chance to meet the teacher, assess your current level, and decide the best course for you no payment required.",
  },
  {
    q: "Can I choose between Zoom and Google Meet?",
    a: "Absolutely. We support both platforms and will use whichever you prefer. All you need is a stable internet connection and a device with a camera and microphone.",
  },
  {
    q: "Can I reschedule or cancel a class?",
    a: "Yes, with at least 12 hours' notice you can reschedule any session free of charge. We understand life gets busy, and we always try to be flexible.",
  },
  {
    q: "Will sessions be recorded?",
    a: "Recording is optional. Recordings are shared privately with the student only, and are a great tool for review.",
  },
  {
    q: "What if I'm not satisfied with the teaching?",
    a: "Your satisfaction is our priority. If after the trial class you feel it's not the right fit, there's absolutely no obligation. For enrolled students, we'll do our best to address any concerns or adjust the teaching approach.",
  },
  {
    q: "Do you teach female students?",
    a: "Yes. Female students are also very welcome.",
  },
];

export const tarteelContactMethods: TarteelContactMethod[] = [
  {
    icon: "MessageCircle",
    label: "WhatsApp",
    value: "+92 328-2488-387",
    sub: "Fast response",
  },
  {
    icon: "Mail",
    label: "Email",
    value: "hafizsyedahmedali12@gmail.com",
    sub: "Response within 24h",
  },
  {
    icon: "Clock",
    label: "Office Hours",
    value: "Mon–Fri, 8AM–10PM",
    sub: "Pakistan Standard Time",
  },
];
