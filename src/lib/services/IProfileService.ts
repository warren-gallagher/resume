import type { Profile } from "$lib//models/Profile";

export interface IProfileService {
    getProfile() : Promise<Profile>;
}
