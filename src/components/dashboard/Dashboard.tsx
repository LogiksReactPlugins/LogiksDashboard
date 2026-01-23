import Card from "./components/Card.js";
import type { DashboardProps } from "./Dashboard.types.js";
import { Settings } from "lucide-react";
export default function Dashboard({ dashboardJson, methods }: DashboardProps) {

  return (
    <div className="px-4 py-2 space-y-1">

      {/* Dashboard Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold tracking-tight text-neutral-800">
          {dashboardJson.title}
        </h1>
        <button
          className="
            p-2 rounded-lg border border-neutral-200 
            hover:bg-neutral-100 
            transition-all duration-200
          "
          onClick={() => console.log("Open Settings")}
        >
          <Settings size={20} className="text-neutral-600 " />
        </button>
      </div>

      {/* Cards Grid */}

      <div className="grid grid-cols-12 gap-1 auto-rows-min">
        {Object.values(dashboardJson.cards).map((card, i) => (
          <Card module_refid={dashboardJson?.module_refid} key={i} config={card} methods={methods || {}} sqlOpsUrls={dashboardJson.endPoints} />
        ))}
      </div>
    </div>


  );
}
