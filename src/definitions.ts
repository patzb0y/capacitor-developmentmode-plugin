export interface developmentmodepluginPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
}
