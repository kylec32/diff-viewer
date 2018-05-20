import { FileOperation } from './fileoperation.enum'; 

export interface DiffFile {
    name: string,
    type: FileOperation,
    linesAdded: number,
    linesRemoved: number
}