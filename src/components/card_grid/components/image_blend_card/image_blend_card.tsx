import { buildClassNameForFontStyle } from "@/lib/utils";
import type { FontStyle } from "@/types/shared";
import Image from "next/image";
import sharedGridStyles from "../../shared.module.css";
import styles from "./image_blend_card.module.css";

interface ImageBlendCardProps {
  maxWidth: "third" | "half" | "twoThirds" | "full";
  imageSrc: string;
  imageAlt: string;
  title: string;
  titleFontStyle?: FontStyle;
  description?: string;
  imageObjectPosition?: string;
}

export function ImageBlendCard({
  maxWidth,
  imageSrc,
  imageAlt,
  title,
  titleFontStyle = "sans",
  description,
  imageObjectPosition = "center 28%",
}: ImageBlendCardProps) {
  const titleFontStyleClass = buildClassNameForFontStyle(titleFontStyle, {
    whimsical: styles.whimsical,
    cursive: styles.cursive,
  });

  return (
    <figure
      className={`${sharedGridStyles.gridCardItem} ${sharedGridStyles[maxWidth]} ${styles.card}`}
    >
      <div className={styles.imageLayer}>
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill={true}
          sizes="(max-width: 767px) 100vw, 300px"
          className={styles.image}
          style={{ objectPosition: imageObjectPosition }}
        />
      </div>

      <div className={styles.content}>
        <div className={styles.textBand}>
          <h2 className={`${styles.title} ${titleFontStyleClass}`}>{title}</h2>
          {description && <p className={styles.description}>{description}</p>}
        </div>
      </div>
    </figure>
  );
}
