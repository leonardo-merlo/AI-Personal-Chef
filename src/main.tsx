import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import avatarLeo from "./assets/avatar-leo.png";

function setFavicon(iconHref: string): void {
  let linkElement = document.querySelector(
    "link[rel~='icon']"
  ) as HTMLLinkElement | null;
  if (!linkElement) {
    linkElement = document.createElement("link");
    linkElement.rel = "icon";
    document.head.appendChild(linkElement);
  }
  linkElement.type = "image/png";
  linkElement.href = iconHref;
}

setFavicon(avatarLeo);

createRoot(document.getElementById("root")!).render(<App />);
