export type Config = {
    copyright: string,
    deploymentURL: string;
    repositoryURL: string;
};

const config: Config = {
    copyright: "Copyright © Warren Gallagher 2022, all rights reserved.",
    deploymentURL: "https://resume.gallaghers.ca",
    repositoryURL: "https://github.com/warren-gallagher/sveltekit-resume/"
};

export async function getConfig() : Promise<Config> {
    return config;
}