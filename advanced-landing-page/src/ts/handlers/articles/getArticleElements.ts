import { articleElement } from "../../types";

import { articleElementClasses } from "../../data";
import { toCamelCase } from "../../utils";

export const getElements = (article: DocumentFragment): articleElement[] =>
  articleElementClasses.map((elClass) => {
    const selector =
      elClass === "article" ? ".article" : `.article__${elClass}`;

    return [toCamelCase(elClass, "-"), article.querySelector(selector)];
  });
