// All site content lives here. Edit this file to update the portfolio —
// no HTML changes needed.

window.PROFILE = {
  name: "Luis A. Navia",
  title: "Software Developer",
  location: "Gainesville, Florida",
  email: "navialuis53@gmail.com",
  github: "https://github.com/", // TODO: your GitHub profile URL
  linkedin: "https://www.linkedin.com/", // TODO: your LinkedIn URL
  resumePdf: "assets/Luis_A_Navia_s_Resume.pdf", // drop your PDF at portfolio/assets/resume.pdf
  summary:
    "Placeholder summary — a short paragraph about who you are, what you build, and what you're looking for. Replace this with the summary from your resume.",

  // TODO: replace with your resume
  experience: [
    {
      role: "Job Title",
      org: "Company Name",
      dates: "Month YYYY – Present",
      points: [
        "What you did and the impact it had.",
        "Another accomplishment, ideally with a number.",
      ],
    },
  ],

  education: [ 
     {
    degree: "A.A. in Computer Science",
      org: "Miami Dade College",
      dates: "2022 – 2024",
      notes: "Relevant coursework, GPA, honors.",
    },
    {
      degree: "B.S. in Computer Science",
      org: "University Of Florida",
      dates: "2024 – 2026",
      notes: "Relevant coursework, GPA, honors.",
    },
  
  ],

  skills: {
    Languages: ["JavaScript", "TypeScript", "Python", "C++"],
    Frontend: ["React", "React Native / Expo", "HTML", "CSS"],
    Backend: ["Node.js", "Express", "Django"],
    "Data & Infra": ["MongoDB", "Supabase / PostgreSQL", "Firebase", "Docker"],
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
    stack: ["Django", "Python", "React", "TypeScript", "Expo", "Supabase", "FFmpeg", "OpenCV", "WebRTC / RTMP", "Docker"],
    role: "Login and Live feeds", 
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
    ],
    stack: ["React", "Vite", "Node.js", "Express", "MongoDB", "Mongoose", "Google Maps API"],
    role: "API,s implementations and stop recommendation algorithm", // TODO: describe your part
    demoUrl: "", // set once deployed
    sourceUrl: "", // TODO: GitHub repo URL
  },
];
