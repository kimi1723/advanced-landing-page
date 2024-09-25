const cookieBanner = document.querySelector(".cookie-banner") as HTMLElement;
const closeBtn = document.querySelector(
  ".cookie-banner__close-btn"
) as HTMLButtonElement;

export const handleCookieBanner = () =>
  closeBtn.addEventListener("click", () => {
    cookieBanner.classList.add("cookie-banner--invisible");
    setTimeout(() => cookieBanner.classList.add("hidden"), 400);
  });
