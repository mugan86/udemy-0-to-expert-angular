export interface PageInfo {
    totalResults: number;
    resultsPerPage: number;
}

export interface Id {
    kind: string;
    videoId: string;
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

export interface Thumbnails {
    default: Default;
    medium: Medium;
    high: High;
}

export interface Snippet {
    publishedAt: Date;
    channelId: string;
    title: string;
    description: string;
    thumbnails: Thumbnails;
    channelTitle: string;
    liveBroadcastContent: string;
}

export interface Item {
    kind: string;
    etag: string;
    id: Id;
    snippet: Snippet;
}

export interface YoutubeApi {
    kind: string;
    etag: string;
    nextPageToken: string;
    regionCode: string;
    pageInfo: PageInfo;
    items: Item[];
}