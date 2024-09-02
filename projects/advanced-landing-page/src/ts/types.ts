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

export interface HandleTimeoutToggle {
  el: HTMLElement;
  toggleClass: string;
  containClass: string;
  t?: number;
}

export interface UpdateArrows {
  noOfProperties: number;
  newTranslateVal: number;
}
