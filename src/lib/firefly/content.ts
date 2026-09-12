export type Language = "en" | "zh";

export type ServiceItem = {
  title: string;
  description: string;
};

export type PrincipleItem = {
  title: string;
  description: string;
};

export type PageContent = {
  lang: Language;
  meta: {
    title: string;
    description: string;
  };
  siteName: string;
  tagline: string;
  langLabel: string;
  nav: {
    about: string;
    whatWeDo: string;
    approach: string;
    contact: string;
    team: string;
  };
  landing: {
    english: string;
    chinese: string;
  };
  sections: {
    about: {
      title: string;
      body: string;
    };
    whatWeDo: {
      title: string;
      items: ServiceItem[];
    };
    approach: {
      title: string;
      items: PrincipleItem[];
    };
    contact: {
      title: string;
      body: string;
      email: string;
      emailLabel: string;
    };
  };
  team: {
    title: string;
    subtitle: string;
    placeholderPhoto: string;
    placeholderName: string;
    placeholderRole: string;
    placeholderBio: string;
  };
};

const en: PageContent = {
  lang: "en",
  meta: {
    title: "Firefly Entertainment — The Show Must Go On",
    description:
      "Firefly Entertainment creates fun, branded entertainment experiences. The Show Must Go On.",
  },
  siteName: "Firefly Entertainment",
  tagline: "The Show Must Go On",
  langLabel: "EN",
  nav: {
    about: "About",
    whatWeDo: "What We Do",
    approach: "Approach",
    contact: "Contact",
    team: "Team",
  },
  landing: {
    english: "English",
    chinese: "中文",
  },
  sections: {
    about: {
      title: "About Firefly Entertainment",
      body:
        "Firefly Entertainment is a FUN AND BRANDED entertainment studio. We shape live and digital experiences around clear ideas, careful craft, and a sense of play. No inflated claims — just work that speaks for itself.",
    },
    whatWeDo: {
      title: "What We Do",
      items: [
        {
          title: "Creative Direction",
          description:
            "We define the idea, tone, and structure behind an experience before any production begins.",
        },
        {
          title: "Event & Experience Design",
          description:
            "From intimate formats to larger stages, we design moments that feel intentional and memorable.",
        },
        {
          title: "Brand Partnerships",
          description:
            "We connect brands with entertainment in ways that respect both the audience and the message.",
        },
      ],
    },
    approach: {
      title: "Our Approach",
      items: [
        {
          title: "Strategy first",
          description: "Every decision starts with the story you want people to remember.",
        },
        {
          title: "Craft in the details",
          description: "We refine the small things because they carry the biggest impression.",
        },
        {
          title: "Built to connect",
          description: "Great entertainment only works when it genuinely reaches its audience.",
        },
      ],
    },
    contact: {
      title: "Contact",
      body: "For general enquiries, reach out by email.",
      email: "david@fireflyentertainment.net",
      emailLabel: "Send an email",
    },
  },
  team: {
    title: "Team",
    subtitle: "Meet the people behind Firefly Entertainment.",
    placeholderPhoto: "Photo — awaiting approval",
    placeholderName: "Name — awaiting approval",
    placeholderRole: "Role — awaiting approval",
    placeholderBio: "Biography — awaiting approval",
  },
};

const zh: PageContent = {
  lang: "zh",
  meta: {
    title: "Firefly Entertainment — 好戏，必须上演",
    description:
      "Firefly Entertainment 创造有趣且具品牌感的娱乐体验。好戏，必须上演。",
  },
  siteName: "Firefly Entertainment",
  tagline: "好戏，必须上演",
  langLabel: "中文",
  nav: {
    about: "关于",
    whatWeDo: "业务",
    approach: "理念",
    contact: "联系",
    team: "团队",
  },
  landing: {
    english: "English",
    chinese: "中文",
  },
  sections: {
    about: {
      title: "关于 Firefly Entertainment",
      body:
        "Firefly Entertainment 是一家 FUN AND BRANDED 的娱乐工作室。我们以清晰的创意、细致的工艺和玩乐的精神，打造线上与线下的体验。不夸大，只让作品自己说话。",
    },
    whatWeDo: {
      title: "我们做什么",
      items: [
        {
          title: "创意策划",
          description: "在一切执行之前，我们先为体验确立核心概念、调性与结构。",
        },
        {
          title: "活动与体验设计",
          description: "从小型场次到大型舞台，我们设计每一个都经过深思熟虑、令人难忘的时刻。",
        },
        {
          title: "品牌合作",
          description: "我们以尊重观众与品牌信息的方式，将品牌与娱乐内容连接起来。",
        },
      ],
    },
    approach: {
      title: "我们的理念",
      items: [
        {
          title: "策略先行",
          description: "每一个决定，都始于你想让人们记住的故事。",
        },
        {
          title: "细节见匠心",
          description: "我们相信，最细微之处往往留下最深刻的印象。",
        },
        {
          title: "以连接为本",
          description: "真正打动人的娱乐，才能与观众建立真实的联系。",
        },
      ],
    },
    contact: {
      title: "联系我们",
      body: "如有一般咨询，请发送邮件。",
      email: "david@fireflyentertainment.net",
      emailLabel: "发送邮件",
    },
  },
  team: {
    title: "团队",
    subtitle: "认识 Firefly Entertainment 背后的伙伴。",
    placeholderPhoto: "照片 — 等待确认",
    placeholderName: "姓名 — 等待确认",
    placeholderRole: "职位 — 等待确认",
    placeholderBio: "简介 — 等待确认",
  },
};

export const content = { en, zh };

export const alternatePaths: Record<
  Language,
  { home: string; team: string }
> = {
  en: { home: "/en", team: "/en/team" },
  zh: { home: "/zh", team: "/zh/team" },
};
