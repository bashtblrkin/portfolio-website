import {TitledObject} from "@/interfaces/index";

export interface Work extends TitledObject {
    image: string
    description: string
    explanation: string
    github?: string
    link?: string
    tags: Array<{
        name: string,
        color: string
    }>
}