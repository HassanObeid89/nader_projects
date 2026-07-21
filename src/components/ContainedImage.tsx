import Image from "next/image";

type Props = {
  src: string;
  alt: string;
  sizes: string;
  priority?: boolean;
  /** Extra classes on the sharp foreground image (e.g. hover scale) */
  className?: string;
};

/**
 * Fills the parent (relative + sized) without cropping or stretching:
 * blurred cover as backdrop + sharp contain image centered on top.
 */
export function ContainedImage({
  src,
  alt,
  sizes,
  priority = false,
  className = "",
}: Props) {
  return (
    <>
      <Image
        src={src}
        alt=""
        fill
        aria-hidden
        sizes={sizes}
        className="scale-110 object-cover blur-xl"
      />
      <div className="absolute inset-0 bg-paper-deep/40" />
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes={sizes}
        className={`object-contain ${className}`.trim()}
      />
    </>
  );
}
