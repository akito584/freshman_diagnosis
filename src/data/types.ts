export type AnswerKey = "A" | "B" | "C" | "D" | "E";

export interface EntrepreneurType {
  id: AnswerKey;
  name: string;
  imagePath: string;
  themeColor: string;
  gradientFrom: string;
  gradientTo: string;
  traits: string[];
  strengths: string[];
  challenges: string[];
  growthTips: string[];
}

export const ENTREPRENEUR_TYPES: Record<AnswerKey, EntrepreneurType> = {
  A: {
    id: "A",
    name: "アイデアひらめき型",
    imagePath: "/images/type-idea.jpg",
    themeColor: "#F59E0B",
    gradientFrom: "from-yellow-400",
    gradientTo: "to-amber-500",
    traits: ["思いつきが多い", "妄想が楽しい", "「これ面白くない？」と言いがち"],
    strengths: ["ゼロから1を生み出す力", "ワクワクを周囲に伝染させる力"],
    challenges: ["新企画の発案", "イベントアイデア出し", "コンセプト作り"],
    growthTips: ["思いついたら「誰かに話す」", "小さく試してみる習慣をつける"],
  },
  B: {
    id: "B",
    name: "共感プロデューサー型",
    imagePath: "/images/type-producer.jpg",
    themeColor: "#10B981",
    gradientFrom: "from-emerald-400",
    gradientTo: "to-green-500",
    traits: ["相談されやすい", "空気を読むのが得意", "「それいいね」と言える人"],
    strengths: ["人の気持ちを汲み取る力", "チームの雰囲気を整える力"],
    challenges: ["コミュニティづくり", "サービス改善", "チーム運営"],
    growthTips: ["「自分の意見」も言ってみる", "まとめ役に挑戦する"],
  },
  C: {
    id: "C",
    name: "コツコツ実行型",
    imagePath: "/images/type-executor.jpg",
    themeColor: "#78716C",
    gradientFrom: "from-stone-400",
    gradientTo: "to-stone-600",
    traits: ["地道な作業が苦じゃない", "責任感がある", "言われたことはやり切る"],
    strengths: ["継続力", "信頼を積み上げる力"],
    challenges: ["プロジェクト管理", "数字や記録の整理", "長期企画の運営"],
    growthTips: ["「任されたこと＋α」を意識する", "小さな改善を楽しむ"],
  },
  D: {
    id: "D",
    name: "挑戦アクション型",
    imagePath: "/images/type-action.jpg",
    themeColor: "#EF4444",
    gradientFrom: "from-red-400",
    gradientTo: "to-rose-600",
    traits: ["とりあえずやってみる", "失敗しても割と平気", "ノリがいい"],
    strengths: ["行動力", "周囲を巻き込む勢い"],
    challenges: ["新イベントの実行役", "営業や交渉", "外部とのコラボ"],
    growthTips: ["振り返る時間をつくる", "作戦を立ててから動く練習"],
  },
  E: {
    id: "E",
    name: "分析クリエイター型",
    imagePath: "/images/type-creator.jpg",
    themeColor: "#3B82F6",
    gradientFrom: "from-blue-400",
    gradientTo: "to-indigo-600",
    traits: ["考え込むタイプ", "物事の裏側が気になる", "比較検討が好き"],
    strengths: ["冷静な判断力", "改善ポイント発見力"],
    challenges: ["企画のブラッシュアップ", "データ整理", "戦略設計"],
    growthTips: ["70%でも動いてみる", "アイデアを言語化する"],
  },
};
