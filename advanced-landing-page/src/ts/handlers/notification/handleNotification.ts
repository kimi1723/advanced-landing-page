interface Notification {
  type: string;
  msg: unknown;
}

const notificationDiv = document.querySelector(
  ".notification"
) as HTMLDivElement;
const closeNotificationBtn = document.querySelector(
  ".notification__close-btn"
) as HTMLButtonElement;

const removeNotification = (el: HTMLElement) =>
  function handler() {
    notificationDiv.removeChild(el);
    closeNotificationBtn.removeEventListener("click", handler);
  };

export const handleNotification = ({ type, msg }: Notification) => {
  const notificationContentDiv = document.createElement("div");

  if (type === "error") {
    typeof msg === "string"
      ? (notificationContentDiv.textContent = msg)
      : "Something went wrong. Please try again later.";
    notificationContentDiv.classList.add("notification__error");
  }

  notificationDiv.appendChild(notificationContentDiv);

  closeNotificationBtn.addEventListener(
    "click",
    removeNotification(notificationContentDiv)
  );
};
