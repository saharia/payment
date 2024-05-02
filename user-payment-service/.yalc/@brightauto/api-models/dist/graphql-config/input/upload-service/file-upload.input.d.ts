import { FileUploadErrorInput } from "./file-upload-error.input";
export declare class FileUploadInput {
    id: string;
    name: string;
    sequence: number;
    file: any;
    stream: boolean;
    isEnd: boolean;
    error: FileUploadErrorInput;
}
