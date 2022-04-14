import type {Config} from '$lib/models/Config';
import type { IConfigService } from './IConfigService';

const config: Config = {
    copyright: "Copyright © Warren Gallagher 2022, all rights reserved.",
    deploymentURL: "https://resume.gallaghers.ca",
    repositoryURL: "https://github.com/warren-gallagher/sveltekit-resume/"
};

export class ConfigService implements IConfigService {
    async getConfig() : Promise<Config> {
        return config;
    }
}
