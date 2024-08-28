export const renderArticle = (
  article: DocumentFragment | Node,
  articlesContainer: HTMLDivElement
) => {
  const btnElement = document.createElement("button");

  btnElement.classList.add("article-btn");
  btnElement.appendChild(article);

  return articlesContainer.appendChild(btnElement);
};
