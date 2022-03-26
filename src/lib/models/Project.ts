export type Project = {
    title: string;
    markdown: string;
};

const projects: Project[] = [
    {
        title: "Fortress.Legal",
        markdown:
`
Fortress.Legal provides a multi-tenant SaaS platform to companies and lawfirms to manage their intellectual property.

`
    },
    {
        title: "SmartMAP",
        markdown:
``
    }
];

export function getProjects() : Project[] {
    return projects;
}

