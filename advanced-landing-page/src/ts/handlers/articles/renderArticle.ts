export const renderArticle = (
  article: DocumentFragment | Node,
  articlesContainer: HTMLDivElement
) => {
  const btn = document.createElement("button");
  const li = document.createElement("li");

  btn.classList.add("article-btn");
  btn.ariaLabel = "Showcase the article";
  btn.append(article);
  li.append(btn);

  return articlesContainer.appendChild(li);
};
