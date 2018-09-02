export class FileItem {
    public file: File;
    public archiveName: String;
    public url: String;
    public isUpload: boolean;
    public progress: number;

    public constructor(file: File) {
        this.file = file;
        this.archiveName = file.name;

        this.isUpload = false;
        this.progress = 0;

    }
}
