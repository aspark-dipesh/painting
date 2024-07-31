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

export interface IBanner {
  id: number;
  title: string;
  image: string;
  launch_url: string;
  sub_title: string;
  button_title: string;
}

export interface IBio {
  id: number;
  title: string;
  logo: string;
  copyright: string;
  facebook: string;
  instagram: string;
  twitter: string;
  phone: string;
}
