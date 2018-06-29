import { PageInfo } from './page-info.interface';
import { Item } from './item.interface';


export interface ApiYoutube {
    kind: string;
    etag: string;
    nextPageToken?: string;
    pageInfo: PageInfo;
    items: Item[];
}

