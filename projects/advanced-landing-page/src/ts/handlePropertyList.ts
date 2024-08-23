const propertyList = document.querySelector(
  ".property-list"
) as HTMLUListElement;
const propertyBtn = document.querySelector(
  ".nav__item-btn"
) as HTMLButtonElement;

let isVisible = false;

const listVisibilityHandler = async () =>
  new Promise((res) => {
    isVisible = !propertyList.classList.toggle("property-list--hidden");

    propertyList.classList.contains("hidden")
      ? res(propertyList.classList.remove("hidden"))
      : setTimeout(() => res(propertyList.classList.add("hidden")), 300);
  });

const documentListener = (target: HTMLElement) => {
  if (!isVisible || target.closest(".nav__item-btn") === propertyBtn) return;

  listVisibilityHandler();
};

const propertyListHandler = async () => {
  let isRunning = false;

  return async () => {
    if (isRunning) return;

    isRunning = true;

    await listVisibilityHandler();

    isRunning = false;
  };
};

export const handlePropertyList = async () => {
  const handler = await propertyListHandler();
  propertyBtn.addEventListener("click", handler);

  document.addEventListener("click", ({ target }: Event) =>
    documentListener(target as HTMLElement)
  );
};
