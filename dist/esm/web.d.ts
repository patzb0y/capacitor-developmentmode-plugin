import { WebPlugin } from '@capacitor/core';
import type { DevelopmentModePlugin } from './definitions';
export declare class developmentmodepluginWeb extends WebPlugin implements DevelopmentModePlugin {
    isDeveloperModeEnabled(): Promise<{
        developerMode: boolean;
    }>;
    echo(options: {
        value: string;
    }): Promise<{
        value: string;
    }>;
}
