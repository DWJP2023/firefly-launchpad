/**
 * Firefly Entertainment — 官网文案 v1.0（2026-09-13）
 * 用于替换 src/lib/firefly/content.ts。
 *
 * 内容来源：20260912_firefly_Live Project Assurance Service Intro
 *           20260912_firefly_Core Team Detailed Intro
 *
 * 本文件改变了内容结构，以下组件需同步调整：
 *  - HomePage.tsx   板块由 about / whatWeDo / approach / contact
 *                   改为 about / services / trackRecord / contact（approach 整块删除）
 *  - TeamPage.tsx   占位卡改为渲染 team.members，人名用 <h2>
 *  - index.tsx      首页改为：大字标语（英中两行）→ 小号 logo → 描述行 → 语言选择
 *  - 各 route 的 head() 使用本文件的 meta 字段
 */

export type Language = "en" | "zh";

export type ServiceItem = {
  index: string;
  title: string;
  description: string;
  deliverable: string;
};

export type CreditGroup = {
  title: string;
  items: string[];
};

export type TeamMember = {
  name: string;
  role: string;
  bio: string;
  credits: CreditGroup[];
};

export type FaqItem = {
  question: string;
  answer: string;
};

export type PageContent = {
  lang: Language;
  siteName: string;
  tagline: string;
  descriptor: string;
  brandLine: string;
  meta: { title: string; description: string };
  teamMeta: { title: string; description: string };
  nav: {
    about: string;
    services: string;
    trackRecord: string;
    contact: string;
    team: string;
  };
  accessibility: {
    openMenu: string;
    closeMenu: string;
    primaryNavigation: string;
    skipToContent: string;
  };
  sections: {
    about: { title: string; body: string; clients: string };
    services: { title: string; items: ServiceItem[] };
    trackRecord: { title: string; note: string; groups: CreditGroup[] };
    contact: {
      title: string;
      body: string;
      briefTitle: string;
      brief: string[];
      name: string;
      role: string;
      email: string;
      phone: string;
      locations: string;
    };
  };
  faq: { title: string; items: FaqItem[] };
  team: { title: string; subtitle: string; members: TeamMember[] };
  footer: { rights: string };
};

/* 首页（/）文案，语言选择之前 */
export const landing = {
  taglineEn: "The Show Must Go On",
  taglineZh: "好戏，必须上演",
  descriptorEn: "China entry and live project assurance for international live entertainment",
  descriptorZh: "国际现场演出的中国落地与项目保障",
  english: "English",
  chinese: "中文",
  englishAriaLabel: "Switch to English",
  chineseAriaLabel: "切换到中文",
  languageSelectionLabel: "Language selection",
  meta: {
    title: "Firefly Entertainment — China Entry and Live Project Assurance",
    description:
      "Firefly works on the client's side when an international show enters China: feasibility, advance, project control and settlement. 国际现场演出的中国落地与项目保障。",
  },
};

const trackRecordGroupsEn: CreditGroup[] = [
  {
    title: "China debuts and tours",
    items: [
      "The Rolling Stones",
      "Beyoncé",
      "Linkin Park",
      "Björk",
      "Maroon 5",
      "Celine Dion",
      "Usher",
      "Black Eyed Peas",
      "Norah Jones",
      "Clean Bandit",
      "WayV",
      "King Gnu",
      "Laufey",
      "MOGWAI",
      "SEKAI NO OWARI",
    ],
  },
  {
    title: "Festivals and formats",
    items: [
      "EDC China",
      "ComplexCon Hong Kong, inaugural edition 2024",
      "F1 Carnival Shanghai",
      "Concrete & Grass",
      "Strawberry",
      "MIDI",
      "Storm Electronic",
    ],
  },
  {
    title: "Sport",
    items: ["NBA China Games, 2010", "USA Basketball, 2007", "Duke Blue Devils China tour, 2011"],
  },
];

const trackRecordGroupsZh: CreditGroup[] = [
  {
    title: "中国首演与巡演",
    items: [
      "滚石乐队",
      "Beyoncé",
      "Linkin Park",
      "Björk",
      "Maroon 5",
      "Celine Dion",
      "Usher",
      "黑眼豆豆",
      "Norah Jones",
      "Clean Bandit",
      "WayV",
      "King Gnu",
      "Laufey",
      "MOGWAI",
      "SEKAI NO OWARI",
    ],
  },
  {
    title: "音乐节与活动形态",
    items: [
      "EDC China",
      "首届 ComplexCon 香港（2024）",
      "上海 F1 嘉年华",
      "混凝草音乐节",
      "草莓音乐节",
      "迷笛音乐节",
      "风暴电子音乐节",
    ],
  },
  {
    title: "体育赛事",
    items: ["NBA 中国赛（2010）", "美国男篮中国行（2007）", "杜克大学蓝魔队中国行（2011）"],
  },
];

