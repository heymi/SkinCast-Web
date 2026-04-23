import { AppStoreBadge } from "@/components/app_store_badge/app_store_badge";
import { CardGrid } from "@/components/card_grid/card_grid";
import { EmailForm } from "@/components/email_form/email_form";
import { Hero } from "@/components/hero/hero";
import { Section } from "@/components/section/section";
import sharedGridStyles from "@/components/card_grid/shared.module.css";
import {
  IS_WAITLIST_ENABLED,
  LOOPS_WAITLIST_FORM_ID,
  LOOPS_WAITLIST_USER_GROUP,
} from "@/constants";
import styles from "./page.module.css";

const FAQ_ITEMS = [
  {
    question: "How does weather affect my skin?",
    answer:
      "Weather conditions like humidity, temperature, UV index, and wind directly impact your skin's hydration, oil production, and barrier function. Low humidity can cause dryness and flaking, high UV accelerates aging and damage, and temperature swings can trigger sensitivity or redness. SkinCast analyzes these factors together to give you a clear daily picture.",
  },
  {
    question: "What makes SkinCast different from other skincare apps?",
    answer:
      "SkinCast focuses on the connection between daily weather conditions and your skin. Instead of generic tips, it reads real-time climate data — humidity, UV, temperature, and environmental stress — and translates that into personalized guidance based on your specific skin concerns like acne, dryness, or sensitivity.",
  },
  {
    question: "Do I need to create an account to use SkinCast?",
    answer:
      "No. SkinCast is private by design. It works without registration, login, or any personal information collection. Your skin data stays on your device.",
  },
  {
    question: "What skin concerns does SkinCast support?",
    answer:
      "SkinCast supports a range of concerns including acne, dryness, sensitivity, redness, rosacea, and more. You set your concerns once, and every daily read adapts to what matters most to you.",
  },
  {
    question: "Is SkinCast free to use?",
    answer:
      "SkinCast offers a free daily skin read with core features. The Pro tier unlocks richer analysis, clearer explanations, and more personalized guidance for those who want to go deeper.",
  },
  {
    question: "How does the daily skin score work?",
    answer:
      "The daily skin score is an at-a-glance number that highlights overall skin stress based on current weather conditions and your concerns. It surfaces the top risk factor and breaks down the conditions shaping how your skin may feel, along with a focused action plan.",
  },
] as const;

const PRIVACY_FIRST_ICON = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    fill="currentColor"
  >
    <path d="M479.07 111.36a16 16 0 0 0-13.15-14.74c-86.5-15.52-122.61-26.74-203.33-63.2a16 16 0 0 0-13.18 0C168.69 69.88 132.58 81.1 46.08 96.62a16 16 0 0 0-13.15 14.74c-3.85 61.11 4.36 118.05 24.43 169.24A349.5 349.5 0 0 0 129 393.11c53.47 56.73 110.24 81.37 121.07 85.73a16 16 0 0 0 12 0c10.83-4.36 67.6-29 121.07-85.73a349.5 349.5 0 0 0 71.5-112.51c20.07-51.19 28.28-108.13 24.43-169.24m-131 75.11l-110.8 128a16 16 0 0 1-11.41 5.53h-.66a16 16 0 0 1-11.2-4.57l-49.2-48.2a16 16 0 1 1 22.4-22.86l37 36.29l99.7-115.13a16 16 0 0 1 24.2 20.94Z" />
  </svg>
);

