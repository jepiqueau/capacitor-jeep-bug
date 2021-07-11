export interface JeepBugPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
}
