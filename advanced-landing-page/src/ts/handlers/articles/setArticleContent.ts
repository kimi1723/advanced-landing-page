import { ArticleData, articleElement } from "../../types";

export const setContent = (elements: articleElement[], data: ArticleData) =>
  elements.forEach(([elName, el]) => {
    if (!el) return;

    const value = data[elName as keyof ArticleData];

    if (typeof value === "string") return (el.textContent = value.toString());

    Object.entries(value).forEach(([attr, attrVal]) => {
      if (attr === "href") return (el.dataset.linkUrl = attrVal);

      attr === "textContent"
        ? (el.textContent = attrVal)
        : el.setAttribute(attr, attrVal);
    });
  });
