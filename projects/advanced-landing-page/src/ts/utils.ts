import { HandleTimeoutToggle } from "./types";

export const timeout = (time: number) =>
  new Promise((_, rej) =>
    setTimeout(
      () => rej("Your request took too long. Please try again later."),
      time * 1000
    )
  );

export const handleLoad = (el: HTMLElement) =>
  new Promise((res) => el.addEventListener("load", res));

export const toCamelCase = (str: string, charToReplace: string) =>
  str
    .split("")
    .map((el, i, arr) =>
      arr[i - 1] === charToReplace ? el.toUpperCase() : el.toLowerCase()
    )
    .filter((char) => char !== charToReplace)
    .join("");

export const handleSingleAtTime = async (cb: Function) => {
  let isRunning = false;

  return async () =>
    new Promise(async (res) => {
      if (isRunning) return;

      isRunning = true;
      const response = await cb();

      isRunning = false;

      res(response);
    });
};

export const handleTimeoutToogle =
  ({ el, toggleClass, containClass, t = 0.3 }: HandleTimeoutToggle) =>
  async () => {
    let isToggled = false;

    return new Promise((res) => {
      isToggled = !el.classList.toggle(toggleClass);
      const containsClass = el.classList.contains(containClass);

      if (containsClass) {
        el.classList.remove(containClass);
        res(isToggled);
      }

      if (!containsClass) {
        setTimeout(() => el.classList.add(containClass), t * 1000);
        res(isToggled);
      }
    });
  };
