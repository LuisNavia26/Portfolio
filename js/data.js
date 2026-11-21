// All site content lives here. Edit this file to update the portfolio —
// no HTML changes needed.

window.PROFILE = {
  name: "Luis A. Navia",
  title: "Software Developer · Computer Science at the University of Florida",
  location: "Gainesville, Florida",
  email: "navialuis53@gmail.com",
  github: "https://github.com/LuisNavia26",
  linkedin: "https://www.linkedin.com/in/lanavia26/",
  resumePdf: "assets/Luis_A_Navia_s_Resume.pdf",
  summary:
    "Computer Science student at the University of Florida (graduating December 2026) who builds full-stack web and mobile apps, from React frontends to Django and Node.js backends, with real-time video and maps along the way. Before software, I led electrical diagnostics and full-vehicle wiring builds, which taught me to debug systematically and own a system end to end. Furthermore, I enjoy the outdoors, playing rugby, rowing, and curiosity overall.",

  experience: [
    {
      role: "Systems Integration Lead",
      org: "Autogator · Gainesville, FL",
      dates: "Oct. 2024 – Present",
      points: [
        "Led a custom build of a 1970 VW Bus with a Porsche 911 engine, improving power by 172%.",
        "Led a second custom build of a 1955 Chevrolet pickup with a 2016 LT1 engine, improving power by 225%.",
        "Coordinate fabrication, installation and end-to-end system integration.",
        "Designed and executed the complete vehicle wiring architecture, improving reliability and serviceability by 33%.",
        "Diagnosed and resolved electrical and mechanical integration issues using structured troubleshooting.",
        "Implemented safety and reliability practices such as strain relief, heat protection and secure mounting, improving long-term durability and maintainability by 40%.",
      ],
    },
    {
      role: "Electrical Systems Tech Lead",
      org: "Affordable AutoRepair · Miami, FL",
      dates: "Apr. 2023 – Jul. 2024",
      points: [
        "Led shop diagnostics for complex electrical issues, prioritizing cases and coordinating repairs across technicians.",
        "Standardized troubleshooting workflows with checklists, measurement steps and verification criteria, reducing rework by 35%.",
        "Mentored new technicians on tool usage and systematic debugging, such as hypothesis-driven testing and signal and power verification.",
      ],
    },
  ],

  education: [
    {
      degree: "B.S. in Computer Science",
      org: "University of Florida · Gainesville, FL",
      dates: "Expected Dec. 2026",
      notes: "Relevant coursework: Data Structures and Algorithms, Database Systems, Operating Systems, Algorithm Abstraction and Design.",
    },
    {
      degree: "Associate in Arts (Liberal Arts)",
      org: "Miami Dade College · Miami, FL",
      dates: "Jan. 2022 – Aug. 2024",
      notes: "Dean's List 2022, 2023 and 2024.",
    },
  ],

  skills: {
    Languages: ["Python", "C++", "JavaScript", "TypeScript", "SQL (PostgreSQL)"],
    Frameworks: ["React", "Node.js", "Express.js", "Django"],
    "Data & Cloud": ["Supabase", "MongoDB", "Firebase", "Google Cloud Platform", "AWS"],
    Technologies: ["FFmpeg", "WebRTC", "Google Maps Platform", "REST APIs"],
    "Developer Tools": ["Git", "VS Code", "Visual Studio", "PyCharm", "IntelliJ", "CLion"],
  },
};

window.PROJECTS = [
  {
    id: "pitcheye",
    name: "PitchEye",
    tagline: "Record live soccer matches with a crowd of phones.",
    accent: "#16a34a",
    image: null,
    summary:
      "A lightweight, smartphone-based system for recording live soccer matches using multiple volunteer devices. Spectators join a game session by scanning a QR code and capture video from the sidelines; the backend collects, synchronizes and processes the clips into match footage.",
    features: [
      "Game sessions with unique codes and QR-code join flow",
      "Mobile app (Expo) with QR scanner and live-stream capture",
      "Web dashboard for teams, live viewing and video uploads",
      "Django backend for games, streams, teams and video processing",
      "HLS / FLV playback in the browser",
    ],
    stack: ["Django", "Python", "C++", "React", "TypeScript", "Expo", "Supabase", "FFmpeg", "OpenCV", "WebRTC / RTMP", "Docker"],
    role: "Built the login flow and the live feeds.",
    demoUrl: "", // set once deployed, e.g. "https://pitcheye.vercel.app"
    sourceUrl: "https://github.com/iadeyefa/PitchEye",
  },
  {
    id: "cruiseroad",
    name: "CruiseRoad",
    tagline: "Plan road trips with routes, distances and fuel costs.",
    accent: "#2563eb",
    image: "assets/img/road.jpg",
    summary:
      "A road trip planner built on the MERN stack and the Google Maps platform. Users pick a start, destination and stops on an interactive map, get a routed trip with distance and fuel-cost estimates, and save trips to revisit later.",
    features: [
      "Account system with registration, login and protected routes",
      "Interactive Google Map for start, destination and waypoints",
      "Route rendering with the Google Directions API",
      "Distance and fuel-cost estimates by car type",
      "Saved-trips dashboard backed by MongoDB",
      "Request deduplication and caching that cut external API calls per planned trip by 45%",
    ],
    stack: ["React", "Vite", "Node.js", "Express", "MongoDB", "Mongoose", "Google Maps API"],
    role: "Built the Google Maps API integrations and the suggested-stops recommendation algorithm.",
    demoUrl: "", // set once deployed
    sourceUrl: "https://github.com/LuisNavia26/cruiseRoad",
  },
];
