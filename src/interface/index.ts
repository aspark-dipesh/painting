export interface ICategory {
  id: number;
  slug: string;
  title: string;
  featured_image: string;
}

export interface IPagination<T> {
  next?: string;
  previous?: string;
  count: number;
  results: T[];
}
export interface IProduct {
  id: number;
  title: string;
  slug: string;
  category: ICategory;
  featured_image: string;
  price: string;
  discounted_price: string;
}
