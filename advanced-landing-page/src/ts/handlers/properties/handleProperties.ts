import { filterProperties } from "./filterProperties";
import { translateProperties } from "./translateProperties";

const btnsContainer = document.querySelector(
  ".recommendations__filters"
) as HTMLUListElement;
const allProperties = document.getElementsByClassName(
  "property"
) as HTMLCollectionOf<HTMLLIElement>;
const arrowBtns = document.getElementsByClassName(
  "arrow-btn"
) as HTMLCollectionOf<HTMLButtonElement>;

export const handleProperties = async () => {
  btnsContainer.addEventListener("click", (e) => {
    filterProperties(e, allProperties);
  });

  [...arrowBtns].forEach(async (btn) =>
    btn.addEventListener("click", (e) => translateProperties(e, allProperties))
  );
};
