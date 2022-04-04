export type Config = {
    deploymentURL: string;
    repositoryURL: string;
};

const contact: Config = {
    deploymentURL: "https://resume.gallaghers.ca",
    repositoryURL: "https://github.com/warren-gallagher/resume/"
};

export async function getConfig() : Promise<Config> {
    return contact;
}