import { Thumbnails, ResourceId } from './thumbnails.interface';
import { Localized } from './localized.interface';

export interface Snippet {
    publishedAt: Date;
    channelId: string;
    title: string;
    description: string;
    thumbnails: Thumbnails;
    channelTitle?: string;
    playlistId?: string;
    position?: number;
    resourceId?: ResourceId;
    customUrl?: string;
    localized?: Localized;
    country?: string;
}




