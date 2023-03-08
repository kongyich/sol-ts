
type MyPick<T extends Record<string, any>, P extends keyof T> = {
  [K in P]: T[K]
}
