export interface Segment {
    name: string;
    alt?: string;
    text?: string;
    x?: number | string;
    y?: number | string;
    fontSize?: number;
    rgb?: string;
    frame: number;
    endFrame?: number;
}