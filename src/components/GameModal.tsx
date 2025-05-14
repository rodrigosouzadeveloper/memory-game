import { useTranslation } from "react-i18next";

type GameModalProps = {
  moves: number;
  time: string;
  onRestart: () => void;
};

function GameModal({ moves, time, onRestart }: GameModalProps) {
  const { t } = useTranslation();
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm">
      <div className="max-w-sm rounded-xl bg-white p-6 text-center sm:p-8">
        <h2 className="mb-4 text-2xl font-bold sm:text-3xl">
          {t("congratulations")}
        </h2>
        <p className="mb-6 text-lg">
          {t("game_completed_line")} <br />
          <b>
            {moves} {t("moves")}
          </b>{" "}
          {t("and")} <b>{time}</b>!
        </p>
        <button
          onClick={onRestart}
          className="rounded-lg bg-pink px-6 py-3 font-medium text-white transition-opacity hover:opacity-90"
        >
          {t("play_again")}
        </button>
      </div>
    </div>
  );
}

export default GameModal;
