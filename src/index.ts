import { assert } from "@stefanprobst/assert";

export function range(start: number, end: number): Array<number> {
  assert(end >= start);

  return Array(end - start + 1)
    .fill(null)
    .map((_, i) => {
      return i + start;
    });
}

export function times(n: number): Array<null> {
  return Array(n).fill(null);
}
