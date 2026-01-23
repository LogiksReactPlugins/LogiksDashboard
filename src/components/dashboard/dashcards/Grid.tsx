import { CardRendererProps, sqlQueryProps } from "@/components/dashboard/Dashboard.types";
import { useEffect, useState } from "react";
import { fetchDataByquery, normalizeGridData } from "../utils";

export default function GridCard({ cardConfig, methods = {}, sqlOpsUrls, module_refid }: CardRendererProps) {

  const { source } = cardConfig;
  const [data, setData] = useState<any>(0);



  useEffect(() => {
    const load = async () => {
      let result = {};


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

          result = res?.data?.data ?? res?.data ?? []

        } catch (err) {
          console.error("API fetch failed:", err);
        }

      }


      const normalized = normalizeGridData(result)

      setData(normalized);
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
      <table className="w-full text-sm ">
        <thead className="bg-neutral-100 ">
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
            <tr key={i} className="odd:bg-white even:bg-neutral-50">
              {keys.map(col => (
                <td key={col} className="p-3  ">
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
