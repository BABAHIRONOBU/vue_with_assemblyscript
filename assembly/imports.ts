export declare namespace console {
  // @ts-ignore
  @external('console', 'logi')
  export function logi(int: i32): void;

  // @ts-ignore
  @external('console', 'logf')
  export function logf(float: f64): void;

  // @ts-ignore
  @external('console', 'logs')
  export function logs(str: string): void;
}
