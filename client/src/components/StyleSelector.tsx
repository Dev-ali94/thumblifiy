import React from "react";
import { thumbnailStyles, type ThumbnailStyle } from "../assets/assets";
import {
  CpuIcon,
  ImageIcon,
  PenIcon,
  SquareIcon,
  SparkleIcon,
  ChevronDownIcon,
} from "lucide-react";

const StyleSelector = ({
  value,
  onChange,
  isOpen,
  setIsOpen,
}: {
  value: ThumbnailStyle;
  onChange: (style: ThumbnailStyle) => void;
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}) => {
  const styleDescription: Record<ThumbnailStyle, string> = {
    "Bold & Graphic": "Bold colors, strong typography, eye-catching graphics.",
    "Minimalist": "Clean design with simple layout and spacing.",
    "Photorealistic": "Realistic images with natural lighting and detail.",
    "Illustrated": "Custom illustrations with playful, creative visuals.",
    "Futuristic": "Modern visuals with neon accents and tech aesthetics.",
  };

  const styleIcon: Record<ThumbnailStyle, React.ReactNode> = {
    "Bold and Graphic": <SparkleIcon className="h-4 w-4 text-white" />,
    "Minimalist": <SquareIcon className="h-4 w-4 text-white" />,
    "Photorealistic": <ImageIcon className="h-4 w-4 text-white" />,
    "Illustrated": <PenIcon className="h-4 w-4 text-white" />,
    "Futuristic": <CpuIcon className="h-4 w-4 text-white" />,
  };

  return (
    <div className="relative space-y-3 dark">
      <label className="block text-sm font-medium text-zinc-200">
        Thumbnail Style
      </label>

      {/* Trigger */}
      <button
        type="button"
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between rounded-md border
                   px-4 py-3 text-left bg-white/8 border-white/12
                   text-zinc-200 hover:bg-white/12 transition"
      >
        <div className="space-y-1">
          <div className="flex items-center gap-2 font-medium">
            {styleIcon[value]}
            <span>{value}</span>
          </div>
          <p className="text-xs text-zinc-400">
            {styleDescription[value]}
          </p>
        </div>

        <ChevronDownIcon
          className={`h-5 w-5 text-zinc-400 transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {/* Dropdown */}
      {isOpen && (
        <div
          className="absolute bottom-0  mt-1 z-50 w-full rounded-md
                     border border-white/12 bg-black/30
                     backdrop-blur-3xl shadow-lg"
        >
          {thumbnailStyles.map((style) => (
            <button
              key={style}
              type="button"
              onClick={() => {
                onChange(style);
                setIsOpen(false);
              }}
              className="flex w-full items-start gap-3 px-4 py-3 text-left
                         text-zinc-200 transition hover:bg-white/10">
              <div className="mt-0.5">{styleIcon[style]}</div>
              <div>
                <span className="font-medium">{style}</span>
                <p className="text-xs text-zinc-400">
                  {styleDescription[style]}
                </p>
              </div>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default StyleSelector;   