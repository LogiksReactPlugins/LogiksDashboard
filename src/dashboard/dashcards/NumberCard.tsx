import { useEffect, useState } from "react";
import { CardRendererProps } from "@/dashboard/Dashboard.types";



export default function NumberCard({ cardConfig, methods = {}, sqlOpsUrls }: CardRendererProps) {

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

          const resQueryId = await fetch(sqlOpsUrls.baseURL + sqlOpsUrls.registerQuery, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "Authorization": `Bearer ${sqlOpsUrls?.accessToken}`
            },
            body: JSON.stringify({
              query: {
                cols: source.cols,
                table: source.table,

              }
            })
          })
            .then(res => res.json());


          if (!resQueryId.queryid) {
            console.log("queryid not generated");
            return

          }

          const res = await fetch(sqlOpsUrls.baseURL + sqlOpsUrls.runQuery, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "Authorization": `Bearer ${sqlOpsUrls?.accessToken}`
            },
            body: JSON.stringify({

              "queryid": resQueryId.queryid,
              "filter": {

              }
            })

          }).then(res => res.json());

          result = res?.data?.data ?? res?.data ?? {}

        } catch (err) {
          console.error("API fetch failed:", err);
        }

      }
      console.log("CardRenderer result", result)
      setData(result); // <-- only normalized data
    };

    load();
  }, [JSON.stringify(source)]);


  const isValid =
    typeof data === "number" ||
    typeof data === "string";

  return (

    <div className="
      flex flex-col justify-center items-start gap-2 

    
    ">
      {/* <span className="text-xs uppercase opacity-80">
        {config.title}
      </span> */}
      <span className="text-3xl font-bold tracking-tight">
        {isValid ? data : "--"}
      </span>
    </div>
  );
}
