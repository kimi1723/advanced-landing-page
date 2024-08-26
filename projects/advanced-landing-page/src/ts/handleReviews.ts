const reviews = document.getElementsByClassName(
  "review"
) as HTMLCollectionOf<HTMLDivElement>;
const dots = document.getElementsByClassName(
  "reviews__dot"
) as HTMLCollectionOf<HTMLDivElement>;
const listeneres = [...reviews, ...dots];

const TRANSLATE_MAP = new Map([
  ["left", 50],
  ["default", -50],
  ["right", -150],
]);

const activeClassHandler = (
  dir: string,
  className: string,
  collection: Array<HTMLElement>
) => {
  const [currActiveEl] = collection.filter((el) =>
    el.classList.contains(className)
  );
  const [elToActivate] = collection.filter((el) => el.dataset.dir === dir);

  currActiveEl.classList.remove(className);
  elToActivate.classList.add(className);
};

const reviewsHandler = (e: Event) => {
  const currTarget = e.currentTarget;

  if (!(currTarget instanceof HTMLElement)) return;

  const { dir } = currTarget.dataset;

  if (!dir) return;

  const reviewsArr = [...reviews];

  reviewsArr.forEach(
    (rev) => (rev.style.translate = TRANSLATE_MAP.get(dir) + "%")
  );

  activeClassHandler(dir, "reviews__dot--active", [...dots]);
  activeClassHandler(dir, "review--active", reviewsArr);
};

export const handleReviews = () =>
  listeneres.forEach((listener) =>
    listener.addEventListener("click", reviewsHandler)
  );
