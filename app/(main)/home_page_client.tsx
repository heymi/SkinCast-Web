"use client";

import { AppStoreBadge } from "@/components/app_store_badge/app_store_badge";
import { CardGrid } from "@/components/card_grid/card_grid";
import sharedGridStyles from "@/components/card_grid/shared.module.css";
import { Hero } from "@/components/hero/hero";
import { Section } from "@/components/section/section";
import { useState } from "react";
import { HOME_COPY, SCREENSHOTS } from "./home_copy";
import type { HomeLanguage } from "./home_copy";
import styles from "./page.module.css";

const PRIVACY_FIRST_ICON = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    fill="currentColor"
  >
    <path d="M479.07 111.36a16 16 0 0 0-13.15-14.74c-86.5-15.52-122.61-26.74-203.33-63.2a16 16 0 0 0-13.18 0C168.69 69.88 132.58 81.1 46.08 96.62a16 16 0 0 0-13.15 14.74c-3.85 61.11 4.36 118.05 24.43 169.24A349.5 349.5 0 0 0 129 393.11c53.47 56.73 110.24 81.37 121.07 85.73a16 16 0 0 0 12 0c10.83-4.36 67.6-29 121.07-85.73a349.5 349.5 0 0 0 71.5-112.51c20.07-51.19 28.28-108.13 24.43-169.24m-131 75.11l-110.8 128a16 16 0 0 1-11.41 5.53h-.66a16 16 0 0 1-11.2-4.57l-49.2-48.2a16 16 0 1 1 22.4-22.86l37 36.29l99.7-115.13a16 16 0 0 1 24.2 20.94Z" />
  </svg>
);

export function HomePageClient() {
  const [language, setLanguage] = useState<HomeLanguage>("en");
  const copy = HOME_COPY[language];
  const screenshots = SCREENSHOTS[language];
  const alternateLanguage: HomeLanguage =
    language === "en" ? "zh-Hans" : "en";

  return (
    <>
      <Section paddingTop={100}>
        <Hero
          title={copy.hero.title}
          titleFontStyle="display"
          subtitle={copy.hero.subtitle}
          media={
            <Hero.Image
              key={language}
              src={screenshots.suggestion}
              transitionSrc={screenshots.score}
              bezel="iPhone 17 Black"
              alt={copy.hero.imageAlt}
              transitionAlt={copy.hero.transitionAlt}
            />
          }
          action={
            <div className={styles.heroActions}>
              <AppStoreBadge ariaLabel={copy.hero.actionLabel} />
              <button
                type="button"
                className={styles.languageSwitch}
                aria-label={`Switch language to ${HOME_COPY[alternateLanguage].languageLabel}`}
                onClick={() => setLanguage(alternateLanguage)}
              >
                <span>{copy.languageLabel}</span>
                <span aria-hidden="true">/</span>
                <span>{copy.alternateLanguageLabel}</span>
              </button>
            </div>
          }
        />
      </Section>

      <Section navigationAnchor="features">
        <CardGrid rowHeight={438}>
          <CardGrid.ImageBlendCard
            maxWidth="third"
            imageSrc={screenshots.suggestion}
            imageAlt={copy.featureCards.uv.imageAlt}
            title={copy.featureCards.uv.title}
            description={copy.featureCards.uv.description}
            imageObjectPosition="center 38%"
          />

          <CardGrid.StackedCard
            maxWidth="twoThirds"
            title={copy.featureCards.score.title}
            description={copy.featureCards.score.description}
            media={
              <CardGrid.StackedCard.Image
                src={screenshots.score}
                alt={copy.featureCards.score.imageAlt}
                bezel="iPhone 17 Black"
                bezelCrop={{ edge: "bottom", croppedRatio: 0.28 }}
              />
            }
            textAlignment="leading"
          />

          <CardGrid.StackedCard
            maxWidth="twoThirds"
            title={copy.featureCards.plan.title}
            description={copy.featureCards.plan.description}
            layoutDirection="reverse"
            media={
              <CardGrid.StackedCard.Image
                src={screenshots.actionPlan}
                alt={copy.featureCards.plan.imageAlt}
                bezel="iPhone 17 Black"
                bezelCrop={{ edge: "top", croppedRatio: 0.2 }}
              />
            }
            textAlignment="leading"
          />

          <CardGrid.OverlaidCard
            maxWidth="third"
            imageSrc={screenshots.profile}
            title={copy.featureCards.profile.title}
            description={copy.featureCards.profile.description}
            textAlignment="bottomLeading"
            textColorTheme="light"
          />

          <CardGrid.StackedCard
            maxWidth="full"
            title={copy.featureCards.sources.title}
            description={copy.featureCards.sources.description}
            media={
              <CardGrid.StackedCard.Image
                src={screenshots.actionPlan}
                alt={copy.featureCards.plan.imageAlt}
                bezel="iPhone 17 Black"
                bezelCrop={{ edge: "bottom", croppedRatio: 0.38 }}
              />
            }
          />

          <CardGrid.StackedCard
            maxWidth="twoThirds"
            title={copy.featureCards.pro.title}
            description={copy.featureCards.pro.description}
            media={
              <CardGrid.StackedCard.Image
                src={screenshots.suggestion}
                alt={copy.featureCards.uv.imageAlt}
                bezel="iPhone 17 Black"
                bezelCrop={{ edge: "top", croppedRatio: 0.36 }}
              />
            }
            layoutDirection="reverse"
            textAlignment="center"
          />

          <figure
            className={`${sharedGridStyles.gridCardItem} ${sharedGridStyles.third}`}
          >
            <div className={styles.privacyCard}>
              <div className={styles.privacyVisual} aria-hidden="true">
                <div className={styles.privacyShield}>{PRIVACY_FIRST_ICON}</div>
                <div className={styles.privacyChips}>
                  {copy.privacy.chips.map((chip) => (
                    <span key={chip} className={styles.privacyChip}>
                      {chip}
                    </span>
                  ))}
                </div>
              </div>
              <div className={styles.privacyContent}>
                <h2 className={styles.privacyTitle}>{copy.privacy.title}</h2>
                <p className={styles.privacyDescription}>
                  {copy.privacy.description}
                </p>
              </div>
            </div>
          </figure>
        </CardGrid>
      </Section>

      <Section title={copy.consistency.title}>
        <CardGrid rowHeight={280}>
          {copy.consistency.items.map((item) => (
            <CardGrid.IconCard
              key={item.title}
              maxWidth="third"
              iconName={item.iconName}
              title={item.title}
              description={item.description}
            />
          ))}
        </CardGrid>
      </Section>

      <Section title={copy.faqTitle} navigationAnchor="faq">
        <div className={styles.faqList}>
          {copy.faq.map((item) => (
            <details key={item.question} className={styles.faqItem}>
              <summary className={styles.faqQuestion}>
                {item.question}
                <span className={styles.faqIcon} aria-hidden="true" />
              </summary>
              <p className={styles.faqAnswer}>{item.answer}</p>
            </details>
          ))}
        </div>
      </Section>

      <Section paddingTop={60} paddingBottom={160}>
        <div className={styles.finalCta}>
          <AppStoreBadge height={64} ariaLabel={copy.hero.actionLabel} />
          <span>{copy.finalCta}</span>
        </div>
      </Section>
    </>
  );
}
