export interface Thumbnails {
    default: Default;
    medium: Medium;
    high: High;
    standard: Standard;
    maxres: Maxres;
}

export interface Default {
    url: string;
    width: number;
    height: number;
}

export interface Medium {
    url: string;
    width: number;
    height: number;
}

export interface High {
    url: string;
    width: number;
    height: number;
}

export interface Standard {
    url: string;
    width: number;
    height: number;
}

export interface Maxres {
    url: string;
    width: number;
    height: number;
}

export interface ResourceId {
    kind: string;
    videoId: string;
}
