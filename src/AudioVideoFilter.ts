export interface AudioVideoFilter {
    filter: string;
    options: {
        enable?: string;
        fontfile?: string;
        text: string;
        fontsize: number;
        fontcolor: string;
        x: string | number;
        y: string | number;
        shadowcolor: string;
        shadowx: number;
        shadowy: number;
        timecode?: string;
        timecode_rate?: number;
    }
}