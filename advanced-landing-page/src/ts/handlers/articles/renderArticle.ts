export const renderArticle = (
  article: DocumentFragment | Node,
  articlesContainer: HTMLDivElement
) => {
  const btnEl = document.createElement("button");
  const liEl = document.createElement("li");

  btnEl.classList.add("article-btn");
  btnEl.ariaLabel = "Showcase the article";
  btnEl.appendChild(article);
  liEl.appendChild(btnEl);

  return articlesContainer.appendChild(liEl);
};
