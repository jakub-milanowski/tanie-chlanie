export type Response<T = unknown> = {
  count: number;
  next: null | string;
  previous: null | string;
  results: T;
};
