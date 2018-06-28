import { Snippet } from './snippet.interface';

export interface Item {
    kind: string;
    etag: string;
    id: string;
    snippet: Snippet;
}
