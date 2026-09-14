/**
 * Firefly Entertainment — 官網文案 v2.0（2026-09-13）
 * 用於替換 src/lib/firefly/content.ts。整體替換，不要逐欄位合併。
 *
 * 相對 v1.0 的變化：定位由 China Entry and Live Project Assurance 改為
 * China Local Representation。客戶僅四類，主辦方是被監督的對手方。
 * 內容來源：20260913_firefly_China Local Representation Service Intro
 *           20260913_firefly_Core Team Detailed Intro
 * FAQ 四條沿用 20260913_firefly_網站FAQ_定稿_v1.0.md，一字未改。
 *
 * 元件結構與 v1.0 相同，無需改動 HomePage / TeamPage / index / Footer。
 */

export type Language = "en" | "zh";

export type ServiceItem = {
  index: string;
  title: string;
  description: string;
  covers: string[];
  deliverable: string;
};

export type CreditGroup = { title: string; items: string[] };

export type TeamMemberId = "david" | "allen" | "jason" | "yifeng";

export type TeamMember = {
  id: TeamMemberId;
  name: string;
  role: string;
  bio: string;
  credits: CreditGroup[];
  photo?: string;
};

export type FaqItem = { question: string; answer: string };

export type PageContent = {
  lang: Language;
  siteName: string;
  tagline: string;
  descriptor: string;
  brandLine: string;
  meta: { title: string; description: string };
  teamMeta: { title: string; description: string };
  clientsMeta: { title: string; description: string };
  nav: {
    about: string;
    services: string;
    clients: string;
    contact: string;
    team: string;
  };
  sections: {
    about: { title: string; body: string; clients: string };
    services: { title: string; items: ServiceItem[] };
    faq: { title: string; items: FaqItem[] };
    contact: {
      title: string;
      body: string;
      fee: string;
      briefTitle: string;
      brief: string[];
      name: string;
      role: string;
      email: string;
      phone: string;
      locations: string;
    };
  };
  clients: { title: string; note: string; groups: CreditGroup[] };
  team: { title: string; subtitle: string; members: TeamMember[] };
  footer: { rights: string; licence: string; locations: string };
};

/* 首頁（/），語言選擇之前 */
export const landing = {
  taglineEn: "The Show Must Go On",
  taglineZh: "好戲，必須上演",
  descriptorEn: "Your trusted China local team",
  descriptorZh: "您可信任的中國在地團隊",
  english: "English",
  chinese: "中文",
  meta: {
    title: "Firefly Entertainment — China Local Representation",
    description:
      "Firefly is the artist's and the agent's own team in China: the offer, the advance, the show and the settlement, run on the client's side. 藝人與 agent 在中國的自有團隊。",
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
      "Akon",
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
      "ComplexCon Hong Kong, inaugural edition",
      "F1 Carnival Shanghai",
      "Concrete & Grass",
      "Strawberry",
      "MIDI",
      "Storm Electronic",
      "Black Rabbit Music Festival",
    ],
  },
  {
    title: "Exhibitions and attractions",
    items: [
      "Da Vinci – The Genius, Grande Exhibitions, Shanghai",
      "teamLab Borderless Shanghai Carnival with NetEase FEVER",
    ],
  },
  {
    title: "Sport",
    items: ["NBA China Games", "USA Basketball", "Duke Blue Devils China tour"],
  },
];

const trackRecordGroupsZh: CreditGroup[] = [
  {
    title: "中國首演與巡演",
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
      "Akon",
      "Clean Bandit",
      "WayV",
      "King Gnu",
      "Laufey",
      "MOGWAI",
      "SEKAI NO OWARI",
    ],
  },
  {
    title: "音樂節與活動形態",
    items: [
      "EDC China",
      "首屆 ComplexCon 香港",
      "上海 F1 嘉年華",
      "混凝草音樂節",
      "草莓音樂節",
      "迷笛音樂節",
      "風暴電子音樂節",
      "Black Rabbit Music Festival",
    ],
  },
  {
    title: "展覽與文旅專案",
    items: [
      "Da Vinci – The Genius（Grande Exhibitions，上海）",
      "teamLab Borderless 上海嘉年華（與網易 FEVER）",
    ],
  },
  {
    title: "體育賽事",
    items: ["NBA 中國賽", "美國男籃中國行", "杜克大學藍魔隊中國行"],
  },
];

