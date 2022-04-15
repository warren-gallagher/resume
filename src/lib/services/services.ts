import { writable } from "svelte/store";
import { ConfigService } from "./ConfigService";
import { ContactService } from "./ContactService";
import { ExperienceService } from "./ExperienceService";
import { ProfileService } from "./ProfileService";
import { TechnologyService } from "./TechnologyService";
import type { IConfigService } from "./IConfigService";
import type { IContactService } from "./iContactService";
import type { IExperienceService } from "./IExperienceService";
import type { IProfileService } from "./IProfileService";
import type { ITechnologyService } from "./ITechnologyService";

export class Services {
    configService: IConfigService;
    contactService: IContactService;
    experienceService: IExperienceService;
    profileService: IProfileService;
    technologyService: ITechnologyService;
}

let privateServices = new Services();
let servicesInitialized = false;
function initializeServices() {
    if( servicesInitialized ) {
        return;
    }
    privateServices.configService = new ConfigService();
    privateServices.contactService = new ContactService();
    privateServices.experienceService = new ExperienceService();
    privateServices.profileService = new ProfileService();
    privateServices.technologyService = new TechnologyService();   
    servicesInitialized = true; 
}
initializeServices();

export let services = writable<Services>(privateServices)