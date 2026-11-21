// All site content lives here. Edit this file to update the portfolio —
// no HTML changes needed.

// Gallery helpers. Web-ready media lives in assets/media/<group>/:
// photo "x.jpg" needs a "x-thumb.jpg" next to it; video "x.mp4" needs "x-poster.jpg".
const photo = (src, alt) => ({ type: "image", src, thumb: src.replace(/\.jpg$/, "-thumb.jpg"), alt });
const video = (src, alt) => ({ type: "video", src, poster: src.replace(/\.mp4$/, "-poster.jpg"), alt });
const M = "assets/media/";

window.PROFILE = {
  name: "Luis A. Navia",
  title: "Software Developer · Computer Science at the University of Florida",
  location: "Gainesville, Florida",
  email: "navialuis53@gmail.com",
  github: "https://github.com/LuisNavia26",
  linkedin: "https://www.linkedin.com/in/lanavia26/",
  photo: "assets/img/headshot.jpg", // round headshot next to the name (square crop of assets/Headshot.jpg)
  resumePdf: "assets/Luis_A_Navia_s_Resume.pdf",
  summary:
    "Computer Science student at the University of Florida (graduating December 2026) who builds full-stack web and mobile apps. From React and React Native frontends to Django and Node.js backends, with live video streaming and maps along the way. Before software, I led electrical diagnostics and full-vehicle wiring builds, which taught me to debug systematically and own a system end to end. Furthermore, I enjoy the outdoors, playing rugby, rowing, and curiosity overall.",

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
    Languages: ["Python", "C++", "JavaScript", "TypeScript", "SQL (PostgreSQL)", "Bash"],
    Frameworks: ["React", "React Native (Expo)", "Django REST Framework", "Node.js", "Express.js"],
    "Developer Tools": ["Git", "Docker", "Linux", "DigitalOcean", "Google Cloud Platform", "Android Studio", "VS Code", "Claude Code"],
    Technologies: ["GStreamer", "FFmpeg", "WebRTC", "Mux", "Supabase", "REST APIs", "MongoDB", "Google Maps Platform"],
  },
};

