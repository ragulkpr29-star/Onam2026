import pookalamImg from "@/assets/event-pookalam.jpg";
import tugImg from "@/assets/event-tugofwar.jpg";
import duoImg from "@/assets/event-duodance.jpg";
import fashionAsset from "@/assets/event-fashion.jpg";

export type EventIcon = "flower" | "rope" | "dance" | "crown";

export interface OnamEvent {
  slug: string;
  title: string;
  tagline: string;
  short: string;
  description: string;
  icon: EventIcon;
  image: string;
  teamSize: string;
  venue: string;
  date: string;
  time: string;
  guidelines: string[];
}

export const COMMON_RULES: string[] = [
  "All team members must carry their valid college ID cards.",
  "Teams must report 30 minutes before the scheduled event time.",
  "The judges' decision will be final and binding.",
];

export const events: OnamEvent[] = [
  {
    slug: "pookolam",
    title: "Pookolam",
    tagline: "Create. Design. Celebrate.",
    short: "Express your creativity with vibrant floral patterns and traditional designs.",
    description:
      "Pookolam is an artistic floral decoration made on the floor, a traditional art form that represents prosperity and happiness. Bring your team together and spread the colours of Onam.",
    icon: "flower",
    image: pookalamImg,
    teamSize: "2 to 4 Members",
    venue: "Main Block Front Area",
    date: "05 Sep 2026",
    time: "09:00 AM Onwards",
    guidelines: [
      "Use of fresh flowers only.",
      "Team should bring their own materials.",
      "No artificial colors or materials allowed.",
    ],
  },
  {
    slug: "tug-of-war",
    title: "Tug of War",
    tagline: "Pull Together. Win Together.",
    short: "A test of strength, teamwork and coordination. Pull together, win together.",
    description:
      "A classic test of raw strength, timing and team spirit. Departments face off in knockout rounds until one team stands unbeaten on the field.",
    icon: "rope",
    image: tugImg,
    teamSize: "6 to 8 Members",
    venue: "College Ground",
    date: "05 Sep 2026",
    time: "11:00 AM Onwards",
    guidelines: [
      "Sports shoes are mandatory for all participants.",
      "Gloves and grip aids are not permitted.",
      "Best of three pulls decides each round.",
    ],
  },
  {
    slug: "duo-dance",
    title: "Duo Dance",
    tagline: "Dance Together. Shine Together.",
    short: "Showcase your rhythm and chemistry in this exciting dance competition.",
    description:
      "Two performers, one rhythm. Celebrate the festival with classical, folk or fusion choreography on the main stage.",
    icon: "dance",
    image: duoImg,
    teamSize: "2 Members",
    venue: "Main Auditorium",
    date: "06 Sep 2026",
    time: "10:00 AM Onwards",
    guidelines: [
      "Performance duration is 5 minutes maximum.",
      "Track must be submitted one day prior.",
      "Props involving fire or water are not allowed.",
    ],
  },
  {
    slug: "fashion-parade",
    title: "Fashion Parade",
    tagline: "Walk with Confidence.",
    short: "Walk the ramp with confidence and showcase your unique style.",
    description:
      "Walk the ramp in traditional Kerala attire and showcase your own interpretation of festive elegance, confidence and creativity.",
    icon: "crown",
    image: fashionAsset,
    teamSize: "2 to 6 Members",
    venue: "Open Air Theatre",
    date: "06 Sep 2026",
    time: "02:00 PM Onwards",
    guidelines: [
      "Costumes must follow the college dress code.",
      "Theme should reflect Kerala tradition.",
      "Each team gets 4 minutes on the ramp.",
    ],
  },
];

export const getEvent = (slug: string) => events.find((e) => e.slug === slug);

export const departments = [
  "Computer Science and Engineering",
  "Information Technology",
  "Electronics and Communication",
  "Electrical and Electronics",
  "Mechanical Engineering",
  "Civil Engineering",
];

export const years = ["I Year", "II Year", "III Year", "IV Year"];