export default function Page() {
  return (
    <>
      <Section paddingTop={100} navigationAnchor={IS_WAITLIST_ENABLED ? "waitlist" : undefined}>
        <Hero
          title="Today’s weather, decoded for your skin."
          titleFontStyle="display"
          subtitle={
            IS_WAITLIST_ENABLED
              ? "SkinCast uses AI to read today’s climate conditions and translate their skin impact into your care focus, so you know what matters in seconds. Join the waitlist for early access."
              : "SkinCast uses AI to read today’s climate conditions and translate their skin impact into your care focus, so you know what matters in seconds."
          }
          media={
            <Hero.Image
              src="/screenshots/routine-suggestion.png"
              transitionSrc="/screenshots/dashboard-score.png"
              bezel="iPhone 17 Black"
              alt="Routine suggestion screen explaining how low humidity affects skin"
              transitionAlt="Skin score dashboard with overall score and condition breakdown"
            />
          }
          action={
            IS_WAITLIST_ENABLED ? (
              <EmailForm
                header={<div>Join the waitlist for early access</div>}
                footerIdleMessage="Early access only. Product updates when they matter."
                footerSentMessage="You are in. We will let you know when SkinCast opens."
                providerConfig={{
                  provider: "loops",
                  config: {
                    formId: LOOPS_WAITLIST_FORM_ID,
                    userGroup: LOOPS_WAITLIST_USER_GROUP,
                  },
                }}
              />
            ) : (
              <AppStoreBadge />
            )
          }
        />
      </Section>

      <Section navigationAnchor="features">
        <CardGrid rowHeight={438}>
          <CardGrid.ImageBlendCard
            maxWidth="third"
            imageSrc="/screenshots/derived/ai-module-card.jpg"
            imageAlt="SkinCast AI analysis screen with an orbit visualization for weather-driven skin guidance"
            title="AI decodes today’s skin climate."
            description="SkinCast reads humidity, temperature, UV, and climate stress together, then explains how they may affect your skin today."
          />

          <CardGrid.StackedCard
            maxWidth="twoThirds"
            title="Built for your skin. Not averages."
            description="Set your concerns once, and each daily read adapts around acne, dryness, sensitivity, redness, and the skin issues you care about most."
            media={
              <CardGrid.StackedCard.Image
                src="/screenshots/concerns-selector.png"
                alt="Skin concern selection screen with acne, rosacea, dryness, and other options"
                bezel="iPhone 17 Black"
              />
            }
            textAlignment="leading"
          />

          <CardGrid.StackedCard
            maxWidth="twoThirds"
            title="Go deeper with Pro insights."
            description="Unlock richer analysis, clearer explanations, and more personalized guidance when you want more than the quick daily read."
            layoutDirection="reverse"
            media={
              <CardGrid.StackedCard.Image
                src="/screenshots/premium-plan.png"
                alt="Premium plan screen with personalized insights and subscription options"
                bezel="iPhone 17 Black"
                bezelCrop={{ edge: "top", croppedRatio: 0.1 }}
              />
            }
            textAlignment="leading"
          />

          <CardGrid.OverlaidCard
            maxWidth="third"
            imageSrc="/screenshots/widgets-preview.png"
            title="Widgets that keep the day in view."
            description="Check today’s skin score, top risk, and care focus right from your Home Screen at a glance."
            textAlignment="bottomLeading"
            textColorTheme="light"
          />

          <CardGrid.StackedCard
            maxWidth="full"
            title="See today’s skin stress in seconds."
            description="A daily score highlights overall skin stress, surfaces the top risk, and breaks down the conditions shaping how your skin may feel."
            layoutDirection="forward"
            media={
              <CardGrid.StackedCard.Image
                src="/screenshots/dashboard-score.png"
                alt="Skin score dashboard with overall score and condition breakdown"
                bezel="iPhone 17 Black"
                bezelCrop={{ edge: "bottom", croppedRatio: 0.34 }}
              />
            }
          />

          <CardGrid.StackedCard
            maxWidth="twoThirds"
            title="Know the next move."
            description="Get a focused action plan for today, from hydration support to barrier recovery, based on what your skin needs now."
            media={
              <CardGrid.StackedCard.Image
                src="/screenshots/score-action-plan.png"
                bezel="iPhone 17 Black"
                bezelCrop={{ edge: "top", croppedRatio: 0.42 }}
                alt="Action plan screen with moisturizer guidance and seven-day impact trend"
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
                  <span className={styles.privacyChip}>No account</span>
                  <span className={styles.privacyChip}>No sign-in</span>
                  <span className={styles.privacyChip}>No tracking</span>
                </div>
              </div>
              <div className={styles.privacyContent}>
                <h2 className={styles.privacyTitle}>Private by design.</h2>
                <p className={styles.privacyDescription}>
                  SkinCast works without registration or login, and it does not
                  collect personal information from app use.
                </p>
              </div>
            </div>
          </figure>
        </CardGrid>
      </Section>

      <Section title="Why consistency gets easier">
        <CardGrid rowHeight={280}>
          <CardGrid.IconCard
            maxWidth="third"
            iconName="check_circle"
            title="Fast daily read"
            description="Open once, scan in seconds, and know whether today calls for hydration, calming care, or barrier support."
          />

          <CardGrid.IconCard
            maxWidth="third"
            iconName="lock"
            title="More tailored guidance"
            description="Daily guidance adapts to your concerns and current condition, so the advice feels personal instead of generic."
          />

          <CardGrid.IconCard
            maxWidth="third"
            iconName="star"
            title="Better long-term rhythm"
            description="Scores, trends, and action plans help you stay consistent and learn what your skin responds to over time."
          />
        </CardGrid>
      </Section>

      <Section title="Frequently asked questions" navigationAnchor="faq">
        <div className={styles.faqList}>
          {FAQ_ITEMS.map((item) => (
            <details key={item.question} className={styles.faqItem}>
              <summary className={styles.faqQuestion}>
                {item.question}
                <span className={styles.faqIcon} aria-hidden="true" />
              </summary>
              <p className={styles.faqAnswer}>{item.answer}</p>
            </details>
          ))}
        </div>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: FAQ_ITEMS.map((item) => ({
                "@type": "Question",
                name: item.question,
                acceptedAnswer: {
                  "@type": "Answer",
                  text: item.answer,
                },
              })),
            }),
          }}
        />
      </Section>

      <Section paddingTop={60} paddingBottom={160}>
        {IS_WAITLIST_ENABLED ? (
          <EmailForm
            header={<div>Be first when SkinCast launches</div>}
            footerIdleMessage="Join the list for launch access and product updates."
            footerSentMessage="Thanks. You are on the list."
            providerConfig={{
              provider: "loops",
              config: {
                formId: LOOPS_WAITLIST_FORM_ID,
                userGroup: LOOPS_WAITLIST_USER_GROUP,
              },
            }}
          />
        ) : (
          <AppStoreBadge height={64} />
        )}
      </Section>
    </>
  );
}
