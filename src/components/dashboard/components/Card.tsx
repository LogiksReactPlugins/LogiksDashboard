import { useState } from "react";
import type { CardProps } from "../Dashboard.types.js";
import { tailwindCols, toColWidth } from "../utils.js";
import CardRenderer from "./CardRenderer.js";
import { Eye, EyeOff } from "lucide-react";


export default function Card({ config, methods, sqlOpsUrls, module_refid, onClick }: CardProps) {
    const [showPopup, setShowPopup] = useState(false);
    const w = config.width ?? 6;
    const isNumber = config?.config?.type === "number";
    return (
        <div
            onClick={onClick}
            className={`
    ${isNumber ? "col-span-6" : "col-span-12"}
    md:col-span-6
    ${tailwindCols[toColWidth(Number(w))] || "lg:col-span-4"}
    bg-white border border-neutral-200
    rounded-md shadow-sm hover:shadow-md
    transition-all duration-300
    flex flex-col h-max cursor-pointer
  `}
        >
            {/* Old Code - PY */}
            {/* <div className=" p-1 flex items-center justify-between border-neutral-200 ">

                <h2 className="text-base  text-neutral-700 text-xs ">
                    {config.title}
                </h2>
            </div> */}

            {/* New Code */}
            <div className="p-1 flex items-center justify-between border-neutral-200 relative">

                <h2 className="text-neutral-700 text-xs">
                    {config.title}
                </h2>

                {config?.description && <div className="relative">
                    <button
                        onClick={() => setShowPopup((prev) => !prev)}
                        className="text-neutral-600 hover:text-black cursor-pointer"
                    >
                        {showPopup ? <EyeOff size={16}/> : <Eye size={16} /> }
                    </button>

                    {showPopup &&  (
                        <div className="absolute right-0 w-64 bg-white rounded-md shadow-lg p-2 z-50">
                            <p className="text-xs text-gray-700">
                                {config.description}
                            </p>
                        </div>
                    )}
                </div>}
            </div>

            <div className="p-1 flex-1 mb-5" >
                <CardRenderer module_refid={module_refid} cardConfig={config} methods={methods ?? {}} sqlOpsUrls={sqlOpsUrls} />
            </div>
        </div>
    );
}
