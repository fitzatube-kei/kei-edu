# Korean Learning Game - Icon & Emoji Inventory

## 1. SVG 아이콘 파일 (public/)

| 아이콘 | 파일명 | 용도 설명 |
|--------|--------|-----------|
| KEI EDU 로고 | `public/logo.svg` | 메인 브랜드 로고 (K 형태의 노드 아이콘 + KEI EDU 텍스트) |
| KEI 아이콘 | `public/logo-icon.svg` | 파비콘/앱 아이콘용 K 형태 아이콘 |

---

## 2. 이미지 파일 (public/images/)

| 파일명 | 용도 설명 |
|--------|-----------|
| `kei_logo001.png` | 앱 아이콘/파비콘 (layout.tsx에서 사용) |
| `kei_logo002.png` | 대체 로고 이미지 |
| `IMG_7746.PNG` | 이미지 파일 |

---

## 3. 커스텀 3D 아이콘 컴포넌트 (Icon3D.tsx)

총 40개의 SVG 기반 3D 스타일 아이콘 컴포넌트:

### 상태 아이콘
| 아이콘 | 컴포넌트명 | 용도 설명 |
|--------|------------|-----------|
| 자물쇠 (잠김) | `LockIcon` | 잠긴 컨텐츠/레벨 표시 |
| 자물쇠 (열림) | `UnlockIcon` | 해금된 컨텐츠 표시 |
| 체크마크 | `CheckIcon` | 완료 상태 표시 |

### 보상/성취 아이콘
| 아이콘 | 컴포넌트명 | 용도 설명 |
|--------|------------|-----------|
| 별 | `StarIcon` | 평점, 점수, 레벨 표시 |
| 왕관 | `CrownIcon` | 프리미엄 컨텐츠 표시 |
| 트로피 | `TrophyIcon` | 업적, 성취 표시 |
| 불꽃 | `FireIcon` | 스트릭, 연속 학습 표시 |

### 미디어/액션 아이콘
| 아이콘 | 컴포넌트명 | 용도 설명 |
|--------|------------|-----------|
| 스피커 | `SpeakerIcon` | 음성 재생 버튼 |
| 재생 | `PlayIcon` | 미디어 재생 |
| 정지 | `StopIcon` | 미디어 정지 |

### 학습 관련 아이콘
| 아이콘 | 컴포넌트명 | 용도 설명 |
|--------|------------|-----------|
| 책 | `BookIcon` | 학습 컨텐츠, 스토리 |
| 전구 | `LightbulbIcon` | 힌트, 팁 표시 |
| 한글 | `HangulLetterIcon` | 한글 글자 표시 (커스텀 글자 지원) |
| 스크롤 | `ScrollIcon` | 역사/문화 컨텐츠 |
| 퍼즐 | `PuzzleIcon` | 퍼즐/게임 섹션 |

### 네비게이션 아이콘
| 아이콘 | 컴포넌트명 | 용도 설명 |
|--------|------------|-----------|
| 홈 | `HomeIcon` | 홈 화면 이동 |
| 로켓 | `RocketIcon` | 시작하기, 진행 |
| 화살표 | `ArrowRightIcon` | 다음 페이지 이동 |
| 닫기 | `CloseIcon` | 모달/창 닫기 |
| 새로고침 | `RefreshIcon` | 다시 시작 |
| 설정 | `SettingsIcon` | 설정 메뉴 |

### 한국 문화 아이콘
| 아이콘 | 컴포넌트명 | 용도 설명 |
|--------|------------|-----------|
| 한글이 | `HangeuliIcon` | 마스코트 캐릭터 |
| 사찰 | `TempleIcon` | 한국 전통 건축 |
| 한복 | `HanbokIcon` | 전통 의상 |
| 그릇 | `BowlIcon` | 한국 음식 |
| 산 | `MountainIcon` | 한국 자연 |
| 검 | `SwordIcon` | 역사/무예 |
| 팔레트 | `PaletteIcon` | 예술/미술 |
| 지도핀 | `MapPinIcon` | 위치/장소 |

### 여행 아이콘
| 아이콘 | 컴포넌트명 | 용도 설명 |
|--------|------------|-----------|
| 비행기 | `AirplaneIcon` | 공항, 여행 에피소드 |
| 커피 | `CoffeeIcon` | 카페 에피소드 |
| 음식그릇 | `FoodBowlIcon` | 음식점 에피소드 |
| 호텔 | `HotelIcon` | 숙박 에피소드 |

