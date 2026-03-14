import { Icon } from "../icon/icon";
import styles from "./get_notified_action_button.module.css";

interface GetNotifiedActionButtonProps {
  href: string;
  label?: string;
  size?: "small" | "medium" | "large";
}

export function GetNotifiedActionButton({
  href,
  label = "Get notified",
  size = "medium",
}: GetNotifiedActionButtonProps) {
  const target = href.startsWith("http") ? "_blank" : undefined;

  return (
    <a
      href={href}
      className={`${styles.downloadActionButton} ${styles[size]}`}
      target={target}
    >
      <div className={styles.label}>
        <div className={styles.sendIcon}>
          <Icon name="send" size={size} />
        </div>
        <div className={styles.actionLabel}>{label}</div>
      </div>
    </a>
  );
}
