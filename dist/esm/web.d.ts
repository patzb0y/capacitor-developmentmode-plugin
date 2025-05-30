import { WebPlugin } from '@capacitor/core';
import type { DevelopmentModePlugin } from './definitions';
export declare class DevelopmentModePluginWeb extends WebPlugin implements DevelopmentModePlugin {
    isDeveloperModeEnabled(): Promise<{
        developerMode: boolean;
    }>;
    echo(options: {
        value: string;
    }): Promise<{
        value: string;
    }>;
}
