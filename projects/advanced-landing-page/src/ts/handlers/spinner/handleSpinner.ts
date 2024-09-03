const addSpinner = (spinner: HTMLElement, parent: HTMLElement) => () => {
  spinner.classList.add("spinner");
  parent.append(spinner);
};

const removeSpinner = (spinner: HTMLElement, parent: HTMLElement) => () =>
  parent.removeChild(spinner);

export const handleSpinner = (parent: HTMLElement) => {
  const spinnerDiv = document.createElement("div");

  return [addSpinner(spinnerDiv, parent), removeSpinner(spinnerDiv, parent)];
};
