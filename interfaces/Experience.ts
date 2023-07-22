import {TitledObject} from "@/interfaces/index";

export interface Experience extends TitledObject {
    companyName: string
    workTime: string
    iconBackground: string
    icon: string
    tasks: Array<string>
}