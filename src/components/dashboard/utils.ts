import { ApiResponse } from "./Dashboard.types";

type ColWidth = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
export const tailwindCols: Record<ColWidth, string> = {
  12: "lg:col-span-12",
  11: "lg:col-span-11",
  10: "lg:col-span-10",
  9: "lg:col-span-9",
  8: "lg:col-span-8",
  7: "lg:col-span-7",
  6: "lg:col-span-6",
  5: "lg:col-span-5",
  4: "lg:col-span-4",
  3: "lg:col-span-3",
  2: "lg:col-span-2",
  1: "lg:col-span-1"
};

export function toColWidth(width: number | undefined): ColWidth {
  const allowed: ColWidth[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  return allowed.includes(width as ColWidth) ? (width as ColWidth) : 6;
}

export function normalizeNumber(result: any) {

  // direct number or string
  if (typeof result === "number" || typeof result === "string") {
    return { value: result };
  }

  // empty or invalid
  if (!result) return { value: "--" };

  // array response
  if (Array.isArray(result) && result.length > 0) {
    const row = result[0];

    // case: { title, value }
    if (row.value !== undefined) {
      return {
        value: row.value,
        label: row.title ?? row.name ?? undefined
      };
    }

    // auto detect first numeric key for value
    const key = Object.keys(row).find(k => typeof row[k] === "number");
    if (key) return { value: row[key], label: row.category ?? row.title };
  }

  // object with any numeric property
  if (typeof result === "object") {
    const key = Object.keys(result).find(k => typeof result[k] === "number");
    if (key) return { value: result[key], label: result.label ?? result.title };
  }

  return { value: "--" };
}

export function normalizeGridData(result: any) {
  if (Array.isArray(result) && result.length > 0) return result;
  if (typeof result === "object" && result !== null) return [result];

  return [];
}

export async function fetchDataByquery<T = any>(
  sqlOpsUrls: Record<string, any>,
  query: Record<string, any> | undefined,
  querid: string | undefined,
  refid: string | undefined = undefined,
  module_refid: string | undefined = undefined,
  filter: Record<string, any> = {}
): Promise<ApiResponse<T>> {
  try {

    let queryId = querid;

    if (!queryId) {

      const resQueryId = await fetch(sqlOpsUrls.baseURL + sqlOpsUrls.registerQuery, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${sqlOpsUrls?.accessToken}`
        },
        body: JSON.stringify({
          query: query, "srcid": module_refid
        })
      })
        .then(res => res.json());

      queryId = resQueryId.data.queryid;
    }

    const res = await fetch(sqlOpsUrls.baseURL + sqlOpsUrls.runQuery, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${sqlOpsUrls?.accessToken}`
      },
      body: JSON.stringify({

        "queryid": queryId,
        "filter": filter,
        "refid": refid,
        "page": 0,
        "limit": 10000
      })

    }).then(res => res.json());



    return res
  } catch (error) {
    throw error;
  }
}