### 기타 아이콘
| 아이콘 | 컴포넌트명 | 용도 설명 |
|--------|------------|-----------|
| 엄지척 | `ThumbsUpIcon` | 좋아요, 긍정 피드백 |
| 파티 | `PartyIcon` | 축하, 완료 |
| 하트 | `HeartIcon` | 좋아요, 관심 |
| 물음표 | `QuestionIcon` | 도움말, FAQ |
| 언어 | `LanguageIcon` | 언어 선택 |
| 음악 | `MusicIcon` | K-pop 관련 컨텐츠 |

---

## 4. 유니코드 이모지

### 국기 이모지 (언어 선택)
| 이모지 | 사용 위치 | 용도 설명 |
|--------|-----------|-----------|
| 🇺🇸 | `src/lib/i18n.ts` | 영어 선택 |
| 🇪🇸 | `src/lib/i18n.ts` | 스페인어 선택 |
| 🇹🇭 | `src/lib/i18n.ts` | 태국어 선택 |
| 🇯🇵 | `src/lib/i18n.ts` | 일본어 선택 |
| 🇻🇳 | `src/lib/i18n.ts` | 베트남어 선택 |
| 🇨🇳 | `src/lib/i18n.ts` | 중국어 선택 |

### 캐릭터 이모지 (한글이 마스코트)
| 이모지 | 사용 위치 | 용도 설명 |
|--------|-----------|-----------|
| 😺 | `src/components/character/Hangeuli.tsx` | 기본 표정 |
| 😸 | `src/components/character/Hangeuli.tsx` | 행복한 표정 |
| 😿 | `src/components/character/Hangeuli.tsx` | 슬픈 표정 |
| 😻 | `src/components/character/Hangeuli.tsx` | 흥분한 표정 |
| 🤔 | `src/components/character/Hangeuli.tsx` | 생각하는 표정 |
| 🎉 | `src/components/character/Hangeuli.tsx` | 축하 표정 |
| 🐱 | `src/data/story/season1.ts` | 한글이 아바타 |

### UI/UX 이모지
| 이모지 | 사용 위치 | 용도 설명 |
|--------|-----------|-----------|
| 💜 | `src/app/page.tsx` | 환영 메시지 (다국어) |
| 👋 | `src/app/main/page.tsx` | 인사/환영 애니메이션 |
| 🔍 | `src/app/faq/page.tsx` | 검색/FAQ |
| ❓ | `src/app/contact/page.tsx` | 질문/도움말 |
| 📧 | `src/app/contact/page.tsx` | 이메일/연락처 |
| 🧩 | `src/app/main/page.tsx`, `src/app/puzzle/page.tsx` | 퍼즐/워드빌더 |

### 게임/학습 이모지
| 이모지 | 사용 위치 | 용도 설명 |
|--------|-----------|-----------|
| 💡 | `src/components/game/QuizGame.tsx`, `FillInBlankGame.tsx`, `LevelComplete.tsx` | 힌트 표시 |
| ⭐ | `src/components/game/WordBuilder.tsx` | 점수 표시 |
| ✨ | `src/components/game/WordBuilder.tsx` | 파티클 효과 |
| 🔊 | `src/components/ui/SpeakButton.tsx`, `AudioPlayer.tsx`, `LevelComplete.tsx` | 음성 재생 |
| 🔇 | `src/components/game/AudioPlayer.tsx` | 음소거 |
| ✓ | `src/components/game/MatchingGame.tsx`, `LevelComplete.tsx` | 정답 표시 |
| ✗ | `src/components/game/LevelComplete.tsx` | 오답 표시 |
| 🔄 | `src/app/hangul/page.tsx`, `history/[level]/page.tsx`, `LevelComplete.tsx` | 다시하기 |

### 속도 조절 이모지
| 이모지 | 사용 위치 | 용도 설명 |
|--------|-----------|-----------|
| 🐢 | `src/components/ui/SpeakButton.tsx` | 느린 속도 |
| 🏃 | `src/components/ui/SpeakButton.tsx` | 보통 속도 |
| ⚡ | `src/components/ui/SpeakButton.tsx` | 빠른 속도 |

### 스토리 피드백 이모지
| 이모지 | 사용 위치 | 용도 설명 |
|--------|-----------|-----------|
| 🌟 | `src/components/story/StoryPlayer.tsx` | 완벽한 답변 |
| 👍 | `src/components/story/StoryPlayer.tsx` | 좋은 답변 |
| 😅 | `src/components/story/StoryPlayer.tsx` | 어색한 답변 |
| 📚 | `src/components/story/StoryPlayer.tsx`, `src/app/puzzle/page.tsx` | 어휘/학습 |
| 🔒 | `src/components/story/EpisodeCard.tsx` | 잠긴 에피소드 |

