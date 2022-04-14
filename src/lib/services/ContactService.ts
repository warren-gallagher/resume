import type {Contact} from '$lib/models/Contact';
import type { Icon } from 'sveltestrap';
import type { IContactService } from './iContactService';

const contact: Contact = {
    name: "Warren Gallagher",
    pictureURL: "img/Warren_Gallagher_Sunglasses64x64.jpg",
    twitterURL: "https://twitter.com/warrengallagher",
    linkedInURL: "https://ca.linkedin.com/pub/warren-gallagher/0/3b/18a",
    githubURL: "https://github.com/warren-gallagher?tab=repositories/",
    emailURL: "mailto:warren@gallaghers.ca?subject=Resume Inquiry",
    emailAddr: "warren@gallaghers.ca",
    mobilePhone: "613.791.4987",
    mobilePhoneURL: "tel:613.791.4987"
};

export class ContactService implements IContactService {
    async getContact() : Promise<Contact> {
        return contact;
    }
}
