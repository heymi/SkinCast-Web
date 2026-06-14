export type HomeLanguage = "en" | "zh-Hans";

type HomeCopy = {
  languageLabel: string;
  alternateLanguageLabel: string;
  hero: {
    title: string;
    subtitle: string;
    actionLabel: string;
    imageAlt: string;
    transitionAlt: string;
  };
  featureCards: {
    uv: { title: string; description: string; imageAlt: string };
    score: { title: string; description: string; imageAlt: string };
    plan: { title: string; description: string; imageAlt: string };
    profile: { title: string; description: string; imageAlt: string };
    sources: { title: string; description: string };
    pro: { title: string; description: string };
  };
  privacy: {
    chips: readonly string[];
    title: string;
    description: string;
  };
  consistency: {
    title: string;
    items: readonly {
      iconName: "wb_sunny" | "air" | "travel_explore";
      title: string;
      description: string;
    }[];
  };
  faqTitle: string;
  faq: readonly { question: string; answer: string }[];
  finalCta: string;
};

export const HOME_COPY: Record<HomeLanguage, HomeCopy> = {
  en: {
    languageLabel: "English",
    alternateLanguageLabel: "中文",
    hero: {
      title: "Weather-based skincare, before the day reaches your skin.",
      subtitle:
        "SkinCast turns UV, humidity, wind, temperature, and air quality into a daily skin forecast, so you can adjust sunscreen, barrier care, and actives with context.",
      actionLabel: "Download SkinCast on the App Store",
      imageAlt:
        "SkinCast suggestion screen explaining how wind and UV affect today's skincare plan",
      transitionAlt:
        "SkinCast score screen showing today's skin stress, top risk, and environmental drivers",
    },
    featureCards: {
      uv: {
        title: "UV risk, translated into the routine.",
        description:
          "Know when sun exposure is the main driver before choosing SPF, actives, or recovery care.",
        imageAlt:
          "SkinCast recommendation screen with weather-aware sunscreen and routine guidance",
      },
      score: {
        title: "See today's skin stress in one read.",
        description:
          "A daily score highlights the top concern and shows how humidity, UV, wind, and air quality shape your skin context.",
        imageAlt:
          "SkinCast score screen with top risk, data coverage, and environment signals",
      },
      plan: {
        title: "Turn the forecast into next steps.",
        description:
          "Get a concise action plan for barrier care, sunscreen, hydration, and actives based on the conditions outside.",
        imageAlt:
          "SkinCast action plan screen with moisture, BHA, and occlusive guidance",
      },
      profile: {
        title: "Personalized by your skin profile.",
        description:
          "Set your skin type and concerns once, then let each forecast adapt around sensitive, dry, oily, acne-prone, or travel-stressed skin.",
        imageAlt:
          "SkinCast onboarding screen for selecting skin type and concerns",
      },
      sources: {
        title: "Grounded in public skin-health references.",
        description:
          "SkinCast draws from public guidance and research references from groups such as AAD, FDA, EPA, WHO, and dermatology journals.",
      },
      pro: {
        title: "Pro turns basics into an AI skin brief.",
        description:
          "Upgrade from quick rules to fuller analysis with data interpretation, risk focus, and concrete skincare actions.",
      },
    },
    privacy: {
      chips: ["No account", "No sign-in", "No tracking"],
      title: "Private by design.",
      description:
        "SkinCast works without registration or login. Your skin context stays on your device.",
    },
    consistency: {
      title: "Why consistency gets easier",
      items: [
        {
          iconName: "wb_sunny",
          title: "UV before it surprises you",
          description:
            "Check whether today needs stronger sunscreen habits before the sun becomes the problem.",
        },
        {
          iconName: "air",
          title: "Weather signals in plain language",
          description:
            "Humidity, wind, temperature, and air quality become a practical care focus instead of scattered numbers.",
        },
        {
          iconName: "travel_explore",
          title: "Useful when the city changes",
          description:
            "Compare conditions before travel so dry air, heat, or humidity does not catch your routine cold.",
        },
      ],
    },
    faqTitle: "Frequently asked questions",
    faq: [
      {
        question: "What does SkinCast forecast?",
        answer:
          "SkinCast turns UV, humidity, wind, temperature, and air quality into a daily skincare forecast. It highlights the main skin stressor and suggests routine adjustments for the day.",
      },
      {
        question: "What are the suggestions based on?",
        answer:
          "SkinCast combines weather signals with public skin-health guidance, regulatory references, and dermatology literature, including sources such as AAD, FDA, EPA, WHO, and peer-reviewed journals. It is still designed for daily skincare planning, not diagnosis or treatment.",
      },
      {
        question: "Who is it most useful for?",
        answer:
          "It is especially useful for sensitive, dry, oily, combination, acne-prone, rosacea-prone, or travel-stressed skin, where weather shifts can change what the routine needs.",
      },
      {
        question: "Do I need an account?",
        answer:
          "No. SkinCast works without registration or login, and the app is designed to keep your skin context on your device.",
      },
      {
        question: "What does Pro add?",
        answer:
          "Pro unlocks fuller AI analysis, more frequent refreshes, and extended weather-aware guidance when you want more than the quick daily read.",
      },
    ],
    finalCta: "Download SkinCast",
  },
  "zh-Hans": {
    languageLabel: "中文",
    alternateLanguageLabel: "English",
    hero: {
      title: "让天气提前告诉你，今天该怎么护肤。",
      subtitle:
        "SkinCast 根据 UV、湿度、风力、温度和空气质量生成每日肤况预报，帮你在出门前调整防晒、屏障护理和活性成分。",
      actionLabel: "在 App Store 下载 SkinCast",
      imageAlt: "SkinCast 建议页，说明今天风力和 UV 对护肤计划的影响",
      transitionAlt: "SkinCast 评分页，展示今日肤况压力、主要风险和环境因素",
    },
    featureCards: {
      uv: {
        title: "把 UV 风险翻译成护肤动作。",
        description:
          "在选择防晒、活性成分或修护步骤前，先知道今天是不是日晒压力在主导。",
        imageAlt: "SkinCast 建议页，展示防晒和今日护肤动作",
      },
      score: {
        title: "一眼看懂今天的肤况压力。",
        description:
          "每日分数会突出主要困扰，并解释湿度、UV、风力和空气质量如何影响今天的皮肤状态。",
        imageAlt: "SkinCast 评分页，展示今日风险、数据覆盖和环境信号",
      },
      plan: {
        title: "把预报变成下一步。",
        description:
          "根据外部环境，获得关于屏障护理、防晒、补水和活性成分的具体行动建议。",
        imageAlt: "SkinCast 今日动作计划，展示保湿、防晒和修护建议",
      },
      profile: {
        title: "按你的肤质和困扰来调整。",
        description:
          "设置肤质和肌肤困扰后，每次预报都会围绕敏感、干燥、出油、痘痘或旅行中的天气变化来调整。",
        imageAlt: "SkinCast 肤质和肌肤困扰选择页面",
      },
      sources: {
        title: "参考公开皮肤健康资料的护肤建议。",
        description:
          "SkinCast 会参考 AAD、FDA、EPA、WHO 等公开指南、标准和皮肤医学期刊资料，来组织 UV、屏障压力和空气质量相关建议。",
      },
      pro: {
        title: "Pro 把基础建议升级成 AI 护肤简报。",
        description:
          "从简单规则升级到更完整的数据解读、风险重点和具体护肤动作。",
      },
    },
    privacy: {
      chips: ["无需账号", "无需登录", "不做追踪"],
      title: "隐私优先。",
      description:
        "SkinCast 不需要注册或登录。你的肤况设置会保留在设备本地。",
    },
    consistency: {
      title: "为什么更容易坚持",
      items: [
        {
          iconName: "wb_sunny",
          title: "先看到 UV，再决定防晒",
          description:
            "在日晒真正影响皮肤前，提前知道今天是否需要更认真地做防晒。",
        },
        {
          iconName: "air",
          title: "把天气信号变成人话",
          description:
            "湿度、风力、温度和空气质量不再是零散数字，而是今天的护肤重点。",
        },
        {
          iconName: "travel_explore",
          title: "换城市时也有用",
          description:
            "旅行前比较目的地环境，避免干燥、闷热或强风突然打乱你的护肤节奏。",
        },
      ],
    },
    faqTitle: "常见问题",
    faq: [
      {
        question: "SkinCast 预报的是什么？",
        answer:
          "SkinCast 会把 UV、湿度、风力、温度和空气质量转化成每日护肤预报，指出今天主要的肌肤压力来源，并给出适合当天的护理调整。",
      },
      {
        question: "这些建议的依据是什么？",
        answer:
          "SkinCast 会结合天气数据，并参考 AAD、FDA、EPA、WHO 等公开指南、标准，以及皮肤医学期刊中的相关资料，整理成适合日常护肤决策的建议。它用于日常护理参考，不替代医生的诊断或治疗。",
      },
      {
        question: "哪些人更适合用？",
        answer:
          "对敏感、干燥、出油、混合、痘痘、玫瑰痤疮倾向，或经常旅行、容易受天气变化影响的人会更有帮助。",
      },
      {
        question: "需要注册账号吗？",
        answer:
          "不需要。SkinCast 无需注册或登录，产品设计上会把你的肤况设置保留在设备本地。",
      },
      {
        question: "Pro 会增加什么？",
        answer:
          "Pro 会解锁更完整的 AI 分析、更频繁的刷新，以及更深入的天气驱动护肤建议。",
      },
    ],
    finalCta: "下载 SkinCast",
  },
} as const;

export const SCREENSHOTS = {
  en: {
    suggestion: "/screenshots/en/suggestion.png",
    score: "/screenshots/en/score.png",
    actionPlan: "/screenshots/en/action-plan.png",
    profile: "/screenshots/en/profile.png",
  },
  "zh-Hans": {
    suggestion: "/screenshots/zh/suggestion.png",
    score: "/screenshots/zh/score.png",
    actionPlan: "/screenshots/zh/action-plan.png",
    profile: "/screenshots/zh/profile.png",
  },
} as const satisfies Record<HomeLanguage, Record<string, string>>;
