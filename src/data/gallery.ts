import pookalam from "@/assets/event-pookalam.jpg";
import tug from "@/assets/event-tugofwar.jpg";
import duo from "@/assets/event-duodance.jpg";
import fashion from "@/assets/event-fashion.jpg";
import stage from "@/assets/gallery-stage.jpg";
import group from "@/assets/gallery-group.jpg";
import boat from "@/assets/hero-boat.jpg";

export type GalleryCategory =
  | "Pookolam"
  | "Tug of War"
  | "Duo Dance"
  | "Fashion Parade"
  | "Stage Events";

export interface GalleryItem {
  src: string;
  alt: string;
  category: GalleryCategory;
}

export const galleryItems: GalleryItem[] = [
  { src: pookalam, alt: "Pookolam floral carpet", category: "Pookolam" },
  { src: boat, alt: "Vallam kali boat race", category: "Stage Events" },
  { src: tug, alt: "Students at tug of war", category: "Tug of War" },
  { src: group, alt: "Students in traditional Kerala attire", category: "Fashion Parade" },
  { src: stage, alt: "Classical dance on stage", category: "Stage Events" },
  { src: group, alt: "Onam group photograph", category: "Duo Dance" },
  { src: fashion, alt: "Fashion parade on the ramp", category: "Fashion Parade" },
  { src: duo, alt: "Duo dance performance", category: "Duo Dance" },
  { src: pookalam, alt: "Detailed pookolam design", category: "Pookolam" },
  { src: tug, alt: "Tug of war finals", category: "Tug of War" },
  { src: stage, alt: "Stage lighting during performance", category: "Stage Events" },
  { src: duo, alt: "Dancers mid performance", category: "Duo Dance" },
];

export const galleryFilters: ("All" | GalleryCategory)[] = [
  "All",
  "Pookolam",
  "Tug of War",
  "Duo Dance",
  "Fashion Parade",
  "Stage Events",
];
