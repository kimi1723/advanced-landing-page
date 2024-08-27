export const showcaseArticle = (
  e: Event,
  articlesContainer: HTMLDivElement
) => {
  const showcaseArticleContainer = document.querySelector(
    ".more-info__content"
  ) as HTMLDivElement;

  e.preventDefault();

  const btn = e.currentTarget as HTMLButtonElement;
  const article = btn.querySelector(".article") as HTMLElement;
  const articleLink = article.querySelector(
    ".article__link"
  ) as HTMLAnchorElement;
  const articleLinkUrl = articleLink.dataset.linkUrl as string;
  const articleToHide = showcaseArticleContainer.querySelector(".article--big");

  article.classList.add("article--big");
  articleLink.setAttribute("href", articleLinkUrl);

  showcaseArticleContainer.appendChild(article);

  if (!articleToHide) return btn.remove();

  const articleLinkToHide = articleToHide.querySelector(
    ".article__link"
  ) as HTMLAnchorElement;

  articleToHide.classList.remove("article--big");
  articleLinkToHide.setAttribute("href", "");
  btn.appendChild(articleToHide);
  articlesContainer.prepend(btn);
};
