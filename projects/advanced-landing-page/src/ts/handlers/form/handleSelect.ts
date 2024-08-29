import { formOptions } from "../../data";

const select = document.querySelector(
  ".join-us-form__custom-select"
) as HTMLParagraphElement;
const optionsList = document.querySelector(
  ".join-us-form__custom-options"
) as HTMLUListElement;

const optionClassName = "join-us-form__custom-option";
const selectedOptionClassName = `${optionClassName}--selected`;

let isVisible = false;

const loadOptions = () =>
  formOptions.forEach(({ text }) => {
    const li = document.createElement("li");

    li.textContent = text;
    li.classList.add(optionClassName);

    optionsList.appendChild(li);
  });

const toggleOptionsVisibility = async () => {
  new Promise((res) => {
    isVisible = !optionsList.classList.toggle(
      "join-us-form__custom-options--hidden"
    );

    optionsList.classList.contains("hidden")
      ? res(optionsList.classList.remove("hidden"))
      : setTimeout(() => res(optionsList.classList.add("hidden")), 300);
  });
};

const selectOption = (target: HTMLElement) => {
  if (!target.classList.contains(optionClassName)) return;

  const activeOption = optionsList.querySelector(`.${selectedOptionClassName}`);

  activeOption?.classList.remove(selectedOptionClassName);
  target.classList.add(selectedOptionClassName);

  select.textContent = target.textContent;
};

const documentListener = (e: Event) => {
  const target = e.target;

  if (!isVisible || !(target instanceof HTMLElement) || target === select)
    return;

  toggleOptionsVisibility();
  selectOption(target);
};

const optionsListHandler = async () => {
  let isRunning = false;

  return async () => {
    if (isRunning) return;

    isRunning = true;

    await toggleOptionsVisibility();

    isRunning = false;
  };
};

export const handleSelect = async () => {
  loadOptions();

  const handler = await optionsListHandler();
  select.addEventListener("click", handler);

  document.addEventListener("click", documentListener);
};
