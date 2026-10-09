// ============================================
// AKSHAY COMPUTER INSTITUTE — Site Data
// Edit this file to update all website content
// ============================================

// ── Enquiry Form Email Config ──────────────────
// Enquiry responses will be sent to this email.
// Get your free Web3Forms access key at: https://web3forms.com
// Enter your email → verify → copy the access key below.
export const formConfig = {
  accessKey: "d597100d-d528-4eba-a142-66f6daceb5e9",
  recipientEmail: "atharvtupsundar2@gmail.com",
  subjectPrefix: "New Enquiry — Akshay Computer Institute",
};

export const institute = {
  name: "Akshay Computer Institute",
  tagline: "Build Your Skills. Build Your Career.",
  subtitle: "Job-Oriented Computer Courses with 100% Practical Training",
  description:
    "Established in 2001, Akshay Computer Institute has proudly completed 25 years of excellence in practical, job-oriented computer education for students and job seekers across Chh. Sambhajinagar.",
  address: {
    line1: "Sai Shraddha Park",
    line2: "Near Mohata Devi Mandir",
    line3: "Bajajnagar",
    city: "Chh. Sambhajinagar",
    state: "Maharashtra",
    full: "Sai Shraddha Park, Near Mohata Devi Mandir, Bajajnagar, Chh. Sambhajinagar, Maharashtra",
  },
  // Flat phone fields for easy component access
  phone1: "9356301323",
  phone2: "9011475968",
  phones: ["9356301323", "9011475968"],
  whatsapp: "919356301323",
  timings: {
    weekdays: "Monday – Saturday: 7:00 AM – 9:00 PM",
    sunday: "Sunday: Holiday",
  },
  batchOptions: [
    "Morning (7:00 AM – 9:00 AM)",
    "Morning (9:00 AM – 11:00 AM)",
    "Afternoon (11:00 AM – 1:00 PM)",
    "Afternoon (1:00 PM – 3:00 PM)",
    "Evening (3:00 PM – 5:00 PM)",
    "Evening (5:00 PM – 7:00 PM)",
    "Evening (7:00 PM – 9:00 PM)",
  ],
  social: {
    facebook: "#",
    instagram: "#",
  },
  mapEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3752.2!2d75.34!3d19.87!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sBajajnagar%2C+Chhatrapati+Sambhajinagar!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
};

export const highlights = [
  {
    icon: "FaLaptopCode",
    title: "100% Practical Training",
    description: "Learn by doing with hands-on projects and real-world exercises",
  },
  {
    icon: "FaChalkboardTeacher",
    title: "Experienced Faculty",
    description: "Learn from industry-experienced and certified trainers",
  },
  {
    icon: "FaUserGraduate",
    title: "Individual Attention",
    description: "Small batch sizes ensure personalized guidance for every student",
  },
  {
    icon: "FaDesktop",
    title: "Online & Offline Batches",
    description: "Flexible learning modes to suit your schedule and preference",
  },
];

