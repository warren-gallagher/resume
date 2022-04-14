import type {Config} from '$lib/models/Config';

export interface IConfigService {
   getConfig() : Promise<Config>;
}
