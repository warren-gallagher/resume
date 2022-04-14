import { writable } from "svelte/store";
import { ConfigService } from "./ConfigService";
import { ContactService } from "./ContactService";
import { ExperienceService } from "./ExperienceService";
import { ProfileService } from "./ProfileService";
import { TechnologyService } from "./TechnologyService";

export class Services {
    configService: ConfigService;
    contactService: ContactService;
    experienceService: ExperienceService;
    profileService: ProfileService;
    technologyService: TechnologyService;
}

let privateServices = new Services();
privateServices.configService = new ConfigService();
privateServices.contactService = new ContactService();
privateServices.experienceService = new ExperienceService();
privateServices.profileService = new ProfileService();
privateServices.technologyService = new TechnologyService();

export let services = writable<Services>(privateServices)