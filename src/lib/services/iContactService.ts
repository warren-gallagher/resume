import type {Contact} from '$lib/models/Contact';

export interface IContactService {
    getContact() : Promise<Contact>;
}
