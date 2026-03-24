"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function TopPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-brick-50 via-orange-50 to-amber-50 px-6 py-12">
      <motion.div
        className="w-full max-w-sm flex flex-col items-center text-center gap-8"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {/* アイコン */}
        <motion.div
          className="w-24 h-24 rounded-full bg-gradient-to-br from-brick-400 to-brick-600 flex items-center justify-center shadow-lg"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <span className="text-4xl">💡</span>
        </motion.div>

        {/* テキスト */}
        <div className="flex flex-col gap-3">
          <p className="text-sm font-medium text-brick-500 tracking-widest uppercase">
            Entrepreneurship Type
          </p>
          <h1 className="text-2xl font-bold text-gray-900 leading-snug">
            あなたの中の
            <br />
            起業家タイプ診断
          </h1>
          <p className="text-base text-gray-500 leading-relaxed">
            起業家って、特別な人じゃない。
            <br />
            10問に答えるだけで、あなたの
            <br />
            行動スタイルがわかります。
          </p>
        </div>

        {/* スタートボタン */}
        <motion.div className="w-full" whileTap={{ scale: 0.97 }}>
          <Link
            href="/quiz"
            className="block w-full py-4 px-8 bg-gradient-to-r from-brick-500 to-brick-600 text-white font-bold text-lg rounded-2xl shadow-md text-center"
          >
            診断をスタート
          </Link>
        </motion.div>

        <p className="text-xs text-gray-400">所要時間：約2分</p>
      </motion.div>
    </div>
  );
}