export const courses = [
  {
    id: "ms-cit",
    name: "MS-CIT",
    title: "MS-CIT",
    shortName: "MS-CIT",
    icon: "FaDesktop",
    color: "#1565C0",
    description:
      "Maharashtra State Certificate in Information Technology — the most popular IT literacy course in Maharashtra.",
    shortDesc:
      "Maharashtra State Certificate in Information Technology — the most popular IT literacy course in Maharashtra.",
    skills: ["Computer Basics", "MS Office", "Internet", "Email", "Digital Literacy"],
    overview:
      "MS-CIT (Maharashtra State Certificate in Information Technology) is a comprehensive IT literacy program designed by MKCL. This course covers all fundamental computer skills needed for daily life, education, and work. It is recognized across Maharashtra and is essential for many government and private job applications.",
    whoCanJoin: [
      "Students from any stream (Arts, Commerce, Science)",
      "Job seekers looking to build IT skills",
      "Working professionals wanting computer literacy",
      "Homemakers and senior citizens",
      "Anyone above 14 years of age",
    ],
    practicalTraining: [
      "Hands-on practice on every topic",
      "Real-world document creation",
      "Internet and email exercises",
      "Online exam preparation",
      "Project-based assignments",
    ],
    careerOpportunities: [
      "Government job eligibility",
      "Office administration roles",
      "Data entry positions",
      "Basic IT support",
      "Self-employment opportunities",
    ],
  },
  {
    id: "tally-gst",
    name: "Tally with GST",
    title: "Tally with GST",
    shortName: "Tally + GST",
    icon: "FaCalculator",
    color: "#E65100",
    description:
      "Master accounting software Tally Prime with GST compliance, billing, inventory, and financial reporting.",
    shortDesc:
      "Master accounting software Tally Prime with GST compliance, billing, inventory, and financial reporting.",
    skills: ["Tally Prime", "GST Filing", "Accounting", "Inventory", "Payroll"],
    overview:
      "This comprehensive Tally with GST course teaches you complete accounting using Tally Prime software. You'll learn everything from basic voucher entry to advanced GST return filing, making you job-ready for accounting positions in any business or CA firm.",
    whoCanJoin: [
      "Commerce students (B.Com, M.Com, BBA)",
      "CA/CS/ICWA aspirants",
      "Small business owners",
      "Working professionals in accounts",
      "Anyone interested in accounting",
    ],
    practicalTraining: [
      "Live company creation and management",
      "Real GST return filing practice",
      "Invoice and billing exercises",
      "Bank reconciliation",
      "Complete financial reporting",
    ],
    careerOpportunities: [
      "Accountant in any company",
      "GST practitioner",
      "Accounts executive",
      "Billing executive",
      "Freelance accounting services",
    ],
  },
  {
    id: "advanced-excel",
    name: "Advanced Excel",
    title: "Advanced Excel",
    shortName: "Adv. Excel",
    icon: "FaFileExcel",
    color: "#2E7D32",
    description:
      "Go beyond basics with advanced formulas, pivot tables, macros, VBA, dashboards, and data analysis.",
    shortDesc:
      "Go beyond basics with advanced formulas, pivot tables, macros, VBA, dashboards, and data analysis.",
    skills: ["Pivot Tables", "VLOOKUP", "Macros", "VBA", "Dashboards"],
    overview:
      "Advanced Excel takes your spreadsheet skills to the professional level. Learn powerful formulas, data analysis techniques, pivot tables, charts, macros, and VBA programming to automate tasks and create professional reports and dashboards.",
    whoCanJoin: [
      "Anyone with basic Excel knowledge",
      "Office professionals and managers",
      "Data analysts and MIS executives",
      "Students preparing for corporate jobs",
      "Business owners managing data",
    ],
    practicalTraining: [
      "Complex formula building exercises",
      "Real-world dashboard creation",
      "Macro recording and VBA coding",
      "Data analysis projects",
      "Report automation tasks",
    ],
    careerOpportunities: [
      "MIS Executive",
      "Data Analyst",
      "Business Analyst",
      "Office Administrator",
      "Freelance Excel consultant",
    ],
  },
  {
    id: "english-typing",
    name: "English Typing",
    title: "English Typing",
    shortName: "Eng. Typing",
    icon: "FaKeyboard",
    color: "#6A1B9A",
    description:
      "Develop professional English typing speed and accuracy with structured practice sessions.",
    shortDesc:
      "Develop professional English typing speed and accuracy with structured practice sessions.",
    skills: ["Touch Typing", "Speed Building", "Accuracy", "Formatting", "Professional Typing"],
    overview:
      "English Typing course helps you develop fast and accurate typing skills essential for any computer-related job. Using structured practice methods, you'll progress from basic key placement to professional typing speeds required for government exams and office work.",
    whoCanJoin: [
      "Students preparing for government exams",
      "Office workers and data entry operators",
      "Anyone wanting to improve typing speed",
      "Students starting their computer learning",
      "Professionals needing certification",
    ],
    practicalTraining: [
      "Daily timed typing tests",
      "Progressive speed building drills",
      "Accuracy improvement exercises",
      "Paragraph and document typing",
      "Mock typing examination practice",
    ],
    careerOpportunities: [
      "Data entry operator",
      "Typist in government offices",
      "Court clerk / stenographer assistant",
      "Office assistant",
      "Freelance transcription work",
    ],
  },
  {
    id: "marathi-typing",
    name: "Marathi Typing",
    title: "Marathi Typing",
    shortName: "Mar. Typing",
    icon: "FaKeyboard",
    color: "#C62828",
    description:
      "Learn professional Marathi typing using ISM/Baraha layouts with speed and accuracy training.",
    shortDesc:
      "Learn professional Marathi typing using ISM/Baraha layouts with speed and accuracy training.",
    skills: ["Marathi Typing", "ISM Layout", "Speed", "Accuracy", "Formatting"],
    overview:
      "Marathi Typing course teaches you to type in Marathi efficiently using standard keyboard layouts. This skill is essential for government jobs in Maharashtra and is useful for anyone working with Marathi language documents.",
    whoCanJoin: [
      "Government job aspirants in Maharashtra",
      "Students needing Marathi typing certification",
      "Office workers in Marathi-medium organizations",
      "Journalists and content writers",
      "Anyone needing Marathi typing skills",
    ],
    practicalTraining: [
      "ISM keyboard layout mastery",
      "Daily speed building practice",
      "Marathi paragraph typing",
      "Government exam pattern practice",
      "Timed typing tests",
    ],
    careerOpportunities: [
      "Government office typist",
      "Marathi data entry operator",
      "Clerk in state government",
      "Marathi content writer",
      "Translation and localization work",
    ],
  },
  {
    id: "c-programming",
    name: "C Programming",
    title: "C Programming",
    shortName: "C Language",
    icon: "FaCode",
    color: "#00838F",
    description:
      "Learn the foundation of programming with C language — logic building, algorithms, and problem solving.",
    shortDesc:
      "Learn the foundation of programming with C language — logic building, algorithms, and problem solving.",
    skills: ["C Syntax", "Logic Building", "Data Structures", "Algorithms", "Problem Solving"],
    overview:
      "C Programming is the foundation of all modern programming languages. This course teaches you programming concepts from scratch — variables, loops, functions, arrays, pointers, and file handling. Perfect for beginners who want to build a strong programming foundation.",
    whoCanJoin: [
      "Engineering and BCA/BCS students",
      "Anyone new to programming",
      "Students preparing for competitive coding",
      "IT aspirants wanting a strong foundation",
      "Anyone curious about software development",
    ],
    practicalTraining: [
      "Write and execute C programs from day one",
      "Logic building through assignments",
      "Problem-solving exercises",
      "Mini project development",
      "Code debugging practice",
    ],
    careerOpportunities: [
      "Software developer (foundation)",
      "Embedded systems programmer",
      "System programmer",
      "Competitive programming",
      "Pathway to C++, Java, Python",
    ],
  },
  {
    id: "cpp-programming",
    name: "C++ Programming",
    title: "C++ Programming",
    shortName: "C++ Language",
    icon: "FaCode",
    color: "#1565C0",
    description:
      "Master object-oriented programming with C++ — classes, inheritance, polymorphism, and real-world projects.",
    shortDesc:
      "Master object-oriented programming with C++ — classes, inheritance, polymorphism, and real-world projects.",
    skills: ["OOP Concepts", "Classes", "Inheritance", "STL", "File Handling"],
    overview:
      "C++ Programming builds on C fundamentals and introduces Object-Oriented Programming (OOP). Learn classes, objects, inheritance, polymorphism, templates, and the Standard Template Library (STL). This course prepares you for advanced software development and competitive programming.",
    whoCanJoin: [
      "Students who have completed C programming",
      "Engineering students (CS/IT)",
      "BCA/MCA students",
      "Anyone wanting to learn OOP concepts",
      "Competitive programming aspirants",
    ],
    practicalTraining: [
      "OOP concept implementation projects",
      "Class design and hierarchy exercises",
      "STL-based problem solving",
      "Real-world application development",
      "Code optimization and debugging",
    ],
    careerOpportunities: [
      "Software developer",
      "Game developer",
      "System software engineer",
      "Competitive programmer",
      "Technical interview preparation",
    ],
  },
  {
    id: "python-programming",
    name: "Python Programming",
    title: "Python Programming",
    shortName: "Python",
    icon: "FaPython",
    color: "#F57F17",
    description:
      "Learn Python — the world's most popular programming language for web development, data science, and automation.",
    shortDesc:
      "Learn Python — the world's most popular programming language for web development, data science, and automation.",
    skills: ["Python Basics", "OOP", "Libraries", "Automation", "Projects"],
    overview:
      "Python is the most in-demand programming language in the world. This course covers Python from basics to advanced topics including data types, functions, OOP, file handling, libraries like NumPy and Pandas, and project development. Ideal for beginners and career changers.",
    whoCanJoin: [
      "Complete beginners in programming",
      "Students from any academic background",
      "Working professionals wanting to upskill",
      "Data science and AI aspirants",
      "Anyone interested in automation",
    ],
    practicalTraining: [
      "Write Python programs from day one",
      "Build real-world automation scripts",
      "Data analysis mini projects",
      "Web scraping exercises",
      "Final capstone project",
    ],
    careerOpportunities: [
      "Python developer",
      "Data analyst",
      "Automation engineer",
      "Web developer (Django/Flask)",
      "AI/ML pathway",
    ],
  },
];

