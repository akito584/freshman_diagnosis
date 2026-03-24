import { AnswerKey } from "./types";

export interface Choice {
  key: AnswerKey;
  text: string;
}

export interface Question {
  id: number;
  text: string;
  choices: Choice[];
}

export const QUESTIONS: Question[] = [
  {
    id: 1,
    text: "新歓イベントでのあなたは？",
    choices: [
      { key: "A", text: "盛り上がっているブースが気になる" },
      { key: "B", text: "友達が行くところについていく" },
      { key: "C", text: "チラシを全部チェックする" },
      { key: "D", text: "面白そうなら即入る" },
      { key: "E", text: "まず全体を観察する" },
    ],
  },
  {
    id: 2,
    text: "グループワークでは？",
    choices: [
      { key: "A", text: "アイデアを出す" },
      { key: "B", text: "みんなの意見をまとめる" },
      { key: "C", text: "資料を丁寧に作る" },
      { key: "D", text: "とりあえず発表役をやる" },
      { key: "E", text: "方向性を整理する" },
    ],
  },
  {
    id: 3,
    text: "面白いことを思いついたら？",
    choices: [
      { key: "A", text: "すぐ話す" },
      { key: "B", text: "誰かに相談する" },
      { key: "C", text: "メモする" },
      { key: "D", text: "すぐ試す" },
      { key: "E", text: "一度考え直す" },
    ],
  },
  {
    id: 4,
    text: "失敗したときは？",
    choices: [
      { key: "A", text: "「次いこ！」" },
      { key: "B", text: "「大丈夫？」と周りを見る" },
      { key: "C", text: "原因を振り返る" },
      { key: "D", text: "もう一回挑戦する" },
      { key: "E", text: "なぜ失敗したか分析する" },
    ],
  },
  {
    id: 5,
    text: "大学生活で一番楽しみなのは？",
    choices: [
      { key: "A", text: "新しいことを考えること" },
      { key: "B", text: "友達づくり" },
      { key: "C", text: "自分を成長させること" },
      { key: "D", text: "いろんな挑戦" },
      { key: "E", text: "自分の強みを見つけること" },
    ],
  },
  {
    id: 6,
    text: "サークルを選ぶ基準は？",
    choices: [
      { key: "A", text: "面白そうか" },
      { key: "B", text: "雰囲気がいいか" },
      { key: "C", text: "ちゃんとしているか" },
      { key: "D", text: "ワクワクするか" },
      { key: "E", text: "自分に合っているか" },
    ],
  },
  {
    id: 7,
    text: "友達からよく言われるのは？",
    choices: [
      { key: "A", text: "発想が独特" },
      { key: "B", text: "優しい" },
      { key: "C", text: "真面目" },
      { key: "D", text: "行動力ある" },
      { key: "E", text: "冷静" },
    ],
  },
  {
    id: 8,
    text: "新しいアプリを見つけたら？",
    choices: [
      { key: "A", text: "「こんなの作れそう」" },
      { key: "B", text: "「誰に向いてるかな？」" },
      { key: "C", text: "「仕組みどうなってるんだろ」" },
      { key: "D", text: "とりあえず使う" },
      { key: "E", text: "比較サイトを見る" },
    ],
  },
  {
    id: 9,
    text: "将来に対しての気持ちは？",
    choices: [
      { key: "A", text: "何か大きいことしたい" },
      { key: "B", text: "誰かの役に立ちたい" },
      { key: "C", text: "安定して成長したい" },
      { key: "D", text: "面白く生きたい" },
      { key: "E", text: "納得できる選択をしたい" },
    ],
  },
  {
    id: 10,
    text: "あなたが一番ワクワクする瞬間は？",
    choices: [
      { key: "A", text: "アイデアが浮かんだとき" },
      { key: "B", text: "誰かが喜んだとき" },
      { key: "C", text: "目標を達成したとき" },
      { key: "D", text: "何かを始める瞬間" },
      { key: "E", text: "答えが見つかったとき" },
    ],
  },
];
