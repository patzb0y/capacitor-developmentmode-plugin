export interface DevelopmentModePlugin {
    echo(options: {
        value: string;
    }): Promise<{
        value: string;
    }>;
    isDeveloperModeEnabled(): Promise<{
        developerMode: boolean;
    }>;
}
