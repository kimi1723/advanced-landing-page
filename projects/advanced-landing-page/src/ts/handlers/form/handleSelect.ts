import { formOptions } from "../../data";

const customSelect = document.querySelector(
  ".join-us-form__custom-select"
) as HTMLButtonElement;
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

  const isExpanded = customSelect.ariaExpanded === "false";

  customSelect.ariaExpanded = isExpanded.toString();
};

const selectOption = (target: HTMLElement) => {
  const item = target.closest("li");

  if (!item?.hasAttribute("data-option")) return;

  const activeCustomOption = optionsList.querySelector(
    `.${selectedOptionClassName}`
  );

  activeCustomOption?.classList.remove(selectedOptionClassName);
  target.classList.add(selectedOptionClassName);

  nativeSelect.value = item.dataset.option as string;
  customSelect.textContent = target.textContent;
};

const documentListener = (e: Event) => {
  const target = e.target;

  if (!isVisible || !(target instanceof HTMLElement) || target === customSelect)
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

const loadOptions = () =>
  formOptions.forEach(({ value, text }) => {
    const li = document.createElement("li");
    const btn = document.createElement("button");
    const option = document.createElement("option");

    option.setAttribute("value", value);
    btn.setAttribute("type", "button");
    li.setAttribute("data-option", value);
    btn.textContent = text;
    btn.classList.add(optionClassName);

    nativeSelect.appendChild(option);
    nativeSelect.value = "";
    li.appendChild(btn);
    optionsList.appendChild(li);
  });

export const handleSelect = async () => {
  loadOptions();

  const handler = await optionsListHandler();
  customSelect.addEventListener("click", handler);

  document.addEventListener("click", documentListener);
};
