"use client";

import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ENTREPRENEUR_TYPES, AnswerKey } from "@/data/types";

function ResultContent() {
  const searchParams = useSearchParams();
  const typeKey = (searchParams.get("type") ?? "A") as AnswerKey;
  const type = ENTREPRENEUR_TYPES[typeKey] ?? ENTREPRENEUR_TYPES["A"];

  return (
    <div className="min-h-screen bg-gray-50 flex justify-center">
      <div className="w-full max-w-sm flex flex-col">
        {/* ヘッダー グラデーション */}
        <motion.div
          className={`w-full bg-gradient-to-br ${type.gradientFrom} ${type.gradientTo} px-6 pt-12 pb-10 flex flex-col items-center text-white`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-sm font-semibold opacity-80 mb-1 tracking-widest uppercase">Your Type</p>
          <h1 className="text-2xl font-bold mb-6 text-center">{type.name}</h1>

          {/* キャラクター画像エリア */}
          <div className="w-40 h-40 rounded-full bg-white/20 border-4 border-white/40 flex items-center justify-center overflow-hidden shadow-lg mb-4">
            <Image
              src={type.imagePath}
              alt={type.name}
              width={160}
              height={160}
              className="object-cover w-full h-full"
              onError={(e) => {
                // 画像がない場合はフォールバック表示
                (e.target as HTMLImageElement).style.display = "none";
              }}
            />
            {/* 画像プレースホルダー (画像未設定時に表示) */}
            <span className="text-6xl absolute">
              {typeKey === "A" ? "💡" : typeKey === "B" ? "🤝" : typeKey === "C" ? "📋" : typeKey === "D" ? "🚀" : "🔍"}
            </span>
          </div>
        </motion.div>

        {/* 結果カード */}
        <div className="flex flex-col gap-4 px-5 py-6">
          {/* 特徴 */}
          <ResultCard title="こんな人" emoji="✨">
            <ul className="flex flex-col gap-1">
              {type.traits.map((t) => (
                <li key={t} className="text-sm text-gray-700 flex items-start gap-2">
                  <span className="text-brick-500 mt-0.5">•</span>
                  {t}
                </li>
              ))}
            </ul>
          </ResultCard>

          {/* 強み */}
          <ResultCard title="あなたの強み" emoji="💪">
            <ul className="flex flex-col gap-1">
              {type.strengths.map((s) => (
                <li key={s} className="text-sm text-gray-700 flex items-start gap-2">
                  <span className="text-brick-500 mt-0.5">•</span>
                  {s}
                </li>
              ))}
            </ul>
          </ResultCard>

          {/* 向いている挑戦 */}
          <ResultCard title="向いている挑戦" emoji="🎯">
            <div className="flex flex-wrap gap-2">
              {type.challenges.map((c) => (
                <span
                  key={c}
                  className={`px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${type.gradientFrom} ${type.gradientTo} text-white`}
                >
                  {c}
                </span>
              ))}
            </div>
          </ResultCard>

          {/* 成長のヒント */}
          <ResultCard title="成長のヒント" emoji="🌱">
            <ul className="flex flex-col gap-1">
              {type.growthTips.map((g) => (
                <li key={g} className="text-sm text-gray-700 flex items-start gap-2">
                  <span className="text-brick-500 mt-0.5">→</span>
                  {g}
                </li>
              ))}
            </ul>
          </ResultCard>

          {/* 起業部への誘導 (控えめ) */}
          <motion.div
            className="mt-2 rounded-2xl bg-white border border-gray-100 shadow-sm px-5 py-5 flex flex-col gap-2 text-center"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.4 }}
          >
            <p className="text-sm text-gray-600 leading-relaxed">
              このタイプ、実は起業部にいます。
              <br />
              <span className="font-semibold text-gray-800">起業家って、特別な人じゃない。</span>
            </p>
            <a
              href="https://www.instagram.com/kobeuni_kigyoubu/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-brick-500 underline underline-offset-2 mt-1"
            >
              活動をのぞいてみる？
            </a>
          </motion.div>

          {/* もう一度ボタン */}
          <Link
            href="/"
            className="block w-full text-center py-3 px-6 rounded-2xl border-2 border-gray-200 text-gray-500 font-medium text-sm mt-2 mb-8"
          >
            もう一度診断する
          </Link>
        </div>
      </div>
    </div>
  );
}

function ResultCard({
  title,
  emoji,
  children,
}: {
  title: string;
  emoji: string;
  children: React.ReactNode;
}) {
  return (
    <motion.div
      className="rounded-2xl bg-white border border-gray-100 shadow-sm px-5 py-4 flex flex-col gap-3"
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
    >
      <h3 className="text-sm font-bold text-gray-900">
        <span className="mr-1">{emoji}</span>
        {title}
      </h3>
      {children}
    </motion.div>
  );
}

export default function ResultPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center text-gray-400">読み込み中...</div>}>
      <ResultContent />
    </Suspense>
  );
}
