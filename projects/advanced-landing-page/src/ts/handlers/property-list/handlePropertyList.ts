import { handleSingleAtTime, handleTimeoutToogle } from "../../utils";

const propertyList = document.querySelector(
  ".property-list"
) as HTMLUListElement;
const propertyBtn = document.querySelector(
  ".nav__item-btn"
) as HTMLButtonElement;

let isVisible = false;

const listVisiblityHandler = handleTimeoutToogle({
  el: propertyList,
  toggleClass: "property-list--hidden",
  containClass: "hidden",
});

const documentListener = async (e: Event) => {
  const target = e.target;

  if (
    !isVisible ||
    !(target instanceof HTMLElement) ||
    target.closest(".nav__item-btn") === propertyBtn
  )
    return;

  isVisible = (await listVisiblityHandler()) as boolean;
};

export const handlePropertyList = async () => {
  const handler = await handleSingleAtTime(listVisiblityHandler);

  propertyBtn.addEventListener(
    "click",
    async () => (isVisible = (await handler()) as boolean)
  );

  document.addEventListener("click", documentListener);
};
