'use client';

import React, { useState, useEffect, useCallback, useMemo, useRef } from 'react';
import { motion, AnimatePresence, PanInfo } from 'framer-motion';
import {
  decomposeHangul,
  getWordStructure,
  generateDistractors,
  shuffleArray,
  checkAnswer,
} from '@/lib/hangulUtils';
import { useLanguage } from '@/context/LanguageContext';
import { useTTS } from '@/hooks/useTTS';
import { getWordTranslation, SupportedLanguage } from '@/data/puzzle/wordTranslations';

export interface PuzzleWord {
  id: string;
  korean: string;
  english: string;
  romanization?: string;
  category: string;
  difficulty: number;
}

export interface PuzzleGameState {
  currentIndex: number;
  score: number;
  correctCount: number;
  hintsUsed: number;
  isComplete: boolean;
}

export interface WordResult {
  korean: string;
  english: string;
  isCorrect: boolean;
  hintUsed: boolean;
}

interface WordBuilderProps {
  words: PuzzleWord[];
  onComplete: (score: number, correct: number, total: number, hintsUsed: number, wordResults: WordResult[]) => void;
  onExit?: () => void;
}

interface SlotState {
  jamo: string | null;
  tileId?: number;
}

interface TileState {
  jamo: string;
  used: boolean;
  id: number;
}

// Category translations (supports both English and Korean keys)
const categoryTranslations: Record<string, Record<string, string>> = {
  // English keys
  nature: { en: 'Nature', ko: '자연', ja: '自然', zh: '自然', 'zh-TW': '自然', th: 'ธรรมชาติ', vi: 'Thiên nhiên', es: 'Naturaleza' },
  animal: { en: 'Animal', ko: '동물', ja: '動物', zh: '动物', 'zh-TW': '動物', th: 'สัตว์', vi: 'Động vật', es: 'Animal' },
  food: { en: 'Food', ko: '음식', ja: '食べ物', zh: '食物', 'zh-TW': '食物', th: 'อาหาร', vi: 'Thức ăn', es: 'Comida' },
  body: { en: 'Body', ko: '신체', ja: '体', zh: '身体', 'zh-TW': '身體', th: 'ร่างกาย', vi: 'Cơ thể', es: 'Cuerpo' },
  family: { en: 'Family', ko: '가족', ja: '家族', zh: '家庭', 'zh-TW': '家庭', th: 'ครอบครัว', vi: 'Gia đình', es: 'Familia' },
  object: { en: 'Object', ko: '물건', ja: '物', zh: '物品', 'zh-TW': '物品', th: 'วัตถุ', vi: 'Đồ vật', es: 'Objeto' },
  place: { en: 'Place', ko: '장소', ja: '場所', zh: '地点', 'zh-TW': '地點', th: 'สถานที่', vi: 'Địa điểm', es: 'Lugar' },
  vehicle: { en: 'Vehicle', ko: '교통', ja: '乗り物', zh: '交通', 'zh-TW': '交通', th: 'ยานพาหนะ', vi: 'Phương tiện', es: 'Vehículo' },
  color: { en: 'Color', ko: '색깔', ja: '色', zh: '颜色', 'zh-TW': '顏色', th: 'สี', vi: 'Màu sắc', es: 'Color' },
  number: { en: 'Number', ko: '숫자', ja: '数字', zh: '数字', 'zh-TW': '數字', th: 'ตัวเลข', vi: 'Số', es: 'Número' },
  // Korean keys (for data that uses Korean categories)
  '자연': { en: 'Nature', ko: '자연', ja: '自然', zh: '自然', 'zh-TW': '自然', th: 'ธรรมชาติ', vi: 'Thiên nhiên', es: 'Naturaleza' },
  '동물': { en: 'Animal', ko: '동물', ja: '動物', zh: '动物', 'zh-TW': '動物', th: 'สัตว์', vi: 'Động vật', es: 'Animal' },
  '음식': { en: 'Food', ko: '음식', ja: '食べ物', zh: '食物', 'zh-TW': '食物', th: 'อาหาร', vi: 'Thức ăn', es: 'Comida' },
  '신체': { en: 'Body', ko: '신체', ja: '体', zh: '身体', 'zh-TW': '身體', th: 'ร่างกาย', vi: 'Cơ thể', es: 'Cuerpo' },
  '가족': { en: 'Family', ko: '가족', ja: '家族', zh: '家庭', 'zh-TW': '家庭', th: 'ครอบครัว', vi: 'Gia đình', es: 'Familia' },
  '물건': { en: 'Object', ko: '물건', ja: '物', zh: '物品', 'zh-TW': '物品', th: 'วัตถุ', vi: 'Đồ vật', es: 'Objeto' },
  '장소': { en: 'Place', ko: '장소', ja: '場所', zh: '地点', 'zh-TW': '地點', th: 'สถานที่', vi: 'Địa điểm', es: 'Lugar' },
  '교통': { en: 'Vehicle', ko: '교통', ja: '乗り物', zh: '交通', 'zh-TW': '交通', th: 'ยานพาหนะ', vi: 'Phương tiện', es: 'Vehículo' },
  '색깔': { en: 'Color', ko: '색깔', ja: '色', zh: '颜色', 'zh-TW': '顏色', th: 'สี', vi: 'Màu sắc', es: 'Color' },
  '숫자': { en: 'Number', ko: '숫자', ja: '数字', zh: '数字', 'zh-TW': '數字', th: 'ตัวเลข', vi: 'Số', es: 'Número' },
};

