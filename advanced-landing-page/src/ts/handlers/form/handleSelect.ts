import { formOptions } from "../../data";
import { handleSingleAtTime, handleTimeoutToogle } from "../../utils";

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

const toogleOptionsVisibility = async () => {
  const handler = handleTimeoutToogle({
    el: optionsList,
    toggleClass: "join-us-form__custom-options--hidden",
    containClass: "hidden",
  });

  return (async () => {
    const isExpanded = customSelect.ariaExpanded === "false";
    customSelect.ariaExpanded = isExpanded.toString();

    return await handler();
  })();
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

const documentListener = async (e: Event) => {
  const target = e.target;

  if (!isVisible || !(target instanceof HTMLElement) || target === customSelect)
    return;

  isVisible = (await toogleOptionsVisibility()) as boolean;
  selectOption(target);
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

  const handler = await handleSingleAtTime(toogleOptionsVisibility);

  customSelect.addEventListener(
    "click",
    async () => (isVisible = (await handler()) as boolean)
  );

  document.addEventListener("click", documentListener);
};
