import type { IFeature } from "../types";
import { SparkleIcon, ThumbsUpIcon, User2Icon } from "lucide-react";

export const featuresData: IFeature[] = [
  {
    icon: <SparkleIcon className="size-8 text-pink-500" />,
    title: "AI Thumbnail Ideas",
    description:
      "Generate eye-catching thumbnail concepts in seconds with smart layout and text analysis.",
  },
  {
    icon: <ThumbsUpIcon className="size-8 text-pink-500" />,
    title: "High-Click Designs",
    description:
      "Create bold, pixel-perfect thumbnails optimized for clicks and engagement.",
  },
  {
    icon: <User2Icon className="size-8 text-pink-500" />,
    title: "Creator Friendly",
    description:
      "Built for YouTubers, marketers, and designers—simple, fast, and customizable.",
  },
];
