import { videoData } from "./data";
import { handleNotification } from "./handleNotification";
import { handleSpinner } from "./handleSpinner";
import { timeout, handleLoad } from "./utils";

const playBtn = document.querySelector(".tour__video-btn") as HTMLButtonElement;
const videoContainer = document.querySelector(".tour__media") as HTMLDivElement;
const playIcon = document.querySelector(".tour__play-img") as SVGElement;

const [showSpinner, hideSpinner] = handleSpinner(playBtn);

const videoHandler = async () => {
  const iframe = document.createElement("iframe");

  Object.entries(videoData).forEach(([attr, val]) =>
    iframe.setAttribute(attr, val.toString())
  );

  videoContainer.appendChild(iframe);

  try {
    playIcon.remove();
    showSpinner();

    await Promise.race([handleLoad(iframe), timeout(15)]);

    playBtn.remove();
  } catch (err) {
    console.error(err);

    iframe.remove();
    hideSpinner();
    playBtn.appendChild(playIcon);
    handleNotification({ type: "error", msg: err });
  }
};

export const handleVideo = () =>
  playBtn.addEventListener("click", videoHandler);
