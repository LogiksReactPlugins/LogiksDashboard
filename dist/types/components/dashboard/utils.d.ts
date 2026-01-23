import { ApiResponse } from './Dashboard.types';
type ColWidth = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
export declare const tailwindCols: Record<ColWidth, string>;
export declare function toColWidth(width: number | undefined): ColWidth;
export declare function normalizeNumber(result: any): {
    value: string | number;
    label?: never;
} | {
    value: any;
    label: any;
};
export declare function normalizeGridData(result: any): any[];
export declare function fetchDataByquery<T = any>(sqlOpsUrls: Record<string, any>, query: Record<string, any> | undefined, querid: string | undefined, refid?: string | undefined, module_refid?: string | undefined, filter?: Record<string, any>): Promise<ApiResponse<T>>;
export {};
//# sourceMappingURL=utils.d.ts.map