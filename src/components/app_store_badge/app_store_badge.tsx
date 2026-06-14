import { APP_ID } from "@/constants";
import styles from "./app_store_badge.module.css";

interface AppStoreBadgeProps {
  height?: number;
  ariaLabel?: string;
}

export function AppStoreBadge({
  height = 54,
  ariaLabel = "Download SkinCast on the App Store",
}: AppStoreBadgeProps) {
  return (
    <a
      className={styles.badge}
      href={`https://apps.apple.com/app/id${APP_ID}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={ariaLabel}
      style={{ height }}
    >
      <span className={styles.image} aria-hidden="true" />
    </a>
  );
}