### 개발자 패널 이모지
| 이모지 | 사용 위치 | 용도 설명 |
|--------|-----------|-----------|
| 🔧 | `src/components/dev/DevPanel.tsx`, `src/components/layout/Header.tsx` | 개발 모드 |
| 💎 | `src/components/dev/DevPanel.tsx` | 프리미엄 기능 |
| 🔓 | `src/components/dev/DevPanel.tsx` | 전체 해금 |
| ⚠️ | `src/components/dev/DevPanel.tsx` | 경고 |
| 🗑️ | `src/components/dev/DevPanel.tsx` | 삭제 |
| ✕ | `src/components/dev/DevPanel.tsx` | 닫기 |

### 스토리 에피소드 아이콘
| 이모지 | 에피소드 | 용도 설명 |
|--------|----------|-----------|
| ✈️ | Season 1 - Airport | 공항 도착 |
| 🏨 | Season 1 - Hotel | 호텔 체크인 |
| ☕ | Season 1 - Cafe | 카페 주문 |
| 🚇 | Season 1 - Subway | 지하철 이용 |
| 🍢 | Season 1 - Street Food | 길거리 음식 |
| 🛍️ | Season 1 - Shopping | 쇼핑 |
| 🗺️ | Season 1 - Directions | 길 찾기 |
| 🛫 | Season 1 - Departure | 출국 |
| 🚄 | Season 2 - KTX | KTX 기차 |
| 🏖️ | Season 2 - Beach | 해변 |
| 🦐 | Season 2 - Seafood | 해산물 |
| 🎨 | Season 2 - Art | 예술/미술관 |
| 🛕 | Season 2 - Temple | 사찰 방문 |
| 🌙 | Season 2 - Night Market | 야시장 |
| 🎆 | Season 2 - Festival | 축제 |
| 👋 | Season 2 - Farewell | 작별 인사 |
| 🏪 | Season 3 - Convenience Store | 편의점 |
| 💊 | Season 3 - Pharmacy | 약국 |
| 💇 | Season 3 - Hair Salon | 미용실 |
| 📱 | Season 3 - Phone Store | 폰 매장 |
| 🧺 | Season 3 - Laundry | 세탁소 |
| 🏦 | Season 3 - Bank | 은행 |
| 📮 | Season 3 - Post Office | 우체국 |
| 🏝️ | Season 3-6 - Jeju Island | 제주도 |
| ✈️ | Season 4-7 - Airport to Jeju | 공항 (제주행) |
| 🎤 | Season 4-7 - K-pop Concert | K-pop 콘서트 |
| 🎓 | Season 4-7 - University | 대학교 |
| 💼 | Season 4-7 - Office | 회사/직장 |
| 🥟 | Season 8-11 - Market | 시장 |
| 💕 | Season 8-11 - Dating | 카페 데이트 |
| 🧧 | Season 8-11 - Holiday | 명절 |
| 💊 | Season 8-11 - Pharmacy | 약국 방문 |
| 🏠 | Season 12-15 - Real Estate | 부동산 |
| 🚄 | Season 12-15 - KTX to Busan | 부산행 KTX |
| 📺 | Season 12-15 - K-drama | 집에서 드라마 |
| 🤝 | Season 12-15 - Business | 비즈니스 미팅 |

### 퍼즐 카테고리 아이콘
| 이모지 | 사용 위치 | 용도 설명 |
|--------|-----------|-----------|
| 🌱 | `src/data/puzzle/beginner.ts` | 초급 레벨 |
| 📚 | `src/data/puzzle/intermediate.ts` | 중급 레벨 |
| 🎓 | `src/data/puzzle/advanced.ts` | 고급 레벨 |

### 기타 UI 이모지
| 이모지 | 사용 위치 | 용도 설명 |
|--------|-----------|-----------|
| 🥔 | `src/app/main/page.tsx` | 예시 단어 (감자) |
| ⏹ | `src/components/game/LevelComplete.tsx` | 정지 버튼 |
| ★ | `src/components/icons/Icon3D.tsx`, `src/app/puzzle/[category]/page.tsx` | 별점/레벨 |
| → | 여러 파일 | 다음 페이지 화살표 |
| 🎯 | `src/app/puzzle/page.tsx` | 레벨 수 표시 |
| 👨‍✈️ | `src/data/story/season1.ts` | 택시 기사 아바타 |

---

## 5. 요약 통계

| 카테고리 | 개수 |
|----------|------|
| SVG 파일 | 2개 |
| 이미지 파일 | 3개 |
| Icon3D 컴포넌트 | 40개 |
| 유니코드 이모지 | 약 70종 |

---

*Generated: 2026-02-12*
