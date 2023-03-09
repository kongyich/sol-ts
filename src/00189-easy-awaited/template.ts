type MyAwaited<T extends PromiseLike<any>> =
  T extends PromiseLike<infer V> ? V extends PromiseLike<unknown> ?
  MyAwaited<V> : V : never