export const enContent: PageContent = {
  lang: "en",
  siteName: "Firefly Entertainment",
  tagline: "The Show Must Go On",
  descriptor: "Your trusted China local team",
  brandLine: "FUN AND BRANDED",
  meta: {
    title: "China Local Representation — Firefly Entertainment",
    description:
      "Firefly is the artist's and the agent's own team in China. We assess the offer and the promoter behind it, run the advance, hold the promoter and the suppliers to what was agreed, and review the settlement.",
  },
  clientsMeta: {
    title: "Clients — Firefly Entertainment",
    description:
      "Artists, festivals, exhibitions and sport projects delivered by the Firefly team between 2003 and 2026.",
  },
  teamMeta: {
    title: "Core Delivery Team — Firefly Entertainment",
    description:
      "The four people who cover the client decision, artist and touring operations, production direction and the project advance on a Firefly project.",
  },
  nav: {
    about: "About",
    services: "Services",
    clients: "Clients",
    contact: "Contact",
    team: "Team",
  },
  sections: {
    about: {
      title: "About Firefly Entertainment",
      body: "Firefly is the artist's and the agent's own team in China. On any China show the local promoter controls the venue, the budget, the suppliers and the ticketing. Firefly is retained on the client's side of that: we assess the offer and the promoter behind it, run the advance, hold the promoter and the suppliers to what was agreed, and review the settlement.",
      clients:
        "Artist management, booking agents, touring-exhibition producers and the party selling the China date retain Firefly when they have no team of their own in the market and need a China-side decision they can defend internally, or a China-side team that answers to them.",
    },
    services: {
      title: "Services",
      items: [
        {
          index: "01",
          title: "Offer and Market Assessment",
          covers: [
            "The promoter behind the offer",
            "Venue and city fit",
            "Deal terms and economics",
            "The regulatory path",
            "The budget range",
          ],
          description:
            "We assess the offer on the table and the promoter behind it, or where no offer exists yet, market and city fit, venue and partner options, the regulatory path and the budget range.",
          deliverable:
            "A written assessment of the counterparty and the economics, a named partner shortlist and a risk register. Use it before you accept an offer or commit money.",
        },
        {
          index: "02",
          title: "Advance and Readiness",
          covers: [
            "Rider, technical and hospitality",
            "Travel, hotel and vehicle plan",
            "Credentials",
            "Permits and approvals",
            "Commitments the local side has made",
          ],
          description:
            "We run the advance against the rider: technical and hospitality requirements, travel, hotel and vehicle plan, credentials, permits, and the commitments the local side has actually made.",
          deliverable:
            "An English advance pack and an action register that names who owes what, by when. Use it once dates are intended and a local counterpart is in play.",
        },
        {
          index: "03",
          title: "Project Assurance",
          covers: [
            "Weekly reporting",
            "Milestones and change control",
            "Show-day status and escalation",
            "Budget, quotations and change orders",
            "Final settlement review",
          ],
          description:
            "We track the project on your behalf in China through weekly reporting, milestones, change control, show-day status and escalation, and review the budget, quotations, change orders and final settlement.",
          deliverable:
            "A weekly report, a live action register, a settlement review and a named person who calls you when something slips. Use it from contract to close-out.",
        },
        {
          index: "04",
          title: "Local Producer Mandate",
          covers: [
            "Crew",
            "AV, lighting, sound and video",
            "Scenic and exhibition build",
            "Artist, VIP and travel operations",
            "Freight, customs and temporary import",
            "Security brief",
          ],
          description:
            "We act as your producer in China: appointing and directing crew, AV, lighting, sound, video, scenic and exhibition-build providers; running artist, VIP and travel operations; coordinating freight, customs and temporary import; and setting the security brief.",
          deliverable:
            "Production management from load-in to load-out under your approved scope. Use it when you have no China entity or local team of your own.",
        },
      ],
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
    contact: {
      title: "Contact",
      body: "Firefly carries one accountable China-side view of the project and reports it to the client in English.",
      fee: "Firefly is appointed by the client and reports to the client. The fee is fixed in the deal terms and settled before load-in, and it is the whole of Firefly's compensation on the project.",
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
  clients: {
    title: "Clients",
    note: "Individual professional experience of the Firefly team, 2003 to 2026, at Firefly, Nuchuan Culture (Shanghai) and prior employers including Sony Music, Taihe Music Group and NetEase.",
    groups: trackRecordGroupsEn,
  },
  team: {
    title: "Core delivery team",
    subtitle:
      "Firefly fields one China-facing team for international live entertainment and experiential projects. Each of the four is named in the project scope before work starts. Budget and settlement review sits with David J.P. Wang and Allen Chen.",
    members: [
      {
        id: "david",
        name: "David J.P. Wang",
        role: "Chief Executive Officer",
        bio: "Working in international touring and live events in Greater China since 2003, and a licensed performance agent. Before Firefly, executive vice president at Complex Chinese, managing director at NetEase Fever, and vice president of IP acquisition and development and of the live division at Taihe Music Group. He acquired the China rights to Grande Exhibitions' Da Vinci – The Genius and promoted the Shanghai run, and ran the NetEase FEVER Carnival at teamLab Borderless Shanghai. Since founding Firefly in 2024 he has signed the CMC framework partnership and delivered the Clean Bandit China tour.",
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
            title: "Exhibitions and attractions",
            items: [
              "Da Vinci – The Genius, Grande Exhibitions, Shanghai",
              "teamLab Borderless Shanghai Carnival with NetEase FEVER",
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
        id: "allen",
        name: "Allen Chen",
        role: "Project director, artist and touring operations",
        bio: "Fifteen years in artist management and touring operations across K-pop, Mandarin pop, dance music and classical, and on David J.P. Wang's China projects since 2011. Before Nuchuan Culture, operations manager at NetEase Cloud Music's party-site business and performance manager at Taihe Music Group. He connects the artist, client, promoter, venue and production workstreams and runs show-day communication.",
        credits: [
          {
            title: "China debuts and tours",
            items: ["Akon Shanghai concert", "Black Rabbit Music Festival"],
          },
          {
            title: "Tours",
            items: [
              "Clean Bandit China tour",
              "Sheila China tour",
              "Mad Mac China tour, as tour manager",
            ],
          },
          {
            title: "Exhibitions and attractions",
            items: ["Da Vinci – The Genius, Shanghai", "teamLab Borderless Shanghai Carnival"],
          },
          {
            title: "Sport and formats",
            items: [
              "ComplexCon Hong Kong, inaugural edition",
              "EDC China",
              "Duke Blue Devils China tour",
            ],
          },
          {
            title: "Artist management",
            items: [
              "DJ Carta and Spinning Session",
              "Concert, festival, venue and brand-event projects in Shanghai and other China cities",
            ],
          },
        ],
      },
      {
        id: "jason",
        name: "Jason Tao",
        role: "VP Production",
        bio: "Working as a production director in China since 2011, and general director on projects since 2021. His record covers international-artist concerts, touring, festivals and large-format live events, from the production plan through supplier and crew interfaces to show-day execution.",
        credits: [
          {
            title: "Concerts and tours",
            items: [
              "WayV",
              "Bruno Major",
              "Laufey",
              "King Gnu Shanghai",
              "Nana Ouyang Shanghai",
              "Foster the People Shenzhen",
              "Nils Frahm Shanghai",
              "Mika",
              "5 Seconds of Summer",
              "Damien Rice",
              "Simple Plan",
              "Kenny G",
              "Avenged Sevenfold",
              "Owl City",
              "The Beach Boys",
              "Slash",
              "Nile Rodgers",
              "The Cardigans",
              "The Fray",
              "Neon Trees",
            ],
          },
          {
            title: "Festivals",
            items: [
              "F1 Carnival Shanghai",
              "EDC Zhuhai",
              "Concrete & Grass",
              "Echo Park",
              "Storm Electronic",
              "Strawberry Shanghai",
              "MIDI Shanghai and Shenzhen",
              "Shanghai Jazz Festival",
            ],
          },
        ],
      },
      {
        id: "yifeng",
        name: "Yifeng Zou",
        role: "Production director",
        bio: "Co-producing with Jason Tao from 2011 to 2021 across the concerts and festivals above, and producing independently since 2021. He tracks requirements, holds owners to deadlines, runs the production schedule and controls the show day.",
        credits: [
          {
            title: "Independent productions",
            items: [
              "Ten Lee Shanghai",
              "SEKAI NO OWARI",
              "Queen Bee",
              "Time Agent tour",
              "MOGWAI China tour",
            ],
          },
        ],
      },
    ],
  },
  footer: {
    rights: "Firefly Entertainment",
    licence: "Licensed performance agent",
    locations: "Shanghai · Seattle",
  },
};

export const zhContent: PageContent = {
  lang: "zh",
  siteName: "Firefly Entertainment",
  tagline: "好戲，必須上演",
  descriptor: "您可信任的中國在地團隊",
  brandLine: "FUN AND BRANDED",
  meta: {
    title: "中國本地代表｜Firefly Entertainment",
    description:
      "Firefly 是藝人與 agent 在中國的自有團隊：評估報價與報價背後的主辦方，執行 advance，按已經談定的條件約束主辦方與供應商，並複核結算。",
  },
  clientsMeta: {
    title: "客戶｜Firefly Entertainment",
    description: "Firefly 團隊在 2003 至 2026 年間經手的藝人、音樂節、展覽與體育賽事專案。",
  },
  teamMeta: {
    title: "核心團隊｜Firefly Entertainment",
    description:
      "在 Firefly 專案中分別負責客戶決策、藝人與巡演運營、製作統籌與現場執行的四位成員。",
  },
  nav: {
    about: "關於",
    services: "服務",
    clients: "客戶",
    contact: "聯絡",
    team: "團隊",
  },
  sections: {
    about: {
      title: "關於 Firefly Entertainment",
      body: "Firefly 是藝人與 agent 在中國的自有團隊。在任何一場中國演出裡，場館、預算、供應商與票務都由本地主辦方掌握。Firefly 受聘於客戶一側：評估報價與報價背後的主辦方，執行 advance，按已經談定的條件約束主辦方與供應商，並複核結算。",
      clients:
        "藝人管理方、booking agent、巡展出品方，以及把中國站賣給中國演出商的一方，在中國沒有自有團隊時聘請 Firefly：需要一個在內部經得起追問的中國側判斷，或者需要一支對自己負責的中國團隊。",
    },
    services: {
      title: "服務內容",
      items: [
        {
          index: "01",
          title: "報價與市場評估",
          covers: [
            "報價背後的主辦方",
            "場館與城市適配",
            "交易條件與經濟條件",
            "報批路徑",
            "預算區間",
          ],
          description:
            "評估已經拿到的報價以及報價背後的主辦方；如果還沒有報價，則評估市場與城市適配、場館與合作方選項、報批路徑與預算區間。",
          deliverable:
            "一份關於對手方與經濟條件的書面評估、具名的合作方備選清單與風險清單。適用於接受報價或投入資金之前。",
        },
        {
          index: "02",
          title: "Advance 與準備度核查",
          covers: [
            "Rider、技術與接待要求",
            "行程、酒店與車輛安排",
            "證件",
            "報批與許可",
            "本地一方已作出的承諾",
          ],
          description:
            "按 rider 逐項執行 advance：技術與接待要求，行程、酒店與車輛安排，證件，報批，以及本地一方實際作出的承諾。",
          deliverable:
            "一份英文 advance 檔案包與一份行動清單，寫明每一項由誰負責、何時完成。適用於檔期已有意向、本地對接方已經進場之後。",
        },
        {
          index: "03",
          title: "專案保障",
          covers: [
            "週報",
            "里程碑與變更控制",
            "演出日狀態與升級處理",
            "預算、報價與變更單",
            "最終結算複核",
          ],
          description:
            "代表客戶在中國跟蹤專案，包括週報、里程碑、變更控制、演出日狀態與升級處理，並複核預算、報價、變更單與最終結算。",
          deliverable:
            "週報、持續更新的行動清單、結算複核意見，以及一名指定負責人，在進度出現偏差時直接通知客戶。適用於自簽約至專案關閉的全過程。",
        },
        {
          index: "04",
          title: "本地製作授權",
          covers: [
            "Crew",
            "影音、燈光、音響與影片",
            "舞美與展陳搭建",
            "藝人、VIP 與行程運營",
            "貨運、清關與臨時進口",
            "安保方案",
          ],
          description:
            "作為客戶在中國的製作方：指定並指揮 crew 及影音、燈光、音響、影片、舞美與展陳搭建供應商；負責藝人、VIP 與行程運營；協調貨運、清關與臨時進口；確定安保方案。",
          deliverable:
            "在客戶批准的範圍內，提供從裝臺到拆臺的製作管理。適用於客戶在中國沒有主體、也沒有自有團隊的情況。",
        },
      ],
    },
    faq: {
      title: "常見問題",
      items: [
        {
          question: "誰可以為一場國際演出在中國申報批文",
          answer:
            "在中國舉辦涉外營業性演出，申報主體必須是在中國境內依法登記、並持有《營業性演出許可證》的演出經紀機構。海外主辦方或藝人公司不能以自身名義申報。外國投資者在中國境內依法登記的演出經紀機構可以作為申報主體。",
        },
        {
          question: "批文要多久",
          answer:
            "兩個時間要分開看。文化主管部門的審批，申請材料應當在演出日期 20 日前提交，法定辦結時限為 20 個工作日；上海的承諾辦結時限為 15 個工作日。預計參加人數 1000 人以上的活動另需公安機關的大型群眾性活動安全許可，提前 20 個工作日申請，法定辦結 17 個工作日，上海 1000 至 5000 人檔的承諾辦結為 7 個工作日。\n\n兩項審批都以已簽署的場館合同和已確定的演出陣容為前提，因此可以開始報批的時間由合同進度決定，而不是由審批時限決定。",
        },
        {
          question: "海外主辦方能不能直接和場館簽約",
          answer:
            "營業性演出的舉辦主體必須是境內持證機構，大型群眾性活動安全許可的承辦者也必須是依照法定程式成立的境內法人或其他組織。",
        },
        {
          question: "本地主辦方和 local producer 的區別",
          answer:
            "本地主辦方承擔演出的商業風險，持有資質並以自身名義申報批文，對票房和成本負責。Local producer 受客戶委託執行現場，負責製作方案、供應商與 crew 的指揮、裝臺到拆臺的執行，對客戶負責。兩者的立場不同：主辦方對自己的損益負責，producer 對客戶的專案負責。",
        },
      ],
    },
    contact: {
      title: "聯絡方式",
      body: "Firefly 在專案上只出具一個對客戶負責的中國側判斷，並以英文向客戶彙報。",
      fee: "Firefly 受客戶委任，向客戶彙報。費用在交易條款中固定，並於裝臺前結清，這是 Firefly 在該專案上的全部報酬。",
      briefTitle: "洽談所需資訊",
      brief: [
        "專案本身、演出形態，以及計劃覆蓋的中國區域。",
        "目標檔期或交付視窗，如果已經有的話。",
        "需要作出的決策，以及這項決策由誰拍板。",
        "已經在進行的主辦方、場館、藝人、版權方或供應商接觸。",
        "商務區間，或者最需要被滿足的約束條件。",
      ],
      name: "王璟平",
      role: "執行長",
      email: "david@fireflyentertainment.net",
      phone: "+86 156 1883 9401",
      locations: "上海 · 西雅圖",
    },
  },
  clients: {
    title: "客戶",
    note: "以下為 Firefly 團隊成員在 2003 至 2026 年間的個人經手專案，完成於 Firefly 與怒川文化，以及在索尼音樂、太合音樂、網易等此前任職機構期間。",
    groups: trackRecordGroupsZh,
  },
  team: {
    title: "核心團隊",
    subtitle:
      "Firefly 以一支面向中國的團隊承接國際現場演出與體驗類專案。以下四人在工作啟動之前即寫入專案範圍。預算與結算複核由王璟平與陳煜林負責。",
    members: [
      {
        id: "david",
        name: "王璟平",
        role: "執行長",
        bio: "自 2003 年起從事大中華區的國際巡演與現場演出，持有演出經紀人資格證。加入 Firefly 之前，任 Complex Chinese 執行副總裁、網易 Fever 總經理，以及太合音樂 IP 收購與開發副總裁、演出事業部副總裁。取得 Grande Exhibitions 旗下 Da Vinci – The Genius 的中國權利並主辦上海站，主理 teamLab Borderless 上海的網易 FEVER 嘉年華。2024 年創辦 Firefly 後，簽訂 CMC 框架合作，並完成 Clean Bandit 中國巡演。",
        credits: [
          {
            title: "中國首演與巡演",
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
            title: "體育與活動形態",
            items: [
              "美國男籃中國行",
              "NBA 中國賽",
              "杜克大學藍魔隊中國行",
              "首屆 ComplexCon 香港",
              "EDC China",
            ],
          },
          {
            title: "展覽與文旅專案",
            items: [
              "Da Vinci – The Genius（Grande Exhibitions，上海）",
              "teamLab Borderless 上海嘉年華（與網易 FEVER）",
            ],
          },
          {
            title: "廠牌與藝人",
            items: [
              "創辦太合音樂電子音樂廠牌並簽約 Carta，Carta 於 2017 年首次進入 DJ Mag Top 100，位列第 92 名，2019 年升至第 72 名",
            ],
          },
        ],
      },
      {
        id: "allen",
        name: "陳煜林",
        role: "專案總監，藝人與巡演運營",
        bio: "十五年藝人管理與巡演運營經驗，覆蓋韓流、華語流行、電子舞曲與古典，並自 2011 年起參與王璟平的中國專案。加入怒川文化之前，任網易雲音樂線下場景業務運營經理、太合音樂演出經理。在專案中銜接藝人、客戶、主辦方、場館與製作各條線，並負責演出日的溝通。",
        credits: [
          {
            title: "中國首演與巡演",
            items: ["Akon 上海演唱會", "Black Rabbit Music Festival"],
          },
          {
            title: "巡演",
            items: ["Clean Bandit 中國巡演", "Sheila 中國巡演", "Mad Mac 中國巡演（任巡演經理）"],
          },
          {
            title: "展覽與文旅專案",
            items: ["Da Vinci – The Genius 上海", "teamLab Borderless 上海嘉年華"],
          },
          {
            title: "體育與活動形態",
            items: ["首屆 ComplexCon 香港", "EDC China", "杜克大學藍魔隊中國行"],
          },
          {
            title: "藝人管理",
            items: [
              "DJ Carta 與 Spinning Session",
              "上海及其他城市的演唱會、音樂節、場館與品牌活動專案",
            ],
          },
        ],
      },
      {
        id: "jason",
        name: "陶堅亮",
        role: "製作副總裁",
        bio: "自 2011 年起在中國擔任製作總監，2021 年起擔任專案總導演。作品覆蓋國際藝人演唱會、巡演、音樂節與大型現場活動，工作範圍自製作方案起，至供應商與 crew 對接，直到演出日執行。",
        credits: [
          {
            title: "演唱會與巡演",
            items: [
              "WayV",
              "Bruno Major",
              "Laufey",
              "King Gnu 上海",
              "歐陽娜娜 上海",
              "Foster the People 深圳",
              "Nils Frahm 上海",
              "Mika",
              "5 Seconds of Summer",
              "Damien Rice",
              "Simple Plan",
              "Kenny G",
              "Avenged Sevenfold",
              "Owl City",
              "The Beach Boys",
              "Slash",
              "Nile Rodgers",
              "The Cardigans",
              "The Fray",
              "Neon Trees",
            ],
          },
          {
            title: "音樂節",
            items: [
              "上海 F1 嘉年華",
              "EDC 珠海",
              "混凝草音樂節",
              "Echo Park",
              "風暴電子音樂節",
              "上海草莓音樂節",
              "上海與深圳迷笛音樂節",
              "上海爵士音樂節",
            ],
          },
        ],
      },
      {
        id: "yifeng",
        name: "鄒一峰",
        role: "製作總監",
        bio: "2011 至 2021 年與陶堅亮共同製作上述演唱會與音樂節專案，2021 年起獨立擔任製作人。負責需求跟蹤、責任方的節點把控、製作日程執行與演出日現場控制。",
        credits: [
          {
            title: "獨立製作專案",
            items: [
              "Ten 李永欽 上海",
              "SEKAI NO OWARI",
              "Queen Bee",
              "時光代理人巡演",
              "MOGWAI 中國巡演",
            ],
          },
        ],
      },
    ],
  },
  footer: {
    rights: "Firefly Entertainment",
    licence: "持演出經紀人資格證",
    locations: "上海 · 西雅圖",
  },
};

export const content = { en: enContent, zh: zhContent };

export const alternatePaths: Record<Language, { home: string; team: string; clients: string }> = {
  en: { home: "/en", team: "/en/team", clients: "/en/clients" },
  zh: { home: "/zh", team: "/zh/team", clients: "/zh/clients" },
};
