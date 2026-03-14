"use client";

import { useBezelImageRenderer } from "@/hooks/useBezelImageRenderer";
import { DEVICE_BEZEL_CONFIGURATION_MAP } from "@/lib/device_bezel_configuration_map";
import type { Bezel, ImageSrcsetEntry } from "@/types/shared";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import styles from "./hero_image.module.css";

interface HeroImageProps {
  src: string;
  srcset?: ImageSrcsetEntry[];
  alt: string;
  bezel: Bezel;
  transitionSrc?: string;
  transitionSrcset?: ImageSrcsetEntry[];
  transitionAlt?: string;
  transitionIntervalMs?: number;
}

export function HeroImage({
  src,
  srcset,
  alt,
  bezel,
  transitionSrc,
  transitionSrcset,
  transitionAlt,
  transitionIntervalMs = 6000,
}: HeroImageProps) {
  const bezelConfig = DEVICE_BEZEL_CONFIGURATION_MAP[bezel];
  const frames = [
    { src, srcset, alt },
    ...(transitionSrc
      ? [
          {
            src: transitionSrc,
            srcset: transitionSrcset,
            alt: transitionAlt ?? alt,
          },
        ]
      : []),
  ];
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (frames.length < 2) {
      return;
    }

    const intervalId = window.setInterval(() => {
      setActiveIndex((currentIndex) => (currentIndex + 1) % frames.length);
    }, transitionIntervalMs);

    return () => {
      window.clearInterval(intervalId);
    };
  }, [frames.length, transitionIntervalMs]);

  return (
    <div className={styles.heroImage} role="img" aria-label={frames[activeIndex].alt}>
      <div
        className={styles.shadow}
        style={
          {
            ["--bottom-offset"]: `${bezelConfig.shadowBottomOffset}px`,
          } as React.CSSProperties
        }
      >
        <Image
          src="/app_view/iphone_shadow.png"
          alt=""
          width={592}
          height={68}
          style={{ width: "100%", height: "auto" }}
        />
      </div>
      {frames.map((frame, index) => (
        <BezelCanvasFrame
          key={frame.src}
          src={frame.src}
          srcset={frame.srcset}
          bezel={bezel}
          isActive={index === activeIndex}
        />
      ))}
      {frames.length > 1 && (
        <div className={styles.controls} role="group" aria-label="Hero image controls">
          {frames.map((frame, index) => (
            <button
              key={`${frame.src}-control`}
              type="button"
              className={`${styles.controlButton} ${
                index === activeIndex ? styles.controlButtonActive : ""
              }`}
              aria-label={`Show image ${index + 1}`}
              aria-pressed={index === activeIndex}
              onClick={() => {
                setActiveIndex(index);
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
}

function BezelCanvasFrame({
  src,
  srcset,
  bezel,
  isActive,
}: {
  src: string;
  srcset?: ImageSrcsetEntry[];
  bezel: Bezel;
  isActive: boolean;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useBezelImageRenderer({
    canvasRef,
    src,
    srcset,
    bezel,
  });

  return (
    <canvas
      ref={canvasRef}
      className={`${styles.imageCanvas} ${styles.canvasLayer} ${
        isActive ? styles.visible : styles.hidden
      }`}
      aria-hidden="true"
    />
  );
}
