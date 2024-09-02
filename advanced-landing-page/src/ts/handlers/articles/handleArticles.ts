import { ArticleData } from "../../types";

import { articlesData } from "../../data";
import { articlesPerView } from "../../constants";

import { handleNotification } from "../notification/handleNotification";
import { showcaseArticle } from "./showcaseArticle";
import { getElements } from "./getArticleElements";
import { setContent } from "./setArticleContent";
import { renderArticle } from "./renderArticle";

const moreInfoBtn = document.querySelector(
  ".more-info__btn"
) as HTMLButtonElement;
const articlesContainer = document.querySelector(
  ".more-info__articles"
) as HTMLDivElement;
const template = document.querySelector("#article") as HTMLTemplateElement;

const articlesHandler = (data: ArticleData[], init = false) => {
  data.forEach((articleData, i) => {
    const clone = template.content.cloneNode(true) as DocumentFragment;
    const articleElements = getElements(clone);

    setContent(articleElements, articleData);

    const article = renderArticle(clone, articlesContainer);

    article.addEventListener("click", (e: Event) =>
      showcaseArticle(e, articlesContainer)
    );

    if (init && i === 0) article.click();
  });
};

const initArticles = () => {
  let articlesLeft = articlesData;

  articlesHandler(articlesLeft.splice(0, articlesPerView + 1), true);

  return () => {
    const articles = articlesLeft.splice(0, articlesPerView);

    if (articles.length > 0) return articlesHandler(articles);

    handleNotification({
      type: "error",
      msg: "We don't have any more articles.",
    });
  };
};

export const handleArticles = () => {
  const handler = initArticles();

  moreInfoBtn.addEventListener("click", handler);
};