export const whyChooseUs = [
  {
    icon: "FaLaptopCode",
    title: "100% Practical Training",
    description: "Every concept is taught with hands-on practice. No rote learning — only real skills.",
  },
  {
    icon: "FaChalkboardTeacher",
    title: "Experienced Faculty",
    description:
      "Our trainers bring years of industry and teaching experience to the classroom.",
  },
  {
    icon: "FaUserFriends",
    title: "Individual Attention",
    description: "Small batch sizes ensure every student gets personalized guidance and support.",
  },
  {
    icon: "FaComments",
    title: "Interactive Classes",
    description:
      "Engaging, discussion-based classes that encourage questions and active participation.",
  },
  {
    icon: "FaQuestionCircle",
    title: "Doubt Sessions",
    description: "Dedicated doubt-solving sessions to ensure no student is left behind.",
  },
  {
    icon: "FaDesktop",
    title: "Online & Offline Batches",
    description: "Choose between classroom learning or online sessions as per your convenience.",
  },
  {
    icon: "FaRupeeSign",
    title: "Affordable Fees",
    description:
      "Quality education at fees that are accessible to every student and family.",
  },
  {
    icon: "FaBriefcase",
    title: "Career Guidance",
    description:
      "Get expert career advice, resume building tips, and job placement assistance.",
  },
];

