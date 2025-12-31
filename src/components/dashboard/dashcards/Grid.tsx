import { CardRendererProps } from "@/components/dashboard/Dashboard.types";
import { useEffect, useState } from "react";

export default function GridCard({ cardConfig, methods = {}, sqlOpsUrls }: CardRendererProps) {


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

    if (!Array.isArray(data)) {
        console.warn("GridCard expected array but got:", data);
        return <div>No table data</div>;
    }

    if (!data.length) return <div>No records found</div>;

    const keys = Object.keys(data[0] || {});

    return (
        <div className="w-full overflow-auto rounded-lg ">
            <table className="w-full text-sm border">
                <thead className="bg-neutral-100 dark:bg-neutral-800">
                    <tr>
                        {keys.map(k => (
                            <th key={k} className="p-3 text-left font-semibold capitalize">
                                {k.replace(/_/g, " ")}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {data.map((row: any, i: number) => (
                        <tr key={i} className="odd:bg-white even:bg-neutral-50 dark:odd:bg-neutral-900 dark:even:bg-neutral-800">
                            {keys.map(col => (
                                <td key={col} className="p-3 border-b dark:border-neutral-700">
                                    {row[col]}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
