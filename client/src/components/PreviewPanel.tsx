import React from "react";
import type { AspectRatio, IThumbnail } from "../assets/assets";
import { DownloadIcon, ImageIcon, Loader2Icon } from "lucide-react";

const PreviewPanel = ({
  thumbnail,
  isLoading,
  aspectRatio,
}: {
  Thumbnail: IThumbnail | null;
  isLoading: boolean;
  aspectRatio: AspectRatio;
}) => {
  const asspectsClasses = {
    "16:9": "aspect-video",
    "1:1": "aspect-square",
    "9:16": "aspect-[9/16]",
  } as Record<AspectRatio, string>;
  const onDownload = () => {
    if (!thumbnail?.image_url) return;
    window.open(thumbnail.image_url, "_blank");
  };
  return (
    <div className="relative w-full  max-w-2xl mx-auto">
      <div
        className={`relative overflow-hidden ${asspectsClasses[aspectRatio]}`}>
        {isLoading && (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-black/25">
            <Loader2Icon className="size-8 animate-spin text-zinc-400" />
            <div>
              <p className="text-sm font-bold text-zinc-200">
                AI is creating your Thumbnail
              </p>
              <p className="mt-1 text-xs text-zinc-300">
                This may take 12 to 20 seconde
              </p>
            </div>
          </div>
        )}

        {/*Image Preview*/}
        {!isLoading && thumbnail?.image_url && (
          <div className="group relative h-full w-full">
            <img
              src={thumbnail?.image_url}
              alt=""
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex items-end justify-center bg-balck/10 
            opacity-0 group-hover:opacity-100">
              <button
                type="button"
                onClick={onDownload}
                className="mb-6 flex items-center rounded-md gap-2 px-5 py-2 
                text-xs font-medium transtion bg-balck/30
         ring-white/40 backdrop-blur-2xl hover:scale-105 active:scale-95"
              >
                <DownloadIcon className="size-8" />
                Download Thumbnail
              </button>
            </div>
          </div>
        )}
        {/*Empty State*/}
        {!isLoading && !thumbnail?.image_url && (
          <div
            className="absolute inset-0 m-2 flex items-center justify-center
             gap-4 rounded-lg  border-2 border-dashed border-white/20 bg-black/25"
          >
            <div className="max-sm:hidden flex size-20 items-center justify-center rounded-full
             bg-white/10">
              <ImageIcon className="size-10 text-white opacity-50" />
            </div>
            <div className="px-4 text-center">
              <p className="text-sm font-bold text-zinc-200">
                Generate your first thumnail
              </p>
              <p className="mt-1 text-xs text-zinc-300">
                Fill the form and click generate
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PreviewPanel;