export const benefits = [
  {
    icon: "FaProjectDiagram",
    title: "Practical Projects",
    description: "Work on real-world projects that build your portfolio and confidence.",
  },
  {
    icon: "FaHandsHelping",
    title: "Hands-on Training",
    description: "Practice on computers from day one with guided exercises.",
  },
  {
    icon: "FaLightbulb",
    title: "Doubt Solving",
    description: "Get your doubts cleared instantly with dedicated support sessions.",
  },
  {
    icon: "FaUserShield",
    title: "Personal Guidance",
    description: "One-on-one mentoring to track your progress and guide your learning path.",
  },
  {
    icon: "FaClock",
    title: "Flexible Batches",
    description: "Morning, afternoon, and evening batches to fit your schedule.",
  },
  {
    icon: "FaCertificate",
    title: "Certificate Support",
    description: "Get recognized certificates upon successful course completion.",
  },
  {
    icon: "FaRoute",
    title: "Career Guidance",
    description: "Expert advice on career paths, job opportunities, and skill development.",
  },
];

export const testimonials = [
  {
    id: 1,
    name: "Priya Deshmukh",
    course: "MS-CIT",
    rating: 5,
    text: "I had zero computer knowledge before joining Akshay Computer Institute. The faculty taught everything from scratch with so much patience. Now I can confidently use computers for my work. Best institute in Sambhajinagar!",
    avatar: null,
  },
  {
    id: 2,
    name: "Rohit Jadhav",
    course: "Tally with GST",
    rating: 5,
    text: "The Tally with GST course was excellent! The practical approach helped me learn real accounting. I got a job as an accountant within a month of completing the course. Highly recommended!",
    avatar: null,
  },
  {
    id: 3,
    name: "Sneha Kulkarni",
    course: "Advanced Excel",
    rating: 5,
    text: "Advanced Excel course completely transformed my work efficiency. I learned pivot tables, macros, and dashboards that I now use daily at my office. The teaching quality is outstanding.",
    avatar: null,
  },
  {
    id: 4,
    name: "Amit Patil",
    course: "Python Programming",
    rating: 5,
    text: "As a complete beginner, I was nervous about learning programming. But the step-by-step teaching method made Python easy to understand. Now I'm building my own projects. Thank you, Akshay Computer Institute!",
    avatar: null,
  },
  {
    id: 5,
    name: "Sakshi Bhosale",
    course: "English Typing",
    rating: 5,
    text: "I improved my typing speed from 15 WPM to 45 WPM in just two months! The daily practice sessions and personal guidance really helped. Excellent institute for typing courses.",
    avatar: null,
  },
  {
    id: 6,
    name: "Vishal More",
    course: "C++ Programming",
    rating: 5,
    text: "The C++ course at Akshay Computer Institute is well-structured and practical. The faculty explains complex OOP concepts in a very simple way. Great place to learn programming!",
    avatar: null,
  },
];

