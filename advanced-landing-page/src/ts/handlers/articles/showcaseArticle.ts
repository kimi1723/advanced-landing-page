export const showcaseArticle = (
  e: Event,
  articlesContainer: HTMLDivElement
) => {
  const showcaseArticleContainer = document.querySelector(
    ".more-info__content"
  ) as HTMLDivElement;

  e.preventDefault();
  const li = e.currentTarget as HTMLLIElement;
  const btn = li.querySelector(".article-btn") as HTMLButtonElement;
  const article = li.querySelector(".article") as HTMLElement;
  const articleLink = article.querySelector(
    ".article__link"
  ) as HTMLAnchorElement;
  const articleLinkUrl = articleLink.dataset.linkUrl as string;
  const articleToHide = showcaseArticleContainer.querySelector(".article--big");

  article.classList.add("article--big");
  articleLink.setAttribute("href", articleLinkUrl);

  showcaseArticleContainer.append(article);

  if (!articleToHide) return li.remove();

  const articleLinkToHide = articleToHide.querySelector(
    ".article__link"
  ) as HTMLAnchorElement;

  articleToHide.classList.remove("article--big");
  articleLinkToHide.setAttribute("href", "");
  btn.append(articleToHide);
  li.append(btn);
  articlesContainer.prepend(li);
};
