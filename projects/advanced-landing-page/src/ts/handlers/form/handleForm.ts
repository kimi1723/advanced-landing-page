import { maxChars, textareaClassName } from "../../constants";

const charsCountEl = document.querySelector(
  `.${textareaClassName}-count`
) as HTMLParagraphElement;
const currCharsEl = document.querySelector(
  `.${textareaClassName}-count--current`
) as HTMLSpanElement;
const maxCharsEl = document.querySelector(
  `.${textareaClassName}-count--max`
) as HTMLSpanElement;
const textarea = document.querySelector(
  `.${textareaClassName}`
) as HTMLTextAreaElement;

const countChars = () => textarea.value.length.toString();

const updateChars = () => {
  const currChars = +(currCharsEl.textContent = countChars());
  const countDangerMod = "-count--danger";
  const isOverMax = currChars > maxChars;

  if (isOverMax)
    charsCountEl.classList.add(`${textareaClassName}${countDangerMod}`);

  if (!isOverMax)
    charsCountEl.classList.remove(`${textareaClassName}${countDangerMod}`);
};

const init = () => {
  maxCharsEl.textContent = maxChars.toString();
  textarea.addEventListener("keyup", updateChars);
};

export const handleForm = () => init();
