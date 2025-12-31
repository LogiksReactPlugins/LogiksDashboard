import type { CardProps } from "../Dashboard.types.js";
import { tailwindCols, toColWidth } from "../utils.js";
import CardRenderer from "./CardRenderer.js";



export default function Card({ config, methods, sqlOpsUrls }: CardProps) {
    const w = config.width ?? 6;

    return (
        <div className={`col-span-12 md:col-span-6 ${tailwindCols[toColWidth(Number(w))] || "lg:col-span-4"}
        bg-white  border border-neutral-200 
        rounded-xl shadow-sm hover:shadow-md transition-all duration-300
         flex flex-col   h-max
  `}
        >
            <div className=" px-4 py-2 flex items-center justify-between border-b border-neutral-200 ">

                <h2 className="text-base font-semibold text-neutral-700 ">
                    {config.title}
                </h2>
            </div>

            <div className=" p-4 flex-1 " >
                <CardRenderer cardConfig={config} methods={methods ?? {}} sqlOpsUrls={sqlOpsUrls} />
            </div>
        </div>
    );
}