export const galleryItems = [
  { id: 1, category: "Computer Lab", title: "Computer Lab & Practical Setup", src: "/images/gallery/fe143a27-c072-46c6-a9b9-77de13dbbd87.png" },
  { id: 2, category: "Classroom", title: "Interactive Classroom & Training", src: "/images/gallery/ChatGPT Image Sep 19, 2026, 11_09_57 AM (1).png" },
  { id: 3, category: "Practical Sessions", title: "Hands-on Practical Sessions", src: "/images/gallery/ChatGPT Image Sep 19, 2026, 11_22_10 AM.png" },
  { id: 4, category: "Parents Meet", title: "Parents & Faculty Meet", src: "/images/gallery/WhatsApp Image 2026-09-19 at 12.24.05 PM.jpeg" },
];

export const batchOptions = [
  "Morning (7:00 AM – 9:00 AM)",
  "Morning (9:00 AM – 11:00 AM)",
  "Afternoon (11:00 AM – 1:00 PM)",
  "Afternoon (1:00 PM – 3:00 PM)",
  "Evening (3:00 PM – 5:00 PM)",
  "Evening (5:00 PM – 7:00 PM)",
  "Evening (7:00 PM – 9:00 PM)",
];

export const navLinks = [
  { label: "Home", href: "#home", id: "home" },
  { label: "Courses", href: "#courses", id: "courses" },
  { label: "About", href: "#about", id: "about" },
  { label: "Why Us", href: "#why-us", id: "why-us" },
  { label: "Gallery", href: "#gallery", id: "gallery" },
  { label: "Reviews", href: "#reviews", id: "reviews" },
  { label: "Contact", href: "#contact", id: "contact" },
  { label: "Enquiry", href: "#enquiry", id: "enquiry" },
];
