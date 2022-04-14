import type { Experience } from "$lib/models/Experience";

export interface IExperienceService {
    getExperience() : Promise<Experience[]>;
}
