const propertyList = document.querySelector(
  ".property-list"
) as HTMLUListElement;
const propertyBtn = document.querySelector(
  ".nav__item-btn"
) as HTMLButtonElement;

const listVisibilityHandler = () =>
  new Promise((res) => {
    propertyList.classList.toggle("property-list--hidden");

    propertyList.classList.contains("hidden")
      ? propertyList.classList.remove("hidden")
      : setTimeout(() => propertyList.classList.add("hidden"), 300);

    document.removeEventListener("click", documentListener);
    setTimeout(res, 0);
  });

const documentListener = () => listVisibilityHandler();

const propertyListHandler = async () => {
  await listVisibilityHandler();

  document.addEventListener("click", documentListener);
};

export const handlePropertyList = () =>
  propertyBtn.addEventListener("click", propertyListHandler);
