export interface PortfolioProject {
  id: string;
  slug: string;
  title: string;
  category: "Sports" | "Shorts & Reels" | "Documentary";
  sport: "NBA" | "NFL" | "Soccer" | "UFC/MMA";
  type: "Long-form" | "Shorts/Reels";
  thumbnail: string;
  videoUrl: string;
  youtubeId: string;
  description: string;
  servicesUsed: string[];
  featured: boolean;
  isRecruitment?: boolean;
}

export const portfolioProjects: PortfolioProject[] = [
  // 1. NBA Season Highlights Reel
  {
    id: "nba-season-highlights-reel",
    slug: "nba-season-highlights-reel",
    title: "NBA Season Highlights Reel & Top Plays",
    category: "Sports",
    sport: "NBA",
    type: "Long-form",
    thumbnail: "https://img.youtube.com/vi/-G9mw99c9ls/maxresdefault.jpg",
    youtubeId: "-G9mw99c9ls",
    videoUrl: "https://www.youtube.com/watch?v=-G9mw99c9ls",
    description: "Intense basketball recap featuring rhythm-matched music sync, kinetic typography, and 4K enhancements.",
    servicesUsed: ["After Effects", "Motion Graphics", "Pacing & Sync"],
    featured: true,
    isRecruitment: false,
  },
  // 2. NFL Game Day Highlights
  {
    id: "nfl-game-day-highlights",
    slug: "nfl-game-day-highlights",
    title: "NFL Game Day Touchdown Highlights",
    category: "Sports",
    sport: "NFL",
    type: "Long-form",
    thumbnail: "https://img.youtube.com/vi/0884dZ93Ozg/maxresdefault.jpg",
    youtubeId: "0884dZ93Ozg",
    videoUrl: "https://www.youtube.com/watch?v=0884dZ93Ozg",
    description: "Gridiron hard-hitting cuts, broadcast-style lower thirds, and impactful slow-motion replays.",
    servicesUsed: ["YouTube Long-form", "Color Grading", "Audio Mixing"],
    featured: true,
    isRecruitment: false,
  },
  // 3. UFC & MMA Fight Night
  {
    id: "mma-fight-night",
    slug: "mma-fight-night",
    title: "UFC & MMA Fight Night Highlights",
    category: "Sports",
    sport: "UFC/MMA",
    type: "Long-form",
    thumbnail: "https://img.youtube.com/vi/LxzzF0XcdX4/maxresdefault.jpg",
    youtubeId: "LxzzF0XcdX4",
    videoUrl: "https://www.youtube.com/watch?v=LxzzF0XcdX4",
    description: "Heavy strike SFX enhancements, cinematic slow-motion breakdowns, and intense color grading.",
    servicesUsed: ["Sound Design", "Visual Effects", "Color Grade"],
    featured: true,
  },
  // 4. Soccer Match Highlights
  {
    id: "soccer-match-highlights",
    slug: "soccer-match-highlights",
    title: "Soccer Match Highlights & Cinematic Goals",
    category: "Sports",
    sport: "Soccer",
    type: "Long-form",
    thumbnail: "https://img.youtube.com/vi/mg_waxJg9Ww/maxresdefault.jpg",
    youtubeId: "mg_waxJg9Ww",
    videoUrl: "https://www.youtube.com/watch?v=mg_waxJg9Ww",
    description: "High-paced multi-angle cuts, speed ramping, color grading, and dynamic crowd audio design.",
    servicesUsed: ["Premiere Pro", "Color Grading", "Sound Design"],
    featured: true,
    isRecruitment: false,
  },
  // 5. NBA Viral Shorts / Reels 1
  {
    id: "nba-viral-short-reel-1",
    slug: "nba-viral-short-reel-1",
    title: "NBA Viral Short Reel #1 · Clutch Moments",
    category: "Shorts & Reels",
    sport: "NBA",
    type: "Shorts/Reels",
    thumbnail: "https://img.youtube.com/vi/_cKoBW7PxwA/maxresdefault.jpg",
    youtubeId: "_cKoBW7PxwA",
    videoUrl: "https://www.youtube.com/watch?v=_cKoBW7PxwA",
    description: "Fast-paced vertical reel engineered for 80%+ retention on YouTube Shorts, Instagram Reels, and TikTok.",
    servicesUsed: ["Short-form Editing", "Motion Graphics", "Sound Design"],
    featured: true,
  },
  // 6. NBA Viral Shorts / Reels 2
  {
    id: "nba-viral-short-reel-2",
    slug: "nba-viral-short-reel-2",
    title: "NBA Viral Short Reel #2 · Ankle Breakers",
    category: "Shorts & Reels",
    sport: "NBA",
    type: "Shorts/Reels",
    thumbnail: "https://img.youtube.com/vi/Le2jrkOQmMM/maxresdefault.jpg",
    youtubeId: "Le2jrkOQmMM",
    videoUrl: "https://www.youtube.com/watch?v=Le2jrkOQmMM",
    description: "Dynamic zooms, engaging sound effects, and animated captions tailored for high algorithmic distribution.",
    servicesUsed: ["Short-form Editing", "Sound Design", "Captions"],
    featured: true,
  },
  // 7. Athlete Recruitment: NFL Profile
  {
    id: "nfl-recruitment-profile",
    slug: "nfl-recruitment-profile",
    title: "NFL Player Recruitment Profile & Scouting Tape",
    category: "Sports",
    sport: "NFL",
    type: "Long-form",
    thumbnail: "https://img.youtube.com/vi/B0iX73A9bDw/maxresdefault.jpg",
    youtubeId: "B0iX73A9bDw",
    videoUrl: "https://www.youtube.com/watch?v=B0iX73A9bDw",
    description: "Player scouting tape, isolation circles, speed-ramp replays, and college coach recruitment package.",
    servicesUsed: ["Player Spotlight", "Telestration", "Color Grading"],
    featured: true,
    isRecruitment: true,
  },
  // 8. Athlete Recruitment: NBA Profile
  {
    id: "nba-recruitment-profile",
    slug: "nba-recruitment-profile",
    title: "NBA High School Prospect Recruitment Reel",
    category: "Sports",
    sport: "NBA",
    type: "Long-form",
    thumbnail: "https://img.youtube.com/vi/ie0rdAj3vAU/maxresdefault.jpg",
    youtubeId: "ie0rdAj3vAU",
    videoUrl: "https://www.youtube.com/watch?v=ie0rdAj3vAU",
    description: "Scouting tape showcasing clutch shot-making, transition defense, and athletic measurables.",
    servicesUsed: ["Scouting Highlight", "Telestration", "Pacing & Sync"],
    featured: true,
    isRecruitment: true,
  },
];
