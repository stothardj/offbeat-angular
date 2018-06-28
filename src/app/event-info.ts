export interface EventPhoto {
    photo_link: string;
}

export interface EventInfo {
    name: string;
    time: number;
    description: string;
    featured_photo?: EventPhoto;
}
