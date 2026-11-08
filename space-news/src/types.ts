// src/types.ts
export interface PostModel {
  id: number;
  image: string;
  text: string;
  date: string;
  lesson_num: number;
  title: string;
  author: number;
}

export type PostVariant = 'small' | 'medium' | 'large';