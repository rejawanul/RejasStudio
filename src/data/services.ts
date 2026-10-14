export interface Service {
  id: string;
  slug: string;
  title: string;
  description: string;
  heroContent: {
    tag: string;
    heading: string;
    highlight: string;
    sub: string;
  };
  features: string[];
  deliverables: string[];
  seoTitle: string;
  seoDescription: string;
}

export const services: Service[] = [
  {
    id: "content-creators",
    slug: "content-creators",
    title: "For Content Creators",
    description: "YouTube video editing for sports creators and individual channels.",
    heroContent: {
      tag: "Creator Production",
      heading: "We Edit Content That",
      highlight: "Grows.",
      sub: "From long-form YouTube documentary edits to viral TikTok shorts, we handle the entire workflow so you can focus on creating."
    },
    features: ["YouTube video editing", "Sports YouTube videos", "Documentary/explainer videos", "Commentary videos", "Analysis videos"],
    deliverables: ["YouTube Shorts", "Instagram Reels", "TikTok", "Content repurposing"],
    seoTitle: "Sports YouTube Video Editing for Content Creators | Reja Studio",
    seoDescription: "Expert sports YouTube editing for creators. Grow your channel with high-retention long-form and short-form video editing."
  },
  {
    id: "agencies",
    slug: "agencies",
    title: "For Agencies",
    description: "Your Clients. Our Production Team.",
    heroContent: {
      tag: "B2B Production Partner",
      heading: "Your Clients. Our",
      highlight: "Production.",
      sub: "We act as your dedicated external video production partner. You manage the client relationship. We handle the production."
    },
    features: ["Sports video editing", "YouTube content production", "Social media content", "Short-form content", "Player profile videos"],
    deliverables: ["Scalable production", "Consistent workflow", "Reliable delivery", "Sports-specific experience"],
    seoTitle: "Sports Video Production Agency Partner | Reja Studio",
    seoDescription: "Outsourced sports video production and editing for sports marketing and player management agencies."
  },
  {
    id: "athlete-player-recruitment",
    slug: "athlete-player-recruitment",
    title: "Athlete & Player Recruitment",
    description: "Turn Game Footage Into Professional Player Profiles",
    heroContent: {
      tag: "Recruitment Videos",
      heading: "Showcase Your",
      highlight: "Talent.",
      sub: "We professionally edit raw game footage into high-impact player profiles and highlight reels for athletes and scouts."
    },
    features: ["Player highlight reels", "Player recruitment videos", "Athlete profile videos", "Player showcase videos"],
    deliverables: ["Scouting videos", "Social media player clips", "Recruitment-ready video content"],
    seoTitle: "Player Recruitment Video Editing & Athlete Profiles | Reja Studio",
    seoDescription: "Professional player highlight videos and recruitment profile editing for athletes, agencies, and scouts."
  }
];
