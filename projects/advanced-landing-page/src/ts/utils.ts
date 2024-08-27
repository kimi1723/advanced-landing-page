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