const en: PageContent = {
  lang: "en",
  siteName: "Firefly Entertainment",
  tagline: "The Show Must Go On",
  descriptor: "China entry and live project assurance for international live entertainment",
  brandLine: "FUN AND BRANDED",
  meta: {
    title: "China Entry and Live Project Assurance — Firefly Entertainment",
    description:
      "Firefly works on the client's side when an international show enters China. Feasibility, advance, project control and settlement, run by a China team that answers to you.",
  },
  teamMeta: {
    title: "Core Delivery Team — Firefly Entertainment",
    description:
      "The four people who cover the client decision, artist and touring operations, production direction and project advance on a Firefly project.",
  },
  nav: {
    about: "About",
    services: "Services",
    trackRecord: "Track record",
    contact: "Contact",
    team: "Team",
  },
  accessibility: {
    openMenu: "Open menu",
    closeMenu: "Close menu",
    primaryNavigation: "Primary navigation",
    skipToContent: "Skip to main content",
  },
  sections: {
    about: {
      title: "About Firefly Entertainment",
      body: "An international show entering China depends on approvals the overseas party cannot file, a local promoter it has limited means to verify, and a supply chain it does not see until load-in. Firefly works on the client's side across that period. We assess whether the project is worth doing, run the advance, hold the promoter and suppliers to the schedule and the budget, and close the settlement.",
      clients:
        "International promoters, festivals, artist and talent management, rights holders, experiential producers, venues and attractions retain Firefly when they need a China-side decision they can defend internally, or a China-side team that answers to them rather than to the local promoter.",
    },
    services: {
      title: "Services",
      items: [
        {
          index: "01",
          title: "China Entry Feasibility Study",
          description:
            "We assess market and city fit, venue and local partner options, the regulatory path, the commercial model and the budget range, and recommend go, modify or stop.",
          deliverable:
            "A written report with a costed route to market, a named partner shortlist and a risk register. Use it before you commit money or announce a date.",
        },
        {
          index: "02",
          title: "China Live Readiness Review",
          description:
            "We run the advance against the rider: technical and hospitality requirements, travel, hotel and vehicle plan, credentials, permits, and the commitments the local side has actually made.",
          deliverable:
            "An English advance pack and an action register that names who owes what, by when. Use it once dates are intended and a local counterpart is in play.",
        },
        {
          index: "03",
          title: "China Project Assurance",
          description:
            "We track the project on your behalf in China through weekly reporting, milestones, change control, show-day status and escalation, and we review the budget, quotations, change orders and the final settlement.",
          deliverable:
            "A weekly report, a live action register, a settlement review and a named person who calls you when something slips. Use it from contract to close-out.",
        },
        {
          index: "04",
          title: "China Local Producer Mandate",
          description:
            "We act as your producer in China: appointing and directing crew, AV, lighting, sound, video and scenic providers; running artist, VIP and travel operations; coordinating freight, customs and temporary import; and setting the security brief with the appointed providers.",
          deliverable:
            "Production management from load-in to load-out under your approved scope. Use it when you have no China entity or local team of your own.",
        },
      ],
    },
    trackRecord: {
      title: "Track record",
      note: "Individual professional experience of the Firefly team, delivered between 2003 and 2026 at Firefly and Nuchuan Culture (Shanghai), and in senior roles at prior employers including Sony Music, Emma-Ticketmaster, Taihe Music Group, NetEase and Complex Chinese.",
      groups: trackRecordGroupsEn,
    },
    contact: {
      title: "Contact",
      body: "Firefly carries one accountable China-side view of the project and reports it to the client in English.",
      briefTitle: "Opening a discussion",
      brief: [
        "The project, its format and the China territory you have in mind.",
        "Target dates or a delivery window, if one exists.",
        "The decision you need to make and who owns it.",
        "Any promoter, venue, artist, rights-holder or supplier conversations already under way.",
        "A commercial range, or the constraints that matter most.",
      ],
      name: "David J.P. Wang",
      role: "Chief Executive Officer",
      email: "david@fireflyentertainment.net",
      phone: "+86 156 1883 9401",
      locations: "Shanghai · Seattle",
    },
  },
  faq: {
    title: "Questions we are asked",
    items: [
      {
        question: "Who can apply for approval for an international performance in China",
        answer:
          "An application to stage a foreign artist's commercial performance in China must be filed by a performance brokerage agency registered in China and holding a Commercial Performance Licence. An overseas promoter or artist company cannot file in its own name. An agency registered in China with foreign investment can file.",
      },
      {
        question: "How long does approval take",
        answer:
          "Two separate clocks. The cultural approval must be filed at least 20 days before the performance date, with a statutory decision period of 20 working days; Shanghai commits to 15. An event expecting 1,000 or more attendees also needs a public-security safety permit, filed at least 20 working days ahead, with a statutory decision period of 17 working days; Shanghai commits to 7 for the 1,000–5,000 tier.\n\nBoth filings depend on a signed venue contract and a confirmed line-up, so the date the paperwork can start is set by the contracts, not by the authority.",
      },
      {
        question: "Can an overseas promoter sign directly with a venue",
        answer:
          "The party holding a commercial performance must be a licensed entity registered in China, and the applicant for a large-event safety permit must be a legally established domestic legal person or organisation.",
      },
      {
        question: "What is the difference between a local promoter and a local producer",
        answer:
          "A local promoter carries the commercial risk of the show, holds the licence, files the approvals in its own name and owns the box office and the costs. A local producer executes on the client's instruction: the production plan, the supplier and crew interfaces, and delivery from load-in to load-out. The difference is who each one answers to. The promoter answers to its own P&L; the producer answers to the client.",
      },
    ],
  },
  team: {
    title: "Core delivery team",
    subtitle:
      "Firefly fields one China-facing team for international live entertainment and experiential projects. Each of the four is named in the project scope before work starts. Budget and settlement review sits with David J.P. Wang and Allen Chen.",
    members: [
      {
        name: "David J.P. Wang",
        role: "Chief Executive Officer",
        bio: "Working in international touring and live events in Greater China since 2003, and a licensed performance agent. Before Firefly, executive vice president at Complex Chinese, managing director at NetEase Fever, and vice president of IP acquisition and development and of the live division at Taihe Music Group. Since founding Firefly in 2024 he has signed the CMC framework partnership and delivered the Clean Bandit China tour.",
        credits: [
          {
            title: "China debuts and tours",
            items: [
              "Norah Jones",
              "The Rolling Stones",
              "Black Eyed Peas",
              "Beyoncé",
              "Linkin Park",
              "Björk",
              "Maroon 5",
              "Celine Dion",
              "Usher",
            ],
          },
          {
            title: "Sport and formats",
            items: [
              "USA Basketball",
              "NBA China Games",
              "Duke Blue Devils China tour",
              "ComplexCon Hong Kong, inaugural edition",
              "EDC China",
            ],
          },
          {
            title: "Label and roster",
            items: [
              "Founded Taihe Music Group's electronic music label and signed Carta, who entered the DJ Mag Top 100 at number 92 in 2017 and reached number 72 in 2019",
            ],
          },
        ],
      },
      {
        name: "Allen Chen",
        role: "Project director, artist and touring operations",
        bio: "Fifteen years in artist management and touring operations across K-pop, Mandarin pop, dance music and classical. Before Nuchuan Culture, operations manager at NetEase Cloud Music's party-site business and performance manager at Taihe Music Group. He connects the artist, client, promoter, venue and production workstreams and runs show-day communication.",
        credits: [
          {
            title: "Tour manager",
            items: ["Sheila China tour, 2026", "Mad Mac China tour, 2019"],
          },
          {
            title: "Production coordination",
            items: ["Clean Bandit China tour, 2025"],
          },
          {
            title: "Artist management",
            items: [
              "DJ Carta and Spinning Session touring work",
              "Concert, festival, venue and brand-event projects in Shanghai and other China cities",
            ],
          },
        ],
      },
      {
        name: "Jason Tao",
        role: "VP Production",
        bio: "Working as a production director in China since 2011, and general director on projects since 2021. His record covers international-artist concerts, touring, festivals and large-format live events, from the production plan through supplier and crew interfaces to show-day execution.",
        credits: [
          {
            title: "Tours and concerts since 2023",
            items: [
              "WayV tour, 2023",
              "Bruno Major tour, 2023",
              "Laufey tour, 2024",
              "King Gnu Shanghai, 2024",
              "Nana Ouyang Shanghai, 2024",
            ],
          },
          {
            title: "International artists, 2011–2018",
            items: [
              "Foster the People Shenzhen, 2018",
              "Nils Frahm Shanghai, 2018",
              "Mika, 2016",
              "5 Seconds of Summer, 2016",
              "Damien Rice, 2016",
              "Simple Plan, 2016",
              "Kenny G, 2016",
              "Avenged Sevenfold, 2015",
              "Owl City, 2015",
              "The Beach Boys, 2013",
              "Slash, 2013",
              "Nile Rodgers, 2013",
              "The Cardigans, 2013",
              "The Fray, 2012",
              "Neon Trees, 2011",
            ],
          },
          {
            title: "Festivals and domestic artists, 2013–2019",
            items: [
              "F1 Carnival Shanghai, 2017–2019",
              "EDC Zhuhai, 2019",
              "Concrete & Grass, 2018",
              "Echo Carnival, 2016",
              "Echo Park, 2015–2016",
              "Infinity Summer Festival, 2015",
              "Storm Electronic, 2013–2015",
              "Strawberry Shanghai, 2013–2015",
              "MIDI Shanghai and Shenzhen, 2013–2014",
              "Shanghai Jazz Festival, 2013",
              "SNH48, 2013",
              "Second Hand Rose Shanghai, 2013",
            ],
          },
        ],
      },
      {
        name: "Yifeng Zou",
        role: "Production director",
        bio: "Co-producing with Jason Tao from 2011 to 2021 across the concerts and festivals above, and producing independently since 2021. He tracks requirements, holds owners to deadlines, runs the production schedule and controls the show day.",
        credits: [
          {
            title: "Independent productions",
            items: [
              "Ten Lee Shanghai, 2025",
              "SEKAI NO OWARI, 2025",
              "Queen Bee, 2025",
              "Time Agent tour, 2025",
              "MOGWAI China tour, 2025",
            ],
          },
        ],
      },
    ],
  },
  footer: {
    rights: "Firefly Entertainment",
  },
};

