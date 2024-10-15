export type Feature = {
    isURL: boolean;
    title: string;
    text: string;
    href?: string;
};

export type GithubCardObject = {
    title: string;
    description: string;
    language: string;
    stars: number;
    forks: number;
    href: string;
};

type ContentItem = {
    type: "title" | "text" | "image" | "list" | "github" | "features";
    value: string | Feature[] | GithubCardObject | string[];
};

type ProjectContent = {
    slug: string;
    title: string;
    content: ContentItem[];

};

export type ProjectsContent = ProjectContent[];