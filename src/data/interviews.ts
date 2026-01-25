export interface Interview {
  id: string; // [id].astro で使うため、numberではなくstring（文字列）
  name: string;
  role: string;
  affiliation: string;
  image: string;
  link: string;
  body: string;
}

// 修正ポイント1: = を追加。 修正ポイント2: 途中の ]; を削除して全員分を [ ] で囲む
export const interviewData: Interview[] = [
  {
    id: "yamashita", // URLになるので id は "yamashita" に変更
    name: "Yamashita Ryoto",
    role: "エンジニア職（正社員）",
    affiliation: "SonicAI AI開発本部所属",
    image: "/images/yamashita.jpg",
    link: "/interview/yamashita1",
    body: `
      ここにインタビューの本文を書きます。
      バッククォート（Shift + @）で囲むと、このように改行がそのまま反映されます。
    `
  },
  {
    id: "narumi",
    name: "Narumi Taiyo",
    role: "フロントエンドエンジニア（インターン）",
    affiliation: "東京大学大学院に在籍",
    image: "/images/narumi.jpg",
    link: "/interview/narumi",
    body: "鳴海さんのインタビュー本文"
  },
  {
    id: "yamada",
    name: "Yamada Yoshiki",
    role: "バックエンドエンジニア（インターン）",
    affiliation: "筑波大学大学院に在籍",
    image: "/images/yamada.jpg",
    link: "/interview/yamada",
    body: "山田さんのインタビュー本文"
  }
];