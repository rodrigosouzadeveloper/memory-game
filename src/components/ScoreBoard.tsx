import { ANIMATIONS } from "@/constants";
import { cn } from "@/lib/utils";
import { Clock, LucideIcon, MousePointerClick, RotateCcw } from "lucide-react";
import { motion } from "motion/react";
import { useTranslation } from "react-i18next";

type ScoreBoardProps = {
  moves: number;
  time: string;
  onRestart: () => void;
};

type ScoreItemProps = {
  icon: LucideIcon;
  label: string;
  value: string | number;
  color: string;
};

const SCORE_ITEMS = [
  {
    icon: MousePointerClick,
    label: "moves",
    color: "text-yellow-400",
  },
  {
    icon: Clock,
    label: "time",
    color: "text-blue-400",
  },
] as const;

const ScoreItem = ({ icon: Icon, label, value, color }: ScoreItemProps) => (
  <div className="flex w-[130px] items-center justify-center gap-2 text-lg text-white">
    <Icon className={cn("h-5 w-5", color)} />
    {label}:<span className="min-w-[16px]">{value}</span>
  </div>
);

export function ScoreBoard({ moves, time, onRestart }: ScoreBoardProps) {
  const { t } = useTranslation();
  return (
    <motion.div
      {...ANIMATIONS.fadeInDown}
      className="flex w-full flex-col items-center justify-center gap-4 rounded-xl bg-blue-100 p-4 sm:w-auto sm:flex-row sm:gap-8"
    >
      {SCORE_ITEMS.map(({ icon, label, color }) => (
        <ScoreItem
          key={label}
          icon={icon}
          label={t(label)}
          color={color}
          value={label === "time" ? time : moves}
        />
      ))}

      <button
        onClick={onRestart}
        className="group flex items-center gap-2 px-2 text-base text-white hover:text-pink"
      >
        <RotateCcw className="h-4 w-4 transition-transform duration-500 group-hover:-rotate-180 sm:h-5 sm:w-5" />
        {t("restart")}
      </button>
    </motion.div>
  );
}
