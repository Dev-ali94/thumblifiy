import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { colorSchemes, dummyThumbnails, type AspectRatio, type IThumbnail, type ThumbnailStyle } from "../assets/assets";
import Backdrop from "../components/Backdrop";
import AspectRatioSelector from "../components/AspectRatioSelector";
import StyleSelector from "../components/StyleSelector";
import ColorSelector from "../components/ColorSelector";
import PreviewPanel from "../components/PreviewPanel";
const Generates = () => {
  const { id } = useParams();
  const [title, setTitle] = useState("");
  const [additionalDetails, setAdditionalDetails] = useState("");
  const [tumbnail, setTumbnail] = useState<IThumbnail | null>(null);
  const [loading, setIsLoading] = useState(false);
  const [aspectRatio,setAspectRatio] = useState<AspectRatio>("16:9")
  const [colorSchemId,setColorSchemeId] = useState<string>(colorSchemes[0].id)
  const [style,setStyle] = useState<ThumbnailStyle>("Bold and Graphics")
  const [styleDropDown,setStyleDropDown] = useState(false)
  const handelGenerate = async () => {

  }
  const fetchThumbnails = async () => {
if (id) {
  const thumbnail : any = dummyThumbnails.find((thumbnail)=> thumbnail._id === id)
  setTumbnail(thumbnail)
  setAdditionalDetails(thumbnail.user_prompt)
  setTitle(thumbnail.title)
  setColorSchemeId(thumbnail.color_scheme)
  setAspectRatio(thumbnail.aspect_ratio)
  setStyle(thumbnail.style)
  setIsLoading(false)
}
  }
  useEffect(()=>{
    if (id) {
      fetchThumbnails()
    }
  },[id])
  return (
    <>
      <Backdrop />
      <div className="pt-24 min-h-screen">
        <main className="max-w-6xl mx-auto px-4  sm:px-6 lg:px-8 py-8 pb-28 lg:pb-8">
          <div className="grid lg:grid-cols-[400px_1fr] gap-8 items-start">
            {/*Left Panel*/}
            <div className={`space-y-6 ${id && "pointer-events-none"}`}>
              <div className="p-6 rounded-2xl bg-white/8 border border-white/12 shadow-lg space-y-6">
                <div>
                  <h2 className="text-xl font-bold text-zinc-100 mb-1">
                    Create Your Tumbnail{" "}
                  </h2>
                  <p className="text-sm text-zinc-400">
                    Explain Your vision and let AI to build this.
                  </p>
                </div>
                <div className="space-y-10">
                  {/*Title Input*/}
                  <div className="space-y-3">
                    <label className="block text-sm font-medium">
                      Title and Topic
                    </label>
                    <input
                      onChange={(e) => setTitle(e.target.value)}
                      value={title}
                      placeholder="e.g , 10 Tips for Better Sleep"
                      className="w-full px-4 py-2 rounded-lg border border-white/12 bg-black/20 
                        text-zinc-100 placeholder:text-zinc-400  focus:outline-none focus:ring-2 focus:ring-pink-500"
                    />
                    <div className="flex justify-end">
                      <span className="text-xs text-zinc-500">
                        {title.length}/100
                      </span>
                    </div>
                  </div>
                  {/*aspect ratio selector*/}
                  <AspectRatioSelector  value={aspectRatio} onChange={setAspectRatio}/>
                   {/*style selector*/}
                   <StyleSelector value={style} onChange={setStyle} isOpen={styleDropDown} setIsOpen={setStyleDropDown}/>
                    {/*colur selector*/}
                    <ColorSelector value={colorSchemId} onChange={setColorSchemeId} />
                     {/*Detail*/}
                     <div className="space-y-4">
                     <label className="block text-sm font-medium">
                      Additional Prompot <span className="text-sm tex-zinc-600">(optional)</span>
                    </label>
                     <textarea
                     rows={3}
                      onChange={(e) => setAdditionalDetails(e.target.value)}
                      value={additionalDetails}
                      placeholder="Add specific element,mood or style or prefreance..."
                      className="w-full px-4 py-3 rounded-lg border border-white/12 bg-black/20 
                        text-zinc-100 placeholder:text-zinc-400 resize-none  focus:outline-none focus:ring-2 focus:ring-pink-500"
                    />
                     </div>
                </div>
                {/*Button*/}
                {!id && (
                  <button
                  onClick={handelGenerate}
                    className="text-sm w-full py-2.5 rounded-xl font-medium 
            bg-linear-to-b from-pink-500 to-pink-600 hover:from-pink-700 disabled:cursor-not-allowed transition-colors"
                  >
                    {loading ? "Generate...." : "Generate Thumbnail"}
                  </button>
                )}
              </div>
            </div>
            {/*Right Panel*/}
            <div className="p-6 rounded-2xl bg-white/20 border  border-white/25 shadow-lg">
              <div>
                <h2 className="text-xl font-semibold text-zinc-600 mb-4">Preview</h2>
                <PreviewPanel thumbnail={tumbnail} isloading={loading}aspectRatio={aspectRatio}/>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default Generates;
