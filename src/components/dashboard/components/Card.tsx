import type { CardProps } from "../Dashboard.types.js";
import { tailwindCols, toColWidth } from "../utils.js";
import CardRenderer from "./CardRenderer.js";



export default function Card({ config, methods, sqlOpsUrls, module_refid }: CardProps) {
    const w = config.width ?? 6;

    return (
        <div className={`col-span-12 md:col-span-6 ${tailwindCols[toColWidth(Number(w))] || "lg:col-span-4"}
        bg-white  border border-neutral-200 
        rounded-md shadow-sm hover:shadow-md transition-all duration-300
         flex flex-col   h-max
  `}
        >
            <div className=" p-1 flex items-center justify-between border-neutral-200 ">

                <h2 className="text-base  text-neutral-700 text-xs ">
                    {config.title}
                </h2>
            </div>

            <div className=" p-1 flex-1 " >
                <CardRenderer module_refid={module_refid} cardConfig={config} methods={methods ?? {}} sqlOpsUrls={sqlOpsUrls} />
            </div>
        </div>
    );
}
