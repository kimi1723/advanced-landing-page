const arrowBtns = document.querySelectorAll(
  ".arrow-btn"
) as NodeListOf<HTMLButtonElement>;
const properties = document.querySelectorAll(
  ".property"
) as NodeListOf<HTMLAnchorElement>;

const calcTranslate = (val: number, dir: string | undefined) =>
  dir === undefined ? val : dir === "right" ? val - 100 : val + 100;

const handleCarousel = (e: Event) => {
  const arrow = e.currentTarget as HTMLButtonElement;

  if (!arrow.classList.contains("arrow-btn--active")) return;

  const { dir } = arrow.dataset;
  const [inactiveArrow] = [...arrowBtns].filter((arr) => arr !== arrow);

  arrow.classList.remove("arrow-btn--active");
  inactiveArrow.classList.add("arrow-btn--active");

  properties.forEach((p) => {
    const currTranslateVal = +window.getComputedStyle(p).translate.slice(0, -1);
    const newTranslateVal = calcTranslate(currTranslateVal, dir) + "%";

    p.style.translate = newTranslateVal;
  });
};

export const handleProperties = () => {
  arrowBtns.forEach((btn) => btn.addEventListener("click", handleCarousel));
};
