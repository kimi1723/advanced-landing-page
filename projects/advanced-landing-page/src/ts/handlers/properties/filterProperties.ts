const btnsContainer = document.querySelector(
  ".recommendations__filters"
) as HTMLUListElement;

const filterHandler = (
  e: Event,
  allProperties: HTMLCollectionOf<HTMLLIElement>
) => {
  const target = e.target;

  if (!target) return;

  const {
    dataset: { filter },
  } = (target as HTMLButtonElement).closest("li") as HTMLLIElement;

  [...allProperties].forEach((p) => {
    const types = p.dataset.types;

    if (!types || !filter) return;

    const li = p.closest("li") as HTMLLIElement;

    types.split(" ").includes(filter)
      ? li.classList.remove("property--hidden")
      : li.classList.add("property--hidden");
  });
};

export const filterProperties = (properties: HTMLCollectionOf<HTMLLIElement>) =>
  btnsContainer.addEventListener("click", (e: Event) =>
    filterHandler(e, properties)
  );
