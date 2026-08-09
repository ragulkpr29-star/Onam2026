import { galleryItems } from "@/data/gallery";

/** Auto-scrolling gallery strip; pauses on hover. */
export function GalleryStrip() {
  const items = galleryItems.slice(0, 6);
  return (
    <div className="group relative overflow-hidden" aria-label="Onam photo highlights">
      <div
        className="flex w-max gap-4 group-hover:[animation-play-state:paused]"
        style={{ animation: "marquee-x 38s linear infinite" }}
      >
        {[...items, ...items].map((item, i) => (
          <figure
            key={i}
            className="h-28 w-44 shrink-0 overflow-hidden rounded-xl ring-1 ring-accent/30 md:h-32 md:w-52"
          >
            <img
              src={item.src}
              alt={item.alt}
              loading="lazy"
              width={1024}
              height={768}
              className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
            />
          </figure>
        ))}
      </div>
    </div>
  );
}
