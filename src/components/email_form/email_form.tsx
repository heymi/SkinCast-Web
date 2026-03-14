"use client";

import AppleLogo from "@/public/app_view/apple_logo.svg";
import type { FormEvent } from "react";
import { useEffect, useRef, useState } from "react";
import { Icon } from "../icon/icon";
import styles from "./email_form.module.css";

type ProviderConfig = {
  provider: "loops";
  config: LoopsProviderConfig;
};

interface LoopsProviderConfig {
  formId: string;
  userGroup?: string;
}

interface EmailFormProps {
  header?: React.ReactNode;
  footerIdleMessage?: string;
  footerSentMessage?: string;
  providerConfig: ProviderConfig;
}

export function EmailForm({
  header = <DefaultHeader />,
  footerIdleMessage = "No spam, only the release notification.",
  footerSentMessage = "Thank you! We'll let you know when it's ready to download.",
  providerConfig,
}: EmailFormProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [email, setEmail] = useState("");
  const [submitState, setSubmitState] = useState<
    "idle" | "submitting" | "sent" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const isSent = submitState === "sent";
  const showError = submitState === "error";
  const isSubmitting = submitState === "submitting";
  const isConfigured = isProviderConfigured(providerConfig);

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const isValidEmail = validateEmail(email);

    if (!isValidEmail) {
      setSubmitState("error");
      setErrorMessage("Please enter a valid email.");
      inputRef.current?.focus();
      return;
    }

    if (!isConfigured) {
      setSubmitState("error");
      setErrorMessage("Waitlist is not configured yet.");
      return;
    }

    setSubmitState("submitting");
    setErrorMessage("");

    try {
      switch (providerConfig.provider) {
        case "loops":
          await sendToLoops({ email, config: providerConfig.config });
          break;
        default:
          throw new Error("Unsupported provider");
      }

      setEmail("");
      setSubmitState("sent");
    } catch (error) {
      console.error(error);
      setSubmitState("error");
      setErrorMessage("Something went wrong. Please try again.");
      inputRef.current?.focus();
    }
  };

  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
    setSubmitState("idle");
    setErrorMessage("");
  };

  useEffect(() => {
    if (!showError) return;

    const timeout = setTimeout(() => {
      setSubmitState("idle");
      setErrorMessage("");
    }, 3000);
    return () => clearTimeout(timeout);
  }, [showError]);

  return (
    <form className={styles.emailForm} onSubmit={onSubmit} noValidate>
      <div className={styles.header}>{header}</div>
      <div className={`${styles.controls} ${showError ? styles.invalid : ""}`}>
        <input
          ref={inputRef}
          className={styles.emailInput}
          type="email"
          name="email"
          disabled={isSubmitting || !isConfigured}
          aria-invalid={showError}
          value={email}
          onChange={onInputChange}
          placeholder="Email to get notified"
        />

        <button
          className={`${styles.sendButton} ${isSent ? styles.sent : ""}`}
          type="submit"
          disabled={isSubmitting || !isConfigured}
          aria-busy={isSubmitting}
          aria-label="Send email"
        >
          <div className={styles.sendIcon}>
            <Icon name="send" size={26} />
          </div>
          <div className={styles.checkIcon}>
            <Icon name="check_circle" size={26} />
          </div>
        </button>
      </div>
      <output
        className={`${styles.footer} ${isSent ? styles.sent : ""} ${
          showError ? styles.error : ""
        }`}
        aria-live="polite"
      >
        <span
          className={`${styles.footerMessage} ${styles.footerPrimary}`}
          aria-hidden={isSent || showError}
        >
          {footerIdleMessage}
        </span>
        <span
          className={`${styles.footerMessage} ${styles.footerSecondary}`}
          aria-hidden={!isSent || showError}
        >
          {footerSentMessage}
        </span>
        <span
          className={`${styles.footerMessage} ${styles.footerError}`}
          aria-hidden={!showError}
        >
          {errorMessage}
        </span>
      </output>
    </form>
  );
}

function DefaultHeader() {
  return (
    <div className={styles.defaultHeader}>
      <div className={styles.appleLogo}>
        <AppleLogo width={16} height={16} />
      </div>
      <div>Coming soon to the App Store</div>
    </div>
  );
}

function validateEmail(value: string) {
  const [local, domain] = value.split("@");

  if (!local || !domain) {
    return false;
  }

  const domainParts = domain.split(".");

  return (
    domainParts.length >= 2 && domainParts.every((part) => part.length > 0)
  );
}

function isProviderConfigured(providerConfig: ProviderConfig) {
  switch (providerConfig.provider) {
    case "loops":
      return providerConfig.config.formId.trim().length > 0;
    default:
      return false;
  }
}

async function sendToLoops({
  email,
  config,
}: {
  email: string;
  config: LoopsProviderConfig;
}) {
  const formBody = new URLSearchParams({ email });

  if (config.userGroup) {
    formBody.append("userGroup", config.userGroup);
  }

  const response = await fetch(
    `https://app.loops.so/api/newsletter-form/${config.formId}`,
    {
      method: "POST",
      body: formBody.toString(),
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    },
  );

  if (!response.ok) {
    throw new Error(`Loops waitlist request failed with status ${response.status}`);
  }
}
