export type Config = {
    deploymentURL: string;
    repositoryURL: string;
};

const contact: Config = {
    deploymentURL: "https://resume.gallaghers.ca",
    repositoryURL: "https://github.com/warren-gallagher/resume/"
};

export function getConfig() : Config {
    return contact;
}