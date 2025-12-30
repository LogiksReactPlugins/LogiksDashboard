
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
