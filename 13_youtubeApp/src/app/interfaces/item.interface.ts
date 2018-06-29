import { Snippet } from './snippet.interface';
import { ContentDetails } from './content-details.interface';

export interface Item {
    kind: string;
    etag: string;
    id: string;
    snippet: Snippet;
    contentDetails: ContentDetails;
}
