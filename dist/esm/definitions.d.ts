export interface developmentmodepluginPlugin {
    echo(options: {
        value: string;
    }): Promise<{
        value: string;
    }>;
    isDeveloperModeEnabled(): Promise<{
        developerMode: boolean;
    }>;
}
