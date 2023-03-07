type GetReadonlyKeys<T> = {
  readonly [K in keyof T]: T[K]
}
