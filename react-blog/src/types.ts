export interface Post {
    id: number;
    image?: string;
    text: string;
    date?: string;
    lesson_num?: number;
    title: string;
    author?: number;
}

export type Variant = 'large' | 'medium' | 'small' | 'search';
