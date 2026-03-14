import { CardGrid } from "@/components/card_grid/card_grid";
import { DownloadActionButton } from "@/components/download_action_button/download_action_button";
import { EmailForm } from "@/components/email_form/email_form";
import { Hero } from "@/components/hero/hero";
import { Section } from "@/components/section/section";
import {
  IS_WAITLIST_ENABLED,
  LOOPS_WAITLIST_FORM_ID,
  LOOPS_WAITLIST_USER_GROUP,
} from "@/constants";

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
              <DownloadActionButton size="medium" label="Download on the App Store" />
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
            maxWidth="half"
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

          <CardGrid.StackedCard
            maxWidth="half"
            title="Stay steady over the week."
            description="Follow your 7-day trend to spot patterns, see what is improving, and keep your routine aligned with changing conditions."
            media={
              <CardGrid.StackedCard.Image
                src="/screenshots/score-action-plan.png"
                bezel="iPhone 17 Black"
                bezelCrop={{ edge: "top", croppedRatio: 0.54 }}
                alt="Action plan screen with moisturizer guidance and seven-day impact trend"
              />
            }
            layoutDirection="forward"
            textAlignment="center"
          />
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
          <DownloadActionButton size="medium" />
        )}
      </Section>
    </>
  );
}