function getCategoryTranslation(category: string, lang: string): string {
  const cat = category.toLowerCase();
  return categoryTranslations[category]?.[lang] || categoryTranslations[cat]?.[lang] || categoryTranslations[cat]?.en || category;
}

export default function WordBuilder({ words, onComplete, onExit }: WordBuilderProps) {
  const { language } = useLanguage();
  const { speak } = useTTS();
  const dropZoneRef = useRef<HTMLDivElement>(null);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [correctCount, setCorrectCount] = useState(0);
  const [hintsUsed, setHintsUsed] = useState(0);
  const [hintIndex, setHintIndex] = useState(-1);
  const [wordResults, setWordResults] = useState<WordResult[]>([]);

  const [slots, setSlots] = useState<SlotState[]>([]);
  const [availableTiles, setAvailableTiles] = useState<TileState[]>([]);
  const [showResult, setShowResult] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [isShaking, setIsShaking] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [selectedTileId, setSelectedTileId] = useState<number | null>(null);

  const currentWord = words[currentIndex];

  const correctJamos = useMemo(
    () => (currentWord ? decomposeHangul(currentWord.korean) : []),
    [currentWord]
  );

  const syllableStructure = useMemo(
    () => (currentWord ? getWordStructure(currentWord.korean) : []),
    [currentWord]
  );

  // Track which syllables are complete
  const completedSyllables = useMemo(() => {
    const result: boolean[] = [];
    let slotIdx = 0;
    for (const syllableJamos of syllableStructure) {
      const syllableSlots = slots.slice(slotIdx, slotIdx + syllableJamos.length);
      const isComplete = syllableSlots.every(s => s.jamo !== null);
      result.push(isComplete);
      slotIdx += syllableJamos.length;
    }
    return result;
  }, [syllableStructure, slots]);

  useEffect(() => {
    if (!currentWord) return;

    const jamos = decomposeHangul(currentWord.korean);
    const distractorCount = 3 + Math.floor(currentWord.difficulty / 2);
    const distractors = generateDistractors(jamos, distractorCount);

    const allTiles = shuffleArray([...jamos, ...distractors]).map((jamo, i) => ({
      jamo,
      used: false,
      id: i,
    }));

    setAvailableTiles(allTiles);
    setSlots(jamos.map(() => ({ jamo: null })));
    setShowResult(false);
    setIsCorrect(false);
    setHintIndex(-1);
    setSelectedTileId(null);
  }, [currentWord]);

  const handleDragEnd = useCallback(
    (tileId: number, info: PanInfo) => {
      setIsDragging(false);
      if (showResult) return;

      const tile = availableTiles.find((t) => t.id === tileId);
      if (!tile || tile.used) return;

      if (dropZoneRef.current) {
        const dropZone = dropZoneRef.current.getBoundingClientRect();
        const isInDropZone =
          info.point.x >= dropZone.left &&
          info.point.x <= dropZone.right &&
          info.point.y >= dropZone.top &&
          info.point.y <= dropZone.bottom;

        if (isInDropZone) {
          const emptySlotIndex = slots.findIndex((s) => s.jamo === null);
          if (emptySlotIndex === -1) return;

          setAvailableTiles((prev) =>
            prev.map((t) => (t.id === tileId ? { ...t, used: true } : t))
          );

          const newSlots = [...slots];
          newSlots[emptySlotIndex] = { jamo: tile.jamo, tileId };
          setSlots(newSlots);

          if (newSlots.every((s) => s.jamo !== null)) {
            checkAnswerResult(newSlots);
          }
        }
      }
    },
    [availableTiles, slots, showResult]
  );

  const handleTileTap = useCallback(
    (tileId: number) => {
      if (showResult) return;
      const tile = availableTiles.find((t) => t.id === tileId);
      if (!tile || tile.used) return;

      if (selectedTileId === tileId) {
        setSelectedTileId(null);
      } else {
        setSelectedTileId(tileId);
      }
    },
    [availableTiles, showResult, selectedTileId]
  );

  const handleDropZoneTap = useCallback(() => {
    if (showResult || selectedTileId === null) return;

    const tile = availableTiles.find((t) => t.id === selectedTileId);
    if (!tile || tile.used) {
      setSelectedTileId(null);
      return;
    }

    const emptySlotIndex = slots.findIndex((s) => s.jamo === null);
    if (emptySlotIndex === -1) {
      setSelectedTileId(null);
      return;
    }

    setAvailableTiles((prev) =>
      prev.map((t) => (t.id === selectedTileId ? { ...t, used: true } : t))
    );

    const newSlots = [...slots];
    newSlots[emptySlotIndex] = { jamo: tile.jamo, tileId: selectedTileId };
    setSlots(newSlots);
    setSelectedTileId(null);

    if (newSlots.every((s) => s.jamo !== null)) {
      checkAnswerResult(newSlots);
    }
  }, [availableTiles, slots, showResult, selectedTileId]);

  const handleSlotTap = useCallback(
    (slotIndex: number) => {
      if (showResult) return;
      const slot = slots[slotIndex];
      if (!slot.jamo) return;

      const slotsToFree = slots.slice(slotIndex).filter((s) => s.jamo !== null);

      setAvailableTiles((prev) => {
        const updatedTiles = [...prev];
        slotsToFree.forEach((s) => {
          if (s.tileId !== undefined) {
            const tileIndex = updatedTiles.findIndex((t) => t.id === s.tileId);
            if (tileIndex !== -1) {
              updatedTiles[tileIndex] = { ...updatedTiles[tileIndex], used: false };
            }
          }
        });
        return updatedTiles;
      });

      setSlots((prev) => prev.map((s, i) => (i >= slotIndex ? { jamo: null } : s)));
    },
    [slots, showResult]
  );

  const checkAnswerResult = useCallback(
    (currentSlots: SlotState[]) => {
      const userJamos = currentSlots.map((s) => s.jamo!);
      const correct = checkAnswer(userJamos, correctJamos);

      setShowResult(true);
      setIsCorrect(correct);

      if (correct) {
        const pointsEarned = hintIndex >= 0 ? 50 : 100;
        setScore((prev) => prev + pointsEarned);
        setCorrectCount((prev) => prev + 1);

        setWordResults((prev) => {
          const existingIndex = prev.findIndex(w => w.korean === currentWord.korean);
          if (existingIndex >= 0) return prev;
          return [...prev, {
            korean: currentWord.korean,
            english: currentWord.english,
            isCorrect: true,
            hintUsed: hintIndex >= 0,
          }];
        });

        setTimeout(() => speak(currentWord.korean), 300);
      } else {
        setWordResults((prev) => {
          const existingIndex = prev.findIndex(w => w.korean === currentWord.korean);
          if (existingIndex >= 0) return prev;
          return [...prev, {
            korean: currentWord.korean,
            english: currentWord.english,
            isCorrect: false,
            hintUsed: hintIndex >= 0,
          }];
        });

        setIsShaking(true);
        setTimeout(() => {
          setIsShaking(false);
          handleReset();
        }, 1000);
      }
    },
    [correctJamos, hintIndex, currentWord, speak]
  );

  const handleReset = useCallback(() => {
    setSlots(correctJamos.map(() => ({ jamo: null })));
    setAvailableTiles((prev) => prev.map((t) => ({ ...t, used: false })));
    setShowResult(false);
    setIsCorrect(false);
    setSelectedTileId(null);
  }, [correctJamos]);

  const handleHint = useCallback(() => {
    if (showResult) return;
    const nextEmptyIndex = slots.findIndex((s) => s.jamo === null);
    if (nextEmptyIndex === -1) return;
    setHintIndex(nextEmptyIndex);
    setHintsUsed((prev) => prev + 1);
  }, [slots, showResult]);

  const handleNext = useCallback(() => {
    if (currentIndex >= words.length - 1) {
      onComplete(score, correctCount, words.length, hintsUsed, wordResults);
    } else {
      setCurrentIndex((prev) => prev + 1);
    }
  }, [currentIndex, words.length, score, correctCount, hintsUsed, wordResults, onComplete]);

  if (!currentWord) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="animate-spin w-8 h-8 border-4 border-white border-t-transparent rounded-full" />
      </div>
    );
  }

  const nextCorrectJamo = hintIndex >= 0 ? correctJamos[hintIndex] : null;
  const syllableCount = currentWord.korean.length;

  return (
    <div className="w-full h-full flex flex-col">
      {/* ===== HEADER ===== */}
      <div className="flex items-center justify-between mb-2">
        {/* Back Button - 흰색 배경, 동그란 모양 */}
        <button
          onClick={onExit}
          className="w-[42px] h-[42px] rounded-full bg-white flex items-center justify-center"
        >
          <svg className="w-6 h-6 text-[#1B0440]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Progress & Score - 세로 사이즈 축소 */}
        <div className="flex items-center gap-2">
          {/* 1/10 버튼 */}
          <span className="text-[13px] font-bold bg-[#B4D700] text-[#1B0440] px-3 py-1 rounded-[8px]">
            {currentIndex + 1}/{words.length}
          </span>
          {/* 별 점수 */}
          <span className="text-[13px] font-bold bg-[#AE7DFD] text-[#1B0440] px-3 py-1 rounded-[8px] flex items-center gap-1">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
            {score}
          </span>
        </div>
      </div>

      {/* ===== PROGRESS BAR ===== */}
      <div className="w-full h-[8px] bg-[#1B0440] rounded-full overflow-hidden mb-3">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${((currentIndex + 1) / words.length) * 100}%` }}
          transition={{ duration: 0.5 }}
          className="h-full bg-[#B4D700] rounded-full"
        />
      </div>

      {/* ===== CATEGORY BADGE - 8A4AEF 배경, 흰색 글씨, 사용자 언어로 ===== */}
      <div className="text-center mb-1">
        <span className="inline-block text-[11px] text-white font-bold uppercase tracking-wide bg-[#8A4AEF] px-4 py-1.5 rounded-[8px]">
          {getCategoryTranslation(currentWord.category, language)}
        </span>
      </div>

      {/* ===== TITLE - 흰색 ===== */}
      <h2 className="text-[20px] xs:text-[22px] sm:text-[24px] md:text-[28px] font-black text-white text-center mb-3">
        &ldquo;{getWordTranslation(currentWord.korean, language as SupportedLanguage) || currentWord.english}&rdquo;
      </h2>

      {/* ===== MAIN GAME BOARD - 8A4AEF 배경, 42% 높이 (70% 축소) ===== */}
      <div
        ref={dropZoneRef}
        onClick={handleDropZoneTap}
        className="h-[42%] bg-[#8A4AEF] rounded-[20px] flex flex-col items-center justify-center px-4 py-3 mb-2 cursor-pointer relative z-30"
      >
        {/* Success / Error Message */}
        <AnimatePresence>
          {showResult && isCorrect && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="absolute top-[18px] left-0 right-0 flex items-center justify-center gap-2"
            >
              {/* Speech Bubble */}
              <div className="relative bg-white text-[#1B0440] px-4 py-1.5 rounded-[8px]">
                <p className="text-[12px] font-bold">Well done!</p>
                {/* Speech bubble tail */}
                <div className="absolute -right-2 top-1/2 -translate-y-1/2 w-0 h-0 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent border-l-[8px] border-l-white" />
              </div>
              <motion.img
                src="/images/word/wb_crt002.png"
                alt="Character"
                className="w-[50px] h-auto"
                animate={{
                  rotate: [0, -5, 5, -5, 5, 0],
                }}
                transition={{
                  duration: 0.6,
                  repeat: Infinity,
                  repeatDelay: 0.5,
                }}
              />
            </motion.div>
          )}
          {showResult && !isCorrect && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute top-[18px]"
            >
              <p className="text-white text-[13px] font-bold">Try again!</p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* ===== 정답 글자 표시 (비행기 -> 비 - - 또는 _ _ _) ===== */}
        <motion.div
          animate={isShaking ? { x: [-10, 10, -10, 10, 0] } : {}}
          transition={{ duration: 0.4 }}
          className="flex items-center justify-center gap-2 mb-4"
        >
          {syllableStructure.map((syllableJamos, syllableIdx) => {
            const startIdx = syllableStructure
              .slice(0, syllableIdx)
              .reduce((sum, s) => sum + s.length, 0);
            const syllableSlots = slots.slice(startIdx, startIdx + syllableJamos.length);
            const isComplete = syllableSlots.every(s => s.jamo !== null);

            // Check if this syllable is correct (jamos match in order)
            const userSyllableJamos = syllableSlots.map(s => s.jamo);
            const correctSyllableJamos = syllableJamos;
            const isSyllableCorrect = isComplete &&
              userSyllableJamos.every((jamo, idx) => jamo === correctSyllableJamos[idx]);

            // Only show the correct character when:
            // 1. The syllable is complete AND correct, OR
            // 2. The entire answer is correct (showResult && isCorrect)
            const showCorrectChar = isSyllableCorrect || (showResult && isCorrect);

            return (
              <span
                key={syllableIdx}
                className={`text-[32px] xs:text-[38px] sm:text-[44px] md:text-[52px] font-black leading-none ${
                  showCorrectChar
                    ? 'text-[#B4D700]'
                    : 'text-[#421785]'
                }`}
              >
                {showCorrectChar ? currentWord.korean[syllableIdx] : '-'}
              </span>
            );
          })}
        </motion.div>

        {/* ===== ? 카드 슬롯 - 음절별 그룹핑 (ㅂㅣ ㅎㅐㅇ ㄱㅣ) ===== */}
        <div className="flex gap-4 mb-3 flex-wrap justify-center">
          {syllableStructure.map((syllableJamos, syllableIdx) => {
            const startIdx = syllableStructure
              .slice(0, syllableIdx)
              .reduce((sum, s) => sum + s.length, 0);

            return (
              <div key={syllableIdx} className="flex gap-1">
                {syllableJamos.map((_, jamoIdx) => {
                  const slotIdx = startIdx + jamoIdx;
                  const slot = slots[slotIdx];
                  const isHinted = hintIndex === slotIdx;

                  return (
                    <button
                      key={slotIdx}
                      onClick={(e) => { e.stopPropagation(); handleSlotTap(slotIdx); }}
                      disabled={showResult}
                      className={`w-[26px] h-[34px] xs:w-[30px] xs:h-[38px] sm:w-[32px] sm:h-[42px] rounded-[6px] flex items-center justify-center text-[16px] font-bold transition-all ${
                        slot?.jamo
                          ? 'bg-[#B4D700] text-[#1B0440]'
                          : isHinted
                          ? 'bg-[#B4D700] text-[#1B0440]'
                          : 'bg-[#AE7DFD] text-white'
                      }`}
                    >
                      {slot?.jamo || '?'}
                    </button>
                  );
                })}
              </div>
            );
          })}
        </div>

        {/* ===== HINT TEXT ===== */}
        {!showResult && slots.some(s => !s.jamo) && (
          <div className="text-center">
            <p className="text-white/70 text-[11px]">drag and drop</p>
          </div>
        )}

        {/* ===== NEXT BUTTON - 게임 영역 하단 (절대 위치) ===== */}
        {showResult && isCorrect && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="absolute bottom-3 left-0 right-0 flex justify-center"
          >
            <button
              onClick={handleNext}
              className="bg-[#B4D700] text-[#1B0440] font-bold px-6 py-2 rounded-[8px] text-[14px]"
            >
              {currentIndex >= words.length - 1 ? 'Complete' : 'Next →'}
            </button>
          </motion.div>
        )}
      </div>

      {/* ===== JAMO TILE CARDS - 110% 확대, 블러없는 그림자, 드래그 효과 ===== */}
      <div className="flex flex-wrap justify-center gap-2 mb-3 px-2 flex-1 content-start overflow-visible pt-2">
        {availableTiles.map((tile) => {
          const isHinted = hintIndex >= 0 && tile.jamo === nextCorrectJamo && !tile.used;
          if (tile.used) return null;

          const isSelected = selectedTileId === tile.id;

          return (
            <motion.div
              key={tile.id}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{
                opacity: 1,
                scale: isSelected ? 1.08 : 1,
                rotate: isSelected ? [0, -2, 2, -2, 0] : 0,
              }}
              transition={{
                rotate: {
                  repeat: isSelected ? Infinity : 0,
                  duration: 0.5,
                },
              }}
              exit={{ opacity: 0, scale: 0.5 }}
              drag={!showResult}
              dragConstraints={{ left: 0, right: 0, top: -400, bottom: 0 }}
              dragElastic={0.9}
              onDragStart={() => setIsDragging(true)}
              onDragEnd={(_, info) => handleDragEnd(tile.id, info)}
              onTap={() => handleTileTap(tile.id)}
              whileTap={{ scale: 0.95 }}
              whileDrag={{
                scale: 1.15,
                rotate: [0, -3, 3, -3, 3, 0],
                boxShadow: '6px 6px 0px #1B0440',
                zIndex: 100,
                transition: {
                  rotate: {
                    repeat: Infinity,
                    duration: 0.3,
                  },
                },
              }}
              style={{
                boxShadow: '3px 3px 0px #1B0440',
              }}
              className={`w-[44px] h-[58px] xs:w-[52px] xs:h-[68px] sm:w-[57px] sm:h-[75px] md:w-[64px] md:h-[82px] rounded-[10px] flex items-center justify-center text-[26px] xs:text-[30px] sm:text-[34px] md:text-[38px] font-black cursor-grab active:cursor-grabbing select-none border-[1.5px] relative ${
                isSelected
                  ? 'bg-[#B4D700] text-[#1B0440] border-[#1B0440] z-20'
                  : isHinted
                  ? 'bg-[#B4D700] text-[#1B0440] border-[#1B0440] animate-pulse z-10'
                  : 'bg-[#8A4AEF] text-[#1B0440] border-[#1B0440] z-10'
              }`}
            >
              {tile.jamo}
            </motion.div>
          );
        })}
      </div>

      {/* ===== ACTION BUTTONS - 80% 축소 ===== */}
      <div className="flex justify-center gap-2 pb-2">
        {/* Hint 버튼 */}
        <button
          onClick={handleHint}
          disabled={showResult || hintIndex >= 0}
          className="flex items-center gap-1.5 px-4 py-2 rounded-[8px] bg-[#B4D700] text-[#1B0440] text-[12px] font-bold disabled:opacity-40"
        >
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M9 21c0 .5.4 1 1 1h4c.6 0 1-.5 1-1v-1H9v1zm3-19C8.1 2 5 5.1 5 9c0 2.4 1.2 4.5 3 5.7V17c0 .5.4 1 1 1h6c.6 0 1-.5 1-1v-2.3c1.8-1.3 3-3.4 3-5.7 0-3.9-3.1-7-7-7z"/>
          </svg>
          Hint -50
        </button>
        {/* Reset 버튼 */}
        <button
          onClick={handleReset}
          disabled={showResult}
          className="flex items-center gap-1.5 px-4 py-2 rounded-[8px] bg-[#8A4AEF] text-white text-[12px] font-bold disabled:opacity-40"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
          </svg>
          Reset
        </button>
      </div>
    </div>
  );
}
