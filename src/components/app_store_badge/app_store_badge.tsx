import { APP_ID } from "@/constants";
import styles from "./app_store_badge.module.css";

interface AppStoreBadgeProps {
  height?: number;
}

export function AppStoreBadge({ height = 54 }: AppStoreBadgeProps) {
  return (
    <a
      className={styles.badge}
      href={`https://apps.apple.com/app/id${APP_ID}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Download SkinCast on the App Store"
      style={{ height }}
    >
      <span className={styles.image} aria-hidden="true" />
    </a>
  );
}
