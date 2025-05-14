import { useState } from "react";
import DifficultySelector from "./components/DifficultySelector";
import GameBoard from "./components/GameBoard";
import GameModal from "./components/GameModal";
import { ScoreBoard } from "./components/ScoreBoard";
import { useMemoryGame } from "./hooks/use-memory-game";
import { formatTime } from "./lib/formatTime";
import { Difficulty } from "./types";
import { useTranslation } from "react-i18next";

function App() {
  const { i18n } = useTranslation();
  const [difficulty, setDifficulty] = useState<Difficulty | null>(null);

  const { cards, moves, time, gameCompleted, handleCardClick, resetGame } =
    useMemoryGame(difficulty || "easy");
  const formattedTime = formatTime(time);

  const handleRestart = () => {
    setDifficulty(null);
    resetGame();
  };

  if (!difficulty) {
    return (
      <div className="flex min-h-screen w-full flex-col bg-blue-200 p-2">
        <div className="flex justify-end gap-5">
          <button
            onClick={() => i18n.changeLanguage("pt")}
            className="cursor-pointer text-3xl hover:text-4xl"
          >
            🇧🇷
          </button>
          <button
            onClick={() => i18n.changeLanguage("en")}
            className="cursor-pointer text-3xl hover:text-4xl"
          >
            🇺🇸
          </button>
        </div>
        <DifficultySelector onSelect={setDifficulty} />
      </div>
    );
  }

  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center gap-4 bg-blue-200 p-4 sm:gap-8 sm:p-8">
      <ScoreBoard
        moves={moves}
        time={formattedTime}
        onRestart={handleRestart}
      />
      <GameBoard
        cards={cards}
        difficulty={difficulty}
        onCardClick={handleCardClick}
      />

      {gameCompleted && (
        <GameModal
          moves={moves}
          time={formattedTime}
          onRestart={handleRestart}
        />
      )}
    </div>
  );
}

export default App;
