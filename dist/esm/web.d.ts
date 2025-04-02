import { WebPlugin } from '@capacitor/core';
import type { developmentmodepluginPlugin } from './definitions';
export declare class developmentmodepluginWeb extends WebPlugin implements developmentmodepluginPlugin {
    isDeveloperModeEnabled(): Promise<{
        developerMode: boolean;
    }>;
    echo(options: {
        value: string;
    }): Promise<{
        value: string;
    }>;
}
