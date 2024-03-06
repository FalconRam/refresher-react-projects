export interface ImageCarouselProps {
  url: string;
  page: number;
  limit: number;
}

export interface ImageItem {
  id: number;
  author: string;
  width: number;
  height: number;
  url: string;
  download_url: string;
}
