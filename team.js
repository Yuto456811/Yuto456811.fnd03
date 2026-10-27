'use strict';

const clubs = {
  liverpool: {
    name: "Liverpool FC",
    league: "Premier League（イングランド）",
    instagram: "https://www.instagram.com/liverpoolfc/",
    watch: "SPOTV NOW",
    image: "./liverpool.webp",

    description:
      "世界的な知名度と伝統、サポーターとの一体感を持つクラブ。日本人選手との接点もあり、海外サッカーの入口としても選びやすい。",

    winning: 5,
    tradition: 6,
    community: 6,
    challenge: 3,
    style: 4,

    global: 6,
    local: 0,
    japanese: 5,

    knowledge: 2
  },

  dortmund: {
    name: "Borussia Dortmund",
    league: "Bundesliga（ドイツ）",
    instagram: "https://www.instagram.com/bvb09/",
    watch: "WOWOW",
    image: "./dortmund.webp",

    description:
      "サポーターとの一体感や若手選手の成長が魅力。勝利だけでなく、挑戦や成長の過程を楽しみたい人に向くクラブ。",

    winning: 3,
    tradition: 4,
    community: 6,
    challenge: 6,
    style: 4,

    global: 4,
    local: 0,
    japanese: 3,

    knowledge: 4
  },

  celtic: {
    name: "Celtic FC",
    league: "Scottish Premiership（スコットランド）",
    instagram: "https://www.instagram.com/celticfc/",
    watch: "DAZN",
    image: "./celtic.webp",

    description:
      "長い歴史とサポーター文化を持ち、日本人選手とのつながりも強いクラブ。",

    winning: 4,
    tradition: 6,
    community: 5,
    challenge: 4,
    style: 3,

    global: 3,
    local: 0,
    japanese: 6,

    knowledge: 3
  },

  antlers: {
    name: "Kashima Antlers",
    league: "J1 League（日本）",
    instagram: "https://www.instagram.com/kashima.antlers/",
    watch: "DAZN",
    image: "./antlers.webp",

    description:
      "勝利へのこだわりと国内で積み重ねてきた歴史を特徴とするクラブ。",

    winning: 6,
    tradition: 6,
    community: 4,
    challenge: 3,
    style: 3,

    global: 2,
    local: 4,
    japanese: 5,

    knowledge: 3
  },

  machida: {
    name: "FC Machida Zelvia",
    league: "J1 League（日本）",
    instagram: "https://www.instagram.com/fc_machida_z/",
    watch: "DAZN",
    image: "./machida.webp",

    description:
      "新しい時代を作っていく挑戦と成長が特徴。クラブが成長していく過程も楽しみたい人に向く。",

    winning: 4,
    tradition: 2,
    community: 4,
    challenge: 6,
    style: 4,

    global: 2,
    local: 4,
    japanese: 5,

    knowledge: 4
  },

  barcelona: {
    name: "FC Barcelona",
    league: "La Liga（スペイン）",
    instagram: "https://www.instagram.com/fcbarcelona/",
    watch: "DAZN",
    image: "./barcelona.webp",

    description:
      "世界的な知名度を持ちながら、独自のサッカー哲学やスタイルを強く持つクラブ。",

    winning: 5,
    tradition: 5,
    community: 4,
    challenge: 4,
    style: 6,

    global: 6,
    local: 0,
    japanese: 2,

    knowledge: 3
  },

  realMadrid: {
    name: "Real Madrid",
    league: "La Liga（スペイン）",
    instagram: "https://www.instagram.com/realmadrid/",
    watch: "DAZN",
    image: "./realmadrid.webp",

    description:
      "勝利、実績、伝統、世界的知名度を重視する人に向く世界的名門クラブ。",

    winning: 6,
    tradition: 6,
    community: 3,
    challenge: 3,
    style: 4,

    global: 6,
    local: 0,
    japanese: 1,

    knowledge: 2
  },

  //local teamは細分化していく予定なので、不明な項目は中央値で設定した
  local: {
    name: "Your Local J Club",
    league: "J League（日本）",
    instagram: "",
    watch: "DAZN",
    image: "./local.webp",

    description:
      "身近な地域を代表するクラブ。サッカー初心者でもスタジアム観戦などをきっかけに応援を始めやすく、地域との一体感を感じられる。",

    winning: 3,
    tradition: 3,
    community: 6,
    challenge: 4,
    style: 3,

    global: 1,
    local: 6,
    japanese: 5,

    knowledge: 1
  }

};
