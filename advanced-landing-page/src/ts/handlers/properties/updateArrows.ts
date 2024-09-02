import { UpdateArrows } from "../../types";

const propertiesPerView = 3;

const arrActiveClass = "arrow-btn--active";

const addActiveClass = (arr: HTMLButtonElement) => {
  arr.classList.add(arrActiveClass);
  arr.removeAttribute("disabled");
};

const removeActiveClass = (arr: HTMLButtonElement) => {
  arr.classList.remove(arrActiveClass);
  arr.setAttribute("disabled", "");
};

export const updateArrows = ({
  noOfProperties,
  newTranslateVal,
}: UpdateArrows) => {
  const noOfPropertiesShifted =
    newTranslateVal <= 0 ? +newTranslateVal.toString().charAt(1) : 0;
  const propertiesLeft = Math.round(
    noOfProperties / propertiesPerView - noOfPropertiesShifted
  );
  const [leftArr, rightArr] = document.querySelectorAll(
    ".arrow-btn"
  ) as NodeListOf<HTMLButtonElement>;

  if (noOfProperties < propertiesPerView + 1) {
    removeActiveClass(leftArr);
    removeActiveClass(rightArr);
    return;
  }

  if (propertiesLeft > 0 && noOfPropertiesShifted > 0) {
    addActiveClass(leftArr);
    addActiveClass(rightArr);
    return;
  }

  if (propertiesLeft < 1) {
    addActiveClass(leftArr);
    removeActiveClass(rightArr);
    return;
  }

  if (propertiesLeft > 0) {
    addActiveClass(rightArr);
    removeActiveClass(leftArr);
  }
};
