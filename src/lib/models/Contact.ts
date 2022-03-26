export type Contact = {
    name: string;
    pictureURL: string;
    twitterURL: string;
    linkedInURL: string;
    githubURL: string;
    emailURL: string;
    emailAddr: string;
    mobilePhone: string;
};

const contact: Contact = {
    name: "Warren Gallagher",
    pictureURL: "img/Warren_Gallagher_Sunglasses64x64.jpg",
    twitterURL: "https://twitter.com/warrengallagher",
    linkedInURL: "https://ca.linkedin.com/pub/warren-gallagher/0/3b/18a",
    githubURL: "https://github.com/warren-gallagher?tab=repositories/",
    emailURL: "mailto:warren@gallaghers.ca?subject=Resume Inquiry",
    emailAddr: "warren@gallaghers.ca",
    mobilePhone: "613.791.4987"
};

export function getContact() : Contact {
    return contact;
}