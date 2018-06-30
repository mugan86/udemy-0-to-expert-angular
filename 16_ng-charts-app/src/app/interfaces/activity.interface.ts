import { High } from './high.interface';
import { Point } from './point.interface';

export interface Activity {
    dist: number;
    high: High;
    points: Point[];
    start_alt: number;
    finish_alt: number;
    name: string;
}
