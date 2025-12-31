import React, { useEffect, useState } from "react";
import Backdrop from "../components/Backdrop";
import { dummyThumbnails, type IThumbnail } from "../assets/assets";
import { Link, useNavigate } from "react-router-dom";
import { ArrowUpRightIcon, DownloadIcon, TrashIcon } from "lucide-react";

const MyGenerate = () => {
  const asspectRatioClasses: Record<string, string> = {
    "16:9": "aspect-video",
    "1:1": "aspect-square",
    "9:16": "aspect-[9/16]",
  };
  const [thumbnails, setThumbnails] = useState<IThumbnail[]>([]);
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const fetchThumbnails = async () => {
    setThumbnails(dummyThumbnails as unknown as IThumbnail[]);
    setIsLoading(false);
  };
  const handelDownload = (image_url: string) => {
    window.open(image_url, "_blank");
  };
  const handelDeleteThumbanil = async (id: string) => {};
  useEffect(() => {
    fetchThumbnails();
  }, []);
  return (
    <>
      <Backdrop />
      <div className="mt-32 min-h-screen  px-6 md:px-16 lg:px-24 xl:px-32">
        {/*Header*/}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-zinc-200">My Generation</h2>
          <p className="text-sm text-zinc-400 mt-1">
            View and manage all your AI generated Thumbnails
          </p>
        </div>
        {/*Loader*/}
        {isLoading && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className="rounded-2xl bg-white/8 border  border-white/10 animate-pulse h-[260px]"
              ></div>
            ))}
          </div>
        )}
        {/*If No Thumbnail*/}
        {!isLoading && thumbnails.length === 0 && (
          <div className="text-center py-30">
            <h2 className="text-lg font-semibold text-zinc-200">
              No Thumbnail Yet
            </h2>
            <p className="text-sm text-zinc-400 mt-2">
              Please Generate Youur First Thumbnail To See It Here
            </p>
          </div>
        )}
        {/*Thumbnails Grid*/}
        {!isLoading && thumbnails.length > 0 && (
          <div className="columns-1 sm:columns-2 lg:columns-3 2xl:columns-4 gap-8">
            {thumbnails.map((thumb: IThumbnail) => {
              const asspetClass =
                asspectRatioClasses[thumb.aspect_ratio || "16:9"];
              return (
                <div
                  onClick={() => navigate(`/generate/${thumb._id}`)}
                  key={thumb._id}
                  className="mb-8 group relative cursor-pointer rounded-2xl bg-white/8 
                  border border-white/10 transition shadow-xl break-inside-avoid"
                >
                  <div
                    className={`relative  overflow-hidden rounded-t-2xl ${asspetClass} bg-black`}
                  >
                    {thumb.image_url ? (
                      <img
                        src={thumb.image_url}
                        alt={thumb.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-sm text-zinc-400">
                        {thumb.isGenerating ? "Generating..." : "No Image"}
                      </div>
                    )}
                    {thumb.isGenerating && (
                      <div
                        className="absolute inset-0 bg-black/50 flex items-center justify-center 
                      text-sm font-medium text-white"
                      >
                        Generating...
                      </div>
                    )}
                  </div>
                  <div className="p-4 space-y-2">
                    <h3 className="text-sm font-semibold text-zinc-200 line-clamp-2">
                      {thumb.title}
                    </h3>
                    <div className="flex flex-wrap gap-2 text-xs text-zinc-400">
                      <span className="px-2 py-0.5 rounded bg-white/8">
                        {thumb.style}
                      </span>
                      <span className="px-2 py-0.5 rounded bg-white/8">
                        {thumb.color_scheme}
                      </span>
                      <span className="px-2 py-0.5 rounded bg-white/8">
                        {thumb.aspect_ratio}
                      </span>
                    </div>
                    <p className="text-sm text-zinc-500">
                      {new Date(thumb.createdAt!).toDateString()}
                    </p>
                  </div>
                  <div
                    onClick={(e) => e.stopPropagation}
                    className="absolute bottom-2 right-2 max-sm:flex sm:hidden group-hover:flex gap-1.5"
                  >
                    <TrashIcon
                      onClick={() => handelDeleteThumbanil(thumb._id)}
                      className="size-6 bg-black/50 p-1 rounded hover:bg-pink-600 transition-all"
                    />
                    <DownloadIcon
                      onClick={() => handelDownload(thumb.image_url!)}
                      className="size-6 bg-black/50 p-1 rounded hover:bg-pink-600 transition-all"
                    />
                    <Link
                      target="_blank"
                      to={`/preview?thumbnail_url=${thumb.image_url}&title=${thumb.title}`}
                    >
                      <ArrowUpRightIcon className="size-6 bg-black/50 p-1 rounded hover:bg-pink-600 transition-all" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
};

export default MyGenerate;
