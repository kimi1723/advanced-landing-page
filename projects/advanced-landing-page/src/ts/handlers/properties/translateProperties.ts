import { updateArrows } from "./updateArrows";

const translate = (properties: HTMLLIElement[], val: number) =>
  new Promise<number>((res) =>
    properties.forEach((p, i, arr) => {
      const currTranslateVal =
        +window.getComputedStyle(p).translate.slice(0, -1) || 0;
      const newTranslateVal = val === 0 ? "0" : +currTranslateVal + val + "%";

      p.style.translate = newTranslateVal;

      if (i === arr.length - 1) res(Number.parseInt(newTranslateVal));
    })
  );

export const translateProperties = async (
  e: Event,
  properties: HTMLCollectionOf<HTMLLIElement>,
  init = false
) => {
  const visibleProperties = [...properties].filter(
    (p) => !p.classList.contains("property--hidden")
  );
  const noOfProperties = visibleProperties.length;

  let newTranslateVal = 0;
  let dir = "left";

  if (visibleProperties.length === 0) return;

  if (init) newTranslateVal = await translate(visibleProperties, 0);

  const elClicked = e.currentTarget as HTMLButtonElement;

  if (elClicked.classList.contains("arrow-btn")) {
    dir = elClicked.dataset.dir as string;
    const val = dir === "right" ? -100 : 100;

    newTranslateVal = await translate(visibleProperties, val);
  }

  updateArrows({
    noOfProperties,
    newTranslateVal,
  });
};
