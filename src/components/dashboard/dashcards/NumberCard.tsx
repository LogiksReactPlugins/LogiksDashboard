import { useEffect, useState } from "react";
import { CardRendererProps, sqlQueryProps } from "@/components/dashboard/Dashboard.types";
import { fetchDataByquery, normalizeNumber } from "../utils";



export default function NumberCard({ cardConfig, methods = {}, sqlOpsUrls,module_refid }: CardRendererProps) {

  const { source } = cardConfig;

  const [data, setData] = useState<any>(0);

  useEffect(() => {
    const load = async () => {
      let result = {};
      console.log("source type");

      if (source?.type === "method") {
        const fn = methods[source.method as keyof typeof methods];
        result = fn ? await Promise.resolve(fn()) : {};


      } else if (source?.type === "api" && source.url) {
        result = await fetch(source.url, {
          method: source.method || "GET",
          headers: source.headers || {},
        }).then(r => r.json());
      } else if (source?.type === "sql") {

        if (!sqlOpsUrls) {
          console.error("SQL source requires formJson.endPoints but it is missing");
          return;
        }

        try {
          let query: sqlQueryProps | undefined;
          if (!source.queryid) {
            query = {
              table: source.table,
              cols: source.columns ?? source.cols,
              where: source.where ?? {},
              orderby: source.orderby ?? "",
              groupby: source.groupby ?? ""
            };
          }

          const res = await fetchDataByquery(sqlOpsUrls, query, source?.queryid, undefined, module_refid);
          result = res?.data?.data ?? res?.data ?? {}

        } catch (err) {
          console.error("API fetch failed:", err);
        }

      }
      console.log("CardRenderer result", result)

      const normalized = normalizeNumber(result);
      setData(normalized); // <-- only normalized data
    };

    load();
  }, [JSON.stringify(source)]);




  return (

    <div className="flex flex-col justify-center">
      {/* <span className="text-xs uppercase opacity-80">
        {config.title}
      </span> */}
      <span className="text-3xl text-center tracking-tight">
        {data?.value ?? "--"}
      </span>
    </div>
  );
}
