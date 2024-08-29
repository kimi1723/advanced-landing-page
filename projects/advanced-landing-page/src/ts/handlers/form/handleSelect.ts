import { formOptions } from "../../data";

const customSelect = document.querySelector(
  ".join-us-form__custom-select"
) as HTMLParagraphElement;
const optionsList = document.querySelector(
  ".join-us-form__custom-options"
) as HTMLUListElement;
const nativeSelect = document.querySelector(
  ".join-us-form__select"
) as HTMLSelectElement;

const optionClassName = "join-us-form__custom-option";
const selectedOptionClassName = `${optionClassName}--selected`;

let isVisible = false;

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
  if (!target.classList.contains(optionClassName) || !target.dataset.option)
    return;

  const activeCustomOption = optionsList.querySelector(
    `.${selectedOptionClassName}`
  );

  activeCustomOption?.classList.remove(selectedOptionClassName);
  target.classList.add(selectedOptionClassName);
  nativeSelect.value = target.dataset.option;

  customSelect.textContent = target.textContent;
};

const documentListener = (e: Event) => {
  const target = e.target;

  if (!isVisible || !(target instanceof HTMLElement) || target === customSelect)
    return;

  console.log("run");
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

const loadOptions = () =>
  formOptions.forEach(({ value, text }) => {
    const li = document.createElement("li");
    const option = document.createElement("option");

    option.setAttribute("value", value);
    li.dataset.option = value;
    li.textContent = text;
    li.classList.add(optionClassName);

    nativeSelect.appendChild(option);
    optionsList.appendChild(li);
    nativeSelect.value = "";
  });

export const handleSelect = async () => {
  loadOptions();

  const handler = await optionsListHandler();
  customSelect.addEventListener("click", handler);

  document.addEventListener("click", documentListener);
};
