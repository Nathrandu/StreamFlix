export interface AnimeItem {
  id: number;
  title: string;
  image: string;
  description: string;
  year: number;
  rating: string;
  episodes: number;
  genres: string[];
}

export interface CategoryData {
  title: string;
  items: AnimeItem[];
}