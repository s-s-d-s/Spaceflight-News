export interface ArticleModel {
  id: number;
  title: string;
  summary: string;
  published_at: Date;
  image_url: string;
  url: string;
}

export interface RageResultArticleModel {
  results: ArticleModel[];
}
