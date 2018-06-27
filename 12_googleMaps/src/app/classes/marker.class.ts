export class Marker {
    public lat: number;
    public lng: number;

    public title: string;
    public description: string;

    constructor( lat: number, lng: number, title: string = 'Without title', description: string = 'Without description') {
        this.lat = lat;
        this.lng = lng;
        this.title = title;
        this.description = description;
    }
}
