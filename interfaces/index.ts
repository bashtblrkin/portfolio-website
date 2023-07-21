export interface Identifiable {
    id: string
}

export interface TitledObject extends Identifiable {
    title: string
}

export interface Service extends TitledObject {
    icon: string
}