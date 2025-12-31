import Card from "./components/Card.js";
import type { DashboardProps } from "./Dashboard.types.js";
import { Settings } from "lucide-react";
export default function Dashboard({ dashboardJson, methods }: DashboardProps) {

  return (
    <div className="p-5 space-y-6">

      {/* Dashboard Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold tracking-tight text-neutral-800 dark:text-neutral-100">
          {dashboardJson.title}
        </h1>
        <button
          className="
            p-2 rounded-lg border border-neutral-200 dark:border-neutral-700
            hover:bg-neutral-100 dark:hover:bg-neutral-800
            transition-all duration-200
          "
          onClick={() => console.log("Open Settings")}
        >
          <Settings size={20} className="text-neutral-600 dark:text-neutral-200" />
        </button>
      </div>

      {/* Cards Grid */}

      <div className="grid grid-cols-12 gap-5 auto-rows-min">
        {Object.values(dashboardJson.cards).map((card, i) => (
          <Card key={i} config={card} methods={methods || {}} sqlOpsUrls={dashboardJson.endPoints} />
        ))}
      </div>
    </div>


  );
}
