"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { QUESTIONS } from "@/data/questions";
import { AnswerKey } from "@/data/types";

export default function QuizPage() {
  const router = useRouter();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<AnswerKey[]>([]);
  const [direction, setDirection] = useState(1);

  const currentQuestion = QUESTIONS[currentIndex];
  const progress = ((currentIndex) / QUESTIONS.length) * 100;

  const handleSelect = (key: AnswerKey) => {
    const newAnswers = [...answers, key];
    setDirection(1);

    if (currentIndex < QUESTIONS.length - 1) {
      setAnswers(newAnswers);
      setCurrentIndex(currentIndex + 1);
    } else {
      // 全問回答完了 → 結果ページへ
      const resultKey = calcResult(newAnswers);
      router.push(`/result?type=${resultKey}`);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* プログレスバー */}
      <div className="w-full px-6 pt-8 pb-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs text-gray-400">Q{currentIndex + 1} / {QUESTIONS.length}</span>
          <span className="text-xs text-gray-400">{Math.round(progress)}%</span>
        </div>
        <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-brick-400 to-brick-600 rounded-full"
            initial={{ width: `${progress}%` }}
            animate={{ width: `${((currentIndex + 1) / QUESTIONS.length) * 100}%` }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          />
        </div>
      </div>

      {/* 質問カード */}
      <div className="flex-1 flex flex-col px-6 py-4 overflow-hidden">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={{
              enter: (d: number) => ({ x: d * 40, opacity: 0 }),
              center: { x: 0, opacity: 1 },
              exit: (d: number) => ({ x: d * -40, opacity: 0 }),
            }}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.28, ease: "easeInOut" }}
            className="flex flex-col gap-6"
          >
            {/* 質問文 */}
            <div className="pt-4 pb-2">
              <p className="text-xs font-semibold text-brick-500 mb-2 tracking-wide">QUESTION {currentIndex + 1}</p>
              <h2 className="text-xl font-bold text-gray-900 leading-snug">
                {currentQuestion.text}
              </h2>
            </div>

            {/* 選択肢 */}
            <div className="flex flex-col gap-3">
              {currentQuestion.choices.map((choice, i) => (
                <motion.button
                  key={choice.key}
                  onClick={() => handleSelect(choice.key)}
                  className="w-full text-left px-5 py-4 rounded-2xl border-2 border-gray-100 bg-white text-gray-800 font-medium text-base shadow-sm active:scale-98 transition-all"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.06, duration: 0.25 }}
                  whileTap={{ scale: 0.97, borderColor: "#b5451b" }}
                >
                  <span className="inline-block w-7 h-7 mr-3 rounded-full bg-brick-50 text-brick-500 text-xs font-bold text-center leading-7">
                    {choice.key}
                  </span>
                  {choice.text}
                </motion.button>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

function calcResult(answers: AnswerKey[]): AnswerKey {
  const counts: Record<AnswerKey, number> = { A: 0, B: 0, C: 0, D: 0, E: 0 };
  for (const a of answers) counts[a]++;

  const max = Math.max(...Object.values(counts));
  const topKeys = (Object.keys(counts) as AnswerKey[]).filter((k) => counts[k] === max);

  if (topKeys.length === 1) return topKeys[0];
  // 同数の場合は最初の回答を優先
  const firstAnswer = answers[0];
  return topKeys.includes(firstAnswer) ? firstAnswer : topKeys[0];
}
