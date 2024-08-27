export interface ArticleData {
  link: {
    href: string;
  };
  img: {
    src: string;
    alt: string;
  };
  authorImg: {
    src: string;
    alt: string;
  };
  authorTitle: string;
  title: string;
  desc: string;
  readingTime: string;
  timestamp: {
    datetime: string;
    textContent: string;
  };
}

export type articleElement = [string, HTMLElement | null];
