import type { Technology } from "$lib/models/Technology";

export interface ITechnologyService {
    getTechnologies() : Promise<Technology[]>;
}
