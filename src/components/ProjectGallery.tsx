"use client";

import { useState } from "react";
import Image from "next/image";
import { ContainedImage } from "./ContainedImage";

/** Constrained gallery: primary image capped to ~half viewport + thumbnail strip. */
export function ProjectGallery({
  images,
  title,
}: {
  images: string[];
  title: string;
}) {
  const [active, setActive] = useState(0);

  return (
    <div className="min-w-0 max-w-full space-y-4">
      <div className="relative mx-auto h-[min(48vh,420px)] w-full min-w-0 overflow-hidden bg-paper-deep sm:h-[min(52vh,480px)]">
        <ContainedImage
          key={images[active]}
          src={images[active]}
          alt={`${title} — image ${active + 1}`}
          sizes="(max-width: 1024px) 100vw, 60vw"
          priority
        />
        <div className="absolute bottom-3 right-3 z-10 bg-ink/70 px-2.5 py-1 text-[11px] tracking-wider text-paper backdrop-blur-sm">
          {active + 1} / {images.length}
        </div>
      </div>

      {images.length > 1 && (
        <div className="min-w-0 max-w-full">
          <div
            className="flex w-full max-w-full touch-pan-x snap-x snap-mandatory gap-2.5 overflow-x-auto overscroll-x-contain py-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            role="tablist"
            aria-label="Project images"
          >
            {images.map((src, i) => {
              const selected = i === active;
              return (
                <button
                  key={src}
                  type="button"
                  role="tab"
                  onClick={() => setActive(i)}
                  aria-label={`Show image ${i + 1}`}
                  aria-selected={selected}
                  className={`relative h-14 w-[4.5rem] shrink-0 snap-start overflow-hidden bg-paper-deep transition sm:h-16 sm:w-24 ${
                    selected ? "" : "opacity-50 hover:opacity-100"
                  }`}
                >
                  <Image
                    src={src}
                    alt=""
                    fill
                    className="object-cover"
                    sizes="96px"
                  />
                  {selected && (
                    <span
                      aria-hidden
                      className="pointer-events-none absolute inset-0 z-10 border-[3px] border-ink"
                    />
                  )}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