window.PROJECTS = [
  {
    id: "pitcheye",
    name: "PitchEye",
    category: "Software Engineering",
    tagline: "Live multi-camera sports streaming from a crowd of phones.",
    accent: "#16a34a",
    image: null,
    summary:
      "A live multi-camera sports streaming platform. Android phones on the sidelines join a game by scanning a QR code and become camera angles; an operator watches sub-second WebRTC previews of every angle and picks the view everyone else sees, while a GStreamer live switcher cuts between angles at 30 fps. The stream is delivered through Mux with a YouTube simulcast. PitchEye started as a team senior project; after the showcase I kept going and rebuilt it almost entirely, and six months later it's close to being published.",
    features: [
      "Android phones join a game as camera angles by scanning a QR code",
      "GStreamer live switcher running at 30 fps",
      "Operator view with sub-second WebRTC previews of every angle, choosing the view everyone else sees",
      "Deployed with Docker and Mux, with a YouTube simulcast",
      "React web app and React Native (Expo) mobile app on a Django REST backend with Supabase",
      "Field-tested streaming a live UF Rugby match against the Gainesville Hogs (D2)",
    ],
    stack: ["GStreamer", "WebRTC", "Django", "React Native", "React", "Python", "Mux", "Docker", "Supabase"],
    // First real-world test. Shown as a "Watch the stream" button and an embedded video.
    fieldTest: {
      title: "First field test",
      text: "PitchEye was recently tested for the first time at a UF Rugby match against the Gainesville Hogs, a Division II team, streaming live through Mux with a YouTube simulcast. The stream is below.",
      youtubeId: "Hr5QMd7XGTo",
      url: "https://www.youtube.com/live/Hr5QMd7XGTo",
    },
    demoUrl: "", // set once deployed, e.g. "https://pitcheye.vercel.app"
    sourceUrl: "", // kept private on purpose: Luis plans to commercialize PitchEye
  },
  {
    id: "cruiseroad",
    name: "CruiseRoad",
    category: "Software Engineering",
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
  {
    id: "vw-bus",
    name: "1970 VW Bus × Porsche 911",
    category: "Systems Integration",
    hasDemo: false, // hardware build: no live demo or source code
    tagline: "A 1970 Volkswagen Bus rebuilt around a Porsche 911 engine.",
    accent: "#ea580c",
    image: M + "vw/vw-4-thumb.jpg",
    media: [
      photo(M + "vw/vw-4.jpg", "The finished 1970 VW Bus"),
      photo(M + "vw/vw-3.jpg", "Luis with the finished bus"),
      photo(M + "vw/vw-2.jpg", "Fuse and relay panel wiring"),
      photo(M + "vw/vw-1.jpg", "Engine compartment during the build"),
    ],
    summary:
      "A custom build at Autogator that put a Porsche 911 engine into a 1970 Volkswagen Bus. I led the build, coordinating fabrication and installation and integrating the engine, electrical and mechanical systems into one reliable vehicle, for a 172% increase in power.",
    features: [
      "Porsche 911 engine swap, improving power by 172%",
      "Complete vehicle wiring architecture, designed and executed from scratch",
      "Coordinated fabrication, installation and end-to-end system integration",
      "Structured troubleshooting of electrical and mechanical integration issues",
      "Strain relief, heat protection and secure mounting for long-term durability",
    ],
    stack: ["Engine swap", "Vehicle wiring", "Fabrication", "System integration", "Diagnostics"],
    role: "Systems Integration Lead at Autogator. Led the build from planning through integration and testing.",
    demoUrl: "",
    sourceUrl: "",
  },
  {
    id: "chevy-pickup",
    name: "1955 Chevy Pickup × LT1",
    category: "Systems Integration",
    hasDemo: false,
    tagline: "A 1955 Chevrolet pickup powered by a modern 2016 LT1 V8.",
    accent: "#0d9488",
    image: M + "chevy/chevy-5-thumb.jpg",
    media: [
      photo(M + "chevy/chevy-5.jpg", "The finished 1955 Chevy pickup"),
      photo(M + "chevy/chevy-2.jpg", "The 2016 LT1 V8 in the engine bay"),
      video(M + "chevy/chevy-video-2.mp4", "On the road in the finished truck"),
      photo(M + "chevy/chevy-4.jpg", "Dash and interior during wiring"),
      photo(M + "chevy/chevy-3.jpg", "Interior wiring in progress"),
      video(M + "chevy/chevy-video-1.mp4", "Wiring the gauge cluster"),
      photo(M + "chevy/chevy-1.jpg", "Stripped chassis at the start of the build"),
    ],
    summary:
      "A second custom build at Autogator: a 1955 Chevrolet pickup with a 2016 LT1 V8. Fitting a modern, computer-controlled engine into a 70-year-old truck meant designing the wiring and integration around it, for a 225% increase in power.",
    features: [
      "2016 LT1 V8 swap, improving power by 225%",
      "Complete vehicle wiring architecture for a modern engine in a classic chassis",
      "Coordinated fabrication, installation and end-to-end system integration",
      "Structured troubleshooting of electrical and mechanical integration issues",
      "Strain relief, heat protection and secure mounting for long-term durability",
    ],
    stack: ["Engine swap", "Vehicle wiring", "Fabrication", "System integration", "Diagnostics"],
    role: "Systems Integration Lead at Autogator. Led the build from planning through integration and testing.",
    demoUrl: "",
    sourceUrl: "",
  },
];

// Hobbies tab. Each entry: id (page anchor), name, blurb, details[] (tags),
// accent, image (cover thumbnail) and media[] (gallery, built with photo()/video()).
window.HOBBIES = [
  {
    id: "rowing",
    name: "Rowing",
    blurb: "Early mornings on the water. Rowing is all endurance and timing, and a boat only moves well when everyone pulls together.",
    details: ["Endurance", "Teamwork", "On the water"],
    accent: "#0284c7",
    image: M + "rowing/rowing-1-thumb.jpg",
    media: [
      photo(M + "rowing/rowing-1.jpg", "An eight on the water, seen from above"),
      photo(M + "rowing/rowing-2.jpg", "With the crew"),
      video(M + "rowing/rowing-video-1.mp4", "Rowing at sunset"),
    ],
  },
  {
    id: "hiking",
    name: "Hiking",
    blurb: "Getting outside and off the screen. A good trail is the best way I know to reset and think through a hard problem.",
    details: ["Trails", "Outdoors"],
    accent: "#16a34a",
    image: M + "hiking/hiking-1-thumb.jpg",
    media: [photo(M + "hiking/hiking-1.jpg", "Sitting on a log at a waterfall on the trail")],
  },
  {
    id: "rugby",
    name: "Rugby",
    blurb: "A fast, physical team sport that rewards grit, communication and trusting the people next to you.",
    details: ["Team sport", "Grit", "Communication"],
    accent: "#b91c1c",
    image: M + "rugby/rugby-3-thumb.jpg",
    media: [
      photo(M + "rugby/rugby-3.jpg", "On the pitch"),
      photo(M + "rugby/rugby-1.jpg", "Number 18 on the sideline"),
      photo(M + "rugby/rugby-2.jpg", "Match action"),
      photo(M + "rugby/rugby-4.jpg", "A night match"),
    ],
  },
];
