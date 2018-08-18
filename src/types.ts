interface Statistic {
  count: number;
  distances: number[];
}

export type Results = { [sequence: string]: Statistic };
