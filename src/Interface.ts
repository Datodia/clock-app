export interface Data {
    content: string;
    author: string;
}

export interface DateType {
    year: number;
    month: number;
    date?: number | undefined;
    hours?: number | undefined;
    minutes?: number | undefined;
    seconds?: number | undefined;
    ms?: number | undefined;
}

export interface TimeType {
    city: string | undefined;
    code: string;
    currentTime: string;
}

export interface Dark {
    time: number;
}

export interface Rotate {
    rotate: boolean;
    setRotate?: React.Dispatch<React.SetStateAction<boolean>> | any;
    timezone2?: string;
    dayOfYear?: number;
    weekDay?: number;
    week?: number;
    dark?: number | any;
}