import { translateProperties } from "./translateProperties";

export const filterProperties = (
  e: Event,
  properties: HTMLCollectionOf<HTMLLIElement>
) => {
  const target = e.target;

  if (!target) return;

  const filterEl = (target as HTMLButtonElement).closest("li") as HTMLLIElement;
  const { filter } = filterEl.dataset;
  const parentEl = e.currentTarget as HTMLUListElement;
  const filterElements = parentEl.querySelectorAll("li");

  filterElements.forEach((el) => {
    const filterBtn = filterEl.querySelector("button") as HTMLButtonElement;

    if (el !== filterEl) {
      const toRemove = el.querySelector("button") as HTMLButtonElement;
      toRemove.classList.remove("btn--primary-dark");
      toRemove.classList.add("btn--primary-light");
    } else {
      filterBtn.classList.add("btn--primary-dark");
      filterBtn.classList.remove("btn--primary-light");
    }
  });

  [...properties].forEach((p) => {
    const types = p.dataset.types;

    if (!types || !filter) return;

    const li = p.closest("li") as HTMLLIElement;

    types.split(" ").includes(filter)
      ? li.classList.remove("property--hidden")
      : li.classList.add("property--hidden");
  });

  translateProperties(e, properties, true);
};