const zh: PageContent = {
  lang: "zh",
  siteName: "Firefly Entertainment",
  tagline: "好戏，必须上演",
  descriptor: "国际现场演出的中国落地与项目保障",
  brandLine: "FUN AND BRANDED",
  meta: {
    title: "国际演出中国落地与项目保障｜Firefly Entertainment",
    description:
      "国际演出进入中国时，Firefly 站在客户一侧，负责可行性判断、advance、履约控制与结算复核。",
  },
  teamMeta: {
    title: "核心团队｜Firefly Entertainment",
    description:
      "在 Firefly 项目中分别负责客户决策、艺人与巡演运营、制作统筹与现场执行的四位成员。",
  },
  nav: {
    about: "关于",
    services: "服务",
    trackRecord: "过往项目",
    contact: "联系",
    team: "团队",
  },
  accessibility: {
    openMenu: "打开菜单",
    closeMenu: "关闭菜单",
    primaryNavigation: "主导航",
    skipToContent: "跳至正文",
  },
  sections: {
    about: {
      title: "关于 Firefly Entertainment",
      body: "国际演出进入中国，取决于三件海外一方无法自行掌握的事：需要在境内办理的报批，一个难以核实底细的本地主办方，以及一条到装台当天才看得见的供应链。在这段周期内，Firefly 站在客户一侧：判断项目是否值得做，执行 advance，按日程与预算约束主办方和供应商，并完成结算。",
      clients:
        "国际主办方、音乐节、艺人与经纪管理公司、版权方、体验类制作公司、场馆与文旅项目在两种情况下聘请 Firefly：需要一个在内部经得起追问的中国侧判断，或者需要一支对客户负责、而非对本地主办方负责的中国团队。",
    },
    services: {
      title: "服务内容",
      items: [
        {
          index: "01",
          title: "中国落地可行性研究",
          description:
            "评估市场与城市适配、场馆与本地合作方选项、报批路径、商业模式与预算区间，给出继续、调整或终止的结论。",
          deliverable:
            "一份书面报告，包含核算过成本的进入路径、具名的合作方备选清单与风险清单。适用于投入资金或对外公布档期之前。",
        },
        {
          index: "02",
          title: "演出准备度核查",
          description:
            "按 rider 逐项执行 advance：技术与接待要求，行程、酒店与车辆安排，证件，报批，以及本地一方实际作出的承诺。",
          deliverable:
            "一份英文 advance 文件包与一份行动清单，写明每一项由谁负责、何时完成。适用于档期已有意向、本地对接方已经进场之后。",
        },
        {
          index: "03",
          title: "项目保障",
          description:
            "代表客户在中国跟踪项目，包括周报、里程碑、变更控制、演出日状态与升级处理，同时复核预算、报价、变更单与最终结算。",
          deliverable:
            "周报、持续更新的行动清单、结算复核意见，以及一名指定负责人，在进度出现偏差时直接通知客户。适用于自签约至项目关闭的全过程。",
        },
        {
          index: "04",
          title: "本地制作授权",
          description:
            "作为客户在中国的制作方：指定并指挥 crew 及影音、灯光、音响、视频与舞美供应商；负责艺人、VIP 与行程运营；协调货运、清关与临时进口；与指定供应商确定安保方案。",
          deliverable:
            "在客户批准的范围内，提供从装台到拆台的制作管理。适用于客户在中国没有主体、也没有自有团队的情况。",
        },
      ],
    },
    trackRecord: {
      title: "过往项目",
      note: "以下为 Firefly 团队成员在 2003 至 2026 年间的个人经手项目，完成于 Firefly 与怒川文化，以及在索尼音乐、Emma-Ticketmaster、太合音乐、网易、Complex Chinese 等此前任职机构担任高级职务期间。",
      groups: trackRecordGroupsZh,
    },
    contact: {
      title: "联系方式",
      body: "Firefly 在项目上只出具一个对客户负责的中国侧判断，并以英文向客户汇报。",
      briefTitle: "洽谈所需信息",
      brief: [
        "项目本身、演出形态，以及计划覆盖的中国区域。",
        "目标档期或交付窗口，如果已经有的话。",
        "需要作出的决策，以及这项决策由谁拍板。",
        "已经在进行的主办方、场馆、艺人、版权方或供应商接触。",
        "商务区间，或者最需要被满足的约束条件。",
      ],
      name: "王璟平",
      role: "首席执行官",
      email: "david@fireflyentertainment.net",
      phone: "+86 156 1883 9401",
      locations: "上海 · 西雅图",
    },
  },
  faq: {
    title: "常见问题",
    items: [
      {
        question: "谁可以为一场国际演出在中国申报批文",
        answer:
          "在中国举办涉外营业性演出，申报主体必须是在中国境内依法登记、并持有《营业性演出许可证》的演出经纪机构。海外主办方或艺人公司不能以自身名义申报。外国投资者在中国境内依法登记的演出经纪机构可以作为申报主体。",
      },
      {
        question: "批文要多久",
        answer:
          "两个时间要分开看。文化主管部门的审批，申请材料应当在演出日期 20 日前提交，法定办结时限为 20 个工作日；上海的承诺办结时限为 15 个工作日。预计参加人数 1000 人以上的活动另需公安机关的大型群众性活动安全许可，提前 20 个工作日申请，法定办结 17 个工作日，上海 1000 至 5000 人档的承诺办结为 7 个工作日。\n\n两项审批都以已签署的场馆合同和已确定的演出阵容为前提，因此可以开始报批的时间由合同进度决定，而不是由审批时限决定。",
      },
      {
        question: "海外主办方能不能直接和场馆签约",
        answer:
          "营业性演出的举办主体必须是境内持证机构，大型群众性活动安全许可的承办者也必须是依照法定程序成立的境内法人或其他组织。",
      },
      {
        question: "本地主办方和 local producer 的区别",
        answer:
          "本地主办方承担演出的商业风险，持有资质并以自身名义申报批文，对票房和成本负责。Local producer 受客户委托执行现场，负责制作方案、供应商与 crew 的指挥、装台到拆台的执行，对客户负责。两者的立场不同：主办方对自己的损益负责，producer 对客户的项目负责。",
      },
    ],
  },
  team: {
    title: "核心团队",
    subtitle:
      "Firefly 以一支面向中国的团队承接国际现场演出与体验类项目。以下四人在工作启动之前即写入项目范围。预算与结算复核由王璟平与陈煜林负责。",
    members: [
      {
        name: "王璟平",
        role: "首席执行官",
        bio: "自 2003 年起从事大中华区的国际巡演与现场演出，持有演出经纪人资格证。加入 Firefly 之前，任 Complex Chinese 执行副总裁、网易 Fever 总经理，以及太合音乐 IP 收购与开发副总裁、演出事业部副总裁。2024 年创办 Firefly 后，签订 CMC 框架合作，并完成 Clean Bandit 中国巡演。",
        credits: [
          {
            title: "中国首演与巡演",
            items: [
              "Norah Jones",
              "滚石乐队",
              "黑眼豆豆",
              "Beyoncé",
              "Linkin Park",
              "Björk",
              "Maroon 5",
              "Celine Dion",
              "Usher",
            ],
          },
          {
            title: "体育与活动形态",
            items: [
              "美国男篮中国行",
              "NBA 中国赛",
              "杜克大学蓝魔队中国行",
              "首届 ComplexCon 香港",
              "EDC China",
            ],
          },
          {
            title: "厂牌与艺人",
            items: [
              "创办太合音乐电子音乐厂牌并签约 Carta，Carta 于 2017 年首次进入 DJ Mag Top 100，位列第 92 名，2019 年升至第 72 名",
            ],
          },
        ],
      },
      {
        name: "陈煜林",
        role: "项目总监，艺人与巡演运营",
        bio: "十五年艺人管理与巡演运营经验，覆盖韩流、华语流行、电子舞曲与古典。加入怒川文化之前，任网易云音乐线下场景业务运营经理、太合音乐演出经理。在项目中衔接艺人、客户、主办方、场馆与制作各条线，并负责演出日的沟通。",
        credits: [
          {
            title: "巡演经理",
            items: ["Sheila 中国巡演（2026）", "Mad Mac 中国巡演（2019）"],
          },
          {
            title: "制作统筹",
            items: ["Clean Bandit 中国巡演（2025）"],
          },
          {
            title: "艺人管理",
            items: [
              "DJ Carta 与 Spinning Session 的巡演工作",
              "上海及其他城市的演唱会、音乐节、场馆与品牌活动项目",
            ],
          },
        ],
      },
      {
        name: "陶坚亮",
        role: "制作副总裁",
        bio: "自 2011 年起在中国担任制作总监，2021 年起担任项目总导演。作品覆盖国际艺人演唱会、巡演、音乐节与大型现场活动，工作范围自制作方案起，至供应商与 crew 对接，直到演出日执行。",
        credits: [
          {
            title: "2023 年以来的巡演与演唱会",
            items: [
              "威神V巡演（2023）",
              "Bruno Major 巡演（2023）",
              "Laufey 巡演（2024）",
              "King Gnu 上海演唱会（2024）",
              "欧阳娜娜上海音乐会（2024）",
            ],
          },
          {
            title: "国际艺人项目（2011–2018）",
            items: [
              "Foster the People 深圳（2018）",
              "Nils Frahm 上海（2018）",
              "Mika（2016）",
              "5 Seconds of Summer（2016）",
              "Damien Rice（2016）",
              "Simple Plan（2016）",
              "Kenny G（2016）",
              "Avenged Sevenfold（2015）",
              "Owl City（2015）",
              "The Beach Boys（2013）",
              "Slash（2013）",
              "Nile Rodgers（2013）",
              "The Cardigans（2013）",
              "The Fray（2012）",
              "Neon Trees（2011）",
            ],
          },
          {
            title: "音乐节与国内艺人（2013–2019）",
            items: [
              "上海 F1 嘉年华（2017–2019）",
              "EDC 珠海（2019）",
              "混凝草音乐节（2018）",
              "Echo 回声嘉年华（2016）",
              "Echo Park（2015–2016）",
              "Infinity Summer 音乐节（2015）",
              "风暴电子音乐节（2013–2015）",
              "上海草莓音乐节（2013–2015）",
              "上海与深圳迷笛音乐节（2013–2014）",
              "上海爵士音乐节（2013）",
              "SNH48（2013）",
              "二手玫瑰上海演唱会（2013）",
            ],
          },
        ],
      },
      {
        name: "邹一峰",
        role: "制作总监",
        bio: "2011 至 2021 年与陶坚亮共同制作上述演唱会与音乐节项目，2021 年起独立担任制作人。负责需求跟踪、责任方的节点把控、制作日程执行与演出日现场控制。",
        credits: [
          {
            title: "独立制作项目",
            items: [
              "Ten 李永钦上海演唱会（2025）",
              "SEKAI NO OWARI（2025）",
              "Queen Bee（2025）",
              "时光代理人巡演（2025）",
              "MOGWAI 中国巡演（2025）",
            ],
          },
        ],
      },
    ],
  },
  footer: {
    rights: "Firefly Entertainment",
  },
};

export const content = { en, zh };

export const alternatePaths: Record<Language, { home: string; team: string }> = {
  en: { home: "/en", team: "/en/team" },
  zh: { home: "/zh", team: "/zh/team" },
};
